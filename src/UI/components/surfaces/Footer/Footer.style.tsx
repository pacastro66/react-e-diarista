import {Container, ListItem, Typography,Link, IconButton, LinkProps, List } from "@mui/material";
import { styled} from "@mui/material/styles";

import { PropsWithChildren } from "react";
import theme from "UI/themes/light-themes";


export const FooterContainer = styled("footer")`
    background-color: ${({theme})=> theme.palette.primary.main} ;
    color: ${({theme})=>theme.palette.primary.contrastText};
    padding: ${({theme})=>theme.spacing(4,0)};

`;
export const FooterGrid= styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: ${({theme})=>theme.spacing(2)};
    flex-wrap: wrap;
`

export const FooterTitle =styled((props:PropsWithChildren)=>(
    <Typography variant="body2" component="h2" {...props}/>
))`
 font-weight:bold ;
`;

export const FooterListItem=styled((props: PropsWithChildren)=>(
    <ListItem disableGutters {...props}/>
))``;

export const SocialContainer= styled("div")`
    display: flex;
    flex-direction: column;
`;
export const AppList = styled("ul")`
    display: flex;
    gap: ${({theme})=> theme.spacing()};
    list-style: none;
    padding: 0;
    margin: ${({theme})=>theme.spacing(2,0,3)};
    img{
        width: 112px;
    }
`;

export const SocialButton= styled((props:LinkProps<typeof IconButton>)=>(
    <Link component={IconButton} 
    target={"_blank"}
    rel={"nooper noreferrer"} 
    {...props} />
))`
background-color: ${({theme})=>theme.palette.primary.dark};
i{
    color: ${({theme})=>theme.palette.primary.contrastText};
}
`;

export const FooterSocialList= styled(List)`
    display: grid;
    grid-template-columns: repeat(3,58px);
    grid-gap:${({theme})=>theme.spacing(1.5)} ;

`;