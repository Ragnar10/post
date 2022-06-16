// Styles
import Styles from './styles.module.scss';
// Components
import Banner from '../Banner';
import Footer from '../Footer';


const Main = () => {
    return (
        <div className = { Styles.container }>
            <Banner />
            <main className = { Styles.main }></main>
            <Footer />
        </div>
    );
};

export default Main;
