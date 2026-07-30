import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductItem.module.scss';
import {memo} from "react"
import {PriceItem} from "@/shared/ui/PriceItem";
import {ListItemName} from "@/shared/ui/ListItemName";
import {DateItem} from "@/shared/ui/DateItem";
import {TrashButton} from "@/shared/ui/TrashButton";
import type {ProductI} from "@/features/products/model/types/product.i.ts";
import {getDateFormat} from "@/shared/services/dateService.ts";
import {ListItemIndicator} from "@/shared/ui/ListItemIndicator";
import {ListItemDevice} from "@/shared/ui/ListItemDevice";
import {ListItemStatus} from "@/shared/ui/ListItemStatus";

interface ProductItemProps {
    className?: string;
    product: ProductI;
}

export const ProductItem = memo((props: ProductItemProps) => {
    const {product} = props;
    const {t} = useTranslation();
    const dateStart = new Date(product.guarantee.start);
    const dateEnd = new Date(product.guarantee.end);
    const {
        day: dayStart,
        monthInDigit:monthInDigitStart,
        year: yearStart
    } = getDateFormat(dateStart);
    const {
        day: dayEnd,
        monthInDigit:monthInDigitEnd,
        year: yearEnd
    } = getDateFormat(dateEnd);

    return (
        <li
            key={product.id}
            className={classNames(cls.products__listItem,{},
                ["d-flex"])}>
            <ListItemIndicator
                status={product.status}
                className={cls.products__listItemIndicatorWrapper}
            />
            <ListItemDevice
                className={cls.products__listItemDeviceWrapper}
                title={product.title}
                series={product.series}
            />
            <ListItemStatus
                className={cls.products__listItemStatusWrapper}
                status={product.status}
            />

            <div className={classNames(cls.products__listItemPeriodWrapper,
                {},
                ["d-flex", "flex-column", "align-items-start",  "justify-content-center"]

            )}>
                <p>
                    <span className={"font_size_12"}>с</span>
                    &nbsp;{dayStart}&nbsp;/&nbsp;{monthInDigitStart}&nbsp;/&nbsp;{yearStart}
                </p>
                <p>
                    <span className={"font_size_12"}>по </span>
                    &nbsp;{dayEnd}&nbsp;/&nbsp;{monthInDigitEnd}&nbsp;/&nbsp;{yearEnd}
                </p>
            </div>

            <div className={classNames(cls.products__listItemStatus,
                {},
                ["d-flex", "justify-content-center", "align-items-center"])}>
                <p>
                    {product.isNew ? t("CONDITION.NEW") : t("CONDITION.USED")}
                </p>
            </div>
            <PriceItem
                priceUSD={product.price[0].value}
                priceUAH={product.price[1].value}
                className={cls.products__listItemPriceWrapper}
            />
            <ListItemName
                className={cls.products__listItemTitleGroupWrapper}
            />

            <ListItemName
                className={cls.products__listItemNameOfCustomerWrapper}
            />
            <ListItemName
                className={cls.products__listItemNameOfOrdersWrapper}
            />
            <DateItem
                dateItem={product.created_at}
                className={cls.products__listItemDateWrapper}
            />
            <TrashButton/>
        </li>
    );
});