import SixIconDesktop from "src/assets/svg/services/digitalmarketing/SixIconDesktop";
import SixIconMobile from "src/assets/svg/services/digitalmarketing/SixIconMobile";
import FiveIconDesktop from "src/assets/svg/services/digitalmarketing/FiveIconDesktop";
import FiveIconMobile from "src/assets/svg/services/digitalmarketing/FiveIconMobile";
import FourIconDesktop from "src/assets/svg/services/digitalmarketing/FourIconDesktop";
import FourIconMobile from "src/assets/svg/services/digitalmarketing/FourIconMobile";
import ThreeIconDesktop from "src/assets/svg/services/digitalmarketing/ThreeIconDesktop";
import ThreeIconMobile from "src/assets/svg/services/digitalmarketing/ThreeIconMobile";
import TwoIconDesktop from "src/assets/svg/services/digitalmarketing/TwoIconDesktop";
import TwoIconMobile from "src/assets/svg/services/digitalmarketing/TwoIconMobile";
import SevenIconDesktop from "src/assets/svg/services/digitalmarketing/SevenIconDesktop";
import SevenIconMobile from "src/assets/svg/services/digitalmarketing/SevenIconMobile";

const {
  default: OneIconDesktop
} = require("src/assets/svg/services/digitalmarketing/OneIconDesktop");
const {
  default: OneIconMobile
} = require("src/assets/svg/services/digitalmarketing/OneIconMobile");

export const marketingCardElements = [
  {
    heading: "headings.one",
    body: "content.one",
    numberIconDesktop: <OneIconDesktop />,
    numberIconMobile: <OneIconMobile />
  },
  {
    heading: "headings.two",
    body: "content.two",
    numberIconDesktop: <TwoIconDesktop />,
    numberIconMobile: <TwoIconMobile />
  },
  {
    heading: "headings.three",
    body: "content.three",
    numberIconDesktop: <ThreeIconDesktop />,
    numberIconMobile: <ThreeIconMobile />
  },
  {
    heading: "headings.four",
    body: "content.four",
    numberIconDesktop: <FourIconDesktop />,
    numberIconMobile: <FourIconMobile />
  },
  {
    heading: "headings.five",
    body: "content.five",
    numberIconDesktop: <FiveIconDesktop />,
    numberIconMobile: <FiveIconMobile />
  },
  {
    heading: "headings.six",
    body: "content.six",
    numberIconDesktop: <SixIconDesktop />,
    numberIconMobile: <SixIconMobile />
  },
  {
    heading: "headings.seven",
    body: "content.seven",
    numberIconDesktop: <SevenIconDesktop />,
    numberIconMobile: <SevenIconMobile />
  }
];
