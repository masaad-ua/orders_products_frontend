//import {useTranslation} from 'react-i18next';
import cls from './TopMenu.module.scss';
import './TopMenu.module.scss';
import  {memo} from "react"
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import logo from '@/assets/images/logo.png';


interface TopMenuProps {
    className?: string;
}

export const TopMenu = memo((props: TopMenuProps) => {
    // const {className} = props;
    // const {t} = useTranslation();

    return (
        <header className={cls.header}>
            <div className={"container-fluid"}>
                <div className={ classNames(cls.header__content, {}, ["d-flex align-items-center justify-content-between"])}>

                    <div className={"d-flex align-items-center"}>
                        <div className={classNames(cls.header__logo)}>
                            <img
                                src={logo}
                                alt="Inventory"
                                className={cls.header__logoImage}
                            />
                            <h2 className={cls.header__title}>INVENTORY</h2>
                        </div>
                        <div className={classNames(cls.header__search, {}, [`ms-5`])}>
                            <input
                                type="text"
                                className={`form-control ${cls.header__searchInput}`}
                                placeholder="Поиск"
                            />
                        </div>
                    </div>

                    <div className={"d-flex align-items-end"}>
                        <p className={classNames(cls.header__day)}>
                            Вторник
                        </p>
                        <div className={classNames(cls.header__dateTime)}>

                            <span className={classNames(cls.header__date)}>
                                06 Apr, 2017
                            </span>
                            <i
                                className={`bi bi-clock ${cls.header__clock}`}
                            />

                            <span className={cls.header__time}>
                                17:20
                            </span>

                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
});