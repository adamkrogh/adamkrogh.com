import React from 'react';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';

import { config } from 'config';
import { getProjectsFromRoute, openSourceProjects } from '../utils/projects';
import Intro from '../components/Intro';
import FeaturedProject from '../components/FeaturedProject';
import OpenSourceProject from '../components/OpenSourceProject';

const StyledHomePage = styled.div`
    > section {
        margin-bottom: 40px;
    }

    .open-source {
        padding: 40px 0;
    }
`;

class SiteIndex extends React.Component {
    render() {
        const featured = getProjectsFromRoute(this.props.route);
        return (
            <DocumentTitle title={config.siteTitle}>
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
                                <FeaturedProject
                                    page={page}
                                    key={page.data.id}
                                />
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
                                {openSourceProjects.map(project => (
                                    <OpenSourceProject
                                        {...project}
                                        key={project.repo}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </StyledHomePage>
            </DocumentTitle>
        );
    }
}

export default SiteIndex;
