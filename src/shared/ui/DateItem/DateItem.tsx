import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './DateItem.module.scss';
import {memo} from "react"
import {
    getDateFormat,
    getDay,
    getMonthInDigit,
    getMonthInString,
    getYear
} from "@/shared/services/dateService.ts";

interface DateItemProps {
    className?: string;
    dateItem: string;
}

export const DateItem = memo((props: DateItemProps) => {
    const {className,
        dateItem,
    } = props;
    const classes: string = `${cls.dateItem} + ${className}`;
    const date: Date = new Date(dateItem);
    const {
        day,
        monthInDigit,
        monthInString,
        year
    } = getDateFormat(date);

    return (
        <div className={classNames(classes,
            {},
            [])}>
            <p className={classNames(cls.dateItem__dateFormat1,
                {},
                ["color_grey", "font_size_12"])}
            >
                {day}&nbsp;/&nbsp;{monthInDigit}
            </p>
            <p className={cls.dateItem__dateFormat2}>
                {day}&nbsp;/&nbsp;{monthInString}&nbsp;/&nbsp;{year}
            </p>
        </div>
    );
});