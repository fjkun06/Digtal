import UnionIconDesktop from "src/assets/svg/services/digitalmarketing/UnionIconDesktop";
import UnionIconMobile from "src/assets/svg/services/digitalmarketing/UnionIconMobile";
import React from "react";
import { useTranslation } from "react-i18next";

//nothing

const MarketingCard = ({
  translationSource,
  heading,
  body,
  numberIconMobile,
  numberIconDesktop
}) => {
  const { t } = useTranslation(translationSource ?? "marketing");
  return (
    <article id="marketing_card" className="self-center">
      <div className="market__card__content">
        <div>
          {numberIconMobile}
          {numberIconDesktop}
          <h1>{t(heading)}</h1>
        </div>
        <p>{t(body)}</p>
      </div>

      <UnionIconMobile />
      <UnionIconDesktop />
    </article>
  );
};

export default MarketingCard;
