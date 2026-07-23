import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrdersList.module.scss';
import {memo} from "react"
import {List} from "lucide-react";


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

                <div className={classNames(cls.orders__listItemDateWrapper,
                    {},
                    [])}>
                    <p className={classNames(cls.orders__listItemDateFormat1,
                        {},
                        ["colorGreySize"])}
                    >
                        04/12
                    </p>
                    <p className={cls.orders__listItemDateFormat2}>
                        06/ Апр /2017
                    </p>
                </div>

                <div className={cls.orders__listItemPriceWrapper}>
                    <div className={
                        classNames(cls.orders__listItemPrice1,
                            {}, ["colorGreySize"])
                    }>
                        2500 $
                    </div>
                    <div className={cls.orders__listItemPrice2}>
                        2500 000.50&nbsp;
                        <span className={cls.orders__listItemPrice2Currency}>UAH</span>
                    </div>
                </div>
                <button className={cls.orders__listItemTrashButton}></button>
            </li>
        </ul>
    );
});