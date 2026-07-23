import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import {memo, useEffect, useState} from "react"
import portrait from '@/assets/images/portrait.png';
import {Settings} from "lucide-react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {ROUTES} from "@/shared/const/routes.const.ts";


interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <aside className={classNames(className || "")}>
            <div className={classNames(cls.sidebar,
                {},
                ["d-flex", "flex-column", "justify-content-start", "align-items-center"])}
            >
                <div className={cls.sidebar__avatarWrapper}>
                    <img src={portrait} alt="" className={cls.sidebar__avatar}/>
                    <div className={classNames(cls.sidebar__settings,
                        {},
                        ["d-flex", "justify-content-center", "align-items-center"])}>
                        <Settings fill="red"  className={cls.sidebar__settingsIcon} />
                    </div>
                </div>
                <ul className={cls.sidebar__list}>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classNames(cls.sidebar__listLink, {
                                    [cls.active]: isActive,
                                })
                            }
                            to={ROUTES.ORDERS}>
                            {t("SIDEBAR.ORDERS")}
                        <span className={cls.sidebar__listLinkLine}></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classNames(cls.sidebar__listLink, {
                                    [cls.active]: isActive,
                                })
                            }
                            to={ROUTES.GROUPS}>
                            {t("SIDEBAR.GROUPS")}
                            <span className={cls.sidebar__listLinkLine}></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classNames(cls.sidebar__listLink, {
                                    [cls.active]: isActive,
                                })
                            }
                            to={ROUTES.PRODUCTS}>
                            {t("SIDEBAR.PRODUCTS")}
                            <span className={cls.sidebar__listLinkLine}></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classNames(cls.sidebar__listLink, {
                                    [cls.active]: isActive,
                                })
                            }
                            to={ROUTES.USERS}>
                            {t("SIDEBAR.USERS")}
                            <span className={cls.sidebar__listLinkLine}></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classNames(cls.sidebar__listLink, {
                                    [cls.active]: isActive,
                                })
                            }
                            to={ROUTES.SETTINGS}>
                            {t("SIDEBAR.SETTINGS")}
                            <span className={cls.sidebar__listLinkLine}></span>
                        </NavLink>
                    </li>
                </ul>

            </div>
        </aside>
    );
});