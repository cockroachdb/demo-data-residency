CREATE TABLE user (
  id       UUID DEFAULT gen_random_uuid() PRIMARY KEY,         
  date     DATE,         
);