import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsPage.module.scss';
import {memo, useState} from "react"
import {ProductFilters} from "@/widgets/ProductFilters";
import {TrashButton} from "@/shared/ui/TrashButton";
import Monitor from '@/assets/images/monitor.png';
import {PriceItem} from "@/shared/ui/PriceItem";
import {DateItem} from "@/shared/ui/DateItem";
import {ListItemName} from "@/shared/ui/ListItemName";
import {ProductsList} from "@/widgets/ProductsList";

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
                <h2 className={classNames( cls.products__title, {},["h2"])}>
                    Продукты&nbsp;/&nbsp;25
                </h2>
                <ProductFilters
                    type={type}
                    specification={specification}
                    onTypeChange={setType}
                    onSpecificationChange={setSpecification}
                />
            </div>
            <ProductsList/>
        </div>
    )
});

export default ProductsPage;