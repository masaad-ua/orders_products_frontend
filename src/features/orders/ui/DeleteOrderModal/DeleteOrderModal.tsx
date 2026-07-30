import { Trash2 } from 'lucide-react';

import cls from './DeleteOrderModal.module.scss';
import type {OrderI} from "@/features/orders/model/types/order.i.ts";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {CloseButton} from "@/shared/ui/CloseButton";
import {useContext, useEffect} from "react";
import {ThemeContext} from "@/app/providers/ThemeProvider/ThemeContext.ts";

interface DeleteOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    order: OrderI | null;
}

export const DeleteOrderModal = ({
                                     isOpen,
                                     onClose,
                                     onConfirm,
                                    order,
                                 }: DeleteOrderModalProps) => {
    const { setTheme } = useContext(ThemeContext);
    if (!isOpen ) {
        setTheme("white");
        return null;
    }else {
        setTheme("popup");
    }

    return (
        <div className={classNames(cls.deleteOrderModal, {}, [
            "d-flex", "justify-content-center", "align-items-center"
        ])}>
            <div className={cls.deleteOrderModal__overlay} />

            <div className={classNames(cls.deleteOrderModal__content, {},
                ["d-flex", "flex-column" ])}>
                <CloseButton
                    onClose={onClose}
                />

                <div className={cls.deleteOrderModal__body}>
                    <h3 className={cls.deleteOrderModal__title}>
                        Вы уверены, что хотите удалить этот приход?
                    </h3>
                    <div className={classNames(cls.deleteOrderModal__product, {}, [
                        "d-flex", "align-items-center"
                    ])}>
                        <p className={cls.deleteOrderModal__productTitle}>
                            {order && order.title}
                        </p>
                    </div>
                </div>
                <div className={cls.deleteOrderModal__footer}>
                    <button
                        className={cls.deleteOrderModal__cancelButton}
                        onClick={onClose}
                    >
                        ОТМЕНИТЬ
                    </button>
                    <button
                        className={classNames(cls.deleteOrderModal__deleteButton, {}, [
                            "d-flex", "justify-content-center", "align-items-center"
                        ])}
                        onClick={onConfirm}
                    >
                        <Trash2 size={18} />
                        УДАЛИТЬ
                    </button>
                </div>
            </div>
        </div>
    );
};