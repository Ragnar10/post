// Styles
import Styles from './styles.module.scss';
// Components
import Socials from '../Socials';

const SeventhSection = () => {
    return (
        <section className = { Styles.seventh_section }>
            <h2 className = { Styles.seventh_section_title }>
                { 'Needs in specialists' }
            </h2>
            <p className = { Styles.seventh_section_info }>
                { 'We could not get past the vacancy of a foreign CNC operator at the Novator Design Bureau, which produces Caliber cruise missiles on the job search site. We could not get past the vacancy of a foreign CNC operator at the Novator Design Bureau, which produces Caliber cruise missiles on the job search site. We could not get past the vacancy of a foreign CNC operator at the Novator Design Bureau, which produces Caliber cruise missiles on the job search site. ' }
            </p>
            <button className = { Styles.seventh_section_download_btn }>
                <span />
                <span>{ 'Download full PDF version' }</span>
            </button>
            <div className = { Styles.seven_section_share }>
                <h3 className = { Styles.share_title }>{ 'Do you have information about global logistics of the Russian army and its weaknesses? Share with us' }</h3>
                <Socials class = { Styles.share_socials } />
            </div>
        </section>
    );
};

export default SeventhSection;
