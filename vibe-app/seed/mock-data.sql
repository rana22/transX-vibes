INSERT INTO users (id, username, password, email, firstName, lastName, status) VALUES
(1, 'groot', '473c0812623754d187d1e4c96af5d5cb', 'iam@groot.com', 'Groot', 'Iam', 'active'),
(2, 'user', '5f4dcc3b5aa765d61d8327deb882cf99', 'user@test.com', 'Test', 'User', 'active');

INSERT INTO user_roles (userId, roleId, created, updated) VALUES
( 1, 1,now(), now()),
(2, 2,now(), now());

INSERT INTO permissions (id, url, path, method, title, description) VALUES

(1, '/permissions', '/', 'GET', 'Get Permissions', 'Get all permissions'),
(2, '/roles', '/', 'GET', 'Get Roles', 'Get all roles'),
(3, '/users', '/', 'GET', 'Get Users', 'Get all users'),
(4, '/users', '/:id', 'GET', 'Get Specific User', 'Get any individual user (any authenticated user can get themselves)'),
(5, '/users', '/', 'POST', 'Create User', 'Create a new user'),
(6, '/users', '/:id', 'PUT', 'Update User', 'Update any user (any authenticated user can update at least some aspects of themselves)'),
(7, '/roles', '/:id', 'GET', 'Get Specific Role', 'Get a specific role by id'),
(8, '/roles', '/', 'POST', 'Create Role', 'Create a role'),
(9, '/roles', '/:id', 'PUT', 'Update Role', 'Update a specific role by id'),
(10, '/jobsites', '/', 'GET', 'Get Job Sites', 'Get all job sites'),
(11, '/jobsites', '/:id', 'GET',  'Get Specific Job Site', 'Get a specific job site by id'),
(12, '/jobsites', '/', 'POST',  'Create Job Site', 'Create a new job site'),
(13, '/jobsites', '/:id', 'PUT', 'Update Job Site', 'Update a specific job site by id'),
(14, '/samples', '/', 'GET', 'Get Samples', 'Get all samples'),
(15, '/samples', '/:id', 'GET',  'Get Specific Sample', 'Get a specific sample by id'),
(16, '/samples', '/', 'POST', 'Create Sample', 'Create a new sample'),
(17, '/samples', '/:id', 'PUT', 'Update Sample', 'Update a specific sample by id');

INSERT INTO role_permissions (roleId, permissionId,created, updated) VALUES

--(1, 1, now(), now()),
--(1, 2, now(), now()),
--(1, 3, now(), now()),
(1, 4, now(), now()),
(1, 5, now(), now()),
( 1, 6, now(), now()),
(1, 7, now(), now()),
(1, 8, now(), now()),
(1, 9, now(), now()),
(1, 10, now(), now()),
(1, 11, now(), now()),
(1, 12, now(), now()),
(1, 13, now(), now()),
--(1, 14, now(), now()),
--(1, 15, now(), now()),
--(1, 16, now(), now()),
--( 1, 17,now(), now()),

(2, 1, now(), now()),
(2, 2, now(), now()),
( 2, 4, now(), now()),
( 2, 6, now(), now()),
(2, 7,now(), now()),
(2, 10, now(), now()),
(2, 11, now(), now()),
( 2, 14, now(), now()),
(2, 15, now(), now()),

(3, 5, now(), now());


INSERT INTO roles (id, type, adminAccess) VALUES

(1, 'Admin', 1),
(2, 'Authenticated', 0),
(3, 'Anonymous', 0);



--CREATE TABLE roles(
--   id serial PRIMARY KEY,
--   type VARCHAR (50) UNIQUE NOT NULL,
--   adminAccess integer
--);
