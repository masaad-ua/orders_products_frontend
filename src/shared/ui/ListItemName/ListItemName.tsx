import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ListItemName.module.scss';
import {memo} from "react"

interface ListItemNameProps {
    className?: string;
}

export const ListItemName = memo((props: ListItemNameProps) => {
    const {className = ""} = props;
    const {t} = useTranslation();

    return (

        <div className={classNames( className,
            {},
            ["d-flex", "justify-content-start", "align-items-center"]
        )}>
            <p className={cls.listItemName}>
                Длинное предлинное длиннючее название прихода
            </p>
        </div>
    );
});