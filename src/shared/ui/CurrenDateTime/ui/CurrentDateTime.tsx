import {Clock9} from "lucide-react";
import {classNames} from '@/shared/lib/classNames/classNames.ts';
import cls from './CurrentDateTime.module.scss';
import {memo, useEffect, useState} from "react"
import type {LanguagesLocalesEnum} from "@/shared/const/languages.enum.ts";

interface DateInViewI {
    day: string;
    date: string,
    time: string

}
interface CurrentDateTimeProps {
    className?: string;
    locale: LanguagesLocalesEnum;
}

export const CurrentDateTime = memo((props: CurrentDateTimeProps) => {
    const {className, locale} = props;
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 5000)

        return () => clearInterval(interval);
    }, []);
    const getDate = ():DateInViewI => {
        const day = new Intl.DateTimeFormat('ru-RU', {
            weekday: 'long',
        }).format(currentDate);
        const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);


        const date = new Intl.DateTimeFormat(locale, {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).format(currentDate);

        const time = new Intl.DateTimeFormat('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
        }).format(currentDate);

        return {
            day: formattedDay,
            date,
            time
        }
    }
    const dateInView: DateInViewI = getDate();

    return (
        <div className={classNames(className,{}, ["d-flex flex-column align-items-start"])}>
            <p className={classNames(cls.header__day)}>
                {dateInView.day}
            </p>
            <div className={classNames(cls.header__dateTime, {}, ["d-flex align-items-center"])}>

                            <span className={classNames(cls.header__date)}>
                                {dateInView.date}
                            </span>
                <Clock9
                    size={14}
                    strokeWidth={3}
                    className={cls.header__clock}
                />
                <span
                    className={cls.header__time}>
                    {dateInView.time}
                </span>

            </div>
        </div>
    );
});