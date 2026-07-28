import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ListItemIndicator.module.scss';
import {memo} from "react"
interface ListItemIndicatorProps {
    className?: string;
    status: number
}

export const ListItemIndicator = memo((props: ListItemIndicatorProps) => {
    const {className, status} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(className ,
            {},
            ["d-flex", "justify-content-center" ,"align-items-center"] )}>
            <div className={classNames(cls.listItemIndicator, {
                [cls.free]: status === 1
            })}></div>
        </div>
    );
});