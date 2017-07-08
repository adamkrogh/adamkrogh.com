import React from 'react';
import { Helmet } from 'react-helmet';

import 'node_modules/font-awesome/scss/font-awesome.scss';
import 'static/scss/styles.scss';
import { config } from 'config';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { getProjectsFromRoute, openSourceProjects } from 'utils/projects';

class Template extends React.Component {
    render() {
        const { children, route } = this.props;
        const featuredProjects = getProjectsFromRoute(route).map(
            page => page.data
        );
        return (
            <div>
                <Helmet
                    defaultTitle={config.siteTitle}
                    titleTemplate={`%s - ${config.siteTitle}`}
                >
                    <meta
                        name="description"
                        content="Hi there! I'm Adam Krogh, a full-stack developer interested in all aspects of creating great software."
                    />
                </Helmet>
                <Navbar title={config.siteTitle} {...this.props} />
                {children}
                <Footer
                    featured={featuredProjects}
                    openSource={openSourceProjects}
                />
            </div>
        );
    }
}

export default Template;
