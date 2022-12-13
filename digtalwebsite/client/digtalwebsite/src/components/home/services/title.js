export default function Title({text=""}){
    return (
        <div 
            className="solutions__title w-full flex flex-col gap-1 items-center justify-center"
        >
            <h2
                className="md:text-center md:text-5xl text-bold leading-relaxed text-purple-800 solutions__title my-2"
            >{text}</h2>
            <div className="w-[5rem] underliner md:w-[13rem] py-[2px] md:py-[3px] bg-gradient-to-r from-[#663399] to-[#00D0FF] mb-2">

            </div>
        </div>
    )
}