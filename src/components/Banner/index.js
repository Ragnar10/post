// Styles
import Styles from './styles.module.scss';
// Components
import Header from '../Header';
import InitialSection from '../InitialSection';

const Banner = () => {
    return (
        <div className = { Styles.banner }>
            <Header />
            <InitialSection />
            <div className = { Styles.banner_bg } />
        </div>
    );
};

export default Banner;
