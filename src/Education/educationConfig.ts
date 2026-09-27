import kitLogo from "../../assets/university-logos/kit-logo.svg";
import sichuanUniversityLogo from "../../assets/university-logos/sichuan-university-logo.png";
import utrechtUniversityLogo from "../../assets/university-logos/utrecht-university-logo.png";

const educationConfig = {
  items: [
    {
      period: "Dec. 2020 - Jan. 2025",
      degree: "Ph.D. in Computer Science",
      institution: "Utrecht University",
      location: "Utrecht, the Netherlands",
      logo: utrechtUniversityLogo,
    },
    {
      period: "Sep. 2015 - Dec. 2018",
      degree: "M.Sc. in Mechanical Engineering",
      institution: "Karlsruhe Institute of Technology (KIT)",
      location: "Karlsruhe, Germany",
      logo: kitLogo,
    },
    {
      period: "Sep. 2011 - Jun. 2015",
      degree: "B.Eng. in Mechanical Engineering",
      institution: "Sichuan University",
      location: "Chengdu, China",
      logo: sichuanUniversityLogo,
    },
  ],
};

export default educationConfig;