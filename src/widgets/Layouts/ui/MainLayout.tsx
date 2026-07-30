import { Outlet } from 'react-router-dom';
import {TopMenu} from "@/widgets/TopMenu";
import {SideBar} from "@/widgets/SideBar";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from "./MainLayout.module.scss"
import {useContext, useState} from "react";
import {ThemeContext} from "@/app/providers/ThemeProvider/ThemeContext.ts";

export type background = "grey" | "white" | "popup";

export function MainLayout() {
    const { theme } = useContext(ThemeContext);



    return (
        <div className={classNames(cls.mainLayout, {

        }, [theme])}>
            <TopMenu />
            <div className={ classNames("", {} ,[
                "d-flex justify-content-between"
            ])}>
                <SideBar/>
                <main className={"flex-grow-1"}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}