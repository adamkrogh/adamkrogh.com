import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledOpenSourceProject = styled.a`
    @media (max-width: 767px) {
        .hover-underline {
            text-decoration: underline;
        }
    }
`;

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
            <StyledOpenSourceProject
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="oss-project col-md-4"
            >
                <h3 className="mt-2">{repo}</h3>
                <p className="mb-2">{description}</p>
                <span className="hover-underline inverse">
                    View Source on GitHub
                </span>
            </StyledOpenSourceProject>
        );
    }
}

export default OpenSourceProject;
