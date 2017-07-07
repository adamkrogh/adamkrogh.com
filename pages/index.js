import React from 'react';
import styled from 'styled-components';

import { getProjectsFromRoute, openSourceProjects } from '../utils/projects';
import Intro from '../components/Intro';
import FeaturedProject from '../components/FeaturedProject';
import OpenSourceProject from '../components/OpenSourceProject';
import SectionHeader from '../components/SectionHeader';

const StyledHomePage = styled.div`
    .open-source-section {
        padding-bottom: 60px;
        background-color: #f4f4f4;
    }

    @media (max-width: 576px) {
        .open-source a {
            margin-bottom: 30px;
        }
    }
`;

class SiteIndex extends React.Component {
    render() {
        const featured = getProjectsFromRoute(this.props.route);
        return (
            <StyledHomePage className="page">
                <Intro
                    title="Hi there!"
                    description="I'm Adam Krogh, a full-stack developer interested in all aspects of creating great software."
                />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <SectionHeader>Featured Projects</SectionHeader>
                                {featured.map(page => (
                                    <FeaturedProject page={page} key={page.data.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="open-source-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <SectionHeader>Open Source</SectionHeader>
                                <div className="row open-source">
                                    {openSourceProjects.map(project => (
                                        <OpenSourceProject
                                            {...project}
                                            key={project.repo}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </StyledHomePage>
        );
    }
}

export default SiteIndex;
