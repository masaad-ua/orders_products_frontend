import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ProductFilters.module.scss';
import {memo} from "react"
import {OptionsSpecificationEnum, OptionsTypeEnum} from "@/shared/const/options.enum.ts";

interface ProductFiltersProps {
    type: string;
    specification?: string;
    onTypeChange: (value: string) => void;
    onSpecificationChange?: (value: string) => void;
}

export const ProductFilters = memo((props: ProductFiltersProps) => {
    const {
        type,
        onTypeChange
    } = props;
    const {t} = useTranslation();


    return (
        <div className={classNames(cls.productFilters, {},["d-flex", "align-items-center"])}>
            <div>
                <label className={classNames(cls.productFilters__label)}>Тип:</label>
            </div>

            <div >
                <select className={classNames(cls.productFilters__formSelect)}
                        value={type}
                        onChange={(e) => {
                            onTypeChange(e.target.value)
                        }}>
                    <option value={OptionsTypeEnum.ALL}>All</option>
                    <option value={OptionsTypeEnum.MONITOR}>Monitor</option>
                    <option value={OptionsTypeEnum.KEYBOARD}>Keyboard</option>
                    <option value={OptionsTypeEnum.LAPTOP}>Laptop</option>
                    <option value={OptionsTypeEnum.PRINTER}>Printer</option>
                </select>
            </div>

            <div >
                <label className={classNames(cls.productFilters__label)}>Спецификация:</label>
            </div>

            <div >
                <select className={classNames(cls.productFilters__formSelect)}>
                    <option value={OptionsSpecificationEnum.ALL}>All</option>
                    <option value={OptionsSpecificationEnum.NEW}>New</option>
                    <option value={OptionsSpecificationEnum.USED}>Used</option>
                    <option value={OptionsSpecificationEnum.REPAIR}>Repair</option>
                </select>
            </div>
        </div>
    );
});