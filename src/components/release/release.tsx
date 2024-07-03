import classNames from 'classnames';
import styles from './release.module.scss';

export interface ReleaseProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Release = ({ className }: ReleaseProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.jj}>text</span>
            <h1 className={styles.hhh}>Heading 1</h1>
            <div></div>
            Release
            <p className={styles.ewdfr}>This is a paragraph.</p>
        </div>
    );
};
