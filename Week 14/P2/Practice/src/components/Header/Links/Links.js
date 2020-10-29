import React from "react";

import styles from "./Links.module.css";

const links = [
  {
    id: 1,
    name: "Become a host",
    path: "https://www.google.ro",
  },
  {
    id: 2,
    name: "Help",
    path: "https://www.google.ro",
  },
  {
    id: 3,
    name: "Sign up",
    path: "https://www.google.ro",
  },
  {
    id: 4,
    name: "Log in",
    path: "https://www.google.ro",
  },
];

const Links = () => {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.id} className={styles.link}>
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
