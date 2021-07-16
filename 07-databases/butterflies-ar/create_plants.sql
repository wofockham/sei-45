CREATE TABLE plants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT -- URL for a photo of a plant
);

-- seed data
INSERT INTO plants (name) VALUES ('Lantana');
INSERT INTO plants (name) VALUES ('Milkweed');
