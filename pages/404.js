import React from 'react';
import { Helmet } from 'react-helmet';

import Intro from 'components/Intro';

export const data = {
    path: '/404.html'
};

export default class NotFound extends React.Component {
    render() {
        const title = 'Not Found';
        const description =
            'Sorry, but the page you were trying to view does not exist.';
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Helmet>
                <Intro
                    title={title}
                    description={description}
                    color="#C91F37"
                    fullpage
                />
            </div>
        );
    }
}
