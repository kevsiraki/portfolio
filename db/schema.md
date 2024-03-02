### Table: page_visits

| Field              | Type         | Null | Key | Default             | Extra          |
|--------------------|--------------|------|-----|---------------------|----------------|
| id                 | int(11)      | NO   | PRI | NULL                | auto_increment |
| page_url           | varchar(255) | YES  |     | NULL                |                |
| ip_address         | varchar(45)  | YES  |     | NULL                |                |
| user_agent         | text         | YES  |     | NULL                |                |
| referrer           | varchar(255) | YES  |     | NULL                |                |
| preferred_language | varchar(255) | YES  |     | NULL                |                |
| visit_time         | timestamp    | NO   |     | current_timestamp() |                |

### Table: rate_limit

| Field             | Type         | Null | Key | Default | Extra          |
|-------------------|--------------|------|-----|---------|----------------|
| id                | int(11)      | NO   | PRI | NULL    | auto_increment |
| ip                | varchar(255) | NO   |     | NULL    |                |
| last_request_time | int(11)      | YES  |     | 0       |                |

### Table: messages

| Field   | Type          | Null | Key | Default | Extra          |
|---------|---------------|------|-----|---------|----------------|
| id      | int(11)       | NO   | PRI | NULL    | auto_increment |
| name    | varchar(255)  | YES  |     | NULL    |                |
| email   | varchar(255)  | YES  |     | NULL    |                |
| message | varchar(2000) | YES  |     | NULL    |                |
| ip      | varchar(255)  | NO   |     | NULL    |                |
