import sortBy from 'lodash/sortBy';

export const getProjectsFromRoute = route => {
    return sortBy(route.pages, page => page.data.id).filter(
        page => page.data.layout === 'project'
    );
};

export const openSourceProjects = [
    {
        user: 'atmist',
        repo: 'snazzy-info-window',
        description: 'Customizable info windows using the Google Maps JavaScript API.'
    },
    {
        user: 'adamkrogh',
        repo: 'goodreads-dotnet',
        description: 'Goodreads .NET API client library with full test suite.'
    },
    {
        user: 'adamkrogh',
        repo: 'adamkrogh.com',
        description: 'This site! My personal website and portfolio created using Gatsby and React.'
    }
];
