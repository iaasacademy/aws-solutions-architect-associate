/*
This query summarizes sales data.
We group by shop name and sort by total revenue.
*/
SELECT "ShopID", SUM("TotalSales") AS total_revenue
FROM "sales"
GROUP BY "ShopID"
ORDER BY total_revenue DESC;


-- Example 2: Top-selling products
SELECT "Product", SUM("QuantitySold") AS total_units
FROM "sales"
GROUP BY "Product"
ORDER BY total_units DESC;

-- Example 3: Daily sales for London
SELECT "Date", SUM("TotalSales") AS daily_sales
FROM "sales"
WHERE "TownCity" = 'London'
GROUP BY "Date"
ORDER BY "Date";