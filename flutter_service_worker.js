'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "800d67832c800ccc5cab5aceb5279442",
".git/config": "67db235b7d735fd5a871ebc548df5a33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ace47950553b9efbe492d4fc509812cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf5de7a95380679b73cdb3c98da008e0",
".git/logs/refs/heads/main": "3ca9e4fd57b11f0f77280a3a9dc3aebe",
".git/logs/refs/remotes/origin/main": "bed3511ae8c1a09b5eed20b96ad45acc",
".git/objects/01/a982518b70a9a8b54f21418b8c2843220c0134": "333631a2158fd6f5e3fdf5fbfed7695b",
".git/objects/04/27d385dffe65b0b5466741eede724775a7aefb": "b8029c3ecdc7e577f9034a489d108c3a",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/4640bee741a2b19e67bdd7556fb9849802f7bd": "b33fd6353158b47d35ac12e6acb2bb01",
".git/objects/10/9bf182041d5df7472c3c312210360ff591845b": "fe05be1042733e12e269ec247a2ad275",
".git/objects/11/40f5eb7314f698369099d11b56fbc255e2ad60": "60551ec73846f485f3e616106a55c198",
".git/objects/15/85a1a9dbf214252d0f0f9a18ae41d044a5b5ab": "b8b2cee8de4c920f878c5b6d7b903686",
".git/objects/1a/f30f7218647cadc31854141ab22509253e290c": "d55c5dc50f18714404ba11b364de4e85",
".git/objects/1b/13fd73c79526377079612107d5bc8f7bae969a": "5de2bc6537d0e47a4b9118c2b10ac390",
".git/objects/1e/146fcb0c0089e63f59dcb9f85963467812a062": "1322d7312f97a1e0c52f70ff66b11356",
".git/objects/20/1706ab8e164547d32260a44cb8aef1569e568a": "ef1993d6ccf88113b469d2b1087004e5",
".git/objects/21/8992bc916d43bd56b063e66f7387e40de99e1a": "acd972871e4d0aa38ed86077649a68e4",
".git/objects/27/cad27d7bf149f9c5e2f3fc8d9144fe3a7a8ad6": "6f7237c2c44eb18db5b75dfebb44cfbd",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/600cd0556860d8670f55893b6a2815bc56f8d3": "fa684b99da4b0ae0c817c41f0240a5eb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/1e2c934107ce8dd593666670bc442da83757b8": "45aeeacfa808e5fe7f955c3a7810526e",
".git/objects/48/040658eba646fb230736085f3580aea2586e8b": "630f1c71fde8d48626a34047fd2df993",
".git/objects/48/855831c2e84c8d4bcfa2ad1a8c8f8555530272": "71e146bfefdad1beb9456b97cf2038db",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/1fec42e920baf48d7d3d93c7e3079fb8c1c2f4": "c3ba4e50acf96b29a6294f799a1edf86",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/74/894446375ed03b5239cee373363c9758d69fe2": "af41c245dd40ce9dd722c9b8fbe54da7",
".git/objects/77/05d834b5143595ac7a069d3fce2ee5d30b2da6": "2ffb095c4188185180e74397048078e0",
".git/objects/85/57bd6af24c0e6c65f45f49a398c45d010f20fb": "95c18a077027e7ab4baba169c84da88d",
".git/objects/85/79d649b9e23aef60b4c4624ab0c537d9d2275b": "c7476a1fc1b1ec972efeb4b6bf32ced2",
".git/objects/85/ec92c6628707db3557657cc0fe5bec8524259b": "c85ea378cfa2c610a493de582519172a",
".git/objects/88/97423834a570731a09288d3cca96fed02e0ad7": "582dde1b9b627c8e35da81f42d22b755",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/dd3fe7a950a419cb882966de0c1293a463d4df": "96b0af1fa2f6705fd4ca0d3c8a43d255",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/99ff3ae5defcb0b40fd9077b9ed8a98cef7299": "4f8c365c37fa1a28cedac78577834a27",
".git/objects/a4/40b1d791470c292fd4b25da6c7eab6bdedcc5a": "4a269de63e2bc61215037a4d80424351",
".git/objects/b4/5c9bf767c5b0114cb77ce48e34b70d1229f2a7": "dfa5acf0995f47e052b80201cb47358f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/dd08b9754b9d742ffa1bfcd6687fe6ecf07746": "c719bd9d6acfac2f794bacb5275e46dc",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/958ffc9d7204a6e6d23741ea9690d5c03ec56e": "35cf19ded7974bf785f71e17640300d2",
".git/objects/cb/ff07b8b7744d4fcff086779be254312e8c2ea8": "d360ce6deaa0eb1b9d422942e2593130",
".git/objects/ce/bc5ca2ba669d963c255b4a2384901f59ff973f": "e038526866b772cec66997d5ac3d3bdc",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/ebc2035f602ba2c8b77e9b15516c640685e048": "81a0b923cc6356034f1a43e3e817e444",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/da/51f83ab539da7a3f32ac267e6765d71e1c942c": "ff6250db7a1a0396f66a5b4a7cb12e00",
".git/objects/de/78295b82afd0ef31e5bea3fb9cc2f9c2e2ced8": "d8e3a6d00e068f24eb0df30e67091f5c",
".git/objects/df/3c5c7302eb94885879d65fe8c44967c1f4af51": "7f52ca3a5bf3fcef050ff97aefe4ae31",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/c036986ecabad563d65c9f9c4bac2340e013a0": "a46af4a0335db09a025a29c96e5d3689",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/683f738218a1c83287396887e9f43003897f40": "b303f9755d6f01c283e3e780b5f709a1",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/68e621651676c1e5de2c90d99484e63818ef75": "4b2ed9ae0158c742218e7d1dc454b7ca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ca46bce39b5fa30da80d6d663543e190caf3fb": "151eadec7889824b43d03312c9823635",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/4ad5ba1cce552e65e4d25a706eb6de406e6dbc": "49d8a1baa069480eb35831e9a07e948f",
".git/refs/heads/main": "69350dd9950600322e93f6ccea45ac84",
".git/refs/remotes/origin/main": "69350dd9950600322e93f6ccea45ac84",
"assets/AssetManifest.bin": "799a6687d51c85ccb76942d425ee2376",
"assets/AssetManifest.json": "faa2cdd4fd748f4a4e0bdbc0897a8a29",
"assets/assets/icon/cat.jpg": "6af84f9732b5f3db277e26c04f8a4936",
"assets/assets/icon/dog.png": "69653c5dddd6b746ba21a541e2648d95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "59bc1b76bd576143e57f693380c2fb38",
"assets/NOTICES": "75bdb82c49d753bb4f85b0e4459b1681",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "62cdbb0f81bf941a1c87ad1dba201a80",
"/": "62cdbb0f81bf941a1c87ad1dba201a80",
"main.dart.js": "98083b2344da9cd38eb9f5a02f16f791",
"manifest.json": "8f1aa59f6f85bd6e77cda30e9b1ae68f",
"version.json": "b221b422aa535f93485a90ce54610400"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
