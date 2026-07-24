import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './DateItem.module.scss';
import {memo} from "react"

interface DateItemProps {
    className?: string;
}

export const DateItem = memo((props: DateItemProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const classes = `${cls.dateItem} + ${className}`;

    return (
        <div className={classNames(classes,
            {},
            [])}>
            <p className={classNames(cls.dateItem__dateFormat1,
                {},
                ["colorGreySize"])}
            >
                04/12
            </p>
            <p className={cls.dateItem__ateFormat2}>
                06/ Апр /2017
            </p>
        </div>
    );
});