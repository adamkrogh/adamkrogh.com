import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const FeaturedProject = ({ page }) => {
    const { path, data: { title, description, category } } = page;
    return (
        <Link to={prefixLink(page.path)}>
            <div className="row project-row">
                <div className="col-md-4">
                    <img
                        src="//placehold.it/720x440"
                        className="img-fluid"
                        alt={title}
                    />
                </div>
                <div className="col-md-8">
                    <header>
                        <h3>{title}</h3>
                        {category &&
                            category.split(',').map(cat => (
                                <span className="badge badge-success" key={cat}>
                                    {cat}
                                </span>
                            ))}
                    </header>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </Link>
    );
};

export default FeaturedProject;
