import { Separator } from "@/components/ui/separator"
import { Copyright } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="mt-5">
    <Separator />
      <p className="my-5 text-center text-sm opacity-50 flex items-center justify-center">
      
        <Copyright size={14} />  Copyright 2024. Criado por Lívia Pessanha
      </p>
  </footer>
  )
  
}