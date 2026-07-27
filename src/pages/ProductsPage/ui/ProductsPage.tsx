import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsPage.module.scss';
import {memo, useState} from "react"
import {ProductFilters} from "@/widgets/ProductFilters";
import {ProductsList} from "@/widgets/ProductsList";
import {useGetProductsQuery} from "@/features/products/api/productsApi.ts";
import type {ProductI} from "@/features/products/model/types/product.i.ts";
import {useInfiniteScroll} from "@/shared/lib/hooks/useInfiniteScroll.ts";

interface ProductsPageProps {
    className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const [type, setType] = useState('');
    const [specification, setSpecification] = useState('');
    const [page, setPage] = useState(1);

    const {
        data: response,
        isLoading,
        isError,
    } = useGetProductsQuery({
        page,
        limit: 5,
    });

    const {
        items: products,
        handleScroll,
    } = useInfiniteScroll<ProductI>({
        page,
        setPage,
        response,
        isLoading,
    });

    if(isLoading && page === 1){
        return <div>Загрузка...</div>
    }

    if (isError) {
        return <div>Ошибка загрузки заказов</div>;
    }

    return (
        <div className={classNames(cls.products, {}, [className])}>
            <div className={classNames(cls.products__formWrapper, {}, ["d-flex"])}>
                <h2 className={classNames( cls.products__title, {},["h2"])}>
                    Продукты&nbsp;/&nbsp;{response && response.pagination.total}
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
                handleScroll={handleScroll}
            />
        </div>
    )
});

export default ProductsPage;