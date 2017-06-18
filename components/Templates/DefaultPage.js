import React from 'react';

class DefaultPage extends React.Component {
    render() {
        const body = this.props.route.page.data.body;
        return <div dangerouslySetInnerHTML={{ __html: body }} />;
    }
}

export default DefaultPage;
