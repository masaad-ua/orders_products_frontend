import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ListItemIndicator.module.scss';
import {memo} from "react"
interface ListItemIndicatorProps {
    className?: string;
    status: number
}

export const ListItemIndicator = memo((props: ListItemIndicatorProps) => {
    const {className, status} = props;

    return (
        <div className={classNames(className ,
            {},
            ["d-flex", "justify-content-center" ,"align-items-center"] )}>
            <div className={classNames(cls.listItemIndicator, {
                [cls.free]: status === 1
            })}></div>
        </div>
    );
});