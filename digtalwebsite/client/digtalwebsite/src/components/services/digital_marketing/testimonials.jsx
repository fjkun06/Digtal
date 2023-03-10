import Testimonials from "src/components/reusables/testimonials"


export default function Testimonial({image,text,author}){

    

    return (
        <div className="flex w-full flex-col bg-white">
            <div className="flex flex-col tablet:flex-row tablet:w-full w-full items-center tablet:justify-around justify-center mb-8 tablet:my-16 gap-8">
                <Testimonials image={image} text={text} author={author} />
            </div>
        </div>
    )
}