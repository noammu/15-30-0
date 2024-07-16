import classNames from 'classnames';
import styles from './check-gracefully.module.scss';

export interface CheckGracefullyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CheckGracefully = ({ className }: CheckGracefullyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h5 className={styles.sd}>Heading 5</h5>
            <div>
                <div className={styles.div1}>CheckGracefully</div>
            </div>
            <div>
                <p>This is a paragraph.</p>
            </div>
        </div>
    );
};
