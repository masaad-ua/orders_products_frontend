import {useTranslation} from 'react-i18next';
import cls from './OrdersList.module.scss';
import {memo} from "react"
import {TrashButton} from "@/shared/ui/TrashButton/TrashButton.tsx";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";
import {OrderItem} from "@/widgets/OrderItem";

interface OrdersListProps {
    className?: string;
    orders: OrderI[];
    handleScroll: (e: React.UIEvent<HTMLUListElement>) => void,
    onDelete: (order: OrderI) => void;
}

export const OrdersList = memo((props: OrdersListProps) => {
    const {className, orders, handleScroll, onDelete } = props;
    const {t} = useTranslation();
    const onScroll = (e: React.UIEvent<HTMLUListElement>) =>{
        handleScroll(e);
    }

    return (
        <ul className={cls.orders__list}
            onScroll={onScroll}
        >
            {
                orders.map((order) => (
                    <OrderItem
                        order ={order}
                    >
                        <TrashButton
                            order={order}
                            onDelete ={onDelete}
                        />
                    </OrderItem>
                ))
            }

        </ul>
    );
});