import React from 'react';
import styled from 'styled-components';

import { mapExternalLinks } from 'utils/links';
import photo from 'assets/adamkrogh-photo.jpg';
import SectionHeader from 'components/SectionHeader';
import { config } from 'config';

export const data = {
    title: 'About',
    description: '(Krogh rhymes with "rogue")',
    path: '/about/',
    color: '#26A65B'
};

const StyledPanel = styled.div`
    margin: 45px auto 0 auto;
    max-width: 250px;

    img {
        border-top-right-radius: 0.25rem;
        border-top-left-radius: 0.25rem;
    }

    .list-group .list-group-item:first-child {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
`;

const StyledListItem = styled.a`
    font-size: 0.85em;

    i {
        font-size: 1.2em;
        padding-right: 1.25rem;
    }
`;

export default class About extends React.Component {
    render() {
        const Links = mapExternalLinks({
            Atmist: {
                href: 'http://atmist.com',
                text: 'Atmist'
            },
            UofA: {
                href: 'https://www.ualberta.ca',
                text: 'University of Alberta'
            },
            Travel: {
                href: 'https://tripitty.com/adam',
                text: 'travelling'
            },
            Reading: {
                href: 'https://goodreads.com/adamkrogh',
                text: 'reading'
            }
        });

        return (
            <div className="row">
                <div className="col-md-4 push-md-8 col-sm-12">
                    <StyledPanel>
                        <img
                            src={photo}
                            alt="adamkrogh"
                            className="img-fluid mx-auto d-block"
                            width="250px"
                        />
                        <div className="list-group">
                            <StyledListItem
                                href="mailto:hello@adamkrogh.com?subject=Hi!"
                                className="list-group-item list-group-item-action"
                            >
                                <i
                                    className="fa fa-envelope"
                                    aria-hidden="true"
                                    title="Email me: hello@adamkrogh.com"
                                />
                                hello@adamkrogh.com
                            </StyledListItem>
                            <StyledListItem
                                href={config.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="list-group-item list-group-item-action"
                            >
                                <i
                                    className="fa fa-file-code-o"
                                    aria-hidden="true"
                                    title="Download my résumé"
                                />
                                Download Résumé
                            </StyledListItem>
                        </div>
                    </StyledPanel>
                </div>
                <div className="col-md-8 pull-md-4">
                    <SectionHeader>About Me</SectionHeader>
                    <p>
                        I grew up in rural Alberta, Canada on our family farm.
                        Pursuing my early interest in web development, I graduated
                        from the {Links.UofA} with a {"bachelor's"} degree in
                        Computing Science in 2009.
                    </p>
                    <p>
                        After working in the
                        software development department at
                        the University for 3 years, I co-founded a web development
                        company, {Links.Atmist}, in 2012.
                        Over the past 5 years we have consistently delivered beautiful, usable, and
                        modern web and mobile applications.
                    </p>
                    <p>
                        As a lead developer and architect I have been directly involved
                        in all aspects of delivering great software. From requirements gathering,
                        mockups, and estimates to development, testing, and deployments.
                    </p>
                    <p>
                        My personal interests
                        include {Links.Travel}, {Links.Reading},
                        and experimenting with random tech.
                    </p>
                </div>
                <div className="col-md-8">
                    <SectionHeader>Skills</SectionHeader>
                    <ul>
                        <li>C# and ASP.NET MVC</li>
                        <li>JavaScript with ES6+</li>
                        <li>React and Redux</li>
                        <li>Cordova, Ionic, and Angular</li>
                        <li>Build tools including Gulp and webpack</li>
                        <li>Cloud deployments with Microsoft Azure</li>
                    </ul>
                </div>
            </div>
        );
    }
}
