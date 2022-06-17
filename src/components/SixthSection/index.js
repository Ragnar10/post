// Styles
import Styles from './styles.module.scss';
// Images
import operator from '../../theme/assets/images/operator.jpeg';

const SixthSection = () => {
    return (
        <section className = { Styles.sixth_section }>
            <h2 className = { Styles.sixth_section_title }>
                { 'Needs in specialists' }
            </h2>
            <p className = { Styles.sixth_section_info }>
                { 'We could not get past the vacancy of a foreign CNC operator at the Novator Design Bureau, which produces Caliber cruise missiles on the job search site.' }
            </p>
            <div className = { Styles.sixth_section_wrapper }>
                <figure className = { Styles.sixth_section_img }>
                    <img
                        src = { operator } alt = 'screen image' />
                    <figcaption>{ 'https://rostec.ru/media/pressrelease/4513934/?sphrase_id=4874862' }</figcaption>
                </figure>
                <div className = { Styles.sixth_section_descr }>
                    <h3>{ 'What do we see? ' }</h3>
                    <p>
                        { 'In May 2022, one of the key plants of the Russian defense industry complex, the manufacturer of the pride of the Strategic Missile Forces - the Kalibr cruise missile, needs a specialist in working with machine tools using German CNC.' }
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SixthSection;
