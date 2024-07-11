import React from 'react';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Board for testing text editing functionality, buttons and links',
    Board: () => {
        const [num, setNumber] = React.useState(0);
        return (
            <button style={{'fontSize': '80px', 'padding': '0px'}} onPointerUp={() => setNumber(num + 1)} onPointerDown={() => setNumber(num + 1)}>
                {num}Space
            </button>
        );
    },
});
