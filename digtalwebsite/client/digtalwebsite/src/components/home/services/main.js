import ServicesLayout from "./layout";
import Title from "./title";
import {
  ConsultingSection,
  DesignSection,
  MarketingSection,
  WebSection
} from "./makeservice";

import section600 from "src/assets/images/services/home/section600.jpg";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GlobeIcon from "src/assets/svg/GlobeIcon";
import SnowIcon from "src/assets/svg/SnowIcon";
import GraphIcon from "src/assets/svg/GraphIcon";
import PaintIcon from "src/assets/svg/PaintIcon";
export default function ServiceSection() {
  return (
    // <ServicesLayout>
    //     <MarketingSection />
    //     <ConsultingSection />
    //     <DesignSection />
    // </ServicesLayout>
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
            {/* <span className="icon">
                <DesignServicesIcon/>
            </span> */}

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
