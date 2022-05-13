import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavLogo, MenuIcon, BagIconWrapper, BagIcon, ItemCount, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, ExpandToggle} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo onClick={toggleHome}> 
                    <h5>naadanvipani</h5>
                </NavLogo>  
                <MenuIcon onClick={toggle}>
                    <ExpandToggle />
                </MenuIcon>
            </NavbarContainer> 
            <NavMenu>
                <NavItem>
                    <NavLinks to='/' smooth={true} duration={500} spy={true} offset={-80} exact='true'  >Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='products' smooth={true} duration={500} spy={true} offset={-120} exact='true' >Products</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='Orders' smooth={true} duration={500} spy={true} offset={-80} exact='true' >Orders</NavLinks>
                </NavItem>
                <NavMenu>
                <BagIconWrapper>
                <BagIcon />
                <ItemCount>123</ItemCount>
            </BagIconWrapper> 
            
            </NavMenu>
            
            </NavMenu>

            
            <NavBtn>
                <NavBtnLink to="/cartlist" onClick={toggle}>Sign In</NavBtnLink>
            </NavBtn>
            
        </Nav>       
        </>
        
    )
} 

export default Navbar
