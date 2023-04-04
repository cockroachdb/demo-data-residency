import React, { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header className="mx-auto p-4"></header>
      <main className="prose max-w-7xl mx-auto px-4 sm:px-8">{children}</main>
    </Fragment>
  );
};

export default Layout;
