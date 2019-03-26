import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    color: ${({ color }) => (color ? color : 'inherit')};
    font-size: 5rem;
`;

export default Header;