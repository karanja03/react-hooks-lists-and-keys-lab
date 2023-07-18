import React from "react";

function NavBar() {
  const links = ["Home", "About", "Projects"];
  console.log(links)

  return <nav>{
     links.map(link =>
      <a key ={link} href={`#${link}`}>{ link } </a>)
    }</nav>;
}

export default NavBar;
