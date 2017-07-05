import React from 'react';
import ExternalLink from '../components/ExternalLink';

export const mapExternalLinks = links => {
    return Object.keys(links).reduce((acc, key) => {
        acc[key] = <ExternalLink {...links[key]} />;
        return acc;
    }, {});
};
