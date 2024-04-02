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