'use client';

import React, { useEffect, useState, useRef } from 'react';

export type LangCode =
  | "en"
  | "hi"
  | "ur"
  | "ar";

export interface LangOption {
  code: LangCode;
  label: string;
  flag?: string;
}

export const LANGUAGES: LangOption[] = [
  { code: "en", label: "English", flag: "gb" },
  { code: "hi", label: "Hindi", flag: "in" },
  { code: "ur", label: "Urdu", flag: "pk" },
  { code: "ar", label: "Arabic", flag: "sa" },
];

const STORAGE_KEY = "agrolink_ui_lang";
const DEFAULT_LANG: LangCode = "en";
const GT_RELOAD_FLAG = "agrolink_gt_reloaded";

declare global {
  interface Window {
    __googleTranslateScriptReady?: boolean;
    google?: {
      translate: {
        TranslateElement: (new (
          opts: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: number;
            autoDisplay?: boolean;
            multilanguagePage?: boolean;
          },
          el: string
        ) => { isAvailable: () => boolean }) & {
          InlineLayout: { SIMPLE: number; HORIZONTAL: number; VERTICAL: number };
        };
      };
    };
    __googleTranslateSetLang?: (code: LangCode) => void;
    __agrolinkLang?: LangCode;
  }
}

let onLoadQueued = false;

function ensureTranslateScript(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    if (window.__googleTranslateScriptReady) return resolve();

    if (document.getElementById("google-translate-init-script")) {
      const i = setInterval(() => {
        if (window.__googleTranslateScriptReady) {
          clearInterval(i);
          resolve();
        }
      }, 50);
      return;
    }

    (window as any).googleTranslateElementInit = function () {
      try {
        const TE = window?.google?.translate?.TranslateElement;
        if (TE) {
          new TE(
            {
              pageLanguage: "en",
              autoDisplay: false,
              multilanguagePage: true,
            },
            "google_translate_element_mount"
          );
        }
      } catch (e) {
        /* swallow */
      }
      window.__googleTranslateScriptReady = true;
    };

    const s = document.createElement("script");
    s.id = "google-translate-init-script";
    s.type = "text/javascript";
    s.async = true;
    s.defer = true;
    s.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.onerror = () => {
      window.__googleTranslateScriptReady = true;
      resolve();
    };
    document.head.appendChild(s);

    const i = setInterval(() => {
      if (window.__googleTranslateScriptReady) {
        clearInterval(i);
        resolve();
      }
    }, 50);

    setTimeout(() => {
      clearInterval(i);
      window.__googleTranslateScriptReady = true;
      resolve();
    }, 5000);
  });
}

