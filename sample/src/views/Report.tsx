import { useParams } from "react-router-dom"
import WorkReport from "./WorkReport"
import CommuteReport from "./CommuteReport"
import TransportReport from "./TransportReport"
export default function Report() {
  const {document} = useParams()

  if(document === "work"){
    return <WorkReport />
  }
  else if(document === "transport"){
    return <TransportReport />
  }
  else{
    return <CommuteReport />
  }
}