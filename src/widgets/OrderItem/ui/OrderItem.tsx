import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrderItem.module.scss';
import {memo} from "react"
import {ChevronRight, List} from "lucide-react";
import {DateItem} from "@/shared/ui/DateItem";
import {PriceItem} from "@/shared/ui/PriceItem";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";

interface OrderItemProps {
    className?: string;
    order: OrderI;
    children: any;
    chooseOrder: (order: OrderI) => void;
    shortList: boolean;
    selectedOrder?: OrderI| null;
}

export const OrderItem = memo((props: OrderItemProps) => {
    const {order,
        children,
        chooseOrder,
        shortList,
        selectedOrder
    } = props;
    const {t} = useTranslation();
    const onClick = () =>{
        chooseOrder(order);
    }

    return (
        <li
            onClick={onClick}
            className={classNames(cls.orders__listItem,
                {
                    [cls.active]: selectedOrder?.id === order.id
                },
                ["d-flex", "align-items-center"])}
        >
            <p
                className={classNames(cls.orders__listItemTitle,
                    {
                        [cls.hidden]: shortList
                    })}>
                {order.title}
            </p>
            <div className={classNames(cls.orders__listItemAmountProductWrapper,
                {},
                ["d-flex", "align-items-center"])}>
                <button className={cls.orders__listItemAmountProductButton}>
                    <List/>
                </button>
                <div>
                    <p className={cls.orders__listItemAmountProduct}>
                        {order.productsCount}
                    </p>
                    <p className={cls.orders__listItemAmountProductSignature}>
                        {t("ORDERS_PAGE.PRODUCTS")}
                    </p>
                </div>
            </div>
            <DateItem
                className={cls.orders__listItemDateWrapper}
                dateItem={order.created_at}
            />
            <PriceItem
                priceUAH={order.totalUAH}
                priceUSD={order.totalUSD}
                shortList = {shortList}
                className={cls.orders__listItemPriceWrapper}
            />
            <div className={classNames(cls.orders__arrow, {})}>
                <ChevronRight className={cls.orders__arrowChevron} />
            </div>
            {children}
        </li>
    );
});