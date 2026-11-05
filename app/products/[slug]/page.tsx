import { categories } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductEnquiryModal from "@/components/Products/ProductEnquiryModal";

interface Category {
  id: number;
  title: string;
  slug: string;
  image: string;
  products?: {
    name: string;
    image: string;
  }[];
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-8 md:py-10 font-sans">
        <div className="templateContainer">
          <div className="mb-2">
            <nav className="flex items-center text-sm text-gray-500">
              <a href="/" className="hover:text-[#333333] transition-colors duration-200 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <a href="/products" className="hover:text-[#333333] transition-colors duration-200">
                Products
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#333333] font-medium">{category.title}</span>
            </nav>
          </div>

          {category.products && category.products.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-normal text-[#333333] tracking-[0.01em] mb-8">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
                  >
                    <div className="relative aspect-4/5 overflow-hidden p-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="px-4 pb-3 pt-0 flex flex-col grow">
                      <h4 className="text-lg font-normal text-[#333333] mb-2 tracking-[0.01em] border-b border-gray-200 pb-2 line-clamp-1">
                        {product.name}
                      </h4>
                      <div className="flex gap-2 justify-center pt-1 mt-auto">
                        <a
                          href={`https://wa.me/971123456789?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#25D366] text-white py-2 px-3 rounded-full text-sm tracking-[0.01em] font-medium hover:bg-[#128C7E] transition-colors duration-200 flex items-center justify-center gap-1.5 whitespace-nowrap"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          WhatsApp
                        </a>
                        <ProductEnquiryModal product={product} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
