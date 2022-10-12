import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bikes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Bikes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/suvs"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              SUV's
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
