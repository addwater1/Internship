# 洗い出した要件
| 機能 | 目的 |
|---|---|
| ユーザーログイン | ユーザー指定 |
| 個人情報管理 | ユーザーが個人情報を編集できる |
| ユーザー管理 | 管理員がユーザー情報を編集できる |
| 日報一覧 | 一ヶ月間の日報がはっきりに見える |
| 日報作成 | 日付を指定して月報を作成できる |
| 日報編集 | 日報を編集できる |
| 月報作成 | 月報を作成できる |
| 月報確認 | 管理員が月報を確認できる |

# データベース設計

# User Table

| Column | Type | Null | Primary Key |
|---|---|---|---|
| user_id | int | false | true |
| username | varchar | false |  |
| password | varchar | false |  |
| site | varchar | true |  |
| route | varchar | true |  |

# Sheet Table

| Column | Type | Null | Primary Key |
|---|---|---|---|
| sheet_id | varchar | false | true |
| user_id | varchar | false |  |
| sheet_date | date | false |  |
| signature | varchar | false |  |

# Record Table

| Column | Type | Null | Primary Key |
|---|---|---|---|
| sheet_id | varchar | false |  |
| record_date | date | false |  |
| checkin_time | time | false |  |
| checkout_time | time | false |  |
| break_time | double | false |  |
| absence | double | true |  |
| rest | double | true |  |
| remarks | varchar | true |  |