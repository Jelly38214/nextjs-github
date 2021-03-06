import React from "react";
import Link from "next/link";
import { Button } from "antd";

export default ({ children }) => {
  return (
    <>
      <header>
        <Link href="/a?id=1" as="/a/1">
          <Button>A</Button>
        </Link>
        <Link href="/b?id=1" as="/b/1">
          <Button>B</Button>
        </Link>
      </header>
      <div>{children}</div>
    </>
  );
};
