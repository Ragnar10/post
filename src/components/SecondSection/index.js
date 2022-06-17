// Styles
import Styles from './styles.module.scss';
// Images
import table from '../../theme/assets/images/table.jpeg';

const SecondSection = () => {
    return (
        <section className = { Styles.second_section }>
            <h2 className = { Styles.second_section_title }>
                { 'The consumption of machine tools' }
            </h2>
            <div className = { Styles.second_section_wrapper }>
                <figure className = { Styles.second_section_quote }>
                    <blockquote>
                        <p>
                            { '”The consumption of machine tools in different countries of the world is well illustrated by the study "Gardner Research. The World Machine - Tool Output & Consumption Survey" of different years of publication”' }
                        </p>
                    </blockquote>
                    <figcaption>
                        { '- According to a Gardner Research report The World Machine-Tool Output & Consumption Survey 2015' }
                    </figcaption>
                </figure>
                <figure className = { Styles.second_section_img }>
                    <img src = { table } alt = 'table image' />
                    <figcaption>{ 'Table 1 - Consumers of machine tool products in the world [Source - GardnerResearch], million $.' }</figcaption>
                </figure>
            </div>
        </section>
    );
};

export default SecondSection;
