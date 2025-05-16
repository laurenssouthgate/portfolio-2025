import x from "../../assets/svg/x-logo.svg";
import linkedin from "../../assets/svg/linkedin-logo.svg";
import github from "../../assets/svg/github-logo.svg";
import "./Socials.css";

const Socials = () => {
  return (
  <div className="socials">
    <a href="https://x.com/lsouthgate87" rel="noreferrer" target="_blank" className="socials__link">
        <img src={ x } alt="x" width={24} height={24}/>
    </a>
    <a href="https://www.linkedin.com/in/laurenssouthgate/" rel="noreferrer" target="_blank" className="socials__link">
        <img src={ linkedin } alt="linkedin" width={24} height={24}/>
    </a>
    <a href="https://github.com/laurenssouthgate" rel="noreferrer" target="_blank" className="socials__link">
        <img src={ github } alt="github" width={24} height={24}/>
    </a>
  </div>
  )
};

export default Socials;
