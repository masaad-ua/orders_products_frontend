import cls from './TopMenu.module.scss';
import './TopMenu.module.scss';
import {memo} from "react"
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import logo from '@/assets/images/logo.png';
import {useTranslation} from "react-i18next";

import {LanguagesEnum, LanguagesLocalesEnum} from "@/shared/const/languages.enum.ts";
import {CurrentDateTime} from "@/shared/ui/CurrenDateTime";
import {useSessions} from "@/features/sessions/model/useSessions.ts";
import {SessionCounter} from "@/shared/ui/SessionCounter/SessionCounter.tsx";

interface TopMenuProps {
    className?: string;
}

export const TopMenu = memo((props: TopMenuProps) => {
    const {t} = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage;
    const sessions = useSessions();

    const getLocale = (languageI18n: string | undefined): LanguagesLocalesEnum => {
        switch (languageI18n){
            case LanguagesEnum.RU:
                return LanguagesLocalesEnum.RU_LOCALE;
            case LanguagesEnum.EN:
                return LanguagesLocalesEnum.EN_LOCALE;
            default:
                return LanguagesLocalesEnum.RU_LOCALE;
        }
    }

    const locate = getLocale(currentLanguage);

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
                            <h2 className={cls.header__title}>
                                {t("HEADER.TITLE")}
                            </h2>
                        </div>
                        <div className={classNames(cls.header__search, {}, [`ms-5`])}>
                            <input
                                type="text"
                                className={`form-control ${cls.header__searchInput}`}
                                placeholder={t("HEADER.INPUT_PLACEHOLDER")}
                            />
                        </div>
                    </div>
                    <div className={"d-flex h_100"}>
                        <SessionCounter
                            className={classNames(cls.header__sessionCounter,
                                {},
                                ["d-flex", "align-items-end", "justify-content-start"])}
                            sessions={sessions}
                        />
                        <CurrentDateTime
                            className ={cls.header__dateTimeWrapper}
                            locale = {locate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
});