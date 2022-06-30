// Styles
import Styles from './styles.module.scss';
// Images
import darel_avatar from '../../theme/assets/images/darel_avatar.png';
import jane_avatar from '../../theme/assets/images/jane_avatar.png';
import henry_avatar from '../../theme/assets/images/henry_avatar.png';
import albert_avatar from '../../theme/assets/images/albert_avatar.png';
// Components
import ContactUs from '../ContactUs';

const list = [
    { id: 1, name: 'Darrell Steward', avatar: darel_avatar },
    { id: 2, name: 'Jane Cooper', avatar: jane_avatar },
    { id: 3, name: 'Courtney Henry', avatar: henry_avatar },
    { id: 4, name: 'Albert Flores', avatar: albert_avatar },
    { id: 5, name: 'Darrell Steward', avatar: darel_avatar },
    { id: 6, name: 'Jane Cooper', avatar: jane_avatar },
    { id: 7, name: 'Courtney Henry', avatar: henry_avatar },
    { id: 8, name: 'Albert Flores', avatar: albert_avatar },
];

const HeaderSection = () => {
    return (
        <div id = { 'research' } className = { Styles.eighth_section_wrapper }>
            <h2 className = { Styles.eighth_section_title }>{ 'We are a group of researchers' }</h2>
            <p className = { Styles.eighth_section_info }>
                { 'The topic of our research is the global logistics of the Russian army and its weaknesses. The topic of our research is the global logistics of the Russian army and its weaknesses.The topic of our research is the global logistics of the Russian army and its weaknesses.' }
            </p>
            <div className = { Styles.eighth_section_counters }>
                <div className = { Styles.counters_wrapper }>
                    <div className = { Styles.counters_number }>{ '124' }</div>
                    <div className = { Styles.counters_descr }>
                        <span>{ 'Conducted' }</span>
                        <span>{ 'researches' }</span>
                    </div>
                </div>
                <div className = { Styles.counters_wrapper }>
                    <div className = { Styles.counters_number }>{ '24' }</div>
                    <div className = { Styles.counters_descr }>
                        <span>{ 'Newspaper' }</span>
                        <span>{ 'articles' }</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ListSection = () => {
    return (
        <div className = { Styles.eighth_section_list }>
            {
                list.map((item) => {
                    return (
                        <figure key = { item.id } className = { Styles.list_item }>
                            <img src = { item.avatar } alt = 'avatar image' />
                        </figure>
                    );
                })
            }
        </div>
    );
};

const QuoteSection = () => {
    return (
        <figure className = { Styles.quote_section }>
            <blockquote>
                <p>
                    { '“The Ural enterprise "Unimatic" together with the corporation "Emco Group" (EMCO Group, Austria-Italy-Germany) opened in Yekaterinburg the first stage of a plant for the production of machine tools with numerical control (CNC)”' }
                </p>
            </blockquote>
            <figcaption>
                <span>{ '- Darrell Steward' }</span>
                <span>{ 'Founder' }</span>
            </figcaption>
        </figure>
    );
};


const EighthSection = () => {
    return (
        <section className = { Styles.eighth_section }>
            <div>
                <HeaderSection />
                <ListSection />
            </div>
            <QuoteSection />
            <ContactUs />
        </section>
    );
};

export default EighthSection;
