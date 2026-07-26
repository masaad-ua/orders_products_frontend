import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrdersPage.module.scss';
import {memo} from "react"
import Circle from '@/assets/images/circle_plus.png';
import {OrdersList} from "@/widgets/OrdersList";
import {useGetOrdersQuery} from "@/features/orders/api/ordersApi.ts";


interface OrdersPageProps {
    className?: string;
}

const OrdersPage = memo((props: OrdersPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const {
        data: orders= [],
        isLoading,
        isError
    } = useGetOrdersQuery();

    if(isLoading){
        return <div>Загрузка...</div>
    }

    if (isError) {
        return <div>Ошибка загрузки заказов</div>;
    }

    return (
        <div className={classNames(cls.orders, {}, [className])}>
            <div className={classNames(cls.orders__titleWrapper, {}, )}>
                <div className={"d-flex"}>
                    <img
                        className={cls.orders__titleIcon}
                        src={Circle} alt=""/>
                    <h2 className={classNames(cls.orders__title, {}, ["h2"])}>
                        Приходы&nbsp;/&nbsp;{orders.length}
                    </h2>
                </div>
                <OrdersList
                    orders={orders}
                />
            </div>
        </div>
    );
});

export default OrdersPage