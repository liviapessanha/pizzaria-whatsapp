import { Logo } from '@/components/logo'
import { ThemeToggle } from "@/components/theme-toggle"
import { CartSidebar } from '@/components/cart/sidebar'

export const Header = () => {
  return (
    <header className='flex justify-between items-center m-5 my-3'>
      <div className='flex items-center gap-3'>
        <Logo />
        <ThemeToggle />
    </div>
    <div>
        <CartSidebar />
    </div>
    </header>
    
  )
}