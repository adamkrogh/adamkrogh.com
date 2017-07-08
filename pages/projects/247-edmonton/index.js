import React from 'react';

import devicesImage from 'assets/247-edmonton-devices.png';
import mapImage from 'assets/247-edmonton-map.png';
import { mapExternalLinks } from 'utils/links';
import SectionHeader from 'components/SectionHeader';

export const data = {
    id: 2,
    title: '24/7 Edmonton',
    layout: 'project',
    path: '/projects/247-edmonton/',
    category: 'c#,ionic,angular',
    color: '#F5A72D',
    inverse: true,
    image: '247edmonton-screen.png',
    description: 'Apps for helping outreach workers remotely update case information and track program statistics.'
};

export default class Edmonton247 extends React.Component {
    render() {
        const Links = mapExternalLinks({
            AppleStore: {
                href: 'https://itunes.apple.com/ca/app/24-7-edmonton/id934841007',
                text: 'Apple App Store'
            },
            Android: {
                href: 'https://play.google.com/store/apps/details?id=com.atmist.clients.reach',
                text: 'Google Play'
            },
            ETO: {
                href: 'http://www.socialsolutions.com/case-management-software/',
                text: 'ETO'
            }
        });

        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Overview</SectionHeader>
                    <p>
                        24/7 Edmonton was designed to support the workflow of outreach workers in the field while remaining compatible
                        with the software outreach teams are already using. It consists of an admin dashboard, webservice, and mobile apps available
                        on the {Links.AppleStore} and {Links.Android}.
                    </p>
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>From Problem to Solution</SectionHeader>
                    <p>
                        Outreach workers that assist vulnerable people and those experiencing homeless need
                        to track the people they help. The {"person's"} status,
                        location, and required assistance
                        used to be written down on paper to be logged into an office system at a later point.
                    </p>
                    <p>
                        We worked with community outreach organizations to create a set of applications that
                        can be used to log important information while still in the field. This allowed for
                        near real-time tracking of outreach initiatives and more accurate data overall.
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={devicesImage}
                        alt="24/7 Edmonton App"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Actionable Data</SectionHeader>
                    <p>
                        With outreach workers completing cases on-site, useful data can be gathered and
                        acted on than ever before. The admin dashboard of 24/7 Edmonton includes graphs and maps that
                        help administrators better dispatch help. They can see the most at-risk communities in the city,
                        as well as what days/times they might need extra assistance. This information has
                        been invaluable in providing better service and coordinating front-line staff.
                    </p>
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Results</SectionHeader>
                    <p>
                        Not only was our client blown away with the usefulness of the application, but they
                        have started recruiting other community organizations to use the app. Since our webservice
                        syncs all data to {Links.ETO} (a case
                        management platform) several organizations have expressed
                        interest in the app as well as the data and insights that can be gained from a better workflow.
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={mapImage}
                        alt="24/7 Edmonton Map"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Technology Stack</SectionHeader>
                    <p>
                        With 24/7 Edmonton we have been able to provide several interconnected application
                        that all work together to assist community organizations, some of the libraries and
                        frameworks that we utilized for this are:
                    </p>
                    <ul>
                        <li>
                            C# and ASP.NET MVC
                        </li>
                        <li>
                            jQuery, Bootstrap, and SCSS
                        </li>
                        <li>
                            Ionic and Cordova
                        </li>
                        <li>
                            AngularJS
                        </li>
                        <li>
                            localForage
                        </li>
                        <li>
                            Highcharts
                        </li>
                        <li>
                            PhantomJS
                        </li>
                    </ul>
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Lessons Learned</SectionHeader>
                    <p>
                        24/7 Edmonton was created as a Hybrid Mobile App with Ionic and Cordova.
                        While this allowed us to create one application that supports both iOS and Android,
                        it was not without struggles. Early versions of Ionic had several issues with
                        scrolling and keyboard handling that required lots of workarounds. However,
                        the powerful combination of Ionic and AngularJS allowed us to implement
                        complex features such as dynamic form generation,
                        offline storage, notifications, and geolocation.
                    </p>
                </div>
            </div>
        );
    }
}
