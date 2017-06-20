import React from 'react';
import styled from 'styled-components';

const Jumbotron = ({ children, className }) => (
    <section className={`jumbotron jumbotron-fluid ${className}`}>
        {children}
    </section>
);

const Intro = styled(Jumbotron)`
    background-color: ${props => props.color || '#0078B8'};
    color: ${props => (props.inverse ? '#383838' : '#fff')};
    @media (min-width: 576px) {
        padding: 7rem 2rem;
    }
`;

export default Intro;
