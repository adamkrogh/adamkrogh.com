import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import styleSheet from 'styled-components/lib/models/StyleSheet';

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
    displayName: 'HTML',
    propTypes: {
        body: React.PropTypes.string
    },
    render() {
        const { body, route } = this.props;
        const title = DocumentTitle.rewind();

        let bootstrap;
        if (process.env.NODE_ENV === 'production') {
            bootstrap = (
                <style
                    dangerouslySetInnerHTML={{
                        __html: require('!raw!./public/styles.css')
                    }}
                />
            );
        }
        let styledComponents;
        if (process.env.NODE_ENV === 'production') {
            const styles = styleSheet
                .rules()
                .map(rule => rule.cssText)
                .join('\n');
            styledComponents = (
                <style dangerouslySetInnerHTML={{ __html: styles }} />
            );
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
                    />
                    <title>{title}</title>
                    <link
                        href="https://fonts.googleapis.com/css?family=Karla"
                        rel="stylesheet"
                    />
                    {bootstrap}
                    {styledComponents}
                </head>
                <body>
                    <div
                        id="react-mount"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" />
                    <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
                </body>
            </html>
        );
    }
});
