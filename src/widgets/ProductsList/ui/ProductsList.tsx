import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsList.module.scss';
import {memo, useEffect, useState} from "react"
import type {ProductI} from "@/features/products/model/types/product.i.ts";
import {ProductItem} from "@/widgets/ProductItem";
import {useGetProductsQuery} from "@/features/products/api/productsApi.ts";

interface ProductsListProps {
    className?: string;
    products: ProductI[];
    handleScroll: (e: React.UIEvent<HTMLUListElement>) => void
}

export const ProductsList = memo((props: ProductsListProps) => {
    const {className, products, handleScroll} = props;
    const {t} = useTranslation();

    const onScroll = (e: React.UIEvent<HTMLUListElement>) =>{
        handleScroll(e);
    }

    return (
        <ul className={classNames(cls.products__list)}
            onScroll={onScroll}
        >
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