import cls from './TrashButton.module.scss';
import type {OrderI} from "@/features/orders/model/types/order.i.ts";
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface TrashButtonProps {
    className?: string;
    order?: OrderI;
    onDelete?: (order: OrderI) => void;
    shortList?: boolean;
}

export const TrashButton = (props: TrashButtonProps) => {
    const { onDelete,
        order,
        shortList
    } = props;

    const deleteItem = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.stopPropagation();
        if (!order || !onDelete) {
            return
        }
        else {
            onDelete(order)
        }
    }

    return (

        <button
            onClick={deleteItem}
            className={classNames(cls.trashButton, {
                [cls.hidden]: shortList
            })}
        ></button>
    );
};