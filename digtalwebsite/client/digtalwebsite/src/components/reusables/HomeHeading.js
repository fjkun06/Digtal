import { useTranslation } from "react-i18next";

const HomeHeading = ({ section }) => {
  const { t } = useTranslation(["home", "form"]);

  return (
    <div className="home__heading">
      <span>{t(section)}</span>
    </div>
  );
};

export default HomeHeading;
