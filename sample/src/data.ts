type record = {
  id: string,
  date: string,
  target: string,
  departure: string,
  destination: string,
  isReturn: boolean,
  transport: string,
  money: number
  hasReceipt: boolean
}

type report = record[]


const rec: record = {
  id: "01",
  date: "20240401",
  target: "Hakone",
  departure: "Tokyo",
  destination: "Hakone",
  isReturn: true,
  transport: "Odakyusen",
  money: 100,
  hasReceipt: false
}

const rep: report = []
for (let i: number = 0; i<31; i++) {
  rep[i] = rec
}

export default rep

export type title = {
  document?: string,
  year?: string,
  month?: string
}

export const matchTable = {
  work: "作業報告書",
  transport: "交通費申請書",
  commute: '通勤費申請書'
}