import UnionIconDesktop from "src/assets/svg/services/digitalmarketing/UnionIconDesktop";
import UnionIconMobile from "src/assets/svg/services/digitalmarketing/UnionIconMobile";
import React from "react";
import { useTranslation } from "react-i18next";

const MarketingCard = ({
  translationSource,
  heading,
  body,
  numberIconMobile,
  numberIconDesktop
}) => {
  const { t } = useTranslation(translationSource);
  return (
    <article id="marketing_card">
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
