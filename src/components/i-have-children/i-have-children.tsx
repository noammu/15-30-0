import classNames from 'classnames';
import styles from './i-have-children.module.scss';

export interface IHaveChildrenProps {
    className?: string;
    children?: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const IHaveChildren = ({ className, children }: IHaveChildrenProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
