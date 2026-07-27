import cls from './TrashButton.module.scss';
import type {OrderI} from "@/features/orders/model/types/order.i.ts";

interface TrashButtonProps {
    className?: string;
    order: OrderI,
    onDelete?: (order: OrderI) => void;
}

export const TrashButton = (props: TrashButtonProps) => {
    const {className, onDelete, order} = props;

    const deleteItem = () =>{
        if(onDelete){
            onDelete(order)
        }
    }

    return (

        <button
            onClick={deleteItem}
            className={cls.trashButton}
        ></button>
    );
};