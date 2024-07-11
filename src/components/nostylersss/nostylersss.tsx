import classNames from 'classnames';
import classes from './nostylersss.module.scss';
import { Image } from 'semantic-ui-react';

export interface NostylersssProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Nostylersss = ({ className }: NostylersssProps) => {
    return (
        <div className={classNames(className)}>
            <div className={classes.grid}>
                <Image src="https://pbs.twimg.com/media/Dogo7kbWsAAsZos.jpg" size="small" />
                <h2>Replace content</h2>
            </div>
        </div>
    );
};
