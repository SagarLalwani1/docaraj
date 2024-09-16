'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "430c4a4e6a0aa9e0859f438d9206b898",
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
".git/index": "535be2483c7eacd46aab6865ff5a5262",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a7dbe435ceefd2e4b8dc430829691f0",
".git/logs/refs/heads/main": "151d2a5dcaee7ee087f07de1eeee026d",
".git/logs/refs/remotes/origin/main": "f52737e9a6ddf7c9bfb8538d599e2b2a",
".git/objects/01/a982518b70a9a8b54f21418b8c2843220c0134": "333631a2158fd6f5e3fdf5fbfed7695b",
".git/objects/02/49fde5d514a7045e268de7e39de4f11d85581f": "393374b155b7c7b849c8bdbb64701161",
".git/objects/03/85ffba7f3b174eadb8222e57738f064b19ae15": "0c4750310cb470b251836db399bd18c9",
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
".git/objects/25/1828943ec7e096ba04efd0489cc20ed70bdb79": "41addc9de2b32a5d11fa07bb044a24b8",
".git/objects/27/cad27d7bf149f9c5e2f3fc8d9144fe3a7a8ad6": "6f7237c2c44eb18db5b75dfebb44cfbd",
".git/objects/29/103a9812a075d1d3d0bf20f45a9d6598c1fc3f": "590c3dfa4115a486a1ef13ab4eb3f341",
".git/objects/2a/582a30174985f67c9af00ee7608a1166018b56": "8419773bef086b27eca9678702db750a",
".git/objects/2c/353364a302ad89ad449d55cc36bbe4a481fb11": "72a780f3ebf2f4d52a739304aee2adae",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/636bc5a7fe61e7827b090119b94af17c292d2b": "ca09ec7553143bfdc3a35a041f78402e",
".git/objects/2e/ad4576962f86bdc7294239152211e41cf311f6": "37e07a49d8d15c2d9f2f25fb8d4eb448",
".git/objects/30/10cd1334bc73efa6b3f2015dc61b172cdc6434": "7f7781d23969f59d5ae004ed9a973b8f",
".git/objects/30/600cd0556860d8670f55893b6a2815bc56f8d3": "fa684b99da4b0ae0c817c41f0240a5eb",
".git/objects/31/3dc9b118ccaf79fa8b2a52d1c834c35b35cbaa": "e54b224d7b25851f946eb98af8662751",
".git/objects/32/674954f8f6a0b57c76778cd409b23ebfd28fa9": "5b98b29d29c5da103743cb2e8e70eed2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/971e54a8d71b60268f4af1850b15df77fee7c4": "679863100a36aa99f1ae4d765cb3e649",
".git/objects/3a/8908a0570f7f91abd80c31af2fbe7a6eaa0c7b": "48e4a27d478c4a7a94fb7c624c79acf9",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/00a3085703661f1b1e5075dcea5fa0007313cb": "3d7bf8262af239871c30cc644a9d8972",
".git/objects/3e/179e78c5bc580bae5831f64ceaf6972a622fdf": "c12cfb3d8abf6e2f9bf879efd3c1e62b",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/41/2b76df803550d069e4754970ddec2344a8fb48": "25f04b78f48cad4026fd340439ee8adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/1e2c934107ce8dd593666670bc442da83757b8": "45aeeacfa808e5fe7f955c3a7810526e",
".git/objects/48/040658eba646fb230736085f3580aea2586e8b": "630f1c71fde8d48626a34047fd2df993",
".git/objects/48/855831c2e84c8d4bcfa2ad1a8c8f8555530272": "71e146bfefdad1beb9456b97cf2038db",
".git/objects/48/abfae56a522630688243ebf5dc77eacd6caf0e": "ee4a027df3e10621de7114c2b50d4b7a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/1fec42e920baf48d7d3d93c7e3079fb8c1c2f4": "c3ba4e50acf96b29a6294f799a1edf86",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/977dd1fb21e0d2f4c03fcbe0bf0192331f8f08": "0e302048ddd62b6f5b083103dc896def",
".git/objects/59/1003d7eb009f2b5e4217a8432cc528d6a5621a": "38ba04a85b24fccfa594bcf28da2cdc4",
".git/objects/5a/2676a4a0b916b26c92c44796ec0b1afa903f80": "5a6549219ba175b913285ac53f7fa8a5",
".git/objects/61/0f32ad3c66e38d44c0ddf1678a029f7f375c0c": "dca0129eaada31aaff29d19b1db8e940",
".git/objects/66/ae06a16379efa08a3ecab549da5aa3dcb9fa65": "d78b0a002548bd68959f90db4f795375",
".git/objects/69/ed1b3eaf80d35350a657f1e48be0d2f150a3e5": "d21d27b93bec488f47745f9d0e86a7a9",
".git/objects/6d/9d5bcd449e604d7f0f3f461078e77e623cdd53": "b5e590baaeeda678907646ad41b27f7b",
".git/objects/6e/9b7208a5737225dd24d5faa26494c4aa381b4f": "cf12460abef0d2545a590760c0688744",
".git/objects/74/894446375ed03b5239cee373363c9758d69fe2": "af41c245dd40ce9dd722c9b8fbe54da7",
".git/objects/77/05d834b5143595ac7a069d3fce2ee5d30b2da6": "2ffb095c4188185180e74397048078e0",
".git/objects/78/ac4d1de53e827e9728bc09ed9c254bd1b88a81": "4ee62d9565cabacf15396d2644212b2c",
".git/objects/7b/15f7e4699d082994bc3aa70fe840b7f1e22db5": "f9d828f7dc05bee073571b6d195054bf",
".git/objects/80/c8be05381ff21fd28e27933c3369ecd743e1b8": "9d5e1c47d6ac1e3c48e579a51a46b2e1",
".git/objects/81/ca4f11a0476d7d95c36b84f3366826e76a6a41": "4d4ed1ac7c08fde37337e390af99a09c",
".git/objects/83/a01fa2f64ad5f55f8b9e0d055b786ac67b0af4": "bf6633ce9cc8e1a5e05836bb54f9632a",
".git/objects/83/ae2b57893ca204ff9580ba6a1606161eb0610c": "2e613b9e294a4ec06d5393fdf1e831ee",
".git/objects/85/57bd6af24c0e6c65f45f49a398c45d010f20fb": "95c18a077027e7ab4baba169c84da88d",
".git/objects/85/79d649b9e23aef60b4c4624ab0c537d9d2275b": "c7476a1fc1b1ec972efeb4b6bf32ced2",
".git/objects/85/ec92c6628707db3557657cc0fe5bec8524259b": "c85ea378cfa2c610a493de582519172a",
".git/objects/86/8911ac824970e394d90475f6ee1db341ab27f6": "55bde4e2ec3ecf15cb6e139ebd78cd56",
".git/objects/88/97423834a570731a09288d3cca96fed02e0ad7": "582dde1b9b627c8e35da81f42d22b755",
".git/objects/88/a7fd331adef4cdc42d88e5aab1da99173e2751": "677340728d3bcb70cf0ab902e702afbf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/dbf3e0dce93beaaa085317bc017e395cd8941d": "14a1f9096707235f96417c54b350bce6",
".git/objects/89/dd3fe7a950a419cb882966de0c1293a463d4df": "96b0af1fa2f6705fd4ca0d3c8a43d255",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/f9d48837aa1a2fc02c04a105f5ffbd39320c33": "6d157e5996263cecd43482debe4c9039",
".git/objects/98/48e21c23ae14ee46abb732c2b6640096ab0892": "50fdd4ece3ba5925cc57a2686857c2b7",
".git/objects/99/357fb8e0cfd84232e90b1726c8de148006b651": "c7d48a259fd0ce29ebdcf2a9557779c0",
".git/objects/99/4299713d3a62a5835e2ea6c004f442dbfe74b6": "972743376814c3ca76e29ab783a49a39",
".git/objects/99/5bb42cf70899924c83ff9d9324daf470f5174d": "bd678c33b5823984b341944c8a6ac97b",
".git/objects/99/d89aa1aff6681e988a148dd48a900228c36152": "e4ddf113773b1ade87277df038d9a5f8",
".git/objects/9a/685bc417d93bdfa913cf90a6c3ff615bd40d9a": "ce3966a9e8bc3811a2826b1d6dbc3a50",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/99ff3ae5defcb0b40fd9077b9ed8a98cef7299": "4f8c365c37fa1a28cedac78577834a27",
".git/objects/a4/40b1d791470c292fd4b25da6c7eab6bdedcc5a": "4a269de63e2bc61215037a4d80424351",
".git/objects/ab/f2def826145434d57df5fd5da1ef94725aca69": "a623df8c360f96d9759b6d9ee68e9e2f",
".git/objects/ad/071d2451f1da0d338bf23e605906c04f35e543": "f47cce5049931c641e09d4ac77bc45e0",
".git/objects/b4/5c9bf767c5b0114cb77ce48e34b70d1229f2a7": "dfa5acf0995f47e052b80201cb47358f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/a2b42db666ce07865bfa4dd06d3a844dfa29f5": "4df17df548e4b63953f0c96c2f8eb86a",
".git/objects/be/d2ce0cc270a18967660f3aee4410606b14ca5a": "c26d96f8ebe97391efe751e881423f9f",
".git/objects/c0/dd08b9754b9d742ffa1bfcd6687fe6ecf07746": "c719bd9d6acfac2f794bacb5275e46dc",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/42bfa1aa038f1db5a1a8f57eb0e12c44dbbc1f": "fad6e125e45e7ed681975b4c7b853800",
".git/objects/c6/96a51e4ebbb4b1d9653ebfd88246b169b06209": "35af566b5fe276aef27e1229fa489071",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/958ffc9d7204a6e6d23741ea9690d5c03ec56e": "35cf19ded7974bf785f71e17640300d2",
".git/objects/cb/ff07b8b7744d4fcff086779be254312e8c2ea8": "d360ce6deaa0eb1b9d422942e2593130",
".git/objects/ce/bc5ca2ba669d963c255b4a2384901f59ff973f": "e038526866b772cec66997d5ac3d3bdc",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/0778e680a41ad727182055a8b3c14d0accd128": "ac7cbb4af2709dbdd720d34f570796ff",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/34ad01e1b836ebacea19c37a2cff3c40324eba": "47a25c1a780e7d09c529e227f47bb81e",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/ebc2035f602ba2c8b77e9b15516c640685e048": "81a0b923cc6356034f1a43e3e817e444",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ef87289f0183c0e1757fa6765636743f686a40": "175bc7854b1a06e632c7ef9756b7614c",
".git/objects/d7/255b3ecce81219b2e14b13dcd867fcf5e5cdb5": "19dabf8aeed413bf8a498faaeb0472ae",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/d9/920bab62cd153004d10dfc0355ba14cc19d0ea": "fb6366e9c4c1aa7a5c5b1c2112f3df2c",
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
".git/objects/ed/ac9cd66c9acb0976e9c0496cd3cec8cd4d66a6": "87afa792c50209d257cc9ec6acf5fa54",
".git/objects/f0/379a8a9148e9f49cf7b4e2b4f6abeb7f804934": "fc630809d061b2a9a825e53d5648b9b0",
".git/objects/f0/e110f9870f9e5e5deb31c30eb9dd5f003c1ff0": "9c5c1cc97ef1cfcedf07fa62abea36fa",
".git/objects/f1/8df8a482c675f5128d886bce4f9461831480a1": "051177af8ae4ab8295abfe66f7e9102d",
".git/objects/f2/93d1866bc56bf6533aab4a9115ad08ae1a5963": "2992dad2d2d8cb97345db963c17c0a9c",
".git/objects/f9/d70c5c7f736075f30621b5c08d368c8fe72dd8": "70218ef3ff88eb25bd20ff1994d87322",
".git/objects/fa/fc18f75d8aea1edbb88bfcbeec17267873accb": "98324608915d0a66ed5e3ca2ef493306",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/4ad5ba1cce552e65e4d25a706eb6de406e6dbc": "49d8a1baa069480eb35831e9a07e948f",
".git/refs/heads/main": "1b7f77294283cd6c5c866846e6f97b96",
".git/refs/remotes/origin/main": "1b7f77294283cd6c5c866846e6f97b96",
"assets/AssetManifest.bin": "799a6687d51c85ccb76942d425ee2376",
"assets/AssetManifest.json": "faa2cdd4fd748f4a4e0bdbc0897a8a29",
"assets/assets/icon/cat.jpg": "6af84f9732b5f3db277e26c04f8a4936",
"assets/assets/icon/dog.png": "69653c5dddd6b746ba21a541e2648d95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "47b4ece825bf4d43abf5867ffb535e1e",
"assets/NOTICES": "5ce6e953afdd5ad46cef6a5c2cc01965",
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
"index.html": "292821366e025215a178895b88ad4995",
"/": "292821366e025215a178895b88ad4995",
"main.dart.js": "b38b16beadade601250da65bac56b794",
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
