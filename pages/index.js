import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';

class SiteIndex extends React.Component {
    more(body, path) {
        if (body.match('<!--more-->')) {
            return (
                <Link className="readmore" to={prefixLink(path)}>
                    <span className="btn btn-outline-danger btn-block">
                        MORE
                    </span>
                </Link>
            );
        }
        return;
    }

    description(body) {
        var test = body.replace(
            /<blockquote>/g,
            '<blockquote class="blockquote">'
        );
        if (test.match('<!--more-->')) {
            test = test.split('<!--more-->');
            if (typeof test[0] != 'undefined') {
                return test[0];
            }
        }
        return test;
    }

    render() {
        const pageLinks = [];

        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, page =>
            access(page, 'data.date')
        ).reverse();
        sortedPages.forEach(page => {
            if (
                access(page, 'file.ext') === 'md' &&
                access(page, 'data.layout') === 'post'
            ) {
                const title = access(page, 'data.title') || page.path;
                const description =
                    access(page, 'data.description') ||
                    access(page, 'data.body');
                const datePublished = access(page, 'data.date');
                const categories = access(page, 'data.categories');

                const category = [];
                for (const i in categories) {
                    const c = categories[i];
                    category.push(
                        <span className="badge badge-danger" key={i}>{c}</span>
                    );
                }

                const data = {};

                pageLinks.push(
                    <div className="article-wrap" key={page.path}>
                        <div className="page-header">
                            <Link
                                style={{ textDecoration: 'none' }}
                                to={prefixLink(page.path)}
                            >
                                <h1>{title}</h1>
                            </Link>
                            {category}
                        </div>
                        <div
                            className="page-content"
                            dangerouslySetInnerHTML={{
                                __html: this.description(description)
                            }}
                        />
                        {this.more(description, page.path)}
                    </div>
                );
            }
        });

        return (
            <DocumentTitle title={config.siteTitle}>
                <div>
                    <section className="jumbotron jumbotron-fluid intro">
                        <div className="container">
                            <h1 className="display-3">Hi!</h1>
                            <p className="lead ">
                                I'm Adam Krogh, a full-stack developer living in Edmonton.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="articles col-md-12">
                                {pageLinks}
                            </div>
                        </div>
                    </section>
                </div>
            </DocumentTitle>
        );
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object
};

export default SiteIndex;
