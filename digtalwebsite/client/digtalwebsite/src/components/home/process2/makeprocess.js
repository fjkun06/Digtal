import ProcessLayout from "./layout";
import { ProcessBloc } from "./process";
import { ProcessLine } from "./process";
import ProcessTitle from "../process/title";
import { Separator } from "./process";
import { SeparatorLeft } from "./process";
import { SingleIcon } from "./process";
import { IconsLine } from "./process";
import quart from "../../../assets/images/process/1-4.png"
import semi from "../../../assets/images/process/1-2.png"
import third from "../../../assets/images/process/1-3.png"
import full from "../../../assets/images/process/1.png"
import coffee from "../../../assets/images/process/coffee.png"
import edit from "../../../assets/images/process/edit.png"
import computer from "../../../assets/images/process/laptop.png"
import down from "../../../assets/images/process/down.png"

export function ProcessSection(){
    return (
        <ProcessLayout>
            <ProcessTitle />
            <ProcessLine>
                <ProcessBloc/>
                <Separator />
                <ProcessBloc icon={semi}/>
            </ProcessLine>
            <IconsLine>
                <SingleIcon iconName={quart} invisible={true}/>
                <SingleIcon iconName={coffee} />
                <SingleIcon iconName={edit} />
                <SingleIcon iconName={computer} />
                <SingleIcon iconName={down} />
            </IconsLine>
            <ProcessLine>
                <ProcessBloc icon={full}/>
                <SeparatorLeft />
                <ProcessBloc icon={third} />
            </ProcessLine>
        </ProcessLayout>
    )
}