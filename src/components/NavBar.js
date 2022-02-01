import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
// you #+link b/c you want everything in the array irated to have # infornt of it
  const anchors = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ))
  return <nav>{anchors}</nav>;
}

export default NavBar;
