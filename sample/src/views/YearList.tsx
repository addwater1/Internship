import { useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

export default function YearList() {
  const a = new Array(12).fill(0).map((i, index) => index + i + 2020)
  type status = {
    selected: number,
    isDisplay: boolean
  }
  const [s, setStatus] = useState<status>({selected: -1, isDisplay: false})
  const {document} = useParams()
  return (
    <div>
      <ul>
        {a.map((i, index) => (
          <li 
            key={index} 
            onClick={(e) => {
              e.stopPropagation()
              if(index === s?.selected) {
                setStatus({selected: s.selected, isDisplay: !s.isDisplay})
              }
              else {
                setStatus({selected: index, isDisplay: true})
              }
            }} 
          >
            <Link 
              to={`/${document}/${i}`} 
            //   className={i === selected ? "selected" : ""}
            >
              Year {i}
            </Link>
            {index === s.selected && s.isDisplay ? <Outlet/> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}