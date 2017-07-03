import React from 'react';

import { mapExternalLinks } from '../../utils/links';
import photo from '../../assets/adamkrogh-photo.jpg';

export const data = {
    title: 'About',
    description: '(Krogh rhymes with "rogue")',
    path: '/about/',
    color: '#26A65B'
};

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
            },
            Music: {
                href: 'https://www.last.fm/user/adamkrogh/listening-report/week',
                text: 'listening to random music'
            }
        });

        return (
            <div className="row align-items-center">
                <div className="col-md-4 push-md-8 col-sm-12 projects">
                    <img
                        src={photo}
                        alt="adamkrogh"
                        className="img-fluid rounded-circle mx-auto d-block"
                        width="250px"
                    />
                </div>
                <div className="col-md-8 pull-md-4">
                    <h3>About Me</h3>
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
                        My personal interests
                        include {Links.Travel}, {Links.Reading},
                        and {Links.Music}.
                    </p>
                </div>
            </div>
        );
    }
}
