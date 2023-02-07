import React from "react";
import { nano } from "src/App";

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
      </section>
    </section>
  );
};

export default DdesignProcess;
