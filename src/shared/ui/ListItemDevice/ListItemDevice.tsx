import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ListItemDevice.module.scss';
import {memo} from "react"
import Monitor from "@/assets/images/monitor.png";

interface ListItemDeviceProps {
    className?: string;
    title: string;
    series: string;
}

export const ListItemDevice = memo((props: ListItemDeviceProps) => {
    const {className,
        title,
        series
    } = props;

    return (
        <div className={classNames(className,
            {},
            ["d-flex", "align-items-center"])}>
            <img src={Monitor}
                 alt=""
                 className={classNames(cls.listItemDeviceImage)}/>
            <div>
                <p>{title}</p>
                <p className={"color_grey font_size_14"}>{series}</p>
            </div>
        </div>
    );
});