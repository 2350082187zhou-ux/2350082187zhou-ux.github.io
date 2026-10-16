-- Opt-in IP-geolocation aggregates; never store raw IP addresses.
CREATE TABLE IF NOT EXISTS geo_visits (
 fingerprint TEXT NOT NULL PRIMARY KEY,
 day TEXT NOT NULL,
 country TEXT NOT NULL,
 lat INTEGER NOT NULL,
 lon INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_geo_visits_day ON geo_visits(day);
