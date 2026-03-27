import { useState, useEffect } from 'react'

export default function StatsCounter({ label, value, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = value / 50
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="stats-card">
      <h3 className="stats-value">{count}{suffix}</h3>
      <p className="stats-label">{label}</p>
    </div>
  )
}
