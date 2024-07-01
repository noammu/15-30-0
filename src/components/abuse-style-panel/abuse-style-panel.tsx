import classNames from 'classnames';
import styles from './abuse-style-panel.module.scss';

export interface AbuseStylePanelProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AbuseStylePanel = ({ className }: AbuseStylePanelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.background} />
            <span className={styles.muhahaha}>Oh no, he is abusing my styleessss :(((( </span>
            <br className={styles.brrrrr} />
            <input className={styles.ininputput} />
            <div className={styles.flexy}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.img}
                />
                <div
                    className={classNames(
                        styles.a,
                        styles.sdf,
                        styles.bvcvb,
                        styles.yhuy,
                        styles.bnm,
                        styles.xxwsh,
                        styles.hmm,
                        styles.jkiu,
                        styles.rrr,
                        styles.wfsd,
                        styles.xxc,
                        styles.nklyuyd,
                        styles.swefvg,
                        styles.ukyuj,
                        styles.g5,
                        styles.hy7,
                        styles.ddwf32j,
                        styles.hgjmhi,
                        styles.vbyy,
                        styles.hbgdfh846,
                    )}
                >
                    <pre>I am pre, what is happening?!</pre>
                    <div>
                        <p>This is a nuts.</p>
                    </div>
                </div>
            </div>
            <div className={styles.anisan}>
                aniiiiiiiiiiiiiiiiiiiiiiiiimatttttionnnnnnnnnnnnnnnnnnnnn
            </div>
            <span>text</span>
        </div>
    );
};
