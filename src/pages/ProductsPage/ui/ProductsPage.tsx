import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsPage.module.scss';
import {memo, useMemo, useState} from "react"
import {ProductFilters} from "@/widgets/ProductFilters";
import {ProductsList} from "@/widgets/ProductsList";
import {useGetProductsQuery} from "@/features/products/api/productsApi.ts";
import type {ProductI} from "@/features/products/model/types/product.i.ts";
import {useInfiniteScroll} from "@/shared/lib/hooks/useInfiniteScroll.ts";
import {OptionsTypeEnum} from "@/shared/const/options.enum.ts";

interface ProductsPageProps {
    className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const [page, setPage] = useState(1);
    const [selectedType, setSelectedType] = useState("");

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

    const filteredProducts = useMemo(() => {
        if (!selectedType) return products;

        return products.filter((product) => {
                if(selectedType === OptionsTypeEnum.ALL){
                    return true
                }
                else {
                    return  product.type === selectedType
                }

        });
    }, [products, selectedType]);

    if(isLoading && page === 1){
        return <div>{t("DOWNLOADS")}</div>
    }

    if (isError) {
        return <div>{t("ERRORS.ORDERS_PAGE.ERRORS_DOWNLOAD_PRODUCTS")}</div>;
    }

    return (
        <div className={classNames(cls.products, {}, [className])}>
            <div className={classNames(cls.products__formWrapper, {}, ["d-flex"])}>
                <h2 className={classNames( cls.products__title, {},["h2"])}>
                    {t("PRODUCTS_PAGE.PRODUCTS_PAGE_TITLE")}&nbsp;/&nbsp;{response && response.pagination.total}
                </h2>
                <ProductFilters
                    type={selectedType}
                    onTypeChange={setSelectedType}
                />
            </div>
            <ProductsList
                products={filteredProducts}
                handleScroll={handleScroll}
            />
        </div>
    )
});

export default ProductsPage;