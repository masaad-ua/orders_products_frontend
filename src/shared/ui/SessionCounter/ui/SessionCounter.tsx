import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames.ts';
import cls from './SessionCounter.module.scss';
import {memo} from "react"


interface SessionCounterProps {
    className?: string;
    sessions: number;
}

export const SessionCounter = memo((props: SessionCounterProps) => {
    const {className, sessions} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.SessionCounter, {}, [className])}>
            {sessions}
        </div>
    );
});