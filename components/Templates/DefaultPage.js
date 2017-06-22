import React from 'react';
import styled from 'styled-components';

import Intro from '../Intro';

const StyledPage = styled.div`
    margin-bottom: 60px;
`;

class DefaultPage extends React.Component {
    render() {
        const { page } = this.props.route;
        const { body, color, inverse } = page.data;
        return (
            <StyledPage>
                <Intro
                    title="Adam Krogh"
                    description="(Krogh rhymes with &quot;rogue&quot;)"
                    color={color}
                    inverse={inverse}
                />
                <section className="content">
                    <div className="container">
                        <div className="col-md-8 offset-md-2">
                            <div dangerouslySetInnerHTML={{ __html: body }} />
                        </div>
                    </div>
                </section>
            </StyledPage>
        );
    }
}

export default DefaultPage;
