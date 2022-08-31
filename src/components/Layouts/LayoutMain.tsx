import React, { FC, ReactNode } from "react";
import Header from '../Header/Header';

type LayoutProps = {
    children: ReactNode;
  };

const LayoutMain: FC<LayoutProps> = (props:LayoutProps) => {
    return (
        <>
            <Header title="My project"/>
            <main>            
                {props.children}
            </main>
        </>        
    );
};

export default LayoutMain;