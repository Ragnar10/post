// Styles
import Styles from './styles.module.scss';

const Nav = (props) => {
    return (
        <nav className = { `${Styles.nav} ${props.class}` }>
            <ul>
                <li>
                    <a href = { '#' }>{ 'About' }</a>
                </li>
                <li>
                    <a href = { '#research' }>{ 'Research' }</a>
                </li>
                <li>
                    <a href = { '#' }>{ 'Investigation' }</a>
                </li>
                <li>
                    <a href = { '#contact_us' }>{ 'Contact us' }</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
