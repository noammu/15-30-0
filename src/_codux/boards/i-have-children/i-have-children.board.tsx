import { createBoard } from '@wixc3/react-board';
import { IHaveChildren } from '../../../components/i-have-children/i-have-children';

export default createBoard({
    name: 'IHaveChildren',
    Board: () => <IHaveChildren>{'I am a childddddddd'}</IHaveChildren>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 22,
    },
});
