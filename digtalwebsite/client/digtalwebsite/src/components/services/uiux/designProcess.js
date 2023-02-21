import OneIconMobile from "src/assets/svg/services/digitalmarketing/OneIconMobile";
import React from "react";
import { nano } from "src/App";
import UnionIconMobile from "src/assets/svg/services/digitalmarketing/UnionIconMobile";
import OneIconDesktop from "src/assets/svg/services/digitalmarketing/OneIconDesktop";
import UnionIconDesktop from "src/assets/svg/services/digitalmarketing/UnionIconDesktop";
import MarketingCard from "src/components/reusables/MarketingCard";

//SVG Components
const StarIcon = React.lazy(() =>
  import("src/assets/svg/services/uiux/StarIcon")
);
const HomeHeading = React.lazy(() =>
  import("src/components/reusables/HomeHeading")
);
const HexagonIcon = React.lazy(() =>
  import("src/assets/svg/services/uiux/HexagonIcon")
);
const TriangleIcon = React.lazy(() =>
  import("src/assets/svg/services/uiux/TriangleIcon")
);
const CircleIcon = React.lazy(() =>
  import("src/assets/svg/services/uiux/CircleIcon")
);
const SquareIcon = React.lazy(() =>
  import("src/assets/svg/services/uiux/SquareIcon")
);

const DdesignProcess = () => {
  const main = "uiux__design_process";
  const processes = [
    { icon: <SquareIcon />, title: "Product Definition" },
    { icon: <CircleIcon />, title: "Product Research" },
    { icon: <TriangleIcon />, title: "Analysis" },
    { icon: <HexagonIcon />, title: "Design" },
    { icon: <StarIcon />, title: "Validation (Testing)" }
  ];

  return (
    <section className={main}>
      <HomeHeading section={"Our Design Process"} />
      <section>
        {processes.map(({ icon, title }) => (
          <article key={nano()}>
            <div>{icon}</div>
            <div>
              <h3>{title}</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </article>
        ))}
        <article id="marketing_card">
          <div className="market__card__content">
            <div>
              <OneIconMobile />
              <OneIconDesktop />
              <h1>Community Managment</h1>
            </div>
            <p>
              At DIGTAL, we understand the importance of having a strong online
              presence and building a community of engaged customers, fans, and
              stakeholders. That's why we offer comprehensive community
              management services that help our clients build and maintain a
              positive, engaging, and active online community.
            </p>
          </div>

          <UnionIconMobile />
          <UnionIconDesktop />
        </article>
        <MarketingCard
          translationSource="marketing"
          heading="headings.one"
          body="content.one"
          numberIconDesktop={<OneIconDesktop />}
          numberIconMobile={<OneIconMobile />}
        />
      </section>
    </section>
  );
};

export default DdesignProcess;
