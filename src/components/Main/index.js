// Styles
import Styles from './styles.module.scss';
// Components
import Banner from '../Banner';
import Footer from '../Footer';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import FourthSection from '../FourthSection';
import FifthSection from '../FifthSection';
import SixthSection from '../SixthSection';
import SeventhSection from '../SeventhSection';
import EighthSection from '../EighthSection';


const Main = () => {
    return (
        <div className = { Styles.container }>
            <Banner />
            <main className = { Styles.main }>
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <SixthSection />
                <SeventhSection />
                <EighthSection />
            </main>
            <Footer />
        </div>
    );
};

export default Main;
