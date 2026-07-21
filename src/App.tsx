import './App.scss'
import {TopMenu} from "./widgets/TopMenu";
import {useTranslation} from "react-i18next";
import {LanguagesEnum, LanguagesLocalesEnum} from "@/shared/const/languages.enum.ts";

function App() {
  return (
      <TopMenu></TopMenu>
  )
}

export default App
