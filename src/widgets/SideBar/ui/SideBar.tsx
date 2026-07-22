import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import {memo} from "react"

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <aside className={classNames(cls.SideBar, {}, [className])}>
            <div className={"sidebar__logoWrapper"}>

            </div>

        </aside>
    );
});