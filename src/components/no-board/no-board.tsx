import classNames from 'classnames';
import styles from './no-board.module.scss';
import { createElement } from 'react';
import React from 'react';

export interface NoBoardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NoBoard = ({ className }: NoBoardProps) => {
    const str = 'React.Fragment';
    return (
        <div>
            <>hello</>
            {createElement(React.Fragment, null, 'Hello')}
        </div>
    );
};

/**
 *
 *
 */
