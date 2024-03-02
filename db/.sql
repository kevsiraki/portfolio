CREATE TABLE page_visits (
    id INT(11) NOT NULL AUTO_INCREMENT,
    page_url VARCHAR(255) DEFAULT NULL,
    ip_address VARCHAR(45) DEFAULT NULL,
    user_agent TEXT DEFAULT NULL,
    referrer VARCHAR(255) DEFAULT NULL,
    preferred_language VARCHAR(255) DEFAULT NULL,
    visit_time TIMESTAMP NOT NULL DEFAULT current_timestamp(),
    PRIMARY KEY (id)
);

CREATE TABLE rate_limit (
    id INT(11) NOT NULL AUTO_INCREMENT,
    ip VARCHAR(255) NOT NULL,
    last_request_time INT(11) DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE messages (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    message VARCHAR(2000) DEFAULT NULL,
    ip VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
