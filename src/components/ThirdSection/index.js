// Styles
import Styles from './styles.module.scss';
// Images
import table1 from '../../theme/assets/images/table1.jpeg';

const ThirdSection = () => {
    return (
        <section className = { Styles.third_section }>
            <h2 className = { Styles.third_section_title }>
                { 'Figures by "Sasovsky Stankostroel"' }
            </h2>
            <p className = { Styles.third_section_info }>
                { 'In turn, the publication "Sasovsky Stankostroel", October 2020, published an article by Diana Kaledina (CEO of the Baltic Industrial Company) "The situation in the machine tool industry".' }
            </p>
            <div className = { Styles.third_section_wrapper }>
                <img
                    src = { table1 } alt = 'table image'
                    className = { Styles.third_section_img } />
                <div className = { Styles.third_section_descr }>
                    <h3>{ 'What do we see? ' }</h3>
                    <p>
                        { 'They give figures for the consumption of metalworking equipment (p. 3), and the source is most likely the data of the Ministry of Industry and Trade, since. his details are generally mentioned on this page.' }
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
