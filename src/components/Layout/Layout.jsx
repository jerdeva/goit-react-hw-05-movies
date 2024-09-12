import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

import {ListNav,ListItem, Container, Header, Name, FooterText, WrapperL} from './Layout.styled'


export const Layout = ()=>{
    return (
        <>
                <WrapperL>
                    <Header>
                    <Name>MovieMap</Name>
                    <ListNav>
                        <ListItem to="/" end>Home</ListItem>
                        <ListItem to="/movies">Movie</ListItem>
                    </ListNav>
                </Header>
                </WrapperL>
            <Container>

                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
                                <footer>
                    <FooterText>&copy; {new Date().getFullYear()} Movie Search</FooterText>
                </footer>
            </Container>

        </>
)
}