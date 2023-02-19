import HomeHeading from "src/components/reusables/HomeHeading"
import Result from "src/components/reusables/digitalmarketingresult"
export default function Score(){
    return (
        <div className="flex w-full py-16 flex-col bg-white">
            <div className="flex w-full items-center justify-center font-extrabold">
                <HomeHeading section="RESULTS GOTTEN BY OUR CLIENTS" />
            </div>
            <div className="flex flex-col tablet:flex-row tablet:w-full pt-8 w-full items-center tablet:justify-around justify-center mt-8 tablet:mt-16 gap-8">
                <Result  />
                <Result percentage="230" text="online leads" />
                <Result percentage="680" text="conversation rate" />
            </div>
        </div>
    )
}