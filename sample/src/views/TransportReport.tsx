import { title } from "../data"
import { matchTable } from "../data"

export default function TransportReport(t: title) {
  const a: Array<number> = new Array(31).fill(0).map((i, index) => i+index+1)
  return (
    <div className="main" onClick={e => {e.stopPropagation()}}>
      <h1>{`${matchTable.transport}${t.year}年${t.month}月`}</h1>
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>勤務先/出社先</th>
            <th>出発地</th>
            <th>到着地</th>
            <th>方/往</th>
            <th>利用交通機関名</th>
            <th>金額</th>
            <th>領収書</th>
            <th>領収書番号</th>
          </tr>
        </thead>
        <tbody>
          {a.map(i => (
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
            </tr>
          ))}
        </tbody>
      </table>
      <button >Save</button>
    </div>
  )
}