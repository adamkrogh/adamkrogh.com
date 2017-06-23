import React from 'react';

import Intro from '../Intro';

class DefaultPage extends React.Component {
    render() {
        const { route: { page }, className } = this.props;
        const {
            title,
            body,
            description,
            color,
            inverse,
            fullpage
        } = page.data;
        return (
            <div className={className}>
                <Intro
                    title={title}
                    description={description}
                    color={color}
                    inverse={inverse}
                    fullpage={fullpage}
                />
                {body &&
                    <section className="content">
                        <div className="container">
                            <div className="col-md-8 offset-md-2">
                                <div
                                    dangerouslySetInnerHTML={{ __html: body }}
                                />
                            </div>
                        </div>
                    </section>}
            </div>
        );
    }
}

export default DefaultPage;
