import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import OrderPage from "@/features/order/order"
import ShopNow from "@/features/shop-now/shop-now"
 
export default function (){
    return (
        <>
        <ShopNow />
        </>
    )
}