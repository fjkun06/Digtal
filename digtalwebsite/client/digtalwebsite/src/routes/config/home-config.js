import logo from "../../assets/images/responsive.jpg";
import logo2 from "../../assets/images/home_header.jpg";
import logo3 from "../../assets/images/phones.jpg";
import AutoGraphTwoToneIcon from '@mui/icons-material/AutoGraphTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';


export const homeCards = [
  {
    text: "text.web",
    logo: logo,
    heading: "subject.op2",
    path: "services/web-development",
    icon: <LanguageTwoToneIcon sx={{ fontSize: 25,}}/>
  },
  {
    text: "text.marketing",
    logo: logo2,
    heading: "subject.op3",
    path: "services/digital-marketing",
    icon: <AutoGraphTwoToneIcon sx={{ fontSize: 25,}}/>
    
  },
  {
    text: "text.consulting", 
    logo: logo3,
    heading: "subject.op4",
    path: "services/consulting",
    icon: <HubTwoToneIcon sx={{ fontSize: 25,}}/>

  },
];
