import React from 'react';

import profileImage from '../../../assets/tripitty-profile.png';
import statsImage from '../../../assets/tripitty-stats.png';
import { mapExternalLinks } from '../../../utils/links';

export const data = {
    id: 4,
    title: 'Tripitty',
    layout: 'project',
    path: '/projects/tripitty/',
    category: 'c#,jquery',
    color: '#2DABF0',
    image: 'tripitty-screen.png',
    description: 'A web app for helping avid travellers track and share their world travel.'
};

export default class Tripitty extends React.Component {
    render() {
        const Links = mapExternalLinks({
            Tripitty: {
                href: 'https://tripitty.com',
                text: 'Tripitty'
            },
            ViewMyStats: {
                href: 'https://tripitty.com/adam/stats',
                text: 'view my travel stats'
            }
        });
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h3>Overview</h3>
                    <p>
                        {Links.Tripitty} is a site that allows
                        travellers to track where they have been, view interesting stats about their travel, and share all this data with friends.
                    </p>

                    <h3>From Problem to Solution</h3>
                    <p>
                        The idea for the site grew from my love for travel and nerdiness for tracking where I have been.
                        I wanted to be able to log my trips easily and instantly get a bunch of stats ranging from what countries
                        I have visited to how many miles I have travelled.
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={profileImage}
                        alt="My travel profile on Tripitty"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <h3>Travel Profile</h3>
                    <p>
                        A world map with the {"user's"} trips mapped out
                        is one main feature of their profile. Users can
                        create trips, add stops, and even upload a photo gallery.
                        You can show off your entire travel history with as much
                        detail as you want, including arrival/departure dates,
                        excursions, and layovers.
                    </p>

                    <h3>Nerdy Stats</h3>
                    <p>
                        By leveraging the travel data that the user has entered
                        on their profile, we can calculate all the interesting stats
                        that travellers might be curious about. Such as what countries and
                        continents you have visited, your longest trips, and much,
                        much more.
                    </p>
                    <p>
                        This is my favourite feature of the site. You can
                        see so many details about your travels and have them always
                        update as you add more trips. You
                        can {Links.ViewMyStats} to see where I have been lately!
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={statsImage}
                        alt="My travel stats on Tripitty"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <h3>Technology Stack</h3>
                    <p>
                        We worked on Tripitty as a side project with
                        a desire to visualize travel data for users. We accomplished this
                        by utilizing the following technology:
                    </p>
                    <ul>
                        <li>
                            ASP.NET MVC
                        </li>
                        <li>
                            jQuery, Bootstrap, and SCSS
                        </li>
                        <li>
                            Google Maps and Google Places API
                        </li>
                        <li>
                            Highcharts
                        </li>
                        <li>
                            Microsoft Azure - Cloud hosting, blob storage, and CDN.
                        </li>
                    </ul>
                    <h3>Lessons Learned</h3>
                    <p>
                        I still really like this project and frequently add
                        my new trips in. It has not gained much traction with users though.
                        I believe this is due to the somewhat onerous task
                        of adding all of your trip data in. The end result is amazing
                        but it might be too much work for some users.
                    </p>
                    <p>
                        I would like to explore the possibility of importing from travel sites
                        like TripIt or a {"user's"} Facebook timeline. With an
                        auto-import of trips, users would hopefully see the same
                        amazing stats with minimal effort. Maybe someday!
                    </p>
                </div>
            </div>
        );
    }
}
