import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiSnowflake,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import {
  FaBroom,
  FaChartBar,
  FaChartLine,
  FaLightbulb,
  FaPuzzlePiece,
  FaAward,
  FaCertificate,
  FaLaptopCode,
  FaGoogle,
} from "react-icons/fa6";
import {
  TbSql,
  TbMathFunction,
  TbFunction,
  TbBolt,
  TbLayoutDashboard,
} from "react-icons/tb";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { IoLogoTableau } from "react-icons/io5";

const registry = {
  SiPython,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiSnowflake,
  SiGit,
  SiGithub,
  SiFigma,
  FaBroom,
  FaChartBar,
  FaChartLine,
  FaLightbulb,
  FaPuzzlePiece,
  FaAward,
  FaCertificate,
  FaLaptopCode,
  FaGoogle,
  TbSql,
  TbMathFunction,
  TbFunction,
  TbBolt,
  TbLayoutDashboard,
  PiMicrosoftExcelLogo,
  IoLogoTableau,
};

export default function Icon({ name, ...props }) {
  const Cmp = registry[name] || FaChartBar;
  return <Cmp {...props} />;
}
