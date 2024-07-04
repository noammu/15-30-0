import { createBoard } from '@wixc3/react-board';
import { Release } from '../../../components/release/release';

export default createBoard({
    name: 'Release',
    Board: () => <Release />,
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#6bf53b',
    },
});
