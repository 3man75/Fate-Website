import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Nav, NavLink, NavMenu } from "./NavbarElements";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Castoria" activeStyle>
            Castoria Page
          </NavLink>
          <NavLink to="/Space Ishtar" activeStyle>
            Space Ishtar Page
          </NavLink>
          <NavLink to="/Super Orion" activeStyle>
            Super Orion Page
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
