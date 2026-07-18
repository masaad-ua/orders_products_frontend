import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './TopMenu.module.scss';
import './TopMenu.css';
import {memo} from "react"


interface TopMenuProps {
    className?: string;
}

export const TopMenu = memo((props: TopMenuProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <header className={}>

        </header>
    );
});