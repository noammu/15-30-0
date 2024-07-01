import { createBoard } from '@wixc3/react-board';
import { NewBranch } from '../../../components/new-branch/new-branch';

export default createBoard({
    name: 'NewBranch',
    Board: () => <NewBranch />,
    isSnippet: true,
});
