import React from 'react';
import DocumentTitle from 'react-document-title';

import { config } from 'config';
import { HomePage } from '../components/Templates';
import { getProjectsFromRoute, openSourceProjects } from '../utils/projects';

class SiteIndex extends React.Component {
    render() {
        const featuredProjects = getProjectsFromRoute(this.props.route);
        return (
            <DocumentTitle title={config.siteTitle}>
                <HomePage
                    featured={featuredProjects}
                    openSource={openSourceProjects}
                />
            </DocumentTitle>
        );
    }
}

export default SiteIndex;
