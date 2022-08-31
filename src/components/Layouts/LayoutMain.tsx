import React, { FC, ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
  };

const LayoutMain: FC<LayoutProps> = (props:LayoutProps) => {
    return (
        <main>
            <h1>layout</h1>
            {props.children}
        </main>
    );
};

export default LayoutMain;