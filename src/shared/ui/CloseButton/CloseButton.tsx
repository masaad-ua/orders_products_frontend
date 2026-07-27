import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './CloseButton.module.scss';
import {memo} from "react"
import {X} from "lucide-react";

interface CloseButtonProps {
    className?: string;
    onClose: () => void
}

export const CloseButton = memo((props: CloseButtonProps) => {
    const {className, onClose} = props;
    const {t} = useTranslation();

    return (
        <button
            className={classNames(cls.closeButton, {}, [
                "d-flex", "justify-content-center", "align-items-center"
            ])}
            onClick={onClose}
        >
            <X size={22} />
        </button>
    );
});