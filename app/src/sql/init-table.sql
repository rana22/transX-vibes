CREATE TABLE document (
    id int NOT NULL,
    title varchar(255),
    description text,
    PRIMARY KEY (id)
);

DELETE FROM document;