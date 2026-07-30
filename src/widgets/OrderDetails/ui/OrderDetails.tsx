import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrderDetails.module.scss';
import {memo} from "react"
import {CloseButton} from "@/shared/ui/CloseButton";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";
import {CirclePlus} from "lucide-react";
import type {ProductI} from "@/features/products/model/types/product.i.ts";
import {ListItemIndicator} from "@/shared/ui/ListItemIndicator";
import {ListItemDevice} from "@/shared/ui/ListItemDevice";
import {ListItemStatus} from "@/shared/ui/ListItemStatus";

interface OrderDetailsProps {
    className?: string;
    order: OrderI | null;
    onClose: () => void
}

export const OrderDetails = memo((props: OrderDetailsProps) => {
    const {className,
        order ,
        onClose} = props;

        return (
            <div className={classNames(`${cls.orderDetails} ${className}`,
                {
                    [cls.showOrderDetails]: order !== null
                },
                [className])}>

                    <div className={classNames(cls.orderDetails__container)}>

                        {
                            order && <>
                                <CloseButton
                                    className={cls.orderDetails__closeButton}
                                    onClose={onClose}
                                />
                                <div className={classNames(cls.orderDetails__titleWrapper)}>
                                    <h2 className={classNames(cls.orderDetails__title)}>
                                        {order?.title}
                                    </h2>
                                        <div className={classNames(cls.orderDetails__addProductWrapper, {},
                                            ["d-flex", "align-items-center"])}>
                                            <CirclePlus className={classNames(cls.orderDetails__circlePlus)}/>
                                            <span className={classNames("",
                                                {},
                                                ["color_green"])}
                                            >
                                                Добавить продукт
                                            </span>
                                        </div>
                                </div>
                                <ul className={classNames(cls.orderDetails__list)}>
                                    {
                                        order?.products.map((product: ProductI) => (
                                            <li
                                                key={product.id}
                                                className={classNames(cls.orderDetails__listItem,{}, ["d-flex"])}>
                                                <ListItemIndicator
                                                    status={product.status}
                                                    className={cls.orderDetails__listItemIndicatorWrapper}
                                                />
                                                <ListItemDevice
                                                    className={cls.orderDetails__listItemDeviceWrapper}
                                                    title={product.title}
                                                    series={product.series}
                                                />
                                                <ListItemStatus
                                                    className={cls.orderDetails__listItemStatusWrapper}
                                                    status={product.status}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </>
                        }
                    </div>
            </div>
        );
});