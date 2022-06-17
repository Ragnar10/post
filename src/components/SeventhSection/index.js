// Styles
import Styles from './styles.module.scss';
// Images
import darel_avatar from '../../theme/assets/images/darel_avatar.png';
import jane_avatar from '../../theme/assets/images/jane_avatar.png';
import henry_avatar from '../../theme/assets/images/henry_avatar.png';
import albert_avatar from '../../theme/assets/images/albert_avatar.png';
// Components
import Socials from '../Socials';

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
        <div className = { Styles.seventh_section_wrapper }>
            <h2 className = { Styles.seventh_section_title }>{ 'We are a group of researchers' }</h2>
            <p className = { Styles.seventh_section_info }>
                { 'The topic of our research is the global logistics of the Russian army and its weaknesses. The topic of our research is the global logistics of the Russian army and its weaknesses.The topic of our research is the global logistics of the Russian army and its weaknesses.' }
            </p>
            <div className = { Styles.seventh_section_counters }>
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
                <div className = { Styles.counters_wrapper }>
                    <div className = { Styles.counters_number }>{ '14' }</div>
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
        <div className = { Styles.seventh_section_list }>
            {
                list.map((item) => {
                    return (
                        <figure key = { item.id } className = { Styles.list_item }>
                            <img src = { item.avatar } alt = 'avatar image' />
                            <figcaption>{ item.name }</figcaption>
                        </figure>
                    );
                })
            }
        </div>
    );
};

const FooterSection = () => {
    return (
        <div className = { Styles.seventh_section_share }>
            <h3 className = { Styles.share_title }>{ 'Do you have information about global logistics of the Russian army and its weaknesses? Share with us' }</h3>
            <Socials class = { Styles.share_socials } />
        </div>
    );
};

const SeventhSection = () => {
    return (
        <section className = { Styles.seventh_section }>
            <HeaderSection />
            <ListSection />
            <FooterSection />
        </section>
    );
};

export default SeventhSection;
