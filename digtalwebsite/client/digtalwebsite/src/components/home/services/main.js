import Title from "./title";

import section600 from "src/assets/images/services/home/consult600.jpg";
import GlobeIcon from "src/assets/svg/GlobeIcon";
import SnowIcon from "src/assets/svg/SnowIcon";
import GraphIcon from "src/assets/svg/GraphIcon";
import PaintIcon from "src/assets/svg/PaintIcon";
import { useTranslation } from "react-i18next";
export default function ServiceSection() {
  const { t } = useTranslation(["home","form"]);

  return (
    <div className="home__service">
      <Title text="DIVE INTO A MULTITUDE OF SOLUTIONS" />

      <div className="home__service--card">
        <div className="home__service--card-image">
          <img src={section600} alt="xxx" />
        </div>
        <div className="home__service--card-subcard">
          <div className="icon">
            {/* <span className="icon">
                <DesignServicesIcon/>
            </span> */}

            <GlobeIcon />
          </div>
          <div className="mini-card">
            <div className="title">Software Development</div>
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quod qui, veniam nostrum optio repellendus illum soluta iusto
              possimus eius, sit ea commodi maiores cupiditate quaerat.
            </div>
          </div>
        </div>
      </div>
      <div className="home__service--card">
        <div className="home__service--card-image">
          <img src={section600} alt="xxx" />
        </div>
        <div className="home__service--card-subcard">
          <div className="icon">
            {/* <span className="icon">
                <DesignServicesIcon/>
            </span> */}

            <SnowIcon />
          </div>
          <div className="mini-card">
            <div className="title">Software Development</div>
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quod qui, veniam nostrum optio repellendus illum soluta iusto
              possimus eius, sit ea commodi maiores cupiditate quaerat.
            </div>
          </div>
        </div>
      </div>
      <div className="home__service--card">
        <div className="home__service--card-image">
          <img src={section600} alt="xxx" />
        </div>
        <div className="home__service--card-subcard">
          <div className="icon">
            {/* <span className="icon">
                <DesignServicesIcon/>
            </span> */}

            <GraphIcon />
          </div>
          <div className="mini-card">
            <div className="title">Software Development</div>
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quod qui, veniam nostrum optio repellendus illum soluta iusto
              possimus eius, sit ea commodi maiores cupiditate quaerat.
            </div>
          </div>
        </div>
      </div>
      <div className="home__service--card">
        <div className="home__service--card-image">
          <img src={section600} alt="xxx" />
        </div>
        <div className="home__service--card-subcard">
          <div className="icon">
            <PaintIcon />
          </div>
          <div className="mini-card">
            <div className="title">Software Development</div>
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quod qui, veniam nostrum optio repellendus illum soluta iusto
              possimus eius, sit ea commodi maiores cupiditate quaerat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
