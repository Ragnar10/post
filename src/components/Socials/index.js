// Styles
import Styles from './styles.module.scss';

const Socials = (props) => {
    return (
        <ul className = { `${Styles.socials} ${props.class}` }>
            <li>
                <a
                    href = { '' } target = { '_blank' }
                    rel = 'noreferrer'
                    className = { Styles.socials_twitter } />
            </li>
            <li>
                <a
                    href = { '' } target = { '_blank' }
                    rel = 'noreferrer'
                    className = { Styles.socials_facebook } />
            </li>
            <li>
                <a
                    href = { '' } target = { '_blank' }
                    rel = 'noreferrer'
                    className = { Styles.socials_insta } />
            </li>
            <li>
                <a
                    href = { '' } target = { '_blank' }
                    rel = 'noreferrer'
                    className = { Styles.socials_linkedin } />
            </li>
            <li>
                <a
                    href = { '' } target = { '_blank' }
                    rel = 'noreferrer'
                    className = { Styles.socials_chain } />
            </li>
        </ul>
    );
};

export default Socials;
