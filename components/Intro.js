import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

const Lead = styled.p`
    max-width: 25em;
`;

const Jumbotron = ({ title, description, className }) => (
    <section className={`jumbotron jumbotron-fluid ${className}`}>
        <div className="container">
            <h1 className="title">{title}</h1>
            <Lead className="lead">{description}</Lead>
        </div>
    </section>
);

const Intro = styled(Jumbotron)`
    background-color: ${props => props.color};
    color: ${props => (props.inverse ? '#383838' : '#fff')};
    margin-bottom: 0;
    padding: 4rem 1rem;

    ${ifProp('fullpage', css`
        padding: 30vh 0 !important;
        margin-bottom: 0;
    `)}
    
    @media (min-width: 576px) {
        padding: 7rem 2rem;
    }

    .title {
        font-size: 4rem;
        font-weight: 400;
        text-transform: none;

        @media (min-width: 576px) and (max-width: 767px) {
            font-size: 3rem;
        }
        
        @media (max-width: 576px) {
            font-size: 2.5em;
        }
    }

    .lead {
        font-size: 24px;
    }
`;

Intro.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string,
    inverse: PropTypes.bool,
    fullpage: PropTypes.bool
};

Intro.defaultProps = {
    color: '#0078B8',
    inverse: false,
    fullpage: false
};

export default Intro;
