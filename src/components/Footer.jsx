import githubMark from '../github-mark.svg';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="about">
        <p>
          This invoicing app was built with React and React Router. It uses
          local storage to save your data. It is not connected to a database and
          does not send any data to a server.
        </p>
      </div>
      <div className="contact">
        <p>
          Developed by{" "}
          <a
            href="
            http://www.nestoririondo.com"
            target="_blank"
            rel="noreferrer"
          >
            Néstor Iriondo
          </a>
        </p>
        <a href="https://github.com/nestoririondo/invoicing-app">
          <img src={githubMark} />
        </a>
      </div>
    </>
  );
};

export default Footer;
