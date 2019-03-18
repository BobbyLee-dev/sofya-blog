import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1020px) {
    padding: 20px calc(20px + (50% - (1020px / 2)));
  }
`

const SiteTitle = styled.h1`
  a {
    color: black;
    text-decoration: none;
    font-family: Dancing Script, cursive;
    font-weight: 400;
  }
`

// const Nav = styled.nav``

const NavItems = styled.ul`
  margin: 0;
  list-style-position: unset;
  display: flex;
  list-style-type: none;
`

const NavItem = styled.li`
  margin: 0;
  a {
    text-decoration: none;
    color: #000;
    font-family: "Open Sans", sans-serif;
    color: #777;
  }
`

const Header = ({ siteTitle, menu }) => (
  <HeaderWrapper>
    <SiteTitle>
      <Link to="/">{siteTitle}</Link>
    </SiteTitle>
    <nav>
      <NavItems>
        {menu.map(item => (
          <NavItem>
            <Link
              to={`/${item.object_slug}`}
              key={item.wordpress_id}
              style={{
                marginRight: `10px`,
              }}
            >
              {item.title}
            </Link>
          </NavItem>
        ))}
      </NavItems>
    </nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
