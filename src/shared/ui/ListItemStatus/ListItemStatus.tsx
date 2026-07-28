import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ListItemStatus.module.scss';
import {memo} from "react"

interface ListItemSpecificationProps {
    className?: string;
    status: number
}

export const ListItemStatus = memo((props: ListItemSpecificationProps) => {
    const {className,
        status} = props;
    const {t} = useTranslation();

    return (
        <div
            className={classNames(className,
                {},
                [ "d-flex", "justify-content-center", "align-items-center"]
            )}>
            <p className={classNames("",{
                    [cls.free]: status === 1
                })}>
                {status === 1 ? t("STATUS.FREE") : t("STATUS.IN_REPAIR") }
            </p>
        </div>
    );
});