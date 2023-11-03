import { useEffect, useState, useRef } from "react"

export default function Result({ percentage = "300", text = "Organic traffic" }) {
  const [score, setScore] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const current = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting)
    )
    if (current) {
      observer.observe(current)
    }
    return () => {
      if (current) {
        observer.unobserve(current)
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
  }, [isInView, score, percentage,intervalId])

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
