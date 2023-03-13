export default function Result({percentage="300",text="Organic traffic"}){
    return (
        <div className="result">
            <p className=""><span className="">+</span>{percentage}%</p>
            <p className="">{text}</p>
        </div>
    )
}