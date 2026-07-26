import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsPage.module.scss';
import {memo, useState} from "react"
import {ProductFilters} from "@/widgets/ProductFilters";
import {ProductsList} from "@/widgets/ProductsList";
import {useGetProductsQuery} from "@/features/products/api/productsApi.ts";

interface ProductsPageProps {
    className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const [type, setType] = useState('');
    const [specification, setSpecification] = useState('');

    const {
        data: products= [],
        isLoading,
        isError
    } = useGetProductsQuery();

    if(isLoading){
        return <div>Загрузка...</div>
    }

    if (isError) {
        return <div>Ошибка загрузки продуктов</div>;
    }

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
            <ProductsList
                products={products}
            />
        </div>
    )
});

export default ProductsPage;