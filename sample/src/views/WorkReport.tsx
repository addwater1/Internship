import { title } from "../data"
import { matchTable } from "../data"

export default function WorkReport(t: title) {
  const a: Array<number> = new Array(31).fill(0).map((i, index) => i+index+1)
  return(
    <div className="main" onClick={e => {e.stopPropagation()}}>
      <h1>{`${matchTable.work}${t.year}年${t.month}月`}</h1>
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>曜日</th>
            <th>祝日</th>
            <th>始業時刻</th>
            <th>終業時刻</th>
            <th>実働時間</th>
            <th>残業時間</th>
            <th>有休</th>
            <th>欠勤</th>
            <th>深夜勤務時間</th>
            <th>法定休日時間</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {a.map((i) => (
            <tr key={i}>
              <td>{i}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button >Save</button>
    </div>
  )
}