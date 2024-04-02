import { Link, Outlet} from "react-router-dom";
import { useState } from "react";

export default function DocumentList() {
  type status = {
    selected: number,
    isDisplay: boolean
  }
  type table = {
    title: string,
    segment: string
  }
  const [s, setStatus] = useState<status>({selected: -1, isDisplay: false})
  
  const list: table[] = [{
    title: "交通費申請書",
    segment: "transport"
    }, 
    {title:'通勤費申請書',
    segment: "commute"}, 
    {title:'作業報告書',
    segment: 'work'}]
  return (
    <div>
      <ul>
        {
          list.map((i, index) => (
            <li 
              key={index} 
              onClick={() => {
                if(index === s?.selected) {
                  setStatus({selected: s.selected, isDisplay: !s.isDisplay})
                }
                else {
                  setStatus({selected: index, isDisplay: true})
                }
              }}
            >
              <Link
                to={`/${i.segment}`} 
                // className={index === selected ? "selected" : ""}
              >
                {i.title}
              </Link>
              {index === s.selected && s.isDisplay ? <Outlet/> : null}
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}