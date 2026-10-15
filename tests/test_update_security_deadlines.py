"""Offline regression tests for security conference ingestion."""
import importlib.util
import unittest
from datetime import datetime, timezone
from pathlib import Path

MODULE = Path(__file__).resolve().parents[1] / "scripts" / "update_security_deadlines.py"
SPEC = importlib.util.spec_from_file_location("security_updater", MODULE)
updater = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(updater)
NOW = datetime(2026, 10, 15, 18, 0, tzinfo=timezone.utc)


class DeadlineSyncTests(unittest.TestCase):
    def test_aoe_exact(self):
        d = updater.parse_deadline("2027-01-26 23:59", 2027, None)
        self.assertEqual(d["iso_utc"], "2027-01-27T11:59:00Z")
        self.assertEqual(d["zone_label"], "AoE (UTC−12)")

    def test_explicit_zone_and_dst(self):
        d = updater.parse_deadline("2027-03-28 23:59", 2027, "Europe/Berlin")
        self.assertEqual(d["iso_utc"], "2027-03-28T21:59:00Z")

    def test_rolling_year_conventions(self):
        self.assertEqual(
            updater.expand_rolling_date("%Y-11-30 23:59", 2027),
            "2026-11-30 23:59"
        )
        self.assertEqual(
            updater.expand_rolling_date("%y-02-28 23:59", 2027),
            "2027-02-28 23:59"
        )

    def test_never_invent_tbd_or_time(self):
        self.assertIsNone(updater.parse_deadline("TBD", 2027, None))
        self.assertIsNone(updater.parse_deadline("2027-03-16", 2027, None))
        self.assertIsNone(updater.parse_deadline("2027-02-30 23:59", 2027, None))
        self.assertIsNone(updater.parse_deadline("2027-10-08 23:59", 2027, "???"))

    def test_unsafe_url_and_source_text(self):
        self.assertEqual(updater.safe_web_url("javascript:alert(1)"), "")
        self.assertEqual(updater.safe_web_url("https://user:pass@example.org/x"), "")
        self.assertEqual(updater.plain("x <script>alert(1)</script>"), "x scriptalert(1)/script")

    def test_core_dates_not_replaced(self):
        manual = {
            "conferences": [{"id": "sp", "year": 2027}],
            "events": [{"conf": "sp", "iso_utc": "2026-11-18T11:59:59Z"}],
        }
        # A real release would have many entries. The synthetic sample
        # verifies that conflicting upstream dates never supersede manual.
        many = []
        for x in range(25):
            name = ["S&P (Oakland)", "ASIA CCS", "Euro S&P", "HOST",
                    "CSF", "PETS", "CHES", "PST"][x % 8]
            many.append({
                "name": name, "year": 2027,
                "link": "https://example.org/cfp",
                "deadline": ["2027-01-26 23:59", "2027-04-15 23:59"],
            })
        data = updater.build_dataset(many, manual, NOW)
        self.assertFalse(any(e["conf"] == "sp" for e in data["events"]))
        self.assertTrue(any(e["conf"] == "asiaccs" for e in data["events"]))
        self.assertGreaterEqual(len(data["conferences"]), 5)

    def test_refuse_truncated_feed(self):
        with self.assertRaises(ValueError):
            updater.build_dataset([], {"conferences":[],"events":[]}, NOW)

    def test_output_stable_without_timestamps(self):
        many = [
            {"name": "ASIA CCS", "year": 2027,
             "link": "https://example.org", "deadline": ["2027-01-26 23:59"]}
            for _ in range(21)
        ]
        # Keep five distinct venues to satisfy completeness checks.
        for name in ["Euro S&P", "CSF", "PETS", "HOST", "CHES"]:
            many.append({"name": name, "year": 2027, "link": "https://example.org",
                         "deadline": ["2027-03-12 23:59"]})
        a = updater.build_dataset(many, {"conferences":[],"events":[]}, NOW)
        b = updater.build_dataset(many, {"conferences":[],"events":[]}, NOW)
        self.assertEqual(a,b)
        self.assertFalse("fetched_at" in a)


if __name__ == "__main__":
    unittest.main()
