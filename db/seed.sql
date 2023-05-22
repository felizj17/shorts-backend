\c tweets_dev


INSERT INTO users (email, username, _at, password) VALUES 
('felizj17@gmail.com','felizj17','@some_juan', crypt('P@$$w0rd!1', gen_salt('bf'))),
('millions@gmail.com', 'multimillz', '@millz', crypt('P@$$w0rd!2', gen_salt('bf')));


INSERT INTO tweets ( title, body, read_time, user_id) VALUES
('dowop','just dropped the most sampled song',12, 1),
('huh','just dropped the most sampled song',5, 2),
('caps log','Captains log startdate, wait has the captains log changed format',2, 2);