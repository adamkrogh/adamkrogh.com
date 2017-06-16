import React from 'react';
import moment from 'moment';
import { RouteHandler, Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import ReadNext from '../ReadNext';
import './style.css';

class SitePost extends React.Component {
    description(body) {
        var test = body.replace(
            /<blockquote>/g,
            '<blockquote class="blockquote">'
        );
        return test;
    }

    render() {
        const { route } = this.props;
        const post = route.page.data;

        const category = [];
        for (const i in post.categories) {
            const c = post.categories[i];
            category.push(
                <span className="badge badge-danger" key={i}>{c}</span>
            );
        }
        return (
            <div className="container">
                <div className="articles col-md-12">
                    <div className="article-wrap">
                        <div className="page-header">
                            <h1>{post.title}</h1>
                            {category}
                        </div>
                        <div
                            className="page-content"
                            dangerouslySetInnerHTML={{
                                __html: this.description(post.body)
                            }}
                        />
                        <div className="footer">
                            <ReadNext post={post} {...this.props} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array
};

export default SitePost;
