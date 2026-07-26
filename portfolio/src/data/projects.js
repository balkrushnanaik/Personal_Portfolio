export const projects = [
  {
    id: "churn",
    title: "Customer Churn Analysis",
    tools: ["Python", "Power BI", "SQL"],
    description:
      "An end-to-end customer churn analytics project that analyzes subscriber behavior using SQL, Python, SQLite, and Power BI to uncover retention insights.",
    problem:
      "The business lacked visibility into customer churn patterns, revenue loss, and the key factors driving subscriber cancellations.",

    insight:
      "Identified high churn among Basic plans, referral customers, and specific regions, while revealing a strong relationship between support escalations and customer churn.",

    impact:
      "Built an interactive Power BI dashboard with dynamic filters and 20+ KPIs, enabling stakeholders to monitor churn, revenue, customer behavior, and retention opportunities.",
    github:
      "https://github.com/balkrushnanaik/Python-Projects/tree/main/Churn%20Analysis%20and%20Customer%20Intelligence",
    demo: "https://github.com/balkrushnanaik/Python-Projects/tree/main/Churn%20Analysis%20and%20Customer%20Intelligence",
    accent: "#2563EB",
  },
  {
    id: "cricket",
    title: "ESPN Cricket Analytics Dashboard",
    tools: ["Python", "Pandas", "Power BI"],
    description:
      "An interactive Power BI dashboard built using ESPN Cricinfo data to analyze player performance across batting, bowling, and fielding.",

    problem:
      "Cricket statistics were scattered across multiple pages, making it difficult to compare player performance efficiently.",

    insight:
      "Analyzed key batting, bowling, and fielding metrics to identify top-performing players and compare performance across different formats.",

    impact:
      "Built an interactive dashboard with KPIs, charts, and filters, enabling quick comparison of 50+ players and improving cricket performance analysis.",
    github:
      "https://github.com/balkrushnanaik/Power-BI-Dashboard-Projects/tree/main/ESPN%20Cricket%20Data%20Analysis%20Project%201",
    demo: "https://github.com/balkrushnanaik/Power-BI-Dashboard-Projects/tree/main/ESPN%20Cricket%20Data%20Analysis%20Project%201",
    accent: "#38BDF8",
  },
  {
    id: "panic",
    title: "Panic Attacks Data Analysis",
    tools: ["Python", "Excel", "Power BI"],
    description:
      "A health-data analysis project exploring triggers, frequency and demographic patterns behind panic attack episodes.",
    problem:
      "Raw survey data on panic attack episodes existed but no structured view of triggers or trends by demographic.",
    insight:
      "Sleep duration under 5 hours and caffeine intake together explained a large share of high-severity episodes in the dataset.",
    impact:
      "Produced a dashboard that helps identify the highest-leverage lifestyle factors worth addressing first.",
    github:
      "https://github.com/balkrushnanaik/Power-BI-Dashboard-Projects/tree/main/Panic%20Attacks%20Data%20Analysis%20Project%202",
    demo: "https://github.com/balkrushnanaik/Power-BI-Dashboard-Projects/tree/main/Panic%20Attacks%20Data%20Analysis%20Project%202",
    accent: "#3B82F6",
  },
  {
    id: "diwali",
    title: "Diwali Sales Analysis",
    tools: ["Python", "Pandas", "Matplotlib"],
    description:
      "A festive-season retail sales analysis identifying which customer segments and product categories drove Diwali revenue.",
    problem:
      "The retailer wanted to understand which segments to target for next year's festive marketing spend.",
    insight:
      "Married women aged 26-35 from tier-2 cities accounted for the largest share of high-value orders.",
    impact:
      "Findings informed a proposed reallocation of festive ad spend toward the highest-converting segment.",
    github:
      "https://github.com/balkrushnanaik/Python-Projects/tree/main/Diwali%20Sales%20Data%20Analysis%20Project%201",
    demo: "https://github.com/balkrushnanaik/Python-Projects/tree/main/Diwali%20Sales%20Data%20Analysis%20Project%201",
    accent: "#1D4ED8",
  },
  // {
  //   // id: "sales-performance",
  //   // title: "Sales Performance Dashboard",
  //   // tools: ["Power BI", "DAX", "SQL"],
  //   // description:
  //   //   "A regional sales performance tracker with target-vs-actual, rep leaderboards and product-mix breakdowns.",
  //   // problem: "Regional managers were compiling performance numbers manually from spreadsheets every week.",
  //   // insight: "Two regions consistently missed targets in the same three product categories, pointing to a supply rather than demand issue.",
  //   // impact: "Automated a report that previously took roughly 4 hours per week to build manually.",
  //   // github: "https://github.com/balkrushnanaik/sales-performance-dashboard",
  //   // demo: "#",
  //   // accent: "#2563EB",
  // },
  // {
  //   id: "hr-analytics",
  //   title: "HR Analytics Dashboard",
  //   tools: ["Power BI", "Excel", "DAX"],
  //   description:
  //     "An HR dashboard tracking attrition, headcount, tenure and department-level engagement indicators.",
  //   problem: "Leadership lacked visibility into which departments had the highest attrition risk.",
  //   insight: "Attrition was concentrated in employees with 1-2 years of tenure in two specific departments, not company-wide.",
  //   impact: "Gave HR a focused list of departments to prioritize for retention initiatives.",
  //   github: "https://github.com/balkrushnanaik/hr-analytics-dashboard",
  //   demo: "#",
  //   accent: "#38BDF8",
  // },
  // {
  //   id: "netflix",
  //   title: "Netflix Data Analysis",
  //   tools: ["Python", "Pandas", "Matplotlib"],
  //   description:
  //     "An exploratory analysis of Netflix's content catalog covering genre trends, release patterns and regional content mix.",
  //   problem: "Understanding how Netflix's content strategy has shifted across genres and regions over time.",
  //   insight: "TV show additions grew faster than movies after 2018, with a sharp rise in non-English originals.",
  //   impact: "Produced visual storytelling assets used to communicate catalog trends to a non-technical audience.",
  //   github: "https://github.com/balkrushnanaik/netflix-data-analysis",
  //   demo: "#",
  //   accent: "#3B82F6",
  // },
  // {
  //   id: "ecommerce",
  //   title: "E-Commerce Analytics Dashboard",
  //   tools: ["SQL", "Power BI", "Python"],
  //   description:
  //     "A funnel and revenue dashboard for an e-commerce dataset, covering acquisition channels, cart abandonment and repeat-purchase rate.",
  //   problem: "The business could not see where in the funnel customers were dropping off by channel.",
  //   insight: "Paid social traffic converted at half the rate of organic search but had the highest cart-abandonment rate.",
  //   impact: "Highlighted a specific channel-checkout mismatch worth investigating before increasing ad spend.",
  //   github: "https://github.com/balkrushnanaik/ecommerce-analytics-dashboard",
  //   demo: "#",
  //   accent: "#1D4ED8",
  // },
  // {
  //   id: "coffee-shop",
  //   title: "Coffee Shop Sales Dashboard",
  //   tools: ["Power BI", "Excel", "DAX"],
  //   description:
  //     "A daily operations dashboard for a multi-location coffee shop chain, covering peak hours, top products and location comparisons.",
  //   problem: "Store managers had no easy way to compare performance across locations and time of day.",
  //   insight: "One location consistently underperformed during afternoon hours despite strong morning sales, suggesting a staffing gap.",
  //   impact: "Surfaced an operational fix that could be tested without any additional marketing spend.",
  //   github: "https://github.com/balkrushnanaik/coffee-shop-sales-dashboard",
  //   demo: "#",
  //   accent: "#2563EB",
  // },
  // {
  //   id: "superstore",
  //   title: "Superstore Business Dashboard",
  //   tools: ["Power BI", "SQL", "Excel"],
  //   description:
  //     "A full business-health dashboard for the classic Superstore dataset covering profit, discount impact and regional performance.",
  //   problem: "Deep discounting was suspected of eroding margins, but no one had quantified it.",
  //   insight: "Discounts above 20% turned a majority of orders in the Furniture category unprofitable.",
  //   impact: "Provided a clear, data-backed case for revising the discount policy on specific sub-categories.",
  //   github: "https://github.com/balkrushnanaik/superstore-business-dashboard",
  //   demo: "#",
  //   accent: "#38BDF8",
  // },
];
