import React from 'react';
import sortBy from 'lodash/sortBy';

import 'node_modules/font-awesome/scss/font-awesome.scss';
import 'static/scss/styles.scss';
import { config } from 'config';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Template extends React.Component {
    render() {
        const { children } = this.props;
        const projects = sortBy(
            this.props.route.pages,
            page => page.data.id
        )
            .filter(page => page.data.layout === 'project')
            .map(page => page.data);

        return (
            <div>
                <Navbar title={config.siteTitle} {...this.props} />
                {children}
                <Footer projects={projects} />
            </div>
        );
    }
}

export default Template;
