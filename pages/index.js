import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'lodash/sortBy';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

import FeaturedProject from '../components/FeaturedProject';

const SiteIndex = ({ route }) => {
    const projects = sortBy(route.pages, page => page.data.id).filter(
        page => page.data.layout === 'post'
    );

    return (
        <DocumentTitle title={config.siteTitle}>
            <div>
                <section className="jumbotron jumbotron-fluid intro">
                    <div className="container">
                        <div className="display-3">Hi!</div>
                        <p className="lead ">
                            I'm Adam Krogh, a full-stack developer living in Edmonton.
                        </p>
                    </div>
                </section>
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
                            <FeaturedProject page={page} key={page.data.id} />
                        ))}
                    </div>
                </section>
            </div>
        </DocumentTitle>
    );
};

SiteIndex.propTypes = {
    route: PropTypes.object
};

export default SiteIndex;
