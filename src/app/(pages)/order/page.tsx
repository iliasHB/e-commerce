
import { OrderPage } from "@/features/order"
import { Suspense } from "react";

const Order = () => {
    return (
        <Suspense fallback={<div>Loading order...</div>}>
            <OrderPage />
        </Suspense>
    )
}

export default Order;