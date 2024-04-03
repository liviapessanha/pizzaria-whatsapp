import { generateMessage } from "@/lib/generate-message";
import { useCheckoutStore } from "@/stores/checkout-store"
import Link from "next/link";
import { Button } from "../ui/button";

export const StepFinish = () => {
  const { name } = useCheckoutStore(state => state);

  const message = generateMessage();
  const linkWhats = `https://wa.me//${process.env.NEXT_PUBLIC_WHATS}?text=${encodeURI(message)}`;
  
  return (
    <div className="text-center flex flex-col gap-5">
      <p>Perfeito <strong>{name}</strong>!</p>
      <p>Envie o pedido para o WhatsApp para concluir. Nosso atendente irá te guiar sobre o andamento do pedido.</p>
      <Button>
        <Link target="_blank" href={linkWhats}>Enviar para o WhatsApp</Link>
      </Button>
    </div>
  )
}