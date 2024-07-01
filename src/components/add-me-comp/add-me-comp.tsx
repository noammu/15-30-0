import classNames from 'classnames';
import styles from './add-me-comp.module.scss';
import PikachuPng from '../../assets/pikachu.png';
import { Yael, type Person } from '../../_codux/boards/props-stuff/props-stuff.board';

export interface AddMeCompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AddMeComp = ({ className }: AddMeCompProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={PikachuPng} alt="" />
        </div>
    );
};

export const Shimi: Person = {
    name: 'Shimi',
    age: 28,
    sibling: Yael,
};
