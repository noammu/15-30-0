import classNames from 'classnames';
import styles from './text-stuff.module.scss';

export interface TextStuffProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TextStuff = ({ className }: TextStuffProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p>This is a paragraph.</p>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>TextStuff
            <div>
                <select>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Watermelon</option>
                </select>
            </div>
            <textarea />
            <li>{'sadssda'}</li>
        </div>
    );
};