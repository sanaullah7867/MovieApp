	const cacheName = 'movieapp';
		const staticAssets = [
		'./',
		'header.php',
		'nav.php',
		'search.php',
		'footer.php',
		'index.php',
		'movies.php',
		'webseries.php',
		'details.php',
		'assets/css/bootstrap.css',
		'assets/css/style.css',
		'assets/js/bootstrap.min.js',
		'assets/js/theme.min.js',
		];

		self.addEventListener('install', async e => {
		const cache = await caches.open(cacheName);
		await cache.addAll(staticAssets);
		return self.skipWaiting();
		});

		self.addEventListener('activate', e => {
		self.clients.claim();
		});

		self.addEventListener('fetch', async e => {
		const req = e.request;
		const url = new URL(req.url);

		if (url.origin === location.origin) {
			e.respondWith(cacheFirst(req));
		} else {
			e.respondWith(networkAndCache(req));
		}
		});

		async function cacheFirst(req) {
		const cache = await caches.open(cacheName);
		const cached = await cache.match(req);
		return cached || fetch(req);
		}

		async function networkAndCache(req) {
		const cache = await caches.open(cacheName);
		try {
			const fresh = await fetch(req);
			await cache.put(req, fresh.clone());
			return fresh;
		} catch (e) {
			const cached = await cache.match(req);
			return cached;
		}
	}
	
// Cache on install
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});	