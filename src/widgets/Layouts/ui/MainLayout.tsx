import { Outlet } from 'react-router-dom';
import {TopMenu} from "@/widgets/TopMenu";
import {SideBar} from "@/widgets/SideBar";
import {classNames} from "@/shared/lib/classNames/classNames.ts";

export function MainLayout() {
    return (
        <>
            <TopMenu />
            <div className={"d-flex justify-content-between"}>
                <SideBar/>
                <main className={"flex-grow-1"}>
                    <Outlet />
                </main>
            </div>
        </>
    );
}