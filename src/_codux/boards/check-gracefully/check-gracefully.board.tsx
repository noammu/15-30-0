import { createBoard } from '@wixc3/react-board';
import { CheckGracefully } from '../../../components/check-gracefully/check-gracefully';

export default createBoard({
    name: 'CheckGracefully',
    Board: () => <CheckGracefully />,
    isSnippet: true,
});
