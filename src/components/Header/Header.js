import React from 'react';
// import './Header.css';
import styled from 'styled-components';

export default function Header(props) {
  const Link = props.link;
  return (
    <StyledNav className='navbar navbar'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='/'>
            <h2>JDSB</h2>
          </a>
          <button
            type='button'
            className='navbar-toggle'
            data-toggle='collapse'
            data-target='#myNavbar'
          >
            <i className='icon-Align-Right icon icon--lg nav-button-icon text-center' />
          </button>
        </div>
        <div className='collapse navbar-collapse' id='myNavbar'>
          <ul className='nav navbar-nav'>
            <li className='active'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/resources'>Resources</Link>
            </li>
            <li>
              <Link to='/events'>Upcoming Events</Link>
            </li>
            <li>
              <Link to='/organization'>Organization</Link>
            </li>
            <li>
              <a href='https://juniordevstruggleblog.com/' target='_blank'>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background: green;
  height: 80px;

  h2 {
    margin: 0;
  }
`;
