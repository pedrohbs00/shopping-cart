import { StyledFooter, GitHub } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="ProjectCard">
        <div>
          <a
            className="ProjectLink"
            href="https://github.com/pedrohbs00/shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <GitHub />
            <h3>GitHub link of the project</h3>
          </a>
        </div>
        <p>2022 Pedro HBS.</p>
      </div>
      <div className="LinksCard">
        <div className="LinksTitle">
          <h3>My Links</h3>
        </div>
        <div className="Links">
          <a
            href="https://www.linkedin.com/in/pedrohbs"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
          </a>
          <a
            href="https://github.com/pedrohbs00"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
          </a>
          <a
            href="https://instagram.com/pedrohbs00"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
