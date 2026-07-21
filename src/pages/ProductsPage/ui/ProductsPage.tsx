import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductsPage.module.scss';
import {memo} from "react"

interface ProductsPageProps {
    className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ProductsPage, {}, [className])}>
            ProductsPage is working
        </div>
    );
});

export default ProductsPage;