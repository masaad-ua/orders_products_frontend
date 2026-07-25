import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './DateItem.module.scss';
import {memo} from "react"

interface DateItemProps {
    className?: string;
    dateItem: string
}

export const DateItem = memo((props: DateItemProps) => {
    const {className, dateItem} = props;
    const classes = `${cls.dateItem} + ${className}`;
    const date = new Date(dateItem);
    const months = [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
    ];

    const day = date.toLocaleDateString("en-GB", {
        day: "2-digit",
    })
    const monthInDigit = date.toLocaleDateString("en-GB", {
        month: "2-digit",
    });
    const monthInString: string = months[date.getMonth()]
    const year = date.toLocaleDateString("en-GB", {
        year: "numeric",
    })

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