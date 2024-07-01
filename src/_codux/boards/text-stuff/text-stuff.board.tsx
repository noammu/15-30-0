import { createBoard } from '@wixc3/react-board';
import { TextStuff } from '../../../components/text-stuff/text-stuff';

export default createBoard({
    name: 'TextStuff',
    Board: () => <TextStuff />,
    isSnippet: true,
    tags: ['text', 'html texts'],
});
