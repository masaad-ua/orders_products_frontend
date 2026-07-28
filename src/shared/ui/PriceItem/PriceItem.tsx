import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './PriceItem.module.scss';
import {memo} from "react"

interface PriceItemProps {
    className?: string;
    priceUAH: number,
    priceUSD: number,
    shortList: boolean
}

export const PriceItem = memo((props: PriceItemProps) => {
    const {className,
        priceUAH,
        priceUSD,
        shortList
    } = props;
    const classes = `${cls.priceItem} + ${className}`;

    return (
        <div className={classNames(classes, {
            [cls.hidden]: shortList
        })}>
            <div className={
                classNames(cls.priceItem__price1,
                    {}, ["color_grey", "font_size_12"])
            }>
                {priceUSD} $
            </div>
            <div className={cls.priceItem__price2}>
                {priceUAH}&nbsp;
                <span className={cls.orders__listItemPrice2Currency}>UAH</span>
            </div>
        </div>
    );
});