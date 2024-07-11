import classNames from 'classnames';
import styles from './third-party.module.scss';
import { Button, Rating, Statistic, Dropdown } from 'semantic-ui-react';
import { useState } from 'react';
import { NoBoard } from '../no-board/no-board';
import { Nostylersss } from '../nostylersss/nostylersss';

export interface ThirdPartyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ThirdParty = ({ className }: ThirdPartyProps) => {
    const [downloads, setDownloads] = useState(0);

    const handleOnClick = () => setDownloads((prev) => prev + 55);

    return (
        <div className={classNames(styles.root, className)}>
            <Nostylersss />
            <NoBoard />
            <Button color="pink" onClick={handleOnClick}>
                Click To download
            </Button>
            <Rating icon="heart" defaultRating={5} maxRating={10} />
            <Dropdown text="File">
                <Dropdown.Menu>
                    <Dropdown.Item text="New" />
                    <Dropdown.Item text="Open..." description="ctrl + o" />
                    <Dropdown.Item text="Save as..." description="ctrl + s" />
                    <Dropdown.Item text="Rename" description="ctrl + r" />
                    <Dropdown.Item text="Make a copy" />
                    <Dropdown.Item icon="folder" text="Move to folder" />
                    <Dropdown.Item icon="trash" text="Move to trash" />
                    <Dropdown.Divider />
                    <Dropdown.Item text="Download As..." />
                    <Dropdown.Item text="Publish To Web" />
                    <Dropdown.Item text="E-mail Collaborators" />
                </Dropdown.Menu>
            </Dropdown>
            <Button basic color="olive">
                Olive
            </Button>
        </div>
    );
};
