import React from 'react';
import ExternalLink from '../components/ExternalLink';

export const mapExternalLinks = links => {
    return Object.entries(links).reduce((acc, [key, val]) => {
        acc[key] = <ExternalLink {...val} />;
        return acc;
    }, {});
};
