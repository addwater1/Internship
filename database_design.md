# Database Sample
社員テーブル: User(user_id)   
通勤費申請テーブル: Request(request_id, user_id)   
通勤費申請レコード: Record(request_id, company_id, money)

## 社員は複数の現場がある場合、現場によって通勤金額を精算する方法、SQLで表す
```sql
SELECT sum(money), company_id, u.user_id, req.request_id
FROM new_schema.User u
    JOIN Request req on u.user_id=req.user_id
    JOIN Record rec on req.request_id=rec.request_id
GROUP BY company_id, u.user_id, req.request_id
```