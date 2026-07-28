import cls from './OrdersList.module.scss';
import {memo} from "react"
import {TrashButton} from "@/shared/ui/TrashButton/TrashButton.tsx";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";
import {OrderItem} from "@/widgets/OrderItem";
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface OrdersListProps {
    className?: string;
    orders: OrderI[];
    handleScroll: (e: React.UIEvent<HTMLUListElement>) => void,
    onDelete: (order: OrderI) => void;
    chooseOrder: (order: OrderI) => void
    shortList: boolean,
    selectedOrder?: OrderI | null
}

export const OrdersList = memo((props: OrdersListProps) => {
    const { orders,
        handleScroll,
        onDelete,
        chooseOrder,
        shortList,
        selectedOrder,
    } = props;
    const onScroll = (e: React.UIEvent<HTMLUListElement>) =>{
        handleScroll(e);
    }

    return (
        <ul className={classNames(cls.orders__list, {
            [cls.shortList]: shortList
        })}
            onScroll={onScroll}
        >
            {
                orders.map((order) => (
                    <OrderItem
                        key = {order.id}
                        order ={order}
                        shortList ={shortList}
                        chooseOrder={chooseOrder}
                        selectedOrder={selectedOrder}
                    >
                        <TrashButton
                            order={order}
                            shortList ={shortList}
                            onDelete ={onDelete}
                        />
                    </OrderItem>
                ))
            }
        </ul>
    );
});