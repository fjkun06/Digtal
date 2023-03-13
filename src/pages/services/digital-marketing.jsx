import HeaderDigitalMarketing from "src/components/services/digital_marketing/header"
import HeaderText from "src/components/services/digital_marketing/headertext"
import HomeHeading from "src/components/reusables/HomeHeading"
import Score from "src/components/services/digital_marketing/score"
import Testimonial from "src/components/services/digital_marketing/testimonials"

export default function DigitalMarketing(){
    return (
        <>     
            <div className="flex w-full flex-col items-center justify-center bg-white">
                <HeaderDigitalMarketing />
            </div>
            <HeaderText />
            <div className="flex py-4 items-center justify-center bg-white">
                <div className="flex items-center justify-center text-center font-extrabold text-4xl my-4 tablet:my-8">
                    <HomeHeading section="OUR SUITE OF DIGITAL  MARKETING SERVICES" />
                </div>
            </div>
            <Score />
            <div className="w-full justify-center items-center content-center bg-white laptop:px-24 tablet:px-12 grid grid-cols-1 tablet:grid-cols-2 ">
                {
                    [1,2,3,4].map((element)=>{
                        return(
                            <Testimonial key={element} />
                        )
                    })
                }
            </div>
        </>
    )
}