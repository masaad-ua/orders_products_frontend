import {memo, useState} from "react";
import {useTranslation} from "react-i18next";

import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./OrdersPage.module.scss";

import Circle from "@/assets/images/circle_plus.png";

import {OrdersList} from "@/widgets/OrdersList";
import {DeleteOrderModal} from "@/features/orders/ui";
import {useDeleteOrderMutation, useGetOrdersQuery} from "@/features/orders/api/ordersApi";
import type {OrderI} from "@/features/orders/model/types/order.i";
import {useInfiniteScroll} from "@/shared/lib/hooks/useInfiniteScroll.ts";
import {OrderDetails} from "@/widgets/OrderDetails";

interface OrdersPageProps {
    className?: string;
}

const OrdersPage = memo((props: OrdersPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const [deleteOrder] = useDeleteOrderMutation();
    const [page, setPage] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState<OrderI | null>(null);

    const {
        data: response,
        isLoading,
        isError,
    } = useGetOrdersQuery({
        page,
        limit: 5,
    });

    const {
        items: orders,
        setItems: setOrders,
        handleScroll,
    } = useInfiniteScroll<OrderI>({
        page,
        setPage,
        response,
        isLoading,
    });

    const [orderForDelete, setOrderForDelete] = useState<OrderI | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDeleteClick = (order: OrderI) => {
        setOrderForDelete(order);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteOrder = async () => {
        if (!orderForDelete) {
            return;
        }

        try {
            await deleteOrder(orderForDelete.id).unwrap();

            setOrders((prev) =>
                prev.filter((order) => order.id !== orderForDelete.id),
            );

            setIsDeleteModalOpen(false);
            setOrderForDelete(null);
        } catch (error) {
            console.error(error);
        }
    };

    const chooseOrder = (order: OrderI)=> {
        setSelectedOrder(order);
    }

    if (isLoading && page === 1) {
        return <div>{t("DOWNLOADS")}</div>
    }

    if (isError) {
        return <div>{t("ERRORS.ORDERS_PAGE.ERRORS_DOWNLOAD_ORDERS")}</div>
    }

    return (
        <div className={classNames(cls.orders, {
            [cls.orders__greyBackground]:selectedOrder !== null
        }, [className])}>
            <div className="d-flex">
                <img
                    className={cls.orders__titleIcon}
                    src={Circle}
                    alt=""
                />

                <h2 className={classNames(cls.orders__title, {}, ["h2"])}>
                    Приходы&nbsp;/&nbsp;
                    {response?.pagination.total ?? orders.length}
                </h2>
            </div>
            {isLoading && page > 1 && (
                <div className="text-center p-3">
                    Загрузка...
                </div>
            )}

            <div className={classNames(cls.orders__listDetailsWrapper, {}, ["d-flex"])}>
                <OrdersList
                    orders={orders}
                    shortList = {!!selectedOrder}
                    handleScroll={handleScroll}
                    onDelete={handleDeleteClick}
                    chooseOrder={chooseOrder}
                    selectedOrder= {selectedOrder}
                />
                <OrderDetails
                    order={selectedOrder}
                    onClose={() => setSelectedOrder(null)}
                />

            </div>
        <DeleteOrderModal
            isOpen={isDeleteModalOpen}
            order={orderForDelete}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={handleDeleteOrder}
        />
        </div>
    );
});

export default OrdersPage;