import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #292b2c;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    padding: 40px 0px;
    margin-top: 0px;
`;

class Footer extends React.Component {
    render() {
        const { projects } = this.props;
        console.log(projects);
        return (
            <StyledFooter>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                {projects.map(project => (
                                    <li key={project.title}>{project.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </StyledFooter>
        );
    }
}

export default Footer;