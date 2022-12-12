import firstImage from '../../../assets/images/daniel.png'
import secondImage from '../../../assets/images/section1.png'
import thirdImage from '../../../assets/images/marketing.jpg'
import fourthImage from '../../../assets/images/coding.jpg'
import meetingIcon from '../../../assets/images/Meeting.png'
import personalizationIcon from '../../../assets/images/personalization.png'
import geographyIcon from '../../../assets/images/Geography.png'
import advertisingIcon from '../../../assets/images/advertising.png'
import ServiceRight from './service'
import { ServiceLeft } from './service'

const defaultText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eum consequuntur accusamus doloribus, earum quae, odit omnis harum deserunt ratione asperiores quibusdam alias optio impedit dolorem, eos facilis! Quasi, vero.'
const uiText="At our company, we specialize in providing UI/UX design services for businesses of all sizes. Our team of experienced designers and developers are dedicated to creating innovative and user-friendly designs that will help your company stand out from the competition. We understand the importance of creating a great user experience and strive to ensure that our designs are both visually appealing and easy to use. With our UI/UX design services, your company will be able to make the most of its online presence and provide customers with an enjoyable and efficient experience."

export const WebSection = ()=>{
    return (
        <ServiceRight title="web & mobile development" icon={geographyIcon} text={defaultText} image={fourthImage} />
    )
}

export const MarketingSection = ()=>{
    return (
        <ServiceLeft title="Digital Marketing" text={defaultText} icon={advertisingIcon} image={thirdImage} />
    )
}

export const ConsultingSection = ()=>{
    return (
        <ServiceRight title="Consulting" text={defaultText} icon={meetingIcon} image={secondImage} />
    )
}

export const DesignSection = ()=>{
    return (
        <ServiceLeft title="UI/UX Design" icon={personalizationIcon} text={uiText} image={firstImage} />
    )
}