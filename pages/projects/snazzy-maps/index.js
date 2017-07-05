import React from 'react';

import styleEditor from '../../../assets/snazzy-maps-style-editor.png';
import mapBuilder from '../../../assets/snazzy-maps-map-editor.png';
import { mapExternalLinks } from '../../../utils/links';

export const data = {
    id: 1,
    title: 'Snazzy Maps',
    layout: 'project',
    path: '/projects/snazzy-maps/',
    category: 'c#,react',
    color: '#118850',
    image: 'snazzymaps-screen.png',
    description: 'A community centered around creating and sharing beautiful styles for Google Maps.'
};

export default class SnazzyMaps extends React.Component {
    render() {
        const Links = mapExternalLinks({
            SnazzyMaps: {
                href: 'https://snazzymaps.com',
                text: 'Snazzy Maps'
            },
            MapStyles: {
                href: 'https://developers.google.com/maps/documentation/javascript/styling',
                text: 'map styles'
            },
            SubtlePatterns: {
                href: 'https://www.toptal.com/designers/subtlepatterns/',
                text: 'Subtle Patterns'
            },
            StyleEditor: {
                href: 'https://snazzymaps.com/editor',
                text: 'style editor'
            },
            WordPressPlugin: {
                href: 'https://wordpress.org/plugins/snazzy-maps/',
                text: 'WordPress plugin'
            },
            SnazzyInfoWindow: {
                href: 'https://github.com/atmist/snazzy-info-window',
                text: 'Snazzy Info Window'
            },
            MapBuilder: {
                href: 'https://snazzymaps.com/build-a-map',
                text: 'map builder'
            },
            React: {
                href: 'https://facebook.github.io/react/',
                text: 'React'
            },
            Redux: {
                href: 'http://redux.js.org/',
                text: 'Redux'
            }
        });

        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h3>Overview</h3>
                    <p>
                        {Links.SnazzyMaps} is a website built
                        around creating and sharing styles
                        for Google Maps. It has evolved from a simple listing of
                        styles to a full-fledged web application with complex style and
                        map editors, a WordPress plugin, and over 100,000 users.
                    </p>

                    <h3>From Problem to Solution</h3>
                    <p>
                        Google puts a lot of effort into the look and feel of their maps.
                        However, sometimes their default styles can clash with the styles
                        on your website. Google released a relatively unknown feature
                        in version three of their API to solve
                        this: {Links.MapStyles}!
                    </p>
                    <p>
                        The problem was that the styles were difficult to design and
                        there was nowhere to share a style you had created. Taking inspiration
                        from {Links.SubtlePatterns}, I created
                        the first version of Snazzy Maps that was simply a directory of map styles
                        that designers and developers could quickly use in their projects.
                    </p>
                    <p>
                        The site took off and quickly gained a large audience. However,
                        creating styles was still very difficult and error prone.
                        We set out to make creating map styles simple, fun, and easy.
                        After several iterations and a total redesign of the
                        site we released our {Links.StyleEditor}.
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={styleEditor}
                        alt="Snazzy Maps Style Editor"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <h3>Community Response</h3>
                    <p>
                        After releasing our style editor, designers and developers finally had an
                        easy way to create, edit, and use map styles for Google Maps. The
                        response from the web development community was amazing.
                        Countless blog posts, tweets, and videos were made showing how
                        easy it is to style Google Maps. With our REST API, other sites
                        and plugins were now able to fetch a list of beautiful map
                        styles for users instantly. We also created
                        a {Links.WordPressPlugin} using
                        this API that integrates with existing maps and enhances
                        them with the {"user's"} chosen style.
                    </p>

                    <h3>Moving Beyond Just Map Styles</h3>
                    <p>
                        Map styles is only one component of a well designed map.
                        We wanted to help designers and developers with all aspects of Google Maps.
                        Next, we created a customizable popup window for use
                        in Google Maps and open sourced it under the
                        name {Links.SnazzyInfoWindow} which
                        now has over 200 stars on GitHub.
                    </p>
                    <p>
                        The next step was to help users with creating a Google Map for their website.
                        We set out to create a fully
                        featured {Links.MapBuilder}.
                        This was our most ambitious feature yet and
                        we utilized {Links.React} and {Links.Redux} to create
                        a fast, maintainable solution with a component-based architecture.
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={mapBuilder}
                        alt="Snazzy Maps Map Builder"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <h3>Technology Stack</h3>
                    <p>
                        Over the development of Snazzy Maps, we have consistently
                        delivered well-designed, usable features. Some of the technology that has made this possible is:
                    </p>
                    <ul>
                        <li>
                            ASP.NET MVC
                        </li>
                        <li>
                            jQuery, Bootstrap, and SCSS
                        </li>
                        <li>
                            Hangfire - Background job processing.
                        </li>
                        <li>
                            PhantomJS - Used to generate screenshots of maps and styles.
                        </li>
                        <li>
                            Intercom - Track user engagement and marketing.
                        </li>
                        <li>
                            Google AdSense - Advertising to help pay the bills.
                        </li>
                        <li>
                            Microsoft Azure - Cloud hosting, scalable database, full-text searching, blob storage, and CDN.
                        </li>
                    </ul>
                    <p>
                        With our latest map builder feature we embraced the latest client side frameworks and libraries such as:
                        <ul>
                            <li>
                                webpack
                            </li>
                            <li>
                                Babel
                            </li>
                            <li>
                                ESLint
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Redux
                            </li>
                            <li>
                                Prettier
                            </li>
                            <li>
                                styled-components
                            </li>
                        </ul>
                    </p>

                    <h3>Lessons Learned</h3>
                    <p>
                        From what started as a weekend project, Snazzy Maps has grown to a
                        web application used by millions of people.
                        This is a testament to what a well-designed application can do that
                        solves a common problem. No matter how small or niche a problem might seem,
                        if {"you're"} able to make {"people's"} lives
                        easier, they will help you grow and exceed all expectations.
                    </p>
                </div>
            </div>
        );
    }
}
