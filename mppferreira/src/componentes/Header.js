import React from "react";

function Header({ title, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <>
      <header style={headerStyles}>
        <div className="container">
          <h2> {title}</h2>
        </div>
      </header>
    </>
  );
}

export default Header;
