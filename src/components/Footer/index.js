// Styles
import Styles from './styles.module.scss';
// Components
import Socials from '../Socials';
import Nav from '../Nav';

const Footer = () => {
    return (
        <footer className = { Styles.footer }>
            <div className = { Styles.footer_nav_row }>
                <div className = { Styles.footer_logo } />
                <Nav class = { Styles.footer_nav } />
                <Socials class = { Styles.footer_socials } />
            </div>
            <div className = { Styles.footer_rights_row }>
                <div className = { Styles.footer_rights }>{ '© Copyright 2021, All Rights Reserved' }</div>
                <div className = { Styles.footer_policy }>
                    <span>{ 'Privacy Policy' }</span>
                    <span>{ 'Terms & Conditions' }</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
