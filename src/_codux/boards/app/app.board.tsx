import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1030,
        windowHeight: 768,
    },
    tags: ['pikachu', 'app', 'Pikachu', 'PIKACHU'],
});
