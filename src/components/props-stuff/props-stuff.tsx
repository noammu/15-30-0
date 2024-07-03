import classNames from 'classnames';
import styles from './props-stuff.module.scss';
import type { Person } from '../../_codux/boards/props-stuff/props-stuff.board';
import { IHaveChildren } from '../i-have-children/i-have-children';

export interface PropsStuffProps {
    className?: string;
    numnum: number;
    str: string;
    objy: Person;
    nod: React.ReactNode;
}

export const PropsStuff = ({ className, numnum, str, objy, nod }: PropsStuffProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <IHaveChildren>{numnum}</IHaveChildren>
            <IHaveChildren>{str}</IHaveChildren>
            <IHaveChildren>{objy.age} {objy.name} {objy.sibling?.name}</IHaveChildren>
            <IHaveChildren>{nod}</IHaveChildren>
        </div>
    );
};
