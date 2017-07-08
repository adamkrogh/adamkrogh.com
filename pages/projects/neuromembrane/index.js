import React from 'react';

import settings from 'assets/neuron-settings.png';
import simulation from 'assets/neuron-simulation.png';
import { mapExternalLinks } from 'utils/links';
import SectionHeader from 'components/SectionHeader';

export const data = {
    id: 3,
    title: 'Neuromembrane',
    layout: 'project',
    path: '/projects/neuromembrane/',
    category: 'python,canvas api',
    color: '#8E44AD',
    image: 'neuron-screen.png',
    description: 'An educational simulator designed to teach students about neuroscience concepts.'
};

export default class Neuromembrane extends React.Component {
    render() {
        const Links = mapExternalLinks({
            Neuromembrane: {
                href: 'https://neuromembrane.ualberta.ca',
                text: 'Neuromembrane'
            },
            HHM: {
                href: 'https://en.wikipedia.org/wiki/Hodgkin%E2%80%93Huxley_model',
                text: 'Hodgkin-Huxley model'
            }
        });

        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Overview</SectionHeader>
                    <p>
                        {Links.Neuromembrane} is a visual tool to
                        help students learn neuronscience concepts and
                        provide a better way to teach these concepts for
                        professors.
                    </p>
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>From Problem to Solution</SectionHeader>
                    <p>
                        Researchers at the University of Alberta wanted a
                        simple, modern, and visual way to teach their students.
                        The ideal tool would allow students to input their
                        experiment parameters, run the simulation, and see
                        what would actually be occuring in a real neuron.
                    </p>
                    <p>
                        By leveraging open source technology such as Python,
                        Django, and the Canvas API, we were able to deliver
                        a tool that solves all of these problems.
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={settings}
                        alt="Neuromembrane Settings"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Dynamic Simulation</SectionHeader>
                    <p>
                        We support several different simulations, most of which involve
                        server-side calculations outlined in
                        the {Links.HHM} and solved with a system of ordinary
                        differential equations.
                    </p>
                    <p>
                        This mathematical model provides data for each simulation
                        and is rendered in real-time graphs as the simulation plays out.
                        Animations are either lined up to occur at certain thresholds or are
                        triggered at certain points.
                    </p>
                    <p>
                        By having all of the calculations and
                        animations determined up-front, we can play the
                        simulation as a sequence of frames with support for rewind, fast-forward,
                        and pause.
                    </p>
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Experimental Output</SectionHeader>
                    <p>
                        Students can see a summary of all of their experimental outcomes
                        as a set of styled graphs. They can then export their results to
                        a PDF or text file in order to submit them to the professor.
                    </p>
                    <p>
                        Likewise, the professor can load up these settings files in order
                        to see if the students were able to set up the simulation correctly to get
                        the desired outcome.
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src={simulation}
                        alt="Neuromembrane Simulation"
                    />
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Technology Stack</SectionHeader>
                    <p>
                        With Neuromembrane, we were able to deliver the client an
                        easy to use and visually appealing learning tool. Some of the
                        technology that made this possible is:
                    </p>
                    <ul>
                        <li>
                            Python and Django
                        </li>
                        <li>
                            HTML Canvas API
                        </li>
                        <li>
                            jQuery
                        </li>
                        <li>
                            Highcharts
                        </li>
                    </ul>
                </div>
                <div className="col-md-8 offset-md-2">
                    <SectionHeader>Lessons Learned</SectionHeader>
                    <p>
                        This simulation was first created in 2013 and has been
                        continually enhanced with new simulations every year.
                        Students and professors alike have enjoyed using and learning
                        from it. The codebase has been kept up to date over the years
                        but could benefit from some modern web development frameworks like React and Redux.
                        However, with a finite grant each year and a mandate to provide
                        more features for students, new experiments usually take priority.
                    </p>
                </div>
            </div>
        );
    }
}
