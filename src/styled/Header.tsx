import styled from '@emotion/styled';
import {
    AppBar
} from '@mui/material';

const StyledHeader = styled(AppBar)`
    background-color: #fff;
    color: #333;
    min-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
` as typeof AppBar

export {
    StyledHeader
}