// Styles
import Styles from './styles.module.scss';

const FourthSection = () => {
    return (
        <section className = { Styles.fourth_section }>
            <div className = { Styles.fourth_section_container }>
                <h2 className = { Styles.fourth_section_title }>
                    { 'Increase the production of bearings' }
                </h2>
                <p className = { Styles.fourth_section_info } >
                    { 'The plot “They plan to increase the production of bearings for the machine tool industry of Russia at VPZ” on the Vologda channel about the Vologda Bearing Plant in 2017 is also worth attention.' }
                </p>
                <p className = { Styles.fourth_section_info }>
                    { 'So, at 1:24 we see the HYUNDAI WIA machine (Korea)' }
                </p>
                <div className = { Styles.fourth_section_wrapper }>
                    <div className = { Styles.fourth_section_video_wrap }>
                        <div className = { Styles.video_ratio } />
                        <iframe
                            className = { Styles.video }
                            src = { 'https://www.youtube.com/embed/9AIKlJMPt38' }
                            allowFullScreen
                            title = 'youtube video' />
                    </div>
                    <div className = { Styles.fourth_section_video_link }>{ 'https://rostec.ru/media/pressrelease/4513934/?sphrase_id=4874862' }</div>
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
