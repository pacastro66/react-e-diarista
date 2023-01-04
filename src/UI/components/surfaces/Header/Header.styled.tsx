import {styled} from "@mui/material/styles";
import {AppBar} from "@mui/material";


export const HeaderAppBar = styled(AppBar)`
    &.MuiAppBar-root {
    background-color:${({theme}) =>theme.palette.background.paper};
    box-shadow: 0px 5px 4px rgba(0,0,0,0.05);
    color:${({theme}) => theme.palette.text.secondary}
    }
    ${({theme}) => theme.breakpoints.up("md")} {
        .MuiToolbar-root {
           display:grid;
           grid-template-columns: auto auto 1fr auto;
           gap: ${({theme}) => theme.spacing(9)};
           heigth: 100px;
       
        }
       }
        `;   


export const HeaderLogo = styled("img")`
    ${({theme})=> theme.breakpoints.up("md")}{
        heigth: 47px;
    }

`;


export const ButtonContainer = styled("div")`
    display : grid;
    grid-template-columns: repeat(3,auto);
    gap: ${({theme}) => theme.spacing(2)}

`;