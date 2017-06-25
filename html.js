import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import styleSheet from 'styled-components/lib/models/StyleSheet';

const BUILD_TIME = new Date().getTime();

class Html extends React.Component {
    static displayName = 'HTML';
    static propTypes = {
        body: PropTypes.string
    };

    static defaultProps = {
        body: null
    };

    render() {
        const { body } = this.props;
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

        let serviceWorker;
        if (process.env.NODE_ENV === 'production') {
            serviceWorker = (
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            if ('serviceWorker' in navigator) {
                                navigator.serviceWorker.register(
                                    '/service-worker.js'
                                );
                            }
                        `
                    }}
                />
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
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="mask-icon"
                        href="/safari-pinned-tab.svg"
                        color="#2b5797"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="Adam Krogh"
                    />
                    <meta name="application-name" content="Adam Krogh" />
                    <meta name="theme-color" content="#ffffff" />
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
                    <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
                    {serviceWorker}
                </body>
            </html>
        );
    }
}

export default Html;
