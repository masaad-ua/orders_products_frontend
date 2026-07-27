import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrdersPage.module.scss';
import {memo, useEffect, useState} from "react"
import Circle from '@/assets/images/circle_plus.png';
import {OrdersList} from "@/widgets/OrdersList";
import {useDeleteOrderMutation, useGetOrdersQuery} from "@/features/orders/api/ordersApi.ts";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";
import {DeleteOrderModal} from "@/features/orders/ui";

interface OrdersPageProps {
    className?: string;
}

const OrdersPage = memo((props: OrdersPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const [deleteOrder] = useDeleteOrderMutation();
    const [page, setPage] = useState(1);
    const [orders, setOrders] = useState<OrderI[]>([]);
    const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<OrderI | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    /** Todo make common hook */
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
    /** Todo make common hook */

    const handleDeleteClick = async (order: OrderI) => {
        setSelectedOrder(order);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteOrder = async () => {
        if (!selectedOrder) {
            return;
        }

        try {
            await deleteOrder(selectedOrder.id).unwrap();
            setOrders((prev) => prev.filter((order) => order.id !== selectedOrder.id));

            setIsDeleteModalOpen(false);
            setSelectedOrder(null);
        } catch (error) {
            console.error(error);
        }
    };

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
                    onDelete={handleDeleteClick}
                />
                {isLoading && page > 1 && (
                    <div className="text-center p-3">
                        Загрузка...
                    </div>
                )}
            </div>
            <DeleteOrderModal
                isOpen={isDeleteModalOpen}
                order={selectedOrder}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteOrder}
            />
        </div>

    );
});

export default OrdersPage