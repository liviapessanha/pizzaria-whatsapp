import { Product } from "@/types/product";
import { getAllProducts } from "../services/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ProductItem } from "./item";

type Tab = {
  title: string;
  value: string;
  products: Product[];
}
export const ProductsTab = async () => {
  const products = await getAllProducts();

  const tabs: Tab[] = [
    {
        title: 'Pequena',
        value: 'pequena',
        products: products.filter(item => item.category == 'pequena')
    },
    {
        title: 'Média',
        value: 'media',
        products: products.filter(item => item.category == 'media')
    },
    {
        title: 'Grande',
        value: 'grande',
        products: products.filter(item => item.category == 'grande')
    },
    {
        title: 'Bebidas',
        value: 'bebida',
        products: products.filter(item => item.category == 'bebida')
    },
  ]
 
  return (
    <Tabs defaultValue="pequena">
        <TabsList className="flex ">
            {tabs.map(item => (
                <TabsTrigger
                    className="flex-1" 
                    key={item.value}
                    value={item.value}
                >{item.title}</TabsTrigger>
            ))}
        </TabsList>
        {tabs.map(item => (
            <TabsContent value={item.value} key={item.value} className="mt-6">
                {item.products.length > 0 &&
                    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                        {item.products.map(product => (
                            <ProductItem key={product.id} item={product} />
                        ))}
                    </div>
                
                }

            </TabsContent>
        ))}
        
    </Tabs>

  )
}