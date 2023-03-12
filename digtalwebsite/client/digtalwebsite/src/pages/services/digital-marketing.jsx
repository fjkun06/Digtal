import HeaderDigitalMarketing from "src/components/services/digital_marketing/header";
import HeaderText from "src/components/services/digital_marketing/headertext";
import HomeHeading from "src/components/reusables/HomeHeading";
import Score from "src/components/services/digital_marketing/score";
import Testimonial from "src/components/services/digital_marketing/testimonials";
import MarketingCard from "src/components/reusables/MarketingCard";
// import OneIconDesktop from "src/assets/svg/services/digitalmarketing/OneIconDesktop";
// import OneIconMobile from "src/assets/svg/services/digitalmarketing/OneIconMobile";
import { marketingCardElements } from "src/components/services/digital_marketing/config";
import { nano } from "src/App";
import { testimonialsCardElements } from "src/components/services/digital_marketing/config";

export default function DigitalMarketing() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-white">
        <HeaderDigitalMarketing />
      </div>
      <HeaderText />
      <div className="flex flex-col items-center justify-center bg-white py-4 px-4">
        <div className="my-4 flex items-center justify-center text-center text-4xl font-extrabold tablet:my-8">
          <HomeHeading section="OUR SUITE OF DIGITAL  MARKETING SERVICES" />
        </div>
        <div className="flex flex-wrap gap-8 py-16 items-center justify-center laptop:justify-items-center laptop:grid laptop:grid-cols-2">
          {marketingCardElements.slice(0,6).map(
            (details) => {
              return (
                <MarketingCard
                  key={nano()}
                {...details}
                />
              );
            }
          )}
        </div>
        <div className="flex items-center justify-center">
        {marketingCardElements.slice(6,7).map(
            (details) => {
              return (
                <MarketingCard
                  key={nano()}
                {...details}
                />
              );
            }
          )}
        </div>
    
      </div>
      <Score />
      <div className="grid w-full grid-cols-1 content-center items-center justify-center bg-white tablet:grid-cols-2 tablet:px-12 laptop:px-24 ">
        {testimonialsCardElements.map(element => {
          return <Testimonial key={nano()} {...element} />;
        })}
      </div>
    </>
  );
}
