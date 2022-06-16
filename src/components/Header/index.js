// Styles
import Styles from './styles.module.scss';
// Components
import Nav from '../Nav';

const Header = () => {
    return (
        <header className = { Styles.header }>
            <div className = { Styles.header_logo } />
            <Nav class = { Styles.header_nav } />
        </header>
    );
};

export default Header;
