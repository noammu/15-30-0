import { createBoard } from '@wixc3/react-board';
import { DeletedFileIssue } from '../../../components/deleted-file-issue/deleted-file-issue';

export default createBoard({
    name: 'DeletedFileIssue',
    Board: () => <DeletedFileIssue />,
    isSnippet: true,
});
