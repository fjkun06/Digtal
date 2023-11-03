import {ImQuotesLeft} from "react-icons/im"
import {ImQuotesRight} from "react-icons/im"
import { useTranslation } from "react-i18next";

export default function Testimonials({text,author,image}){


    const { t } = useTranslation("marketing");

    return (
        <div className="testimonial-card">
            <div className="testimonial-card-image-container">
                <img src={image} alt="testimonial" c />
            </div>
            <div className="testimonial-card-content">
                <ImQuotesLeft className="quote" />
                <p className="">{t(text)}</p>
                <ImQuotesRight className="quote" />
            </div>
            <div className="testimonial-author">
                <p className="">{t(author)}</p>
            </div>
        </div>
    )
}