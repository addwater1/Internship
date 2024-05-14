# データベースのイメージ
- UserTable　(user_id(PK), content)
- SheetTable　(user_id, year_month, sheet_id(PK), content)
- RecordTable　(sheet_id, date, content)
# SQLで月報を読み込む
sheet_idとは、まずuser_idとyear_monthを以下の文字列にします
```json
{
    "user_id": "test",
    "year_month": "test"
}
```
それで、この文字列を入力値としてハッシュ関数に入力して、固定の長さの出力値をsheet_idにします。

user_id, sheet_idがあれば、ユーザーと期間を指定して、Databaseから月報を読み込むことができる。そのプロセスをSQLで表す：

```sql
select * from RecordTable
where sheet_id in
(
    select sheet_id from SheetTable
    where user_id="test" and year_month="test"
)
```