import React from 'react';
import DocumentTitle from 'react-document-title';

import Intro from '../components/Intro';

export const data = {
    path: '/404.html'
};

export default class NotFound extends React.Component {
    render() {
        return (
            <DocumentTitle title="Not Found">
                <Intro
                    title="Not Found"
                    description="Sorry, but the page you were trying to view does not exist."
                    color="#C91F37"
                    fullpage
                />
            </DocumentTitle>
        );
    }
}
