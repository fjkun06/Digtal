import HeaderDigitalMarketing from "src/components/services/digital_marketing/header"
import HeaderText from "src/components/services/digital_marketing/headertext"
import HomeHeading from "src/components/reusables/HomeHeading"

export default function DigitalMarketing(){
    return (
        <>     
            <div className="flex w-full flex-col items-center justify-center bg-white">
                <HeaderDigitalMarketing />
            </div>
            <HeaderText />
            <div className="flex my-4 items-center justify-center">
                <div className="flex items-center justify-center text-center font-extrabold text-4xl my-4 tablet:my-8">
                    <HomeHeading section="OUR SUITE OF DIGITAL  MARKETING SERVICES" />
                </div>
            </div>
        </>
    )
}