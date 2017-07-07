import styled from 'styled-components';


const SectionHeader = styled.h2`
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: .05em;
    font-weight: 600;
    color: #999;

    &::before {
        border-top: 3px solid #0078B8;
        opacity: 0.4;
        content: '';
        display: block;
        width: 30px;
        margin-bottom: 10px;
    }
`;

export default SectionHeader;
