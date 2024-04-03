import { useParams } from "react-router-dom"
import WorkReport from "./WorkReport"
import CommuteReport from "./CommuteReport"
import TransportReport from "./TransportReport"
export default function Report() {
  const {document, year, month} = useParams()

  if(document === "work"){
    return <WorkReport document={document} year={year} month={month} />
  }
  else if(document === "transport"){
    return <TransportReport document={document} year={year} month={month}/>
  }
  else{
    return <CommuteReport document={document} year={year} month={month}/>
  }
}