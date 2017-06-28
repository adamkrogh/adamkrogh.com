import React from 'react';

import photo from '../../assets/adamkrogh-photo.jpg';

export const data = {
    title: 'About',
    description: '(Krogh rhymes with "rogue")',
    layout: 'about',
    path: '/about/',
    color: '#26A65B'
};

export default class About extends React.Component {
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h3>About Me</h3>
                    <p>
                        Proin in aliquet eros, condimentum tempor risus. Aliquam tempus congue lectus, scelerisque tincidunt urna aliquet quis. Mauris egestas imperdiet felis. Suspendisse in tortor sed diam dictum consectetur. Pellentesque malesuada libero eros, nec malesuada diam tristique non. Suspendisse pretium lobortis libero, id hendrerit dolor pretium non. Morbi eget odio posuere, tempor magna ut, mattis ipsum. Sed maximus ante ante, interdum ultricies lacus venenatis et.
                    </p>
                    <p>
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel consequat lacus. In eget lectus at nunc dignissim laoreet. Nam id lacus metus. Quisque sit amet mauris libero. Sed commodo laoreet diam a suscipit. In at ex eu ante sagittis rutrum ut id nulla. Vivamus ac varius metus, nec euismod risus.
                    </p>
                    <h3>Interests</h3>
                    <p>
                        Morbi vitae arcu eget est pharetra luctus posuere vel risus. Donec sollicitudin dolor at justo luctus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel consequat lacus. In eget lectus at nunc dignissim laoreet. Nam id lacus metus. Quisque sit amet mauris libero. Sed commodo laoreet diam a suscipit.
                    </p>
                </div>
                <div className="col-md-4">
                    <img
                        src={photo}
                        alt="adamkrogh"
                        className="img-fluid rounded-circle mx-auto d-block"
                        width="250px"
                    />
                </div>
            </div>
        );
    }
}
