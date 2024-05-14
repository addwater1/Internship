# データベースのイメージ
- UserTable　(user_id(PK), content)
- SheetTable　(user_id, year_month, sheet_id(PK), sheet_signature, content)
- RecordTable　(sheet_id, record_date, content)
# 月報の読み込む
sheet_idとは、まずuser_idとyear_monthを結合して
```
{user_id}{year_month}
```
例えば、user_idはwpj、year_monthは202405の場合、以下のようにします
```
wpj202405
```
それで、この文字列を入力値としてハッシュ関数に入力して、固定の長さの出力値をsheet_id(primary key)にします。

user_id, sheet_idがあれば、ユーザーと期間を指定して、Databaseから月報を読み込むことができる。そのプロセスをSQLで表す：

```sql
select * from RecordTable
where sheet_id in
(
    select sheet_id from SheetTable
    where user_id="ユーザー指定" and year_month="期間指定"
)
```

# 月報の確認
インターネットからカレンダーを読み込んで、一ヶ月間に出勤すべき日を出して、一つの文字列になります。例えば、5月出勤すべき日は以下のように
```
1,2,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30,31
```
そして、この文字列をハッシュ関数に入力してハッシュ値を作成します。例えば、md5を使って128ビットの署名を作成します：
```
3ec0d1eb0a4a3b440df546c042d92a71
```
この署名はSheetTableテーブルのsignatureとしてsaveします

これからsignatureで、社員が5月に欠勤あるかどうかを確認します。
| record_date | sheet_id | content |
|---|---|---|
| 20240501 |...|...|
| 20240502 |...|...|
| 20240507 |...|...|

例えば、5月の月報は以上のようにしています。日付を読み込んで、すべての「日」を結合して以下の文字列になります。

```
1,2,7
```
この文字列をmd5で変換して、5月のsignatureと比べると、欠勤かどうかが見えます。

以上のプロセスをSQLで表す

```sql
-- 一ヶ月間すべてのrecordを読み込んで、md5で暗号化する
select md5(group_concat(day(record_date)))
from RecordTable
where sheet_id in
(
    select sheet_id from SheetTable
    where user_id="ユーザー指定" and year_month="期間指定"
)

-- 一ヶ月のsignatureを読み取る
select sheet_signature
from SheetTable
where user_id="ユーザー指定" and year_month="期間指定"
```