import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar classname='header'>
                <NavbarBrand href='/'>React Library</NavbarBrand>
                <Nav className='ml-auto' navbar></Nav>
                    <NavItem>
                        <NavLink href="https://github.com/cflemmonds/reactFundamentals">
                            GitHub
                        </NavLink>
                    </NavItem>
            </Navbar>
        </header>
    )
}

export default Header;