import React, { FC, ReactNode } from "react";
import { ContentWrapperMaxWidth } from 'src/styled/Wrapper';
import { StyledFooter } from "src/styled/Footer";
import {
    Typography
} from '@mui/material';

type FooterProps = {
    copyright: string
    children?: ReactNode;
  };

const Footer: FC<FooterProps> = (props:FooterProps) => {
    return (
        <StyledFooter component="nav">
            <ContentWrapperMaxWidth>
                <Typography variant="body1" component="span">{props.copyright}</Typography>
            </ContentWrapperMaxWidth>
        </StyledFooter>
    );
};

export default Footer;