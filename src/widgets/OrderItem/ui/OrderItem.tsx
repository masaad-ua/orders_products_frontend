import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrderItem.module.scss';
import {memo} from "react"
import {List} from "lucide-react";
import {DateItem} from "@/shared/ui/DateItem";
import {PriceItem} from "@/shared/ui/PriceItem";
import {TrashButton} from "@/shared/ui/TrashButton";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";


interface OrderItemProps {
    className?: string;
    order: OrderI;
}

export const OrderItem = memo((props: OrderItemProps) => {
    const {className, order} = props;
    const {t} = useTranslation();

    return (
        <li
            key={order.id}
            className={classNames(cls.orders__listItem, {
                // [cls.lastItem]: index === (orders.length - 1)
            }, ["d-flex", "align-items-center"])}
        >
            <p
                className={classNames(cls.orders__listItemTitle,
                    {}, ["d-flex align-items-center"])}>
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
                        23
                    </p>
                    <p className={cls.orders__listItemAmountProductSignature}>
                        Продукта
                    </p>
                </div>
            </div>
            <DateItem
                className={cls.orders__listItemDateWrapper}
                dateItem={order.date}
            />
            <PriceItem
                className={cls.orders__listItemPriceWrapper}
            />
            <TrashButton/>
        </li>
    );
});