import StarIcon from "src/assets/svg/services/uiux/StarIcon";
import React from "react";
import HomeHeading from "src/components/reusables/HomeHeading";
import HexagonIcon from "src/assets/svg/services/uiux/HexagonIcon";
import TriangleIcon from "src/assets/svg/services/uiux/TriangleIcon";
import CircleIcon from "src/assets/svg/services/uiux/CircleIcon";
import SquareIcon from "src/assets/svg/services/uiux/SquareIcon";

const DdesignProcess = () => {
  const main = "uiux__design_process";

  return (
    <section className={main}>
      <HomeHeading section={"Our Design Process"} />

      <article>
        <div>
          <SquareIcon/>
        </div>
        <div>
          <h3>Product Definition</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </article>
      <article>
        <div>
          <CircleIcon/>
        </div>
        <div>
          <h3>Product Research</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </article>
      <article>
        <div>
          <TriangleIcon/>
        </div>
        <div>
          <h3>Analysis</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </article>
      <article>
        <div>
          <HexagonIcon/>
        </div>
        <div>
          <h3>Design</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </article>
      <article>
        <div>
          <StarIcon/>
        </div>
        <div>
          <h3>Validation (Testing)</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </article>
    </section>
  );
};

export default DdesignProcess;
