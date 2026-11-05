export default function MapSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-[5vw] pb-14 md:pb-16">
      <div className="mx-auto max-w-335 text-center">
        <p className="text-[10px] sm:text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#333333]">
          Location
        </p>
        <h2 className="mt-2 sm:mt-3 text-[26px] sm:text-[32px] md:text-[40px] font-light leading-[1.2] tracking-[-0.010em] text-[#333333]">
          Visit Our Store
        </h2>
        <div className="mt-6 sm:mt-8 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9946153259484!2d55.303162975384126!3d25.270766577663192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4348e0b1115f%3A0xac11e5203021332b!2s14%209b%20St%20-%20Naif%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1793873364753!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
