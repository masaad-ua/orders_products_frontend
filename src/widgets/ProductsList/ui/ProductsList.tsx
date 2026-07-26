import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsList.module.scss';
import {memo} from "react"
import type {ProductI} from "@/features/products/model/types/product.i.ts";
import {ProductItem} from "@/widgets/ProductItem";

interface ProductsListProps {
    className?: string;
    products: ProductI[]
}

export const ProductsList = memo((props: ProductsListProps) => {
    const {className, products} = props;
    const {t} = useTranslation();

    return (
        <ul className={classNames(cls.products_list)}>
            {
                products.map((product: ProductI)=> (
                    <ProductItem
                        product ={product}
                    >
                    </ProductItem>
                ))
            }
        </ul>
    );
});