import classNames from 'classnames';
import styles from './new-branch.module.scss';

export interface NewBranchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewBranch = ({ className }: NewBranchProps) => {
    return <div className={classNames(styles.root, className)}>NewBranch</div>;
};
