\c tweets_dev


INSERT INTO users (email, username, _at, password) VALUES 
('felizj17@gmail.com','felizj17','@some_juan', crypt('P@$$w0rd!1', gen_salt('bf'))),
('millions@gmail.com', 'multimillz', '@millz', crypt('P@$$w0rd!2', gen_salt('bf')));


INSERT INTO tweets ( body, user_id) VALUES
('just dropped the most sampled song', 1),
('just dropped the most sampled song', 2),
('Captains log startdate, wait has the captains log changed format', 2);