const version = 'v1-';
const offlineScripts = ['bundle.js'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(`${version}-adamkrogh`)
            .then(cache => cache.addAll(offlineScripts))
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cached => {
            const fetchedFromNetwork = response => {
                const cacheCopy = response.clone();
                caches
                    .open(`${version}-pages`)
                    .then(cache => cache.put(event.request, cacheCopy));

                return response;
            };

            const unableToResolve = () => {
                return new Response('<h1>Service Unavailable</h1>', {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: new Headers({
                        'Content-Type': 'text/html'
                    })
                });
            };

            const networked = fetch(event.request)
                .then(fetchedFromNetwork, unableToResolve)
                .catch(unableToResolve);

            return cached || networked;
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches
            .keys()
            .then(keys =>
                Promise.all(
                    keys
                        .filter(key => !key.startsWith(version))
                        .map(key => caches.delete(key))
                )
            )
    );
});
