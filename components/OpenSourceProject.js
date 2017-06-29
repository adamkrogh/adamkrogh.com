import React from 'react';
import PropTypes from 'prop-types';

class OpenSourceProject extends React.Component {
    static propTypes = {
        user: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    render() {
        const { user, repo, description } = this.props;
        const repoUrl = `https://github.com/${user}/${repo}`;
        return (
            <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="oss-project col-md-4 mb-4"
            >
                <h3 className="mt-2">{repo}</h3>
                <p className="mb-2">{description}</p>
                <span className="inverse">View Source on GitHub</span>
            </a>
        );
    }
}

export default OpenSourceProject;
