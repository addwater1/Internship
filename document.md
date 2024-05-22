# 洗い出した要件
| 機能         | 目的                    |
|--------------|-----------------------|
| ユーザーログイン     | ユーザー指定                |
| 個人情報管理 | ユーザーが個人情報を編集できる   |
| ユーザー管理     | 管理員がユーザー情報を編集できる |
| 日報一覧     | 一ヶ月間の日報がはっきりに見える  |
| 日報作成     | 日付を指定して月報を作成できる |
| 日報編集     | 日報を編集できる            |
| 月報作成     | 月報を作成できる            |
| 月報確認     | 管理員が月報を確認できる     |

# データベース設計

# User Table

| Column     | Type    | Null  | Primary Key | Details  |
|------------|---------|-------|-------------|----------|
| user_id    | int     | false | true        | 社員番号 |
| username   | varchar | false |             | 氏名     |
| password   | varchar | false |             | パスワード    |
| work_site  | varchar | true  |             | 現場     |
| route_name | varchar | true  |             | 路線名   |

# Work Sheet Template Table

| Column        | Type | Null  | Primary Key | Details  |
|---------------|------|-------|-------------|----------|
| user_id       | int  | false | true        | 社員番号 |
| checkin_time  | time | false |             | 始業時刻 |
| checkout_time | time | false |             | 終業時刻 |
| break_time    | int  | false |             | 休憩時間 |

# Commuting Sheet Template Table

| Column            | Type    | Null  | Primary Key | Details  |
|-------------------|---------|-------|-------------|----------|
| user_id           | int     | false | true        | 社員番号 |
| work_site         | varchar | false |             | 現場     |
| departure_place   | varchar | false |             | 出発地   |
| destination_place | varchar | false |             | 到着地   |
| route_name        | varchar | false |             | 路線名   |

# Sheet Table

| Column     | Type    | Null  | Primary Key | Details      |
|------------|---------|-------|-------------|--------------|
| sheet_id   | varchar | false | true        | 報告書番号   |
| user_id    | varchar | false |             | 社員番号     |
| sheet_date | date    | false |             | 月報提出年月 |

# Work Sheet Record Table

| Column        | Type    | Null  | Primary Key | Details  |
|---------------|---------|-------|-------------|----------|
| sheet_id      | varchar | false |             | 月報番号 |
| record_date   | date    | false |             | 日報番号 |
| checkin_time  | time    | false |             | 始業時刻 |
| checkout_time | time    | false |             | 終業時刻 |
| break_time    | int     | false |             | 休憩時間 |
| absence_day   | int     | true  |             | 欠勤     |
| rest_day      | int     | true  |             | 有休     |
| remarks       | varchar | true  |             | 備考     |

# Commuting Sheet Record Table

| Column            | Type    | Null  | Primary Key | Details  |
|-------------------|---------|-------|-------------|----------|
| sheet_id          | varchar | false |             | 月報番号 |
| record_date       | date    | false |             | 日報番号 |
| work_site         | varchar | false |             | 現場     |
| departure_place   | varchar | false |             | 出発地   |
| destination_place | varchar | false |             | 到着地   |
| route_name        | varchar | false |             | 路線名   |