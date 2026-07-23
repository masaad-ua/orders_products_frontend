import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrdersPage.module.scss';
import {memo} from "react"
import Circle from '@/assets/images/circle_plus.png';
import {List, Trash2} from "lucide-react";
import {OrdersList} from "@/widgets/OrdersList";


interface OrdersPageProps {
    className?: string;
}

const OrdersPage = memo((props: OrdersPageProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.orders, {}, [className])}>
            <div className={classNames(cls.orders__titleWrapper, {}, )}>
                <div className={"d-flex"}>
                    <img
                        className={cls.orders__titleIcon}
                        src={Circle} alt=""/>
                    <h2 className={cls.orders__title}>
                        Приходы&nbsp;/&nbsp;25
                    </h2>
                </div>
                <OrdersList/>
            </div>
        </div>
    );
});

export default OrdersPage