import { createBoard } from '@wixc3/react-board';
import { PropsStuff } from '../../../components/props-stuff/props-stuff';
import { Shimi } from '../../../components/add-me-comp/add-me-comp';

export interface Person {
    name: string;
    age: number;
    sibling?: Person;
}

export const Yael: Person = {
    name: 'Yael',
    age: 26,
    sibling: {
        name: 'Shimi',
        age: 28,
    },
};

const nod = <h4>nodddd</h4>;

const mystr = 'blibla';

const mynum = 878.454;

export default createBoard({
    name: 'PropsStuff',
    Board: () => <PropsStuff numnum={mynum} str={mystr} objy={Shimi} nod={nod} />,
    isSnippet: true,
    tags: ['props', 'abuse', 'abuse props'],
});
