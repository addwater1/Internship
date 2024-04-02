import { useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

export default function MonthList() {
  const a = new Array(12).fill(0).map((i, index) => index + i)
  const [selected, setSelected] = useState(-1)
  const {document, year} = useParams()
  return (
    <div>
      <ul>
        {a.map((i, index) => (
          <li 
            key={index} 
            onClick={(e) => {
              e.stopPropagation()
              setSelected(index)
            }}
          >
            <Link 
              to={`/${document}/${year}/${i+1}`} 
              className={index === selected ? "selected" : ""}
            > 
              Month {i + 1}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  )
}