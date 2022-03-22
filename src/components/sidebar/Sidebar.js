import "./sidebar.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SubjectIcon from "@mui/icons-material/Subject";
import SchoolIcon from "@mui/icons-material/School";
import ClassIcon from "@mui/icons-material/Class";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">DashSchool</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">TABLAS</p>
          <li>
            <SubjectIcon className="icon" />
            <span>Materias</span>
          </li>
          <li>
            <SchoolIcon className="icon" />
            <span>Profesores</span>
          </li>
          <li>
            <ClassIcon className="icon" />
            <span>Aulas</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>        
      </div>
    </div>
  );
};
