import { createBoard } from '@wixc3/react-board';
import { AbuseStylePanel } from '../../../components/abuse-style-panel/abuse-style-panel';

export default createBoard({
    name: 'AbuseStylePanel',
    Board: () => <AbuseStylePanel />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1000,
    },
    tags: ['abuse', 'abuse style', 'styling', 'media queries', 'crazy'],
});
