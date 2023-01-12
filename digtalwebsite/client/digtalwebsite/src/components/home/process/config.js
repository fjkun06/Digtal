import full from "src/assets/svg/home/full.svg";
import fullBlue from "src/assets/svg/home/fullblue.svg";
import half from "src/assets/svg/home/half.svg";
import halfBlue from "src/assets/svg/home/halfblue.svg";
import phaseOne from "src/assets/svg/home/14.svg";
import phaseOneBlue from "src/assets/svg/home/14blue.svg";
import phaseThree from "src/assets/svg/home/34.svg";
import phaseThreeBlue from "src/assets/svg/home/34blue.svg";
import edit from "src/assets/svg/home/editfile.svg";
import coffee from "src/assets/svg/home/Coffee.svg";
import laptop from "src/assets/svg/home/laptop.svg";

export const homeProcess = [
  {
    moon: phaseOne,
    moonBlue: phaseOneBlue,
    separator: coffee,
    position: "right",
    text: "process.one"
  },
  {
    moon: half,
    moonBlue: halfBlue,
    separator: edit,
    position: "left",
    text: "process.two"
  },
  {
    moon: phaseThree,
    moonBlue: phaseThreeBlue,
    separator: laptop,
    position: "right",
    text: "process.three"
  },
  {
    moon: full,
    moonBlue: fullBlue,
    separator: null,
    position: "left",
    text: "process.four"
  }
];
