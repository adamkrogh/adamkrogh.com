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
            <div className="col-md-4">
                <h3>{repo}</h3>
                <p>{description}</p>
                <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sliding inverse"
                >
                    View Source on GitHub
                </a>
            </div>
        );
    }
}

export default OpenSourceProject;
