import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsList.module.scss';
import {memo} from "react"
import Monitor from "@/assets/images/monitor.png";
import {PriceItem} from "@/shared/ui/PriceItem";
import {ListItemName} from "@/shared/ui/ListItemName";
import {DateItem} from "@/shared/ui/DateItem";
import {TrashButton} from "@/shared/ui/TrashButton";

interface ProductsListProps {
    className?: string;
}

export const ProductsList = memo((props: ProductsListProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <ul className={classNames(cls.products_list)}>
            <li className={classNames(cls.products__listItem,{}, ["d-flex"])}>
                <div className={classNames(cls.products__listItemIndicatorWrapper,
                    {},
                    ["d-flex", "justify-content-center" ,"align-items-center"] )}>
                    <div className={classNames(cls.products__listItemIndicator)}></div>
                </div>


                <div className={classNames(cls.products__listItemDeviceWrapper,
                    {},
                    ["d-flex", "align-items-center"])}>
                    <img src={Monitor}
                         alt=""
                         className={classNames(cls.products__listItemDeviceImage)}/>
                    <div className={classNames(cls.products__listItemNameDeviceNameWrapper)}>
                        <p>Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</p>
                        <p className={"color_grey font_size_14"}>SN-12.3456789</p>
                    </div>
                </div>

                <div
                    className={classNames(cls.products__listItemNameStatusWrapper,
                        {},
                        [ "d-flex", "justify-content-center", "align-items-center"]
                    )}>
                    <p className={classNames(cls.products__listItemNameStatus,
                        {
                            [cls.free]: true
                        })}>
                        cвободен
                    </p>
                </div>


                <div className={classNames(cls.products__listItemPeriodWrapper,
                    {},
                    ["d-flex", "flex-column", "align-items-start",  "justify-content-center"]

                )}>
                    <p>
                        <span className={"font_size_12"}>с</span>
                        &nbsp;06 / 04/ 2017
                    </p>
                    <p>
                        <span className={"font_size_12"}>по </span>
                        &nbsp;06 / 04/ 2017
                    </p>
                </div>

                <div className={classNames(cls.products__listItemStatus,
                    {},
                    ["d-flex", "justify-content-center", "align-items-center"])}>
                    <p>новый</p>
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
                    className={cls.products__listItemDateWrapper}
                />
                <TrashButton/>
            </li>
        </ul>
    );
});