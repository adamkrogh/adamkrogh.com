import React from 'react';
import PropTypes from 'prop-types';

class ExternalLink extends React.PureComponent {
    render() {
        const { href, text } = this.props;
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        );
    }
}

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ExternalLink;
