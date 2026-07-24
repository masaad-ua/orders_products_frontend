import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsPage.module.scss';
import {memo, useState} from "react"
import {ProductFilters} from "@/widgets/ProductFilters";
import {TrashButton} from "@/shared/ui/TrashButton";
import Monitor from '@/assets/images/monitor.png';
import {PriceItem} from "@/shared/ui/PriceItem";
import {DateItem} from "@/shared/ui/DateItem";

interface ProductsPageProps {
    className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const [type, setType] = useState('');
    const [specification, setSpecification] = useState('');

    return (
        <div className={classNames(cls.products, {}, [className])}>
            <div className={classNames(cls.products__formWrapper, {}, ["d-flex"])}>
                <h2 className={classNames( cls.products__title, {},["h2Title"])}>
                    Продукты&nbsp;/&nbsp;25
                </h2>
                <ProductFilters
                    type={type}
                    specification={specification}
                    onTypeChange={setType}
                    onSpecificationChange={setSpecification}
                />
            </div>
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

                    <div className={classNames(cls.products__listItemTitleGroupWrapper,
                                    {},
                                    ["d-flex", "justify-content-start", "align-items-center"]
                    )}>
                        <p className={cls.listItemName}>
                            Длинное предлинное длиннючее название группы
                        </p>
                    </div>

                    <div className={classNames(cls.products__listItemNameOfCustomerWrapper,
                        {},
                        ["d-flex", "justify-content-start", "align-items-center"]
                    )}>
                        <p className={cls.listItemName}>
                            -
                        </p>
                    </div>
                    <div className={classNames(cls.products__listItemNameOfOrdersWrapper,
                        {},
                        ["d-flex", "justify-content-start", "align-items-center"]
                    )}>
                        <p className={cls.listItemName}>
                            Длинное предлинное длиннючее название прихода
                        </p>
                    </div>
                    <DateItem
                        className={cls.products__listItemDateWrapper}
                    />
                    <TrashButton/>
                </li>
            </ul>
        </div>
    )
});

export default ProductsPage;