import classNames from 'classnames';
import styles from './check-canvas.module.scss';
import PikachuPng from '../../assets/pikachu.png';
import EspeonPng from '../../assets/espeon.png';
import { useState } from 'react';

export interface CheckCanvasProps {
    className?: string;
    initColor?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CheckCanvas = ({ className, initColor }: CheckCanvasProps) => {
    const [color, setColor] = useState(initColor ?? 'cyan');
    const handleClick = () => {
        if (color === 'cyan') setColor('red');
        else if (color === 'red') setColor('gold');
        else setColor('cyan');
    };
    return (
        <div className={classNames(styles.root, className)} style={{'backgroundColor': color}}>
            <button onClick={handleClick}>Change background color!</button>
            <div className={styles.ownPos}>
                <p>This is a paragraph.</p>
            </div>
            <div className={styles.flxy}>
                <span>text</span>
                <div>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.imgmg}
                    />
                </div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.imgmg}
                />
            </div>
            CheckCanvas
            <div className={styles.grid}>
                <h2>Replace content</h2>
                <img src={PikachuPng} alt="" className={styles.pipipi} />
                <img src={EspeonPng} alt="" />
            </div>
        </div>
    );
};
