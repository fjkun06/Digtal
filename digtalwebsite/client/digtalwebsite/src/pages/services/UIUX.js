import React from "react";
import DdesignProcess from "src/components/services/uiux/designProcess";
import Projects from "src/components/services/uiux/projects";

const ProductDesign = React.lazy(() =>
  import("src/components/services/uiux/productDesign")
);
const Header = React.lazy(() => import("src/components/services/uiux/header"));
const SubHeader = React.lazy(() =>
  import("src/components/services/uiux/subHeader")
);

const UIUX = () => {
  return (
    <main className="uiux">
      <Header />
      <SubHeader />
      <ProductDesign />
      <DdesignProcess />
     <Projects/>
    </main>
  );
};

export default UIUX;
