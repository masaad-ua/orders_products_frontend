import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './PriceItem.module.scss';
import {memo} from "react"

interface PriceItemProps {
    className?: string;
}

export const PriceItem = memo((props: PriceItemProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const classes = `${cls.priceItem} + ${className}`;

    return (
        <div className={classes}>
            <div className={
                classNames(cls.priceItem__price1,
                    {}, ["color_grey", "font_size_12"])
            }>
                2500 $
            </div>
            <div className={cls.priceItem__price2}>
                2500 000.50&nbsp;
                <span className={cls.orders__listItemPrice2Currency}>UAH</span>
            </div>
        </div>
    );
});