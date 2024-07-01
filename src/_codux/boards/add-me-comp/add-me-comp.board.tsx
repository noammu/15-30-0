import { createBoard } from '@wixc3/react-board';
import { AddMeComp } from '../../../components/add-me-comp/add-me-comp';

export default createBoard({
    name: 'AddMeComp',
    Board: () => <AddMeComp />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 224,
        canvasHeight: 64,
    },
    tags: ['pikachu', 'add this component', 'nothing else'],
});
