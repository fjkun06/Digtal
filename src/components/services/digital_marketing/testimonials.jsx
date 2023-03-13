import Testimonials from "src/components/reusables/testimonials"


export default function Testimonial({image,text,author}){

    

    return (
        <div className="testimonial">
            <div className="testimonial-container">
                <Testimonials image={image} text={text} author={author} />
            </div>
        </div>
    )
}