// Styles
import Styles from './styles.module.scss';
// Components
import Socials from '../Socials';

const InitialSection = () => {
    return (
        <section className = { Styles.initial_section }>
            <h1 className = { Styles.initial_section_title }>
                { 'Dependence of the defense industry complex of the Russian Federation on imports of means of industrial production' }
            </h1>
            <p className = { Styles.initial_section_info } >
                { 'Let\'s turn to the materials illustrating our thesis about the dependence of the defense industry of the Russian Federation on high-tech imports of industrial production.' }
            </p>
            <div className = { Styles.initial_section_wrapper }>
                <div className = { Styles.initial_section_author }>
                    <div className = { Styles.author_avatar } />
                    <div className = { Styles.author_info }>
                        <span>{ 'By Stanley Reed' }</span>
                        <span>{ 'May 11 · 7 min read' }</span>
                    </div>
                </div>
                <Socials class = { Styles.initial_section_socials } />
            </div>
        </section>
    );
};

export default InitialSection;
