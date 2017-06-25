import React from 'react';

import editorImage from '../../../assets/snazzy-maps-style-editor.png';

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

const ExternalLink = ({ url, text }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    );
};

export default class SnazzyMaps extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-8 offset-md-2">
                    <h3>Overview</h3>
                    <p>
                        Snazzy Maps is a website built around creating and sharing styles for Google Maps. It has evolved from a simple listing of
                        styles to a full-fledged web application with complex style and map editors, a WordPress plugin, and over 100,000
                        users.
                    </p>
                    <h3>Problem -&gt; Solution</h3>
                    <p>
                        Google puts a lot of effort into the look and feel of their maps. However, sometimes their default styles can clash with
                        the styles on your website. Google released a relatively unknown feature in version three of their API to solve this:
                        map styles!
                    </p>
                    <p>
                        The problem was that the styles were difficult to design and there was nowhere to share a style you had created. Taking inspiration
                        from
                        {' '}
                        <ExternalLink
                            text="Subtle Patterns"
                            url="https://www.toptal.com/designers/subtlepatterns/"
                        />
                        , I created the first version of Snazzy Maps that was
                        simply a directory of map styles that designers and developers could quickly use in their projects.
                    </p>
                    <p>
                        The site took off and quickly gained a large audience. However, creating styles was still very difficult and error prone.
                        We set out to make creating map styles simple, fun, and easy. After several iterations and a total redesign of the
                        site we released our
                        {' '}
                        <ExternalLink
                            text="style creator"
                            url="https://snazzymaps.com/editor"
                        />
                        .
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={editorImage}
                        alt="Snazzy Maps Style Editor"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <h3>Results</h3>
                    <p>
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel consequat lacus. In eget
                        lectus at nunc dignissim laoreet. Nam id lacus metus. Quisque sit amet mauris libero. Sed commodo laoreet diam a
                        suscipit. In at ex eu ante sagittis rutrum ut id nulla. Vivamus ac varius metus, nec euismod risus.
                    </p>

                    <h3>Tech</h3>
                    <p>
                        Morbi vitae arcu eget est pharetra luctus posuere vel risus. Donec sollicitudin dolor at justo luctus consequat. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel consequat lacus. In eget lectus
                        at nunc dignissim laoreet. Nam id lacus metus. Quisque sit amet mauris libero. Sed commodo laoreet diam a suscipit.
                    </p>
                </div>
            </div>
        );
    }
}
