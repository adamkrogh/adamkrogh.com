import React from 'react';
import DocumentTitle from 'react-document-title';

import { config } from 'config';
import { DefaultPage, ProjectPage, AboutPage } from '../components/Templates';

const getLayoutComponent = layout => {
    switch (layout) {
        case 'project':
            return ProjectPage;

        case 'about':
            return AboutPage;

        default:
            return DefaultPage;
    }
};

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
