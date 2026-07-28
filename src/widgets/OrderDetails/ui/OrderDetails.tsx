import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrderDetails.module.scss';
import {memo} from "react"
import {CloseButton} from "@/shared/ui/CloseButton";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";
import {CirclePlus} from "lucide-react";
import type {ProductI} from "@/features/products/model/types/product.i.ts";

interface OrderDetailsProps {
    className?: string;
    order: OrderI;
    onClose: () => void
}

export const OrderDetails = memo((props: OrderDetailsProps) => {
    const {className, order} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.orderDetails, {}, [className])}>

            <CloseButton
                className={cls.orderDetails__closeButton}
                onClose={()=> {}}
            />
            <div className={classNames(cls.orderDetails__titleWrapper)}>
                <h2 className={classNames(cls.orderDetails__title)}>
                    {order.title}
                </h2>
                <div className={classNames(cls.orderDetails__addProductWrapper, {},
                    ["d-flex", "align-items-center"])}>
                    <CirclePlus className={classNames(cls.orderDetails__circlePlus)}/>
                    <span className={classNames("", {}, ["color_green"])}>
                    Добавить продукт</span>
                </div>
            </div>
            <ul>
                {
                    order.products.map((product: ProductI) => (
                        <li>
                            
                        </li>
                    ))
                }
            </ul>
        </div>
    );
});