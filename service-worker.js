/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2014/03/22/vuejs-010-release/index.html","d4e8bf9c379b09eafcc6880555226a57"],["/2014/07/29/vue-next/index.html","c8f57aa056a9d0397b0864cbb880443a"],["/2014/11/09/vue-011-release/index.html","b9f028d0319d4f8349359ae8c55c204b"],["/2014/12/08/011-component/index.html","ed30316e2fcf680f4e3d02e6e843f4b1"],["/2015/06/11/012-release/index.html","b9d137679175d8a01a2711735fe11acd"],["/2015/10/26/1.0.0-release/index.html","15999e075a1f73a3f08bd06c78e15107"],["/2015/10/28/why-no-template-url/index.html","3df3cf8a422c78a03d675861083e9c0d"],["/2015/12/28/vue-cli/index.html","87df6f8408d8024e23e8acce5c42a70f"],["/2016/02/06/common-gotchas/index.html","76ac819969972ca49c119f631dba254f"],["/2016/03/14/march-update/index.html","a573b34b08f1dda22a29c50f219862a3"],["/2016/04/27/announcing-2.0/index.html","6ed14f3271948bfd78a628e56646d5ef"],["/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["/archives/2014/03/index.html","347bb6fb9dc4fd747180e06999a2cc5c"],["/archives/2014/07/index.html","11e12e138ef966b40198f4ac6d7172d5"],["/archives/2014/11/index.html","a60e9afbac1bc74abf6590fc45b661bb"],["/archives/2014/12/index.html","6d53afebf47b8bb189d5ed732a99df3e"],["/archives/2014/index.html","0cbcbba64fcd57c582bbdc1221bf60e8"],["/archives/2015/06/index.html","72aed180b3aa4cf0a5a6ac69258c6ef0"],["/archives/2015/10/index.html","29a4a2eb06a6448335c190f649f4031a"],["/archives/2015/12/index.html","1abde59ccf7f6865e63c27dcc5a275d3"],["/archives/2015/index.html","e15670d12508cd7083a4584859e03b0d"],["/archives/2016/02/index.html","d344b5b5a4bf744a52d695681ad676b0"],["/archives/2016/03/index.html","827d69fa417e40d12ad08b0d628c385b"],["/archives/2016/04/index.html","bb838c2d2427c4d2b9d20f03a3c2bb44"],["/archives/2016/index.html","d5aab1fe1ac5a0e66ba4e3bb03ade167"],["/archives/index.html","c233538dbb067f8683f92b711bc2060c"],["/archives/page/2/index.html","df93f9c04eb10958a090f8248ab5b06a"],["/atom.xml","f141924dfe2fa6193ffece5f1622d115"],["/browserconfig.xml","a9461fcba28550a616a19a0aee8450ac"],["/coc/index.html","30c17ecb7563f6eb2d6bb9bc753caf3d"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","09902aa2ce821a579fa88d38c4098f5c"],["/css/page.css","556d5e37d502cbd16845eb34ded19781"],["/css/search.css","bda2fbd2bf24491e3740b1db37850360"],["/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["/guide/deployment.html","be96515c673712671d042337366ddf63"],["/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["/guide/instance.html","61021765831307e8278d034c23502dd6"],["/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["/guide/list.html","772e05d65b4587501785906a4b681efd"],["/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["/guide/transitions.html","4513c62165ee217697830a40e1795365"],["/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/images/blokt_cryptocurrency_news.png","1517a40ef0fafa2968313c2febef3ad3"],["/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/images/check.png","c634675b753a1a03b587c43d8b535600"],["/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/images/daily.png","c9a8b2a897dba41c7d5aa6f9cd876d82"],["/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/images/dcloud.gif","ade7c64e66506b6cff10292efea16ee8"],["/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/images/devexpress.png","a6d9c786a373088c8d238ca643293c17"],["/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/images/down.png","2f948222df409af3121254d5fe0ed377"],["/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["/images/fastcoding_inc.svg","ff35e14cb519fe5d76e6e8d9444e4fa6"],["/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/images/frontend_love.png","b514babc53a0f3ddc854b0b14a54a489"],["/images/frontendlove.png","b514babc53a0f3ddc854b0b14a54a489"],["/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/images/hn.png","99176cdebac521e823be519aef514bb3"],["/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/images/icons/favicon-192x192.png","b362e9cd643c06176b3841b4f099c3c6"],["/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/images/icons_8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/images/jqwidgets_.png","b6a0a55c85816adb196e1f7450a7f3d7"],["/images/jqwidgets_ltd.png","6d209e39ca89483f3677ae859edca4d7"],["/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/images/logo.png","b362e9cd643c06176b3841b4f099c3c6"],["/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/images/modus.png","6498c04fee5b8542449b350e77180379"],["/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/images/passionate_people.png","03e59e28347e1dcd165e4e1525afb545"],["/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/images/storekit.png","cacf47116e5efe9fc2dcd60ebc197707"],["/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/images/tee__.png","ea5fd763d459d3942e50c323fa32988a"],["/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/images/usave.png","5cffd5053b1d75ae49c9b6eb176e0ccf"],["/images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/images/vpnranks.png","a657f71ef96eb8c22c7f1496c01ca53a"],["/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["/images/y8.png","3cdd8826d3419751f40a8aa7f90cd539"],["/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/index.html","69862dd7209b584c8a5cffcd1e349b57"],["/js/common.js","3fd6eb4d90b6ad57886c6ede0670d59e"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/js/vue.js","d5c38adb09ff79efa1c4d0745dfd308c"],["/js/vue.min.js","17e942ea0854bd9dce2070bae6826937"],["/manifest.json","d321292e1c616039cb24750cefb93cc8"],["/menu/index.html","8a5afae05789f294cacbd331f3ab6260"],["/page/2/index.html","483e46a0cab9e4e87df9d44247974b8e"],["/perf/index.html","30651a3207eef4ecff40357380cb4510"],["/support-vuejs/index.html","33dbad72a7e31ccc1eff01cb88fd56d6"],["/v2/api/index.html","4e63d3082b8704b59322b453ab31cec3"],["/v2/cookbook/adding-instance-properties.html","577f71e463496caac0020e2f028e8471"],["/v2/cookbook/avoiding-memory-leaks.html","72ccbe9f4b645586f615d13376444fdc"],["/v2/cookbook/client-side-storage.html","6f707be8000a2315bfdc2265265da15f"],["/v2/cookbook/creating-custom-scroll-directives.html","ff0a2c2e5e9be04dde3eff69a103bfc4"],["/v2/cookbook/debugging-in-vscode.html","586ecd7ac3672fb5d88450a8b4aa40be"],["/v2/cookbook/dockerize-vuejs-app.html","3a2f0a65d4dfa55e10ac5f2eef7b0eaf"],["/v2/cookbook/editable-svg-icons.html","f4412e64d49e945446ba387dfef606cd"],["/v2/cookbook/form-validation.html","924f52d66503f794f8d044caf19c7944"],["/v2/cookbook/index.html","79c6c2c23cf0e60f1b8afde4597c8c0b"],["/v2/cookbook/packaging-sfc-for-npm.html","22a11251702910ede28753cc57630568"],["/v2/cookbook/practical-use-of-scoped-slots.html","a0fe9e6901babcc543eee1885f141126"],["/v2/cookbook/serverless-blog.html","5864c5ffce33d2df3789242b35ec77dd"],["/v2/cookbook/unit-testing-vue-components.html","83ff477a4a310377541cc200d3387b31"],["/v2/cookbook/using-axios-to-consume-apis.html","8430bf81720edc7ded7bd32ee2acdb51"],["/v2/examples/commits.html","c1bcf95151beed267e4ecfe05ca2cbdf"],["/v2/examples/deepstream.html","7d0cdefc8d1e52cd2033e32879429bc1"],["/v2/examples/elastic-header.html","5523c8f6a4d2ff6c47699aaccb52cfec"],["/v2/examples/firebase.html","5c6fe8c55ac18f41012462a9575821bd"],["/v2/examples/grid-component.html","55894a5e9f304fe73b83df746e82c28a"],["/v2/examples/hackernews.html","98feef3744da2347fd21316cfd0583da"],["/v2/examples/index.html","73a9c2ce702a6e86b4d32f9d299629f9"],["/v2/examples/modal.html","e94e4c1b5ffecde55cfd87809f866bc3"],["/v2/examples/select2.html","13829241198ce45c625a15f77bb96020"],["/v2/examples/svg.html","fab9028185859df16908d37305816ec8"],["/v2/examples/themes.html","65877e1a68b553ebb205d07628fec231"],["/v2/examples/todomvc.html","50b8bd7aa9b685bdfffad5c746dd97cd"],["/v2/examples/tree-view.html","de33798a3c3f82f5819d4eafa987cb1d"],["/v2/guide/class-and-style.html","3b9cba4f22664bcd44644016b76b562b"],["/v2/guide/comparison.html","9ee3132d9ca82ec13ea82977053d31a1"],["/v2/guide/components-custom-events.html","ce071e8e24336056921aa444f236d38b"],["/v2/guide/components-dynamic-async.html","266a2c2c7a32d04dd640de87aa4fe899"],["/v2/guide/components-edge-cases.html","433d2388097a82d98c58b4068ab22d48"],["/v2/guide/components-props.html","8f08f44b7aae915167e5dd85197cfdf8"],["/v2/guide/components-registration.html","37559cdc241282c17c445cde2a0c105a"],["/v2/guide/components-slots.html","dc6e60b7b0a485536068e30bef2a0eb6"],["/v2/guide/components.html","d03f027b56562fcbcac63fbeb31697f4"],["/v2/guide/computed.html","f361333eb443d0f6a989f25789cbc313"],["/v2/guide/conditional.html","2f29cc00d41c74e92fdea519aa8e0fb9"],["/v2/guide/custom-directive.html","778a799b113785564bcffa274c655803"],["/v2/guide/deployment.html","b460c31e8e0b4bd9490639a3ed7801ba"],["/v2/guide/events.html","628437de8477a03e0e572f4a484fead5"],["/v2/guide/filters.html","24b6ca83b92cab9720d2159f05fa0d90"],["/v2/guide/forms.html","8ad2609fdf97ac5809d9447cddf58592"],["/v2/guide/index.html","fb7bd382af421d67d1d71a20f870a39f"],["/v2/guide/installation.html","77a4da45eef72c89b4fc4927ee7a0fe7"],["/v2/guide/instance.html","0472ceca5d198efc4ada0028f202c76d"],["/v2/guide/join.html","1a0e8c0a757d34ad298d2bccc9284fb8"],["/v2/guide/list.html","2521e1b0ee2392d7dc6d24912215f204"],["/v2/guide/migration-vue-router.html","d9cd092b94728fd7b9e3aef30b610c2e"],["/v2/guide/migration-vuex.html","d1e8258a63ad1f709797eb0cc932284c"],["/v2/guide/migration.html","f7f0e4d626cd9c664c7cfb1aca0a9a7c"],["/v2/guide/mixins.html","eef185d6ad33f8b8a1cf1425c11c9ef0"],["/v2/guide/plugins.html","6f63607ccd2b86ff4e0fc00b0bbd8c20"],["/v2/guide/reactivity.html","816adadb469ca2cc434f79ab12195cf4"],["/v2/guide/render-function.html","300c9b9297e762e4155f991a5f9b89ab"],["/v2/guide/routing.html","b86ba022c051d7be47178388626ea3e2"],["/v2/guide/single-file-components.html","a1723a7a1cb568cf585a85960793e701"],["/v2/guide/ssr.html","99238c3e782ca5c4a38b825dd322e187"],["/v2/guide/state-management.html","e214b2d5e40d7be791ff35e6d9f541e3"],["/v2/guide/syntax.html","b710f07f6bd1c84dd25c3952a45b261d"],["/v2/guide/team.html","143c92e07b9bbd3eb5871c3a7722368f"],["/v2/guide/transitioning-state.html","2ad27c20e687fdcb21354f26eda00bcb"],["/v2/guide/transitions.html","0994fc8a03223d1475dda0d881e103cb"],["/v2/guide/typescript.html","6f1fdcb873313649f3e6fb088ab2fba2"],["/v2/guide/unit-testing.html","54a0fcf1a29c778d689a3f102e8ea22f"],["/v2/search/index.html","d64ee7a91765a2013303681a9d05f2f2"],["/v2/style-guide/index.html","a21e363d6cbb314ca79e5fb822989bac"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




