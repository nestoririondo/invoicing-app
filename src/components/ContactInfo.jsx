const ContactInfo = ({settings}) => {
    return ( 
        <div className="contact-info">
            <div className="contact-phone">{settings.contact.phone}</div>
            <div className="contact-email">{settings.contact.email}</div>
            <div className="contact-website">{settings.contact.website}</div>
        </div>
     );
}
 
export default ContactInfo;