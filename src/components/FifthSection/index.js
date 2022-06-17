// Styles
import Styles from './styles.module.scss';
// Images
import unimatic from '../../theme/assets/images/unimatic.jpeg';

const FifthSection = () => {
    return (
        <section className = { Styles.fifth_section }>
            <h2 className = { Styles.fifth_section_title }>
                { 'First stage for the production' }
            </h2>
            <div className = { Styles.fifth_section_wrapper }>
                <figure className = { Styles.fifth_section_quote }>
                    <blockquote>
                        <p>
                            { '“The Ural enterprise "Unimatic" together with the corporation "Emco Group" (EMCO Group, Austria-Italy-Germany) opened in Yekaterinburg the first stage of a plant for the production of machine tools with numerical control (CNC)”' }
                        </p>
                    </blockquote>
                    <figcaption>
                        { '- http://tass.ru/ural-news/2152468В ' }
                    </figcaption>
                </figure>
                <figure className = { Styles.fifth_section_img }>
                    <p>{ 'In turn, Rostec announced already in July 2014 that the agreement provides for the organization of a joint production of machine tools in Russia with a production volume of 1,000 units by 2017.' }</p>
                    <img src = { unimatic } alt = 'screen image' />
                    <figcaption>{ 'https://rostec.ru/media/pressrelease/4513934/?sphrase_id=4874862' }</figcaption>
                </figure>
            </div>
        </section>
    );
};

export default FifthSection;
