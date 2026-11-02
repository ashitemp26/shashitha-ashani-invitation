CREATE TABLE IF NOT EXISTS rsvps (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text,
  attendance boolean NOT NULL,
  guest_count smallint,
  notes text NOT NULL DEFAULT '' CHECK (char_length(notes) <= 1000),
  team text,
  relationship text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT rsvps_guest_count_matches_attendance CHECK (
    (attendance AND guest_count BETWEEN 1 AND 4) OR
    (NOT attendance AND guest_count = 0)
  )
);

ALTER TABLE rsvps ALTER COLUMN email DROP NOT NULL;
ALTER TABLE rsvps ALTER COLUMN guest_count DROP NOT NULL;
ALTER TABLE rsvps ADD COLUMN IF NOT EXISTS team text;
ALTER TABLE rsvps ADD COLUMN IF NOT EXISTS relationship text;