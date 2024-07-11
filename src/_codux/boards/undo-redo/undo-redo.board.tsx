import { createBoard } from '@wixc3/react-board';
import { UndoRedo } from '../../../components/undo-redo/undo-redo';

export default createBoard({
    name: 'UndoRedo',
    Board: () => <UndoRedo />,
    isSnippet: true,
});
