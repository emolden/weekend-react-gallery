CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/are_you_talking_to_me.jpg', 'What?', 'Norra looks curiously at me as I talk to her.'),
('images/enjoying_nature.jpg', 'Enjoying Nature', 'Norra enjoys rolling around in the grass on a warm day.'),
('images/family.jpg', 'Family', 'Norra enjoys spending time with her family.'),
('images/hungry.jpg', 'Dinner Time', 'Norra makes sure everyone knows it''s dinner time by moving her bowl to the living room.'),
('images/relaxed.jpg', 'Relaxed', 'Norra likes to smoosh her nose into her paws when she is relaxing.'),
('images/sleepy.jpg', 'Sleepy', 'When Norra sleeps her tongue comes out and her nose crinkles up.'),
('images/sploot.jpg', 'Sploot', 'Norra loves to sploot with her back legs when she lays around the house.'),
('images/summer_patio.jpg', 'Summer Patio', 'Norra likes to hang out on a patio for happy hour in the summer.'),
('images/Whats_going_on_over_there.jpg', 'Alert', 'Norra is alert with her ears up.'),
('images/best_friends.jpg', 'Best Friends', 'These are Norra''s two best friends, Molly and Mila.');



  