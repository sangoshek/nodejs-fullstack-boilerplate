import React, { FC, ReactNode } from "react";
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import { ContentBodyWrapper } from 'src/styled/Wrapper';

type LayoutProps = {
    children: ReactNode;
  };

const LayoutMain: FC<LayoutProps> = (props:LayoutProps) => {
    return (
        <>
            <Header title="My project"/>
            <ContentBodyWrapper>            
                {props.children}
            </ContentBodyWrapper>
            <Footer copyright="2022(c)sangoshek.com. All right reserved." />
        </>        
    );
};

export default LayoutMain;