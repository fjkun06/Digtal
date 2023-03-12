import { useEffect, useState, useRef } from "react"

export default function Result({ percentage = "300", text = "Organic traffic" }) {
  const [score, setScore] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting)
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isInView && score < percentage) {
      const id = setInterval(() => {
        setScore(score => score + 10)
      }, 100)
      setIntervalId(id)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [isInView, score, percentage])

  return (
    <div className="result" ref={ref}>
      <p className="">
        <span className="">+</span>
        {score}%
      </p>
      <p className="">{text}</p>
    </div>
  )
}
