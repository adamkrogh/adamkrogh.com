import React from 'react';
import PropTypes from 'prop-types';

import { Intro } from './Shared';

class ProjectPage extends React.Component {
    render() {
        const { page } = this.props.route;
        const { title, description, category, body, color } = page.data;
        return (
            <div>
                <Intro color={color}>
                    <div className="container">
                        <h1 className="display-3">{title}</h1>
                        <p className="lead ">
                            {description}
                        </p>
                    </div>
                </Intro>
                <section className="content">
                    <div className="container">
                        <div className="articles col-md-12">
                            <div className="article-wrap">
                                <div
                                    className="page-content"
                                    dangerouslySetInnerHTML={{ __html: body }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ProjectPage;
