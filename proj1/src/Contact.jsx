function Contact() {
  return (
    <div className="section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button className="primary-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;