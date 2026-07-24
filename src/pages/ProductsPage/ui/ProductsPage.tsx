import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsPage.module.scss';
import {memo, useState} from "react"
import {ProductFilters} from "@/widgets/ProductFilters";
import {TrashButton} from "@/shared/ui/TrashButton";

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
                    <div className={classNames(cls.products__listItemDeviceWrapper)}>
                        <img src="" alt="" className={classNames(cls.products__listItemDeviceImage)}/>
                        <div className={classNames(cls.products__listItemNameDeviceNameWrapper)}>
                            <p>Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</p>
                            <p>SN-12.3456789</p>
                        </div>
                    </div>

                    <div className={classNames(cls.products__listItemNameStatus)}>
                        <p>Свободен</p>
                    </div>
                    <div className={classNames(cls.products__listItemPeriod)}>
                        <p>
                            <span>с</span>
                            06 / 04/ 2017
                        </p>
                        <p>
                            <span>по</span>
                            с 06 / 04/ 2017
                        </p>
                    </div>

                    <div className={classNames(cls.products__listItemStatus)}>
                        <p>новый</p>
                    </div>
                    <div className={cls.products__listItemPriceWrapper}>
                        <div className={
                            classNames(cls.products__listItemPrice1,
                                {}, ["colorGreySize"])
                        }>
                            2500 $
                        </div>
                        <div className={cls.products__listItemPrice2}>
                            2500 000.50&nbsp;
                            <span className={cls.products__listItemPrice2Currency}>UAH</span>
                        </div>
                    </div>

                    <div className={cls.products__listItemTitleGroupWrapper}>
                        <p className={cls.products__listItemTitleGroup}>
                            Длинное предлинное длиннючее название группы
                        </p>
                    </div>

                    <div className={cls.products__listItemNameOfCustomerWrapper}>
                        <p>Христорождественский Александр</p>
                    </div>
                    <div className={cls.products__listItemNameOfCustomerWrapper}>
                        <p>Длинное предлинное длиннючее название прихода</p>
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
                    <TrashButton/>
                </li>
            </ul>
        </div>
    )
});

export default ProductsPage;