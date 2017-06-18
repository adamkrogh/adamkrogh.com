import React from 'react';
import DocumentTitle from 'react-document-title';

import { DefaultPage, ProjectPage } from '../components/Templates';
import { config } from 'config';

const getLayoutComponent = layout => {
    switch (layout) {
        case 'project':
            return ProjectPage;
        default:
            return DefaultPage;
    }
}

class MarkdownWrapper extends React.Component {
    render() {
        const { page } = this.props.route;
        const { layout, title } = page.data;
        const Template = getLayoutComponent(layout);
        return (
            <DocumentTitle title={`${title} - ${config.siteTitle}`}>
                <Template {...this.props} />
            </DocumentTitle>
        );
    }
}

export default MarkdownWrapper;
