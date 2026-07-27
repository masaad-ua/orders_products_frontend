import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './OrderDetails.module.scss';
import {memo} from "react"


interface OrderDetailsProps {
    className?: string;
}

export const OrderDetails = memo((props: OrderDetailsProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.OrderDetails, {}, [className])}>
            <div className>
                <button>X</button>
            </div>
            <h2> Длинное предлинное длиннючее длиннючее название прихода</h2>
            <div>
                <span>+</span> <span>Добавить продукт</span>
            </div>
            <ul>
                <li></li>
            </ul>
        </div>
    );
});