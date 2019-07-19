CREATE TABLE document (
    id int NOT NULL,
    title varchar(255),
    description text,
    PRIMARY KEY (id)
);

DELETE FROM document;SELECT id, type, adminAccess FROM roles;
ALTER TABLE role_permissions DROP COLUMN createdAt
ALTER TABLE role_permissions ADD COLUMN createdat TIMESTAMP DEFAULT NOW()
DROP TABLE role_permissions

ALTER TABLE users DROP COLUMN firstName
ALTER TABLE users ADD COLUMN lastname varchar

ALTER TABLE users DROP COLUMN updatedat

DELETE FROM users;

DELETE FROM roles;

DROP TABLE Users;

select * from Person
