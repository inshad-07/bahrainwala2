import ProductCategories from "@/components/Products/ProductCategories";
import { categories } from "@/lib/data";

export default function Products() {
  return (
    <div className="min-h-screen">
      <ProductCategories categories={categories} />
    </div>
  );
}
