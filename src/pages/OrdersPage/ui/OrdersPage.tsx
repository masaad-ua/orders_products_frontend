import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrdersPage.module.scss';
import {memo} from "react"


interface OrdersPageProps {
    className?: string;
}

const OrdersPage = memo((props: OrdersPageProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.OrdersPage, {}, [className])}>
            OrdersPage is working
        </div>
    );
});

export default OrdersPage