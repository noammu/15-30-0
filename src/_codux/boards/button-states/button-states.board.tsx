import { createBoard } from '@wixc3/react-board';
import { ButtonStates } from '../../../components/button-states/button-states';

export default createBoard({
    name: 'ButtonStates',
    Board: () => {
        return (
            <>
                <button>Button</button>
                <ButtonStates disabled={true} />
                <ButtonStates disabled={false} />
                <button>Button</button>
            </>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasWidth: 181,
    },
    tags: [
        'signs',
        'abuse tags',
        'abuse',
        '!@$#',
        '#',
        '^',
        '{}',
        '{',
        '}',
        '*(',
        '_)+)_',
        '&*(',
        '3^',
        '/-**-',
        '**/-',
        '++-/+++',
    ],
});
