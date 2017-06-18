import React from 'react';
import sortBy from 'lodash/sortBy';
import DocumentTitle from 'react-document-title';

import { config } from 'config';
import { HomePage } from '../components/Templates'

class SiteIndex extends React.Component {
    render() {
        const projects = sortBy(
            this.props.route.pages,
            page => page.data.id
        ).filter(page => page.data.layout === 'project');

        return (
            <DocumentTitle title={config.siteTitle}>
                <HomePage projects={projects} />
            </DocumentTitle>
        );
    }
}

export default SiteIndex;
