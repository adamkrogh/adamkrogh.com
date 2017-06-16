import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import 'node_modules/font-awesome/scss/font-awesome.scss';
import 'static/scss/styles.scss';

import 'highlight.js';
import { config } from 'config';
import SiteNav from '../components/SiteNav';

class Template extends React.Component {
    render() {
        const { location, children } = this.props;
        return (
            <div>
                <SiteNav title={config.siteTitle} {...this.props} />
                {children}
            </div>
        );
    }
}

Template.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object
};

export default Template;
