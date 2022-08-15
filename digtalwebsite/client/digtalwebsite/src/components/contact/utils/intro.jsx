export default function Intro({content,subcontent}){
    return (
        <div className="contain  min-h-min flex justify-center items-center p-5 ">
            <div className="first flex-col flex my-2">
                <h2 className="text-5xl text-start capitalize my-2 text-zinc-800">
                    {content}
                </h2>
                <p className="text-2xl text-zinc-500 text-center"> {subcontent} </p>
            </div>
        </div>
    )
}