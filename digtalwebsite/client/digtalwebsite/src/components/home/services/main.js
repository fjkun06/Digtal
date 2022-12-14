import ServicesLayout from "./layout";
import Title from "./title";
import { ConsultingSection,DesignSection,MarketingSection,WebSection } from "./makeservice";

export default function ServiceSection(){

    return (

        <ServicesLayout>
            <Title text="DIVE INTO A MULTITUDE OF SOLUTIONS"/>
            <WebSection />
            <MarketingSection />
            <ConsultingSection />
            <DesignSection />
        </ServicesLayout>

    )

}