SELECT ReportsTo, COUNT(*) AS Members, ROUND(AVG(Age)) As [Average Age] FROM maintable_FPZVE WHERE ReportsTo IS NOT NULL GROUP BY ReportsTo