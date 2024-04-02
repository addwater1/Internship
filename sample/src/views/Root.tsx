import { BrowserRouter, Route, Routes } from "react-router-dom";
import DocumentList from "./DocumentList";
import YearList from "./YearList";
import MonthList from "./MonthList";
import Report from "./Report";

export default function Root() {
  return (
    <BrowserRouter >
        <Routes>
            <Route path="/" element={<DocumentList />} >
              <Route path="/:document" element={<YearList />}>
                <Route path="/:document/:year" element={<MonthList />} >
                  <Route path="/:document/:year/:month" element={<Report />} />
                </Route>
              </Route>
            </Route>
        </Routes>
    </BrowserRouter>

  )
}