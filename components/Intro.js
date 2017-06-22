import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/bg-intro.png';

const Jumbotron = ({ children, className }) => (
    <section className={`jumbotron jumbotron-fluid ${className}`}>
        {children}
    </section>
);

const Intro = styled(Jumbotron)`
    background-color: ${props => props.color || '#0078B8'};
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    color: ${props => (props.inverse ? '#383838' : '#fff')};

    @media (min-width: 576px) {
        padding: 7rem 2rem;
    }
    
    .container > h1,
    .container > div {
        @media (max-width: 576px) {
            font-size: 30px;
        }
        
        @media (min-width: 576px) and (max-width: 766px) {
            font-size: 40px;
        }
        
        margin-bottom: 0.5rem;
    }

    p.lead {
        font-size: 22px;
    }

`;

export default Intro;
