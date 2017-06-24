import React from 'react';
import styled from 'styled-components';

import Intro from '../Intro';
import FeaturedProject from '../FeaturedProject';
import OpenSourceProject from '../OpenSourceProject';

const StyledHomePage = styled.div`
    > section {
        margin-bottom: 40px;
    }

    .open-source {
        padding: 40px 0;
    }
`;

class HomePage extends React.Component {
    render() {
        const { featured, openSource } = this.props;
        return (
            <StyledHomePage>
                <Intro
                    title="Hi there!"
                    description="I'm Adam Krogh, a full-stack developer living in Edmonton."
                />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Featured Projects</h2>
                            </div>
                        </div>
                        {featured.map(page => (
                            <FeaturedProject page={page} key={page.data.id} />
                        ))}
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Open Source</h2>
                            </div>
                        </div>
                        <div className="row open-source">
                            {openSource.map(project => (
                                <OpenSourceProject
                                    {...project}
                                    key={project.repo}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </StyledHomePage>
        );
    }
}

export default HomePage;
