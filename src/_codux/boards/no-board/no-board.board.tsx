import { createBoard } from '@wixc3/react-board';
import { NoBoard } from '../../../components/no-board/no-board';

export default createBoard({
    name: 'NoBoard',
    Board: () => <NoBoard />,
    isSnippet: true,
});
