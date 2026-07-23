export const skillCategories = [
  {
    label: "Analysis",
    skills: [
      { name: "Python", level: 88, icon: "SiPython" },
      { name: "SQL", level: 90, icon: "TbSql" },
      { name: "Pandas", level: 85, icon: "SiPandas" },
      { name: "NumPy", level: 80, icon: "SiNumpy" },
      { name: "Statistics", level: 82, icon: "TbMathFunction" },
      { name: "Data Cleaning", level: 90, icon: "FaBroom" },
    ],
  },
  {
    label: "BI & Reporting",
    skills: [
      { name: "Power BI", level: 90, icon: "TbLayoutDashboard" },
      { name: "DAX", level: 82, icon: "TbFunction" },
      { name: "Power Query", level: 84, icon: "TbBolt" },
      { name: "Excel", level: 92, icon: "PiMicrosoftExcelLogo" },
      { name: "Tableau", level: 75, icon: "IoLogoTableau" },
      { name: "Data Visualization", level: 88, icon: "FaChartBar" },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "MySQL", level: 85, icon: "SiMysql" },
      { name: "Snowflake", level: 70, icon: "SiSnowflake" },
      { name: "Git", level: 78, icon: "SiGit" },
      { name: "GitHub", level: 80, icon: "SiGithub" },
      { name: "Figma", level: 68, icon: "SiFigma" },
      { name: "Matplotlib", level: 78, icon: "FaChartLine" },
    ],
  },
  {
    label: "Applied",
    skills: [
      { name: "Business Intelligence", level: 86, icon: "FaLightbulb" },
      { name: "Problem Solving", level: 90, icon: "FaPuzzlePiece" },
    ],
  },
];

export const flatSkills = skillCategories.flatMap((c) => c.skills);
