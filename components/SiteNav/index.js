import React from 'react';
import { RouteHandler, Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './style.css';

class SiteNav extends React.Component {
    render() {
        const { location, title } = this.props;
        return (
            <nav className="navbar sticky-top navbar-inverse bg-inverse">
                <div className="container">
                    <Link to={prefixLink('/')}>
                        <h1 className="navbar-brand">{title}</h1>
                    </Link>
                    <Link
                        to={prefixLink('/profile/')}
                        className="nav-item-right float-right"
                    >
                        About & Contact
                    </Link>
                </div>
            </nav>
        );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
    title: React.PropTypes.string
};

export default SiteNav;
