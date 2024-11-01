import { Image, List, Nav, Wrapper, NavLink, ListItem, Button } from "./navbar.styles";
import LogoFipp from "../../assets/images/logo-fipp.png";
import LogoUnoeste from "../../assets/images/logo-unoeste.png";
export const NavBar = () => {

    const openLink = () => {
        const url = "https://www.unoeste.br/";
        window.open(url, "_blank");
    }

    return (
        <Wrapper>
            <Nav>
                <Image src={LogoFipp}/>
                <List>
                    <ListItem>
                        <NavLink to="/">Home</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/corpo-docente">Corpo Docente</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/contato">Contato</NavLink>
                    </ListItem>
                    <ListItem>
                        <Button onClick={openLink}><Image src={LogoUnoeste} alt="Logo da Unoeste"/></Button>
                    </ListItem>
                </List>
            </Nav>
        </Wrapper>
    );
}