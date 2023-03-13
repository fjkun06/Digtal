import GlobeIcon from "src/assets/svg/GlobeIcon";
import SnowIcon from "src/assets/svg/SnowIcon";
import GraphIcon from "src/assets/svg/GraphIcon";
import PaintIcon from "src/assets/svg/PaintIcon";
import design600 from "src/assets/images/services/home/design600.jpg";
import develop600 from "src/assets/images/services/home/develop600.jpg";
import marketing600 from "src/assets/images/services/home/marketing600.jpg";
import consult600 from "src/assets/images/services/home/consult600.jpg";
import design from "src/assets/images/services/home/design.jpg";
import develop from "src/assets/images/services/home/develop.jpg";
import marketing from "src/assets/images/services/home/marketing.jpg";
import consult from "src/assets/images/services/home/consult.jpg";

export const homeServices600 = [
  {
    img: [develop600, develop],
    icon: <GlobeIcon />,
    text: "services.software",
    title: "subject.op2",
    position: "right",
    route: "services/software-development"
  },
  {
    img: [marketing600, marketing],
    icon: <GraphIcon />,
    text: "services.marketing",
    title: "subject.op3",
    position: "left",
    route: "services/digital-marketing"
  },
  {
    img: [consult600, consult],
    icon: <SnowIcon />,
    text: "services.consulting",
    title: "subject.op4",
    position: "right",
    route: "services/consulting"
  },
  {
    img: [design600, design],
    icon: <PaintIcon />,
    text: "services.design",
    title: "subject.op1",
    position: "left",
    route: "services/ui-ux-design"
  }
];
