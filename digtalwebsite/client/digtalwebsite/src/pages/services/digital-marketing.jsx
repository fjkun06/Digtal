import HeaderDigitalMarketing from "src/components/services/digital_marketing/header";
import HeaderText from "src/components/services/digital_marketing/headertext";
import HomeHeading from "src/components/reusables/HomeHeading";
import Score from "src/components/services/digital_marketing/score";
import Testimonial from "src/components/services/digital_marketing/testimonials";
import MarketingCard from "src/components/reusables/MarketingCard";
import OneIconDesktop from "src/assets/svg/services/digitalmarketing/OneIconDesktop";
import OneIconMobile from "src/assets/svg/services/digitalmarketing/OneIconMobile";

export default function DigitalMarketing() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-white">
        <HeaderDigitalMarketing />
      </div>
      <HeaderText />
      <div className="flex items-center justify-center bg-white py-4">
        <div className="my-4 flex items-center justify-center text-center text-4xl font-extrabold tablet:my-8">
          <HomeHeading section="OUR SUITE OF DIGITAL  MARKETING SERVICES" />
        </div>
        <MarketingCard
          translationSource="marketing"
          heading="headings.one"
          body="content.one"
          numberIconDesktop={<OneIconDesktop />}
          numberIconMobile={<OneIconMobile />}
        />
      </div>
      <Score />
      <div className="grid w-full grid-cols-1 content-center items-center justify-center bg-white tablet:grid-cols-2 tablet:px-12 laptop:px-24 ">
        {[1, 2, 3, 4].map(element => {
          return <Testimonial key={element} />;
        })}
      </div>
    </>
  );
}
