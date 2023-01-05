import GlobeIcon from "src/assets/svg/GlobeIcon";
import SnowIcon from "src/assets/svg/SnowIcon";
import GraphIcon from "src/assets/svg/GraphIcon";
import PaintIcon from "src/assets/svg/PaintIcon";
import design600 from "src/assets/images/services/home/design600.jpg";
import develop600 from "src/assets/images/services/home/develop600.jpg";
import marketing600 from "src/assets/images/services/home/marketing600.jpg";
import consult600 from "src/assets/images/services/home/consult600.jpg";

export const homeServices600 = [
  {
    img: develop600,
    icon: <GlobeIcon />,
    text: "services.software",
    title: "subject.op2",
    position: "right"
  },
  {
    img: marketing600,
    icon: <GraphIcon />,
    text: "services.marketing",
    title: "subject.op3",
    position: "left"
  },
  {
    img: consult600,
    icon: <SnowIcon />,
    text: "services.consulting",
    title: "subject.op4",
    position: "right"
  },
  {
    img: design600,
    icon: <PaintIcon />,
    text: "services.design",
    title: "subject.op1",
    position: "left"
  }
];
