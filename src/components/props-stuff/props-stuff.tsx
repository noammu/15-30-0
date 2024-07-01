import classNames from 'classnames';
import styles from './props-stuff.module.scss';
import type { Person } from '../../_codux/boards/props-stuff/props-stuff.board';



export interface PropsStuffProps {
    className?: string;
    numnum: number;
    str: string;
    objy: Person;
}

export const PropsStuff = ({ className, numnum, str, objy }: PropsStuffProps) => {
    return <div className={classNames(styles.root, className)}>PropsStuff</div>;
};
