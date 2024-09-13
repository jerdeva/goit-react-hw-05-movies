import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {ListNav,ListItem, Container, Header, FooterText, WrapperL} from './Layout.styled'


export const Layout = ()=>{
    return (
        <>
                <WrapperL>
                    <Header>
                    <ListNav>
                        <ListItem to="/" end>Home</ListItem>
                        <ListItem to="/movies">Search</ListItem>
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