async function applyTranslation(code: LangCode) {
  if (typeof window === "undefined") return;

  window.__agrolinkLang = code;

  const cookieVal = `/auto/${code === "en" ? "en" : code}`;
  document.cookie = `googtrans=${cookieVal}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  document.documentElement.lang = code;

  await ensureTranslateScript();

  const triggerCombo = (c: HTMLSelectElement) => {
    c.value = code;
    try {
      c.dispatchEvent(new Event("change", { bubbles: true }));
    } catch {
      /* ignore */
    }
  };

  if (code === "en") {
    document.body.classList.remove("translated-ltr", "translated-rtl");
    document.querySelectorAll(".skiptranslate, .goog-te-gadget, .goog-te-spinner").forEach((el) => {
      (el as HTMLElement).style.display = "none";
    });
    const banner = document.querySelector(".goog-te-banner-frame") as HTMLIFrameElement | null;
    if (banner?.parentElement) {
      banner.parentElement.style.visibility = "";
    }
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (combo) triggerCombo(combo);
    return;
  }

  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
  if (combo) {
    triggerCombo(combo);
  }

  setTimeout(() => {
    const translated = !!document.querySelector(".translated-ltr, .translated-rtl");
    if (translated) {
      try {
        sessionStorage.removeItem(GT_RELOAD_FLAG);
      } catch {
        /* ignore */
      }
      return;
    }
    try {
      if (sessionStorage.getItem(GT_RELOAD_FLAG)) return;
      sessionStorage.setItem(GT_RELOAD_FLAG, "1");
    } catch {
      /* ignore */
    }
    window.location.reload();
  }, 1500);
}

const GoogleTranslateFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);
  const [hydrated, setHydrated] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHydrated(true);
    const stored = (typeof window !== "undefined" &&
      ((window.__agrolinkLang as LangCode) ||
        (localStorage.getItem(STORAGE_KEY) as LangCode))) || DEFAULT_LANG;
    if (stored !== DEFAULT_LANG) setLangState(stored);

    // Initialize translate defaults
    if (typeof window === "undefined" || onLoadQueued) return;
    onLoadQueued = true;

    try {
      const saved = (localStorage.getItem(STORAGE_KEY) as LangCode | null) || DEFAULT_LANG;
      window.__agrolinkLang = saved;
      document.documentElement.lang = saved;

      const m = document.cookie.match(/googtrans=([^;]+)/);
      if (!m || !m[1]?.endsWith("/" + saved)) {
        document.cookie = `googtrans=/auto/${saved}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      }

      if (saved === DEFAULT_LANG) return;

      const kickoff = () => {
        ensureTranslateScript().then(() => applyTranslation(saved));
      };
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(kickoff, 300);
      } else {
        window.addEventListener("DOMContentLoaded", kickoff);
      }

      const styleId = "agrolink-translate-hidden";
      let styleEl = document.getElementById(styleId);
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = styleId;
        styleEl.innerHTML = `
          .goog-te-banner-frame { display: none !important; }
          body { top: 0 !important; }
          #google_translate_element_mount { position: absolute !important; visibility: hidden !important; width: 0 !important; height: 0 !important; overflow: hidden !important; pointer-events: none !important; }
          .goog-te-spinner-pos, .goog-te-spinner-animation { display: none !important; }
          .VIpgJd-ZVi9od-xl07Ob-lTBxed, .VIpgJd-ZVi9od-xl07Ob-OEVmcd { display: none !important; }
        `;
        try {
          document.head.appendChild(styleEl);
        } catch (e) {
        }
      }

      const mountId = "google_translate_element_mount";
      let mountEl = document.getElementById(mountId);
      if (!mountEl) {
        mountEl = document.createElement("div");
        mountEl.id = mountId;
        mountEl.setAttribute("aria-hidden", "true");
        try {
          document.body.appendChild(mountEl);
        } catch (e) {
        }
      }
    } catch (e) {
    }
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function setLang(code: LangCode) {
    setLangState(code);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, code);
      window.__agrolinkLang = code;
      document.documentElement.lang = code;
      applyTranslation(code);
    }
  }

  const currentLabel = LANGUAGES.find((l) => l.code === lang)?.label || "English";

  return (
    <>
      <div ref={dropdownRef} className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2 group">
        {/* Tooltip */}
        <div className="opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
          Translate
        </div>

        {/* Translate Button */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="relative flex items-center justify-center gap-2 px-4 h-11 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 min-w-[140px] notranslate"
        >
          {/* Translate Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 8l6 6"></path>
            <path d="M4 14l6-6 2-3"></path>
            <path d="M2 5h12"></path>
            <path d="M7 2h1"></path>
            <path d="M22 22l-5-10-5 10"></path>
            <path d="M14 18h6"></path>
          </svg>

          <span className="text-sm font-semibold">{currentLabel}</span>

          {/* Dropdown Arrow */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {/* Language Dropdown */}
        {isOpen && (
          <div
            role="listbox"
            className="absolute bottom-16 left-0 min-w-[180px] rounded-md overflow-hidden border border-gray-100 bg-white shadow-2xl shadow-black/10 z-[70] notranslate"
          >
            {LANGUAGES.map((o) => {
              const active = lang === o.code;
              return (
                <button
                  key={o.code}
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(o.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left text-xs font-semibold transition-colors ${
                    active
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex-1 flex items-center gap-2.5">
                    <span className={`fi fi-${o.flag} rounded-sm shrink-0`} style={{ width: 22, height: 16, display: "inline-block" }} aria-hidden="true" />
                    <span>{o.label}</span>
                  </span>
                  {active && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default GoogleTranslateFloatingButton;
