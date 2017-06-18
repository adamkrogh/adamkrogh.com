import React from 'react';

import 'node_modules/font-awesome/scss/font-awesome.scss';
import 'static/scss/styles.scss';
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

export default Template;
