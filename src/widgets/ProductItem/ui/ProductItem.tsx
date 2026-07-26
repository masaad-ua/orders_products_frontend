import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductItem.module.scss';
import {memo, useState} from "react"
import Monitor from "@/assets/images/monitor.png";
import {PriceItem} from "@/shared/ui/PriceItem";
import {ListItemName} from "@/shared/ui/ListItemName";
import {DateItem} from "@/shared/ui/DateItem";
import {TrashButton} from "@/shared/ui/TrashButton";
import type {ProductI} from "@/features/products/model/types/product.i.ts";
import {getDateFormat} from "@/shared/services/dateService.ts";
import {useGetProductsQuery} from "@/features/products/api/productsApi.ts";


interface ProductItemProps {
    className?: string;
    product: ProductI;
}

export const ProductItem = memo((props: ProductItemProps) => {
    const {className, product} = props;
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
        <li className={classNames(cls.products__listItem,{}, ["d-flex"])}>
            <div className={classNames(cls.products__listItemIndicatorWrapper,
                {},
                ["d-flex", "justify-content-center" ,"align-items-center"] )}>
                <div className={classNames(cls.products__listItemIndicator, {
                    [cls.free]: product.status === 1
                })}></div>
            </div>


            <div className={classNames(cls.products__listItemDeviceWrapper,
                {},
                ["d-flex", "align-items-center"])}>
                <img src={Monitor}
                     alt=""
                     className={classNames(cls.products__listItemDeviceImage)}/>
                <div className={classNames(cls.products__listItemNameDeviceNameWrapper)}>
                    <p>{product.title}</p>
                    <p className={"color_grey font_size_14"}>{product.series}</p>
                </div>
            </div>

            <div
                className={classNames(cls.products__listItemNameStatusWrapper,
                    {},
                    [ "d-flex", "justify-content-center", "align-items-center"]
                )}>
                <p className={classNames(cls.products__listItemNameStatus,
                    {
                        [cls.free]: product.status === 1
                    })}>
                    {product.status === 1 ? "cвободен" : "В ремонте" }
                </p>
            </div>

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
                    {product.isNew ? "новый" : "Б/у"}
                </p>
            </div>
            <PriceItem
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
                dateItem={product.date}
                className={cls.products__listItemDateWrapper}
            />
            <TrashButton/>
        </li>
    );
});