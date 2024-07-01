import styles from './App.module.scss';
import { AddMeComp } from './components/add-me-comp/add-me-comp';
import { Header } from './components/header/header';
import { IHaveChildren } from './components/i-have-children/i-have-children';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <AddMeComp />
            <IHaveChildren>{'This is the original chubby Pikachu <3 :}'}</IHaveChildren>
        </div>
    );
}

export default App;
