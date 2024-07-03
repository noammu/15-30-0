import classNames from 'classnames';
import styles from './griddy.module.scss';
import EspeonPng from '../../assets/espeon.png';
import PikachuPng from '../../assets/pikachu.png';
import BallPng from '../../assets/ball.png';
import BasketballPng from '../../assets/basketball.png';

export interface GriddyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Griddy = ({ className }: GriddyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.grid}>
                <h2>Replace content</h2>
                <img src={EspeonPng} alt="" className={styles.imgmg} />
                <img src={PikachuPng} alt="" className={styles.imgmg} />
                <img src={BallPng} alt="" className={styles.imgmg} />
                <img
                    src={BasketballPng}
                    alt=""
                    className={classNames(styles.imgmg, styles.another)}
                />
            </div>
        </div>
    );
};
