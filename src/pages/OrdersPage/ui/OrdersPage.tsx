import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrdersPage.module.scss';
import {memo, useEffect, useState} from "react"
import Circle from '@/assets/images/circle_plus.png';
import {OrdersList} from "@/widgets/OrdersList";
import {useGetOrdersQuery} from "@/features/orders/api/ordersApi.ts";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";


interface OrdersPageProps {
    className?: string;
}

const OrdersPage = memo((props: OrdersPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const [page, setPage] = useState(1);
    const [orders, setOrders] = useState<OrderI[]>([]);
    const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
    const {
        data: response,
        isLoading,
        isError,
    } = useGetOrdersQuery({
        page,
        limit: 5,
    });

    const handleScroll = (e: React.UIEvent<HTMLUListElement>) =>{
        const el = e.currentTarget;

        const isBottom =
            el.scrollTop + el.clientHeight >= el.scrollHeight - 100;

        if (
            isBottom &&
            !isLoading &&
            !isLoadingNextPage &&
            response?.pagination.hasNextPage
        ) {
            setIsLoadingNextPage(true);
            setPage((prev) => prev + 1);
        }
    }
    useEffect(() => {
        console.log(response);
        if (!response) {
            return;
        }

        setOrders((prev) => {
            const ids = new Set(prev.map((item) => item.id));

            const newOrders = response.data.filter(
                (item) => !ids.has(item.id),
            );

            return [...prev, ...newOrders];
        });
        setIsLoadingNextPage(false);
    }, [response]);

    if(isLoading && page === 1){
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
                        Приходы&nbsp;/&nbsp;{response?.pagination.total ?? orders.length}
                    </h2>
                </div>
                <OrdersList
                    orders={orders}
                    handleScroll={handleScroll}
                />
                {isLoading && page > 1 && (
                    <div className="text-center p-3">
                        Загрузка...
                    </div>
                )}
            </div>
        </div>
    );
});

export default OrdersPage