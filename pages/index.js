import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'lodash/sortBy';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
import styled from 'styled-components';

import FeaturedProject from '../components/FeaturedProject';
import { Intro } from '../components/Shared';

class SiteIndex extends React.Component {
    render() {
        const projects = sortBy(
            this.props.route.pages,
            page => page.data.id
        ).filter(page => page.data.layout === 'project');

        return (
            <DocumentTitle title={config.siteTitle}>
                <div>
                    <Intro>
                        <div className="container">
                            <div className="display-3">Hi!</div>
                            <p className="lead ">
                                I'm Adam Krogh, a full-stack developer living in Edmonton.
                            </p>
                        </div>
                    </Intro>
                    <section className="projects">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="h3">
                                        Featured Projects
                                    </h2>
                                </div>
                            </div>
                            {projects.map(page => (
                                <FeaturedProject
                                    page={page}
                                    key={page.data.id}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </DocumentTitle>
        );
    }
}

SiteIndex.propTypes = {
    route: PropTypes.object
};

export default SiteIndex;
