import "./Contact.css";

const Contact = () => {
  const URL = "http://localhost:3000";

  return (
    <header id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <p>Get in contact with me!</p>
        </div>
        <div className="contact__main">
          <form
            className="contact__form"
            action="https://formsubmit.co/dsoesito@outlook.com"
            method="POST"
          >
            <input type="hidden" name="_next" value={`${URL}/thankyou`}></input>
            <div className="contact__category">
              <p className="contact__title">
                Name <span className="contact__asterix">*</span>
              </p>
              <input type="text" name="name" required />
            </div>
            <div className="contact__category">
              <p className="contact__title">Phone</p>
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="XXX-XXX-XXXX"
              />
            </div>
            <div className="contact__category">
              <p className="contact__title">
                Email <span className="contact__asterix">*</span>
              </p>
              <input type="email" name="email" required />
            </div>
            <div className="contact__category">
              <p className="contact__title">Subject </p>
              <input type="text" name="subject" />
            </div>
            <div className="contact__message">
              <p className="contact__title">
                Message<span className="contact__asterix"> *</span>
              </p>
              <textarea name="message" required />
            </div>
            <button className="contact__button" type="submit">
              Send
            </button>
          </form>
          <p className="contact__address">
            <span className="contact__direct">Direct Contact</span>
            <br />
            <span>Daniel Soesito</span>
            <br />
            <span>dsoesito@outlook.com</span>
            <br />
            <span>+1 647-459-5330</span>
            <br />
            <span>
              <a
                className="contact__link"
                href="https://github.com/Dsoesito"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
            </span>
            <br />
            <span>
              <a
                className="contact__link"
                href="https://www.linkedin.com/in/daniel-soesito/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Contact;
