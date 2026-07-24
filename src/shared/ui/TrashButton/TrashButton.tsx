import cls from './TrashButton.module.scss';

interface TrashButtonProps {
    className?: string;
}

export const TrashButton = (props: TrashButtonProps) => {
    const {className} = props;

    return (
        <button className={cls.trashButton}></button>
    );
};