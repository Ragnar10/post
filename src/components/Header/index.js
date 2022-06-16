// Styles
import Styles from './styles.module.scss';
// Components

const Header = () => {
    return (
        <header className = { Styles.header }>
            <div className = { Styles.header_logo } />
        </header>
    );
};

export default Header;
