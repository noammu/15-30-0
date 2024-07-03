import { createBoard } from '@wixc3/react-board';
import { Griddy } from '../../../components/griddy/griddy';

export default createBoard({
    name: 'Griddy',
    Board: () => <Griddy />,
    isSnippet: true,
});
