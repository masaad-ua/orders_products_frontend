import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrdersList.module.scss';
import {memo} from "react"
import {List} from "lucide-react";
import {TrashButton} from "@/shared/ui/TrashButton/TrashButton.tsx";
import {DateItem} from "@/shared/ui/DateItem";
import {PriceItem} from "@/shared/ui/PriceItem";


interface OrdersListProps {
    className?: string;
}

export const OrdersList = memo((props: OrdersListProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <ul className={cls.orders__list}>
            <li className={classNames(cls.orders__listItem, {}, ["d-flex", "align-items-center"])}>
                <p
                    className={classNames(cls.orders__listItemTitle,
                        {}, ["d-flex align-items-center"])}>
                    Длинное предлинное длиннючее название прихода
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
                />
                <PriceItem
                    className={cls.orders__listItemPriceWrapper}
                />
                <TrashButton/>
            </li>
        </ul>
    );
});