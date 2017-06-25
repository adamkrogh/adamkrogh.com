import React from 'react';

export const data = {
    id: 4,
    title: 'Tripitty',
    layout: 'project',
    path: '/projects/tripitty/',
    category: 'c#,jquery',
    color: '#2DABF0',
    inverse: true,
    image: 'tripitty-screen.png',
    description: 'A web app for helping avid travellers track and share their world travel.'
};

export default class Tripitty extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-8 offset-md-2">
                    <h3>Overview</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, nisl sit amet viverra dapibus, ex eros efficitur sem, a eleifend massa ante a enim. Morbi vitae arcu eget est pharetra luctus posuere vel risus. Donec sollicitudin dolor at justo luctus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel consequat lacus. In eget lectus at nunc dignissim laoreet. Nam id lacus metus. Quisque sit amet mauris libero. Sed commodo laoreet diam a suscipit. In at ex eu ante sagittis rutrum ut id nulla. Vivamus ac varius metus, nec euismod risus.
                    </p>

                    <h3>Problem -&gt; Solution</h3>
                    <p>
                        Proin in aliquet eros, condimentum tempor risus. Aliquam tempus congue lectus, scelerisque tincidunt urna aliquet quis. Mauris egestas imperdiet felis. Suspendisse in tortor sed diam dictum consectetur. Pellentesque malesuada libero eros, nec malesuada diam tristique non. Suspendisse pretium lobortis libero, id hendrerit dolor pretium non. Morbi eget odio posuere, tempor magna ut, mattis ipsum. Sed maximus ante ante, interdum ultricies lacus venenatis et.
                    </p>
                </div>
                <div className="col-md-12">
                    <img
                        className="img-fluid"
                        src="https://placehold.it/1440x1000"
                        alt="Screenshot"
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
