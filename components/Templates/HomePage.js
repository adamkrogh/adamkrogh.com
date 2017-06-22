import React from 'react';

import Intro from '../Intro';
import FeaturedProject from '../FeaturedProject';

class HomePage extends React.Component {
    render() {
        const { projects } = this.props;
        return (
            <div>
                <Intro
                    title="Hi there!"
                    description="I'm Adam Krogh, a full-stack developer living in Edmonton."
                />
                <section className="projects">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="h3">
                                    Featured Projects
                                </h2>
                            </div>
                        </div>
                        {projects.map(page => (
                            <FeaturedProject page={page} key={page.data.id} />
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;
