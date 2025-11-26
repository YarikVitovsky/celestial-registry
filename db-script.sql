CREATE TABLE stars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100),
    distance FLOAT,
    discoveryDate VARCHAR(100),
    description TEXT,
    spectralColor VARCHAR(7),
    magnitude FLOAT,
    image TEXT
);

INSERT INTO stars (name, type, distance, discoveryDate, description, spectralColor, magnitude, image)
VALUES
    ('Proxima Centauri', 'Star', 4.24, '1915-01-01', 'A small, low-mass star located 4.2465 light-years away from the Sun in the southern constellation of Centaurus.', '#FF5733', 11.13, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qh13nRLlmeBMCnlUFKBskAqEx_Q-lOpqr6aUF1jQKiKXMnA6AEQpjypqBDy-qSVhSvAw3nXadGB3uYzhBnx6wNKxwjMVUrLvfcCwDbPQ&s=10'),
    ('Betelgeuse', 'Star', 642.5, '1836-01-01', 'A red supergiant of spectral type M1-2 and one of the largest visible stars to the naked eye.', '#FF4500', 0.5, 'https://www.adlerplanetarium.org/wp-content/uploads/Spotty-Surface-of-Betelgeuse.jpg'),
    ('Kepler-186f', 'Planet', 582.0, '2014-04-17', 'An exoplanet orbiting the red dwarf Kepler-186, about 580 light-years from Earth. It is the first planet with a radius similar to Earth''s.', '#2E86C1', 14.0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLqxfUU35MY8E-vt462AI3UBUO7LIoT0qlHrmCsbuGiCOJEITzZ-e4u5X1N0Nlekk2O9Rof4F7n3xx_eDyZj2X9qk7gJayKw7_U2-3w&s=10'),
    ('Orion Nebula', 'Nebula', 1344.0, '1610-11-26', 'A diffuse nebula situated in the Milky Way, being south of Orion''s Belt in the constellation of Orion.', '#8E44AD', 4.0, 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/November/131115/2D9697486-131115-orion1photo-hmed-1000a-files.jpg'),
    ('Sirius A', 'Star', 8.6, '0001-01-01', 'The brightest star in the night sky. Sirius A is part of the binary star system Sirius, and it is the larger and more luminous of the two.', '#A9D0F5', -1.46, 'https://www.star-facts.com/wp-content/uploads/2019/09/Sirius-star.webp');