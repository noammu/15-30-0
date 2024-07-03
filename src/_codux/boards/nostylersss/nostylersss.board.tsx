import { createBoard } from '@wixc3/react-board';
import { Nostylersss } from '../../../components/nostylersss/nostylersss';

export default createBoard({
    name: 'Nostylersss',
    Board: () => <Nostylersss />,
    isSnippet: true,
});
