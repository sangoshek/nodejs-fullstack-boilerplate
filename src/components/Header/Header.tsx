import React, { FC, ReactNode } from "react";
import { ContentWrapperMaxWidth } from '../../styled/Wrapper';
import { StyledHeader } from '../../styled/Header';
import {
    Typography
} from '@mui/material';

type HeaderProps = {
    logoSrc?: String;
    title: String
    children?: ReactNode;
  };

const Header: FC<HeaderProps> = (props:HeaderProps) => {
    return (
        <StyledHeader component="nav">
            <ContentWrapperMaxWidth>
                <Typography variant="h4" component="span">{props.title}</Typography>
            </ContentWrapperMaxWidth>
        </StyledHeader>
    );
};

export default Header;