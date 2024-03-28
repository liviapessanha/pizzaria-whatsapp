import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";
import { ProductsTab } from "@/components/products/tab";


const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto ">
        <Header />
        <div>
            <ProductsTab />
        </div>
        <Footer />
    </div>
  );
}

export default Page;