'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "49793a973fa5538a3928046f5a864544",
"assets/assets/img/profile/dp-1.jpg": "baa4b5bbc4a718928c85b934961f2e48",
"assets/assets/img/profile/dp-10.jpg": "b90b048030fbdd24b58b5f8d6c34fdb5",
"assets/assets/img/profile/dp-11.jpg": "cba152e1d43fc378677488de2c878173",
"assets/assets/img/profile/dp-12.jpg": "6e004bf8906caf6259d6dc39711e36aa",
"assets/assets/img/profile/dp-13.jpg": "071eab61ebe8543674e7703e0fc5727e",
"assets/assets/img/profile/dp-14.jpg": "84e18d5d2deb881cda7c6ae2c3956a9e",
"assets/assets/img/profile/dp-15.jpg": "4ed202e442eaf97d948b865bc324f1a3",
"assets/assets/img/profile/dp-16.jpg": "2b0f44f40de4c287bbd686660f8a0d01",
"assets/assets/img/profile/dp-17.jpg": "2785b230e52f3784f2b880ed50723fe2",
"assets/assets/img/profile/dp-18.jpg": "af08a055967734cd86373d1320c56f96",
"assets/assets/img/profile/dp-19.jpg": "860be9c8276f376fa1a372fa5802997b",
"assets/assets/img/profile/dp-2.jpg": "56ad747d23d0c9e0e75acbc78f6d6f6a",
"assets/assets/img/profile/dp-20.jpg": "3a63dde533b00a6850fa0f7f4d360ad2",
"assets/assets/img/profile/dp-3.jpg": "eaef04811010398988d6c38cc11d05cd",
"assets/assets/img/profile/dp-4.jpg": "10720d5880b016ecf10e48d1be01dfbc",
"assets/assets/img/profile/dp-5.jpg": "1d89c200d6b4e6086cb678acfef7e3ea",
"assets/assets/img/profile/dp-6.jpg": "f2c40190a345959833481ff27924b196",
"assets/assets/img/profile/dp-7.jpg": "c4b4ce40050bff133e0188f2f8ac072e",
"assets/assets/img/profile/dp-8.jpg": "23ad60681165aeab845fe417ce67ae17",
"assets/assets/img/profile/dp-9.jpg": "a2dcecd8cb267e4a2b3d7ffb0b887539",
"assets/assets/img/status/whatsapp-status-1.jpg": "0c6fb32eea5b462ae168e4e82e36f643",
"assets/assets/img/status/whatsapp-status-10.jpg": "91e313dcffe9fe4754f5ef61c7902a01",
"assets/assets/img/status/whatsapp-status-12.jpg": "8ee266a19582183c159852d921bd0a3c",
"assets/assets/img/status/whatsapp-status-13.jpg": "ce7405d24eed479b37beadc44c93bb32",
"assets/assets/img/status/whatsapp-status-16.jpg": "601c4b4b55ad7041631080c3bb8ad0a7",
"assets/assets/img/status/whatsapp-status-2.jpg": "edd12b36202ace049fceeaad6ffe1c67",
"assets/assets/img/status/whatsapp-status-4.jpg": "352a75903df347542ad63acad4d5ae0e",
"assets/assets/img/status/whatsapp-status-5.jpg": "d2ea67efd0b2e09dcafc847f8dc24ed1",
"assets/assets/img/status/whatsapp-status-6.jpg": "52f068b8281052ef017405811d135b6b",
"assets/assets/img/status/whatsapp-status-7.jpg": "37a166f8bce322754e8124a46546e9be",
"assets/assets/img/status/whatsapp-status-8.jpg": "b57f8de2667cf4e995368f0d577de3c2",
"assets/assets/img/whatsappbg.png": "c92bbf63b7915e7bfee934b4224672fe",
"assets/assets/svgs/group.svg": "4d36d4b42e444b630ca928a8558d56d7",
"assets/assets/svgs/person.svg": "701fe6dd986ca1bae281c73a72e3251f",
"assets/assets/whatsApp.png": "4910dfe986af316139e3a06de55373e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b07eead9f486e9991be69ff678ea79f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "782646499ee783a46926e26d890012c0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bbd76757e4987cb6144a90de97cd5a3e",
"/": "bbd76757e4987cb6144a90de97cd5a3e",
"main.dart.js": "2687001a4807f31f0d30b326c74e947a",
"manifest.json": "197cc8a62b98ca198426d98f6ca61774",
"version.json": "d7129f13fc30267fbeeb425b5557c190"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
