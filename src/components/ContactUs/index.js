// Styles
import Styles from './styles.module.scss';

const ContactUs = () => {
    return (
        <section id = { 'contact_us' } className = { Styles.contact_us }>
            <h2 className = { Styles.contact_us_title }>
                { 'Contact us' }
            </h2>
            <p className = { Styles.contact_us_info }>
                { 'Please use the form below to inquire about our services, make a media or other inquiries' }
            </p>
            <form className = { Styles.contact_us_form }>
                <label
                    htmlFor = { 'inquiry' }
                    className = { Styles.form_label }>{ 'Inquiry type' }</label>
                <select
                    name = { 'inquiry' }
                    id = { 'inquiry' }
                    required
                    className = { Styles.form_field }>
                    <option hidden>{ 'Select inquiry type ' }</option>
                    <option>{ 'Research' }</option>
                    <option>{ 'Consulting' }</option>
                    <option>{ 'Presentation' }</option>
                    <option>{ 'Media' }</option>
                    <option>{ 'Other' }</option>
                </select>
                <label
                    htmlFor = { 'name' }
                    className = { Styles.form_label }>{ 'Name' }</label>
                <input
                    name = { 'name' }
                    id = { 'name' }
                    placeholder = { 'Enter your name' }
                    required
                    className = { Styles.form_field } />
                <label
                    htmlFor = { 'email' }
                    className = { Styles.form_label }>{ 'Email address' }</label>
                <input
                    name = { 'email' }
                    id = { 'email' }
                    placeholder = { 'Enter your email' }
                    required
                    className = { Styles.form_field } />
                <label
                    htmlFor = { 'message' }
                    className = { Styles.form_label }>{ 'Message' }</label>
                <textarea
                    name = { 'message' }
                    id = { 'message' }
                    placeholder = { 'Write down your message' }
                    required
                    className = { Styles.form_field } />
                <button
                    type = 'submit'
                    className = { Styles.form_send_btn }>{ 'Send message' }</button>
            </form>
        </section>
    );
};

export default ContactUs;
