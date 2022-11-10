import firstImage from '../../../assets/images/daniel.png'
import secondImage from '../../../assets/images/section1.png'
import thirdImage from '../../../assets/images/section2.png'
import fourthImage from '../../../assets/images/section3.png'
import meetingIcon from '../../../assets/images/Meeting.png'
import personalizationIcon from '../../../assets/images/personalization.png'
import geographyIcon from '../../../assets/images/Geography.png'
import advertisingIcon from '../../../assets/images/advertising.png'
import ServiceRight from './service'
import { ServiceLeft } from './service'

const defaultText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eum consequuntur accusamus doloribus, earum quae, odit omnis harum deserunt ratione asperiores quibusdam alias optio impedit dolorem, eos facilis! Quasi, vero.'

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
        <ServiceLeft title="UI/UX Design" icon={personalizationIcon} text={defaultText} image={firstImage} />
    )
}