import { createBoard } from '@wixc3/react-board';
import { CheckCanvas } from '../../../components/check-canvas/check-canvas';

export default createBoard({
    name: 'CheckCanvas',
    Board: () => <CheckCanvas initColor='pink' />,
    isSnippet: true,
    environmentProps: {
    },
});
