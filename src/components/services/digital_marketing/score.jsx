import HomeHeading from "src/components/reusables/HomeHeading"
import Result from "src/components/reusables/digitalmarketingresult"
export default function Score(){
    return (
        <div className="result-container ">
            <div className="title">
                <HomeHeading section="RESULTS GOTTEN BY OUR CLIENTS" />
            </div>
            <div className="results">
                <Result  />
                <Result percentage="230" text="online leads" />
                <Result percentage="680" text="conversation rate" />
            </div>
        </div>
    )
}