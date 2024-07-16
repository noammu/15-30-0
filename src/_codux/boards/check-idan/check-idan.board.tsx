import { createBoard } from '@wixc3/react-board';
import { CheckIdan } from '../../../components/check-idan/check-idan';

export default createBoard({
    name: 'CheckIdan',
    Board: () => <CheckIdan />,
    isSnippet: true,
});
