import { createBoard } from '@wixc3/react-board';
import { ButtonStates } from '../../../components/button-states/button-states';

export default createBoard({
    name: 'ButtonStates',
    Board: () => {
        return (
            <>
                <ButtonStates disabled={true} />
                <ButtonStates disabled={false} />
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
