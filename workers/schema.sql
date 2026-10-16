-- Anonymous pageview geography: no IP, persistent visitor IDs, or cookies.
-- Legacy `fingerprint` field is a fresh random pageview event ID, not a visitor hash.
CREATE TABLE IF NOT EXISTS geo_visits (
 fingerprint TEXT NOT NULL PRIMARY KEY,
 day TEXT NOT NULL,
 country TEXT NOT NULL,
 lat INTEGER NOT NULL,
 lon INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_geo_visits_day ON geo_visits(day);
