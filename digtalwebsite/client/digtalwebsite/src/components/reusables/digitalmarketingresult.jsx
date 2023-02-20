export default function Result({percentage="300",text="Organic traffic"}){
    return (
        <div className="result flex flex-col gap-4 items-center justify-center tracking-widest">
            <p className="text-[rebeccapurple] font-bold text-6xl tablet:text-[5rem] laptop:text-[7rem]"><span className="text-blue-400">+</span>{percentage}%</p>
            <p className="text-xl tablet:text-3xl text-[rebeccapurple] text-center font-semibold capitalize">{text}</p>
        </div>
    )
}