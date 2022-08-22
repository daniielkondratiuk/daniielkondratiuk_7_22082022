// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _recipesJs = require("./data/recipes.js");
var _recipesJsDefault = parcelHelpers.interopDefault(_recipesJs);
var _getRecipesTemplateJs = require("./utils/getRecipesTemplate.js");
var _getRecipesTemplateJsDefault = parcelHelpers.interopDefault(_getRecipesTemplateJs);
var _capitalizeFirstLetter = require("./utils/capitalizeFirstLetter");
var _capitalizeFirstLetterDefault = parcelHelpers.interopDefault(_capitalizeFirstLetter);
var _getBadgesTemplate = require("./utils/getBadgesTemplate");
var _getBadgesTemplateDefault = parcelHelpers.interopDefault(_getBadgesTemplate);
var _getFilterListTemplate = require("./utils/getFilterListTemplate");
var _getFilterListTemplateDefault = parcelHelpers.interopDefault(_getFilterListTemplate);
const DOMRecipes = document.querySelector("#recipes");
const DOMFilterIngredients = document.querySelector("#filter__ingredients");
const DOMFilterAppliance = document.querySelector("#filter__appliances");
const DOMFilterUtensils = document.querySelector("#filter__utensils");
const DOMBadges = document.querySelector("#badges");
let badges = [];
let searchValue = "";
render((0, _recipesJsDefault.default));
function render(recipesList, badgesList = []) {
    const uniqueValue = getUniqueValues(recipesList);
    DOMRecipes.innerHTML = (0, _getRecipesTemplateJsDefault.default)(recipesList);
    uniqueValue.forEach((el)=>{
        if (el.type === "ingredients") DOMFilterIngredients.innerHTML = (0, _getFilterListTemplateDefault.default)(el);
        else if (el.type === "appliance") DOMFilterAppliance.innerHTML = (0, _getFilterListTemplateDefault.default)(el);
        else if (el.type === "utensils") DOMFilterUtensils.innerHTML = (0, _getFilterListTemplateDefault.default)(el);
    });
    if (badgesList) {
        DOMBadges.innerHTML = (0, _getBadgesTemplateDefault.default)(badgesList);
        addActiveClass(badgesList);
    }
}
document.addEventListener("click", ({ target  })=>{
    const badgeCloseBtn = target.closest(".badge");
    const filterOption = target.closest(".filter__option");
    //Open or close filter lists
    if (target.classList.contains("filter__arrow")) toggleFilterLists(target);
    if (filterOption) {
        const badgeExist = badges.some(({ name  })=>name === target.innerText);
        if (!badgeExist) badges.push({
            type: target.dataset.type,
            name: target.innerText
        });
        else badges = badges.filter(({ name  })=>name !== target.innerText);
        search(badges);
    }
    if (badgeCloseBtn) {
        badges = badges.filter(({ name  })=>name !== badgeCloseBtn.dataset.id);
        search(badges);
    }
});
const search = (badgesList)=>{
    const filteredRecipesBySearch = (0, _recipesJsDefault.default).filter((recipe)=>JSON.stringify(recipe).toLowerCase().includes(searchValue));
    const arr = filteredRecipesBySearch.length ? filteredRecipesBySearch : [];
    // Filter recipes by badges
    const filterRecipes = arr.filter(({ ingredients , appliance , ustensils  })=>{
        // If badgesList is empty, return all recipes
        if (!badgesList.length) return true;
        // If any of the badges match any of the recipes, return true
        return badgesList.every(({ name , type  })=>{
            if (type === "ingredients") return ingredients.some(({ ingredient  })=>ingredient.toLowerCase() === name.toLowerCase());
            else if (type === "appliance") return appliance.toLowerCase() === name.toLowerCase();
            else if (type === "utensils") return ustensils.some((utensil)=>utensil.toLowerCase() === name.toLowerCase());
        });
    });
    render(filterRecipes, badgesList);
};
function toggleFilterLists(btn) {
    const filters = document.querySelectorAll(".filter");
    filters.forEach((filter)=>{
        if (filter !== btn.parentElement) filter.classList.remove("open");
        else filter.classList.toggle("open");
    });
}
function getUniqueValues(arr) {
    // Step 1: Get all values from all recipes/appliances/utensils
    // Step 2: Flatten the array of arrays into one array
    // Step 3: Sort alphabetically
    const listIngredients = arr.map(({ ingredients  })=>ingredients.map(({ ingredient  })=>ingredient.toLowerCase())).flat().sort();
    const listAppliance = arr.map(({ appliance  })=>appliance.toLowerCase()).sort();
    const listUtensils = arr.map(({ ustensils  })=>ustensils.map((utensil)=>utensil.toLowerCase())).flat().sort();
    // Step 4: Get unique values from and capitalize first letter
    return [
        {
            list: [
                ...new Set(listIngredients)
            ].map((0, _capitalizeFirstLetterDefault.default)),
            type: "ingredients"
        },
        {
            list: [
                ...new Set(listAppliance)
            ].map((0, _capitalizeFirstLetterDefault.default)),
            type: "appliance"
        },
        {
            list: [
                ...new Set(listUtensils)
            ].map((0, _capitalizeFirstLetterDefault.default)),
            type: "utensils"
        }
    ];
}
function addActiveClass(badgesList) {
    badgesList.forEach(({ type , name  })=>{
        document.querySelector(`[data-type="${type}"][data-id="${name}"]`).classList.add("active");
    });
}
const searchPanel = document.getElementById("search-panel");
searchPanel.addEventListener("submit", (event)=>{
    event.preventDefault();
    // Get search value without spaces and lowercase
    searchValue = Object.fromEntries(new FormData(event.target)).search.trim().toLowerCase();
    if (searchValue) search(badges);
});

},{"./data/recipes.js":"1xyzV","./utils/getRecipesTemplate.js":"lpuht","./utils/capitalizeFirstLetter":"ixg1I","./utils/getBadgesTemplate":"8YjjC","./utils/getFilterListTemplate":"forBi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xyzV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const recipes = [
    {
        "id": 1,
        "name": "Limonade de Coco",
        "servings": 1,
        "ingredients": [
            {
                "ingredient": "Lait de coco",
                "quantity": 400,
                "unit": "ml"
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 2
            },
            {
                "ingredient": "Cr\xe8me de coco",
                "quantity": 2,
                "unit": " cuill\xe8res"
            },
            {
                "ingredient": "Sucre",
                "quantity": 30,
                "unit": "g"
            },
            {
                "ingredient": "Gla\xe7ons",
                "quantity": 2
            }
        ],
        "time": 10,
        "description": "Mettre les gla\xe7ons \xe0 votre go\xfbt dans le blender, ajouter le lait, la cr\xe8me de coco, le jus de 2 citrons et le sucre. Mixer jusqu'\xe0 avoir la consistence d\xe9sir\xe9e",
        "appliance": "Blender",
        "ustensils": [
            "cuill\xe8re \xe0 Soupe",
            "verres",
            "presse citron"
        ]
    },
    {
        "id": 2,
        "name": "Poisson Cru \xe0 la tahitienne",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Thon Rouge (ou blanc)",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Concombre",
                "quantity": 1
            },
            {
                "ingredient": "Tomate",
                "quantity": 2
            },
            {
                "ingredient": "Carotte",
                "quantity": 1
            },
            {
                "ingredient": "Citron Vert",
                "quantity": 5
            },
            {
                "ingredient": "Lait de Coco",
                "quantity": 100,
                "unit": "ml"
            }
        ],
        "time": 60,
        "description": "D\xe9couper le thon en d\xe9s, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au r\xe9frig\xe9rateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Apr\xe8s avoir laiss\xe9 mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les p\xe9pins. Rayer la carotte. Ajouter les l\xe9gumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 \xe0 2 cuill\xe8res de Cr\xe8me de coco",
        "appliance": "Saladier",
        "ustensils": [
            "presse citron"
        ]
    },
    {
        "id": 3,
        "name": "Poulet coco r\xe9unionnais",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poulet",
                "quantity": 1
            },
            {
                "ingredient": "Lait de coco",
                "quantity": 400,
                "unit": "ml"
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Poivron rouge",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 1,
                "unit": " cuill\xe8res"
            }
        ],
        "time": 80,
        "description": "D\xe9couper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois dor\xe9, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon d\xe9coup\xe9s en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
        "appliance": "Cocotte",
        "ustensils": [
            "couteau"
        ]
    },
    {
        "id": 4,
        "name": "Salade de riz",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Riz blanc",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Thon en miettes",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Tomate",
                "quantity": 2
            },
            {
                "ingredient": "Oeuf dur",
                "quantity": 2
            },
            {
                "ingredient": "Ma\xefs",
                "quantity": 300,
                "unit": "g"
            },
            {
                "ingredient": "Vinaigrette",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 50,
        "description": "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en d\xe9s, ajouter au riz les oeufs, les tomates, le poisson, le ma\xefs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
        "appliance": "Cuiseur de riz",
        "ustensils": [
            "saladier",
            "passoire"
        ]
    },
    {
        "id": 5,
        "name": "Tarte au thon",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "P\xe2te feuillet\xe9e",
                "quantity": 1
            },
            {
                "ingredient": "Thon en miettes",
                "quantity": 130,
                "unit": "g"
            },
            {
                "ingredient": "Tomate",
                "quantity": 2
            },
            {
                "ingredient": "Cr\xe8me fraiche",
                "quantity": 2,
                "unit": " cuill\xe8res"
            },
            {
                "ingredient": "gruy\xe8re r\xe2p\xe9",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Moutarde de Dijon",
                "quantity": 1,
                "unite": " cuill\xe8res"
            }
        ],
        "time": 45,
        "description": "Etaler la p\xe2te feuillet\xe9 aux dimensions du moule, \xe9taler la moutarde sur la p\xe2te feuillet\xe9, ajouter le thon. D\xe9couper les tomates en rondelles et les poser sur le poisson, ajouter un peu de cr\xe8me fraiche sur toute la tarte et recouvrez de gruy\xe8re r\xe2p\xe9. Cuire au four 30 minutes",
        "appliance": "Four",
        "ustensils": [
            "moule \xe0 tarte",
            "r\xe2pe \xe0 fromage",
            "couteau"
        ]
    },
    {
        "id": 6,
        "name": "Tarte aux pommes",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "P\xe2te bris\xe9e",
                "quantity": 1
            },
            {
                "ingredient": "Pomme",
                "quantity": 3
            },
            {
                "ingredient": "Oeuf",
                "quantity": "2"
            },
            {
                "ingredient": "Cr\xe8me fraiche",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Sucre en Poudre",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Sucre vanill\xe9",
                "quantity": 1,
                "unit": "sachets"
            }
        ],
        "time": 50,
        "description": "Commencez par m\xe9langer les oeufs le sucre et le sucre vanill\xe9 dans un saladier, d\xe9couper les pommes en tranches, ajouter la cr\xe8me fraiche aux oeufs. Une fois que tout est pret, \xe9talez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la pr\xe9paration \xe0 base d'oeufs et de cr\xeame fraiche. Laisser cuire au four pendant 30 minutes",
        "appliance": "Four",
        "ustensils": [
            "moule \xe0 tarte",
            "saladier",
            "fourchette"
        ]
    },
    {
        "id": 7,
        "name": "Tartelettes au chocolat et aux fraises",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "P\xe2te sabl\xe9e",
                "quantity": 1
            },
            {
                "ingredient": "Chocolat au lait",
                "quantity": 300,
                "unit": "g"
            },
            {
                "ingredient": "Cr\xe8me liquide",
                "quantity": 80,
                "unit": "cl"
            },
            {
                "ingredient": "Beurre",
                "quantity": "30",
                "unit": "g"
            },
            {
                "ingredient": "Fraise",
                "quantity": 6
            }
        ],
        "time": 50,
        "description": "Etaler la pate dans les moules \xe0 tartelette. Faire cuire la pate 30 minutes. D\xe9couper le chocolat en morceau et le faire chauffer, y ajouter la cr\xeame liquide, ajouter le beurre et remuer jusqu'\xe0 avoir une p\xe2te homog\xe8ne. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
        "appliance": "Four",
        "ustensils": [
            "moule \xe0 tartelettes (6)",
            "casserolle"
        ]
    },
    {
        "id": 8,
        "name": "Brownie",
        "servings": 10,
        "ingredients": [
            {
                "ingredient": "Noix",
                "quantity": "180",
                "unit": "g"
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 150,
                "unit": "g"
            },
            {
                "ingredient": "Beurre",
                "quantity": 120,
                "unit": "g"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 2
            },
            {
                "ingredient": "Sucre en Poudre",
                "quantity": "110",
                "unit": "g"
            },
            {
                "ingredient": "farine",
                "quantity": 90,
                "unit": "g"
            }
        ],
        "time": 60,
        "description": "Hachez les noix grossi\xe8rement. Faire fondre le chocolat avec le beurre. M\xe9langer les oeuf et le sucre et m\xe9langer au chocolat. Ajouter la farine. M\xe9langer afin d'avoir quelque chose d'homog\xe8ne puis incorporer les noix. Verser la pr\xe9paration dans un moule de pr\xe9f\xe9rence rectangulaire. Cuire 2O \xe0 25 minutes \xe0 180\xb0. Sortez du four et attendez quelques minutes pour d\xe9mouler. Servir avec une boule de glace pour plus de gourmandise.",
        "appliance": "Four",
        "ustensils": [
            "moule \xe0 gateaux",
            "casserolle"
        ]
    },
    {
        "id": 9,
        "name": "Salade M\xe9diterann\xe9ene fraiche au ch\xe8vre",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Concombre",
                "quantity": 1
            },
            {
                "ingredient": "Olives"
            },
            {
                "ingredient": "Fromage de ch\xe8vre",
                "quantity": 150,
                "unit": "g"
            },
            {
                "ingredient": "Vinaigre Balsamic"
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Basilic"
            }
        ],
        "time": 15,
        "description": "Peler le concombre le couper 2, retirer les p\xe9pins. Couper les olives en morceaux, ainsi que le fromage de ch\xe8vre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives \xe0 votre gout.",
        "appliance": "Saladier",
        "ustensils": [
            "cuill\xe8re en bois",
            "couteau"
        ]
    },
    {
        "id": 10,
        "name": "Tartiflette",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Roblochon",
                "quantity": "1"
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 4.5,
                "unit": "kg"
            },
            {
                "ingredient": "Jambon fum\xe9",
                "quantity": 2,
                "unit": "tranches"
            },
            {
                "ingredient": "Oignon",
                "quantity": 300,
                "unit": "g"
            },
            {
                "ingredient": "Vin blanc sec",
                "quantity": 30,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description": "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fum\xe9 coup\xe9 en en morceaux ainsi que les pommes de terres. Salez, poivrez \xe0 votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Apr\xe8s 5 minutes, mettre le tout dans un plat \xe0 gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'\xe9paisseur et recouvrir les pommes de terre. Cuire au four (environ 220\xb0) durant 25 minutes. C'est pr\xeat !",
        "appliance": "Four",
        "ustensils": [
            "plat \xe0 gratin",
            "couteau",
            "\xc9conome"
        ]
    },
    {
        "id": 11,
        "name": "Salade tomate, mozzarella et pommes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Tomates cerises",
                "quantity": 250,
                "unit": "g"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 150,
                "unit": "g"
            },
            {
                "ingredient": "Jambon de parme",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Pommes",
                "quantity": 1
            },
            {
                "ingredient": "Salade Verte",
                "quantity": 1
            },
            {
                "ingredient": "Vinaigrette",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description": "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage d\xe9coup\xe9 en cubes ou en boules avec la cuill\xe8re \xe0 melon. D\xe9couper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi d\xe9coup\xe9e en petit morceaux. Assaisonnez \xe0 votre gout. ",
        "appliance": "Saladier",
        "ustensils": [
            "couteau",
            "cuill\xe8re \xe0 melon"
        ]
    },
    {
        "id": 12,
        "name": "Compote pomme rhubarbe",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Rhubarbe",
                "quantity": 160,
                "unit": "g"
            },
            {
                "ingredient": "Pommes",
                "quantity": 8
            },
            {
                "ingredient": "Sucre vanill\xe9",
                "quantity": 6,
                "unit": "sachets"
            },
            {
                "ingredient": "Eau",
                "quantity": "0.5",
                "unit": "tasses"
            }
        ],
        "time": 40,
        "description": "\xc9plucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanill\xe9. Laisser cuire 15 minutes en remuant r\xe9guli\xe8rement.",
        "appliance": "Casserole",
        "ustensils": [
            "couteau",
            "\xe9conome"
        ]
    },
    {
        "id": 13,
        "name": "Salade m\xe2ch\xe9e de patates",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "M\xe2che",
                "quantity": 60,
                "unit": "g"
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "\xc9chalote",
                "quantity": 2
            },
            {
                "ingredient": "Vinaigre de cidre",
                "quantity": 1,
                "unit": "cuill\xe8re \xe0 soupe"
            },
            {
                "ingredient": "huile d'olive",
                "quantity": 2,
                "unit": "cuill\xe8re \xe0 soupe"
            }
        ],
        "time": 40,
        "description": "Cuire les pommes de terre environ 30 minutes. D\xe9couper les \xe9chalottes finement. Durant la cuisson des pommes de terre. Pr\xe9parez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez \xe0 discr\xe9tion. Dans un saladier, mettre le m\xe2che. Ajouter",
        "appliance": "Casserole",
        "ustensils": [
            "couteau",
            "saladier",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 14,
        "name": "Galette Bretonne Saucisse et Fromage \xe0 raclette",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Saucisse bretonne ou de toulouse",
                "quantity": 2
            },
            {
                "ingredient": "Farine de bl\xe9 noir",
                "quantity": 130,
                "unit": "g"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            },
            {
                "ingredient": "Fromage \xe0 raclette",
                "quantity": 300,
                "unit": "g"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Beurre",
                "quantity": 75,
                "unit": "g"
            }
        ],
        "time": 100,
        "description": "M\xe9langer la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter \xe0 la p\xe2te. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les cr\xeapes avec une partie du fromage. Mettre le reste du fromage \xe0 raclette par dessus les cr\xeapes. Passer four pendant 20 minutes",
        "appliance": "Four",
        "ustensils": [
            "poelle \xe0 frire",
            "couteau"
        ]
    },
    {
        "id": 15,
        "name": "Cr\xeapes Chocolat Banane",
        "servings": 10,
        "ingredients": [
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Farine",
                "quantity": 250,
                "unit": "g"
            },
            {
                "ingredient": "Lait",
                "quantity": 600,
                "unit": "ml"
            },
            {
                "ingredient": "Beurre sal\xe9",
                "quantity": 30,
                "unit": "g"
            },
            {
                "ingredient": "Chocolat au lait",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Banane",
                "quantity": 4
            }
        ],
        "time": 60,
        "description": "M\xe9langez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'\xe0 avoir une masse homog\xe8ne. Pendant ce temps faites fondre le beurre et ajoutez en une partie \xe0 la p\xe2te \xe0 cr\xeapes. Faire fondre le chocolat ( avec le reste du beurre sal\xe9 ). Lorsque vous chauffez les cr\xeapes. Ajouter le chocolat fondu et les bananes coup\xe9es en rondelles. Ajoutez une touche de chantilly pour les gourmands",
        "appliance": "Po\xeble \xe0 cr\xeape",
        "ustensils": [
            "saladier",
            "louche",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 16,
        "name": "Gratin de p\xe2tes \xe0 la tomate",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomate",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 250,
                "unit": "g"
            },
            {
                "ingredient": "Pennes",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Basilic",
                "quantity": 1,
                "unit": "tiges"
            },
            {
                "ingredient": "huile d'olives",
                "quantity": 2,
                "unit": "cuill\xe8re \xe0 soupe"
            }
        ],
        "time": 45,
        "description": "Faire cuire les p\xe2tes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. D\xe9couper les tomates en petits morceaux, soit en tranches soit en d\xe9s. Coupez le basilic en petites morceaux et m\xe9langez le aux tomates.  Coupez la mozzarella en tranche. Pr\xe9chauffez le four \xe0 200\xb0. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et r\xe9galez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
        "appliance": "Four",
        "ustensils": [
            "plat \xe0 gratin",
            "couteau",
            "r\xe2pe \xe0 fromage"
        ]
    },
    {
        "id": 17,
        "name": "Smoothie \xe0 la fraise",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Fraise",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Past\xe8que",
                "quantity": 0.5
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 1,
                "unit": " cuill\xe8res"
            },
            {
                "ingredient": "Gla\xe7ons",
                "quantity": 8
            },
            {
                "ingredient": "Menthe"
            }
        ],
        "time": 15,
        "description": "Coupez les fraises en morceaux, d\xe9coupez la chaire de la past\xe8que en retirant les p\xe9pins. Mettre le tout dans le blender. Ajouter un cuilli\xe8re \xe0 soupe de juste de citron ainsi que les gla\xe7ons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et d\xe9guster.",
        "appliance": "Blender",
        "ustensils": [
            "verres",
            "couteau",
            "presse citron"
        ]
    },
    {
        "id": 18,
        "name": "Smoothie ananas et vanille",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Ananas",
                "quantity": 1
            },
            {
                "ingredient": "Glace \xe0 la vanille",
                "quantity": 500,
                "unit": "ml"
            },
            {
                "ingredient": "Lait",
                "quantity": 50,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description": "S\xe9parez 1/5\xe8me d'Ananas ( une belle tranche qui servira pour la d\xe9coration des verres ), mettre le reste coup\xe9 en cubes au blender, ajouter la glace \xe0 la vanille et le lait. Mixez. Servir et d\xe9corer avec l'ananas restant. C'est pr\xeat",
        "appliance": "Blender",
        "ustensils": [
            "verres",
            "couteau"
        ]
    },
    {
        "id": 19,
        "name": "Shake Banane Kiwi",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Kiwi",
                "quantity": 4
            },
            {
                "ingredient": "Citron",
                "quantity": 1
            },
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litres"
            },
            {
                "ingredient": "Sucre glace",
                "quantity": 30,
                "unit": "g"
            },
            {
                "ingredient": "Banane",
                "quantity": 1
            }
        ],
        "time": 0,
        "description": "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des gla\xe7ons si le lait n'a pas \xe9t\xe9 mis au frais.",
        "appliance": "Blender",
        "ustensils": [
            "couteau",
            "verres",
            "presse citron"
        ]
    },
    {
        "id": 20,
        "name": "Pates Carbonara",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Tagliatelles",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "g"
            },
            {
                "ingredient": "Cr\xe8me fraiche",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Parmesan",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "huile d'olive",
                "quantity": 1,
                "unit": " cuill\xe8res"
            }
        ],
        "time": 30,
        "description": "Faire cuire les pates comme indiqu\xe9 sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la cr\xeame fraiche et baisser le feu au minimum. Quand les Tagliatelles sont pr\xeates les mettre dans la sauteuse et bien m\xe9langer le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan r\xe2p\xe9.",
        "appliance": "Sauteuse",
        "ustensils": [
            "r\xe2pe \xe0 fromage",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 21,
        "name": "Spaghettis \xe0 la bolognaise",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Spaghettis",
                "quantity": 400,
                "unit": "g"
            },
            {
                "ingredient": "Oignon",
                "quantity": 2
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity": 300,
                "unit": "g"
            },
            {
                "ingredient": "Viande hach\xe9e 1% de mati\xe8re grasse",
                "quantity": 400,
                "unit": "g"
            },
            {
                "ingredient": "Vin rouge",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Cr\xe8me Fraiche",
                "quantity": 1,
                "unit": " cuill\xe8res"
            }
        ],
        "time": 30,
        "description": "Cuisiner la viande hach\xe9e dans une poelle \xe0 frire. Dans une autre faire cuire les oignons d\xe9coup\xe9s en fins d\xe9s avec un peu de beurre. Ajouter du vin rouge. M\xe9langer les oigons avec la viande hach\xe9e. Faire cuire les pates le temps indiqu\xe9 sur le paquet. Ajouter le coulis de tomates \xe0 la viande hach\xe9e. Une fois que les pates sont cuites, ajouter la cr\xe8me fraiche \xe0 la viande hach\xe9e. Serivir.",
        "appliance": "Casserolle.",
        "ustensils": [
            "Cuill\xe8re en bois",
            "louche",
            "couteau"
        ]
    },
    {
        "id": 22,
        "name": "Fondant au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Beurre",
                "quantity": 160,
                "unit": "g"
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Farine",
                "quantity": 50,
                "unit": "g"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 4
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "g"
            }
        ],
        "time": 30,
        "description": "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'\xe0 obtenir une texture de type mousse. Ajouter la farine ainsi que le m\xe9lange de beurre et chocolat fondu. Beurrez le moule \xe0 gateaux. Mettre au four pr\xe9chauff\xe9 \xe0 200\xb0 puis faites chauffer pendant 15 minutes. C'est pr\xeat. Servir avec une boule de glace ou une cr\xeame dessert.",
        "appliance": "Four",
        "ustensils": [
            "moule \xe0 gateaux",
            "fouet",
            "casserolle"
        ]
    },
    {
        "id": 23,
        "name": "Quiche lorraine",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "P\xe2te bris\xe9e",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Lardons",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Beurre",
                "quantity": 30,
                "unit": "g"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Cr\xe8me Fra\xeeche",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Lait",
                "quantity": 20,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description": "Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une po\xeale. Battre les oeufs en ajoutant la cr\xe8me fra\xeeche et le lait. Finalement ajouter les lardons, salez poivrez \xe0 votre gout. Verser l'ensemble sur la p\xe2te. Cuire environ 50 minutes.",
        "appliance": "Four",
        "ustensils": [
            "moule \xe0 gateaux",
            "rouleau \xe0 patisserie",
            "fouet"
        ]
    },
    {
        "id": 24,
        "name": "Salade de p\xe2tes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Thon en miettes",
                "quantity": 160,
                "unit": "g"
            },
            {
                "ingredient": "Ma\xefs",
                "quantity": 60,
                "unit": "g"
            },
            {
                "ingredient": "Tomate",
                "quantity": 1
            },
            {
                "ingredient": "Concombre",
                "quantity": 0.5
            },
            {
                "ingredient": "Macaronis",
                "quantity": 300,
                "unit": "g"
            },
            {
                "ingredient": "Mayonnaise",
                "quantity": 2,
                "unit": " cuill\xe8res"
            }
        ],
        "time": 40,
        "description": "D\xe9couper le concombre et les tomates en d\xe9s, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. M\xe9langer le tout et servir frais.",
        "appliance": "Saladier",
        "ustensils": [
            "couteau",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 25,
        "name": "Cookies",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Beurre",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Farine",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Chocolat noir en pepites",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            }
        ],
        "time": 30,
        "description": "Faire fondre le beurre et le m\xe9langer avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en m\xe9langeant peu pa peu pour avoir une masse sans grumaux. Ajouter les p\xe9pites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four \xe0 180\xb0 pour 10 minutes.",
        "appliance": "Four",
        "ustensils": [
            "fouet",
            "saladier",
            "plaque de cuisson"
        ]
    },
    {
        "id": 26,
        "name": "Soupe de tomates",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomate",
                "quantity": 6
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olives"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Ail",
                "quantity": 1,
                "unit": "gousses"
            }
        ],
        "time": 25,
        "description": "Verser de l'huile dans une cocotte minute couper les l\xe9gumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
        "appliance": "Mixer",
        "ustensils": [
            "cocotte minute",
            "couteau"
        ]
    },
    {
        "id": 27,
        "name": "Soupe \xe0 l'oseille",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Oseille",
                "quantity": 2
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            },
            {
                "ingredient": "Cr\xe8me fra\xeeche",
                "quantity": 4,
                "unit": "cuill\xe8re \xe0 soupe"
            },
            {
                "ingredient": "Vermicelles",
                "quantity": 1,
                "unit": "verres"
            },
            {
                "ingredient": "Beurre sal\xe9",
                "quantity": 50,
                "unit": "g"
            }
        ],
        "time": 15,
        "description": "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit pr\xeat, sortir du feu et apr\xe8s 5 minutes ajouter le jaune d'oeuf et la cr\xeame fra\xeeche",
        "appliance": "Casserolle",
        "ustensils": [
            "couteau",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 28,
        "name": "Soupe de poireaux",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poireau",
                "quantity": 3
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 400,
                "unit": "g"
            },
            {
                "ingredient": "Oseille",
                "quantity": 75,
                "unit": "g"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit": "g"
            },
            {
                "ingredient": "Cr\xeame fra\xeeche",
                "quantity": 10,
                "unit": "cl"
            }
        ],
        "time": 80,
        "description": "Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coup\xe9es en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la cr\xe8me. Bon appetit.",
        "appliance": "Mixer",
        "ustensils": [
            "casserolle",
            "couteau"
        ]
    },
    {
        "id": 29,
        "name": "Houmous Express",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Pois chiches",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Ail",
                "quantity": 1,
                "unit": "gousses"
            },
            {
                "ingredient": "Citron",
                "quantity": 2
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Paprika"
            }
        ],
        "time": 30,
        "description": "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
        "appliance": "Mixer",
        "ustensils": [
            "cuill\xe8re en bois",
            "presse citron"
        ]
    },
    {
        "id": 30,
        "name": "Pur\xe9e de pois cass\xe9s",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pois Cass\xe9",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Ail",
                "quantity": 2,
                "unit": "gousses"
            }
        ],
        "time": 60,
        "description": "Mettre tous les ingr\xe9dients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre \xe0 petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est pr\xeat",
        "appliance": "Mixer",
        "ustensils": [
            "casserolle",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 31,
        "name": "Jardini\xe8re de l\xe9gumes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Carotte",
                "quantity": 2
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 2
            },
            {
                "ingredient": "Haricots verts",
                "quantity": 150,
                "unit": "g"
            },
            {
                "ingredient": "Petits poids",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "g"
            }
        ],
        "time": 60,
        "description": "D\xe9couper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dor\xe9s, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pr\xe9 cuits ). Ajouter Sel, poivre, thyms et laurier",
        "appliance": "Po\xeble",
        "ustensils": [
            "Couteau",
            "\xe9conome"
        ]
    },
    {
        "id": 32,
        "name": "Croque Monsieur \xe0 la dinde",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain de mie",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Blanc de dinde",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Emmental",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Gruy\xe8re",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Lait",
                "quantity": 5,
                "unit": "cl"
            },
            {
                "ingredient": "Noix de muscade",
                "quantity": 1,
                "unit": "pinc\xe9es"
            }
        ],
        "time": 20,
        "description": "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'\xe9mental, une de blanc de dinde, et une autre d'emmental. Dans un r\xe9cipient, m\xe9langer le gruy\xe8re rapp\xe9 avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.",
        "appliance": "Four",
        "ustensils": [
            "r\xe2pe \xe0 fromage",
            "cuill\xe8re \xe0 Soupe",
            "couteau"
        ]
    },
    {
        "id": 33,
        "name": "Sandwich au saumon fum\xe9",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain de mie",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Saumon Fum\xe9",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Feuilles de laitue",
                "quantity": 4
            },
            {
                "ingredient": "Fromage blanc",
                "quantity": 4,
                "unit": " cuill\xe8res"
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 1,
                "unit": " cuill\xe8res"
            }
        ],
        "time": 5,
        "description": "M\xe9langer le fromage blanc avec le citron. Ajouter un peu de sel et poivre \xe0 votre gout. Faire dorer le pain de mie. Puis \xe9taler le m\xe9lange. Ajouter une feuille de salade puis le saumon fum\xe9. C'est pr\xeat.",
        "appliance": "Four",
        "ustensils": [
            "couteau",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 34,
        "name": "Pur\xe9e de patate douce",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Patate douce",
                "quantity": 800,
                "unit": "g"
            },
            {
                "ingredient": "Cr\xe8me fra\xeeche",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Orange",
                "quantity": 1
            }
        ],
        "time": 25,
        "description": "Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserolle d'eau bouillante. Passer au mixer en ajoutant la cr\xe8me et l'huile d'olive \xe0 son gout. Salez, poivrez. Pressez l'orange et ajouter le jus \xe0 l'ensemble. Servir.",
        "appliance": "Mixer",
        "ustensils": [
            "couteau",
            "\xe9conome",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 35,
        "name": "Pur\xe9e de carottes",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Carotte",
                "quantity": 6
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 1
            },
            {
                "ingredient": "Beurre",
                "quantity": 20,
                "unit": "g"
            },
            {
                "ingredient": "Cr\xe8me fra\xeeche",
                "quantity": 2,
                "unit": " cuill\xe8res"
            },
            {
                "ingredient": "Cumin",
                "quantity": 1,
                "unit": " cuill\xe8res \xe0 caf\xe9"
            },
            {
                "ingredient": "Noix de muscade",
                "quantity": 1,
                "unit": "pinc\xe9es"
            }
        ],
        "time": 25,
        "description": "\xc9plucher les l\xe9gumes, les couper en morceaux et les mettre \xe0 cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la cr\xe8me. Ajouter le cumun et la noix de muscade.",
        "appliance": "Mixer",
        "ustensils": [
            "cocotte minute",
            "couteau",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 36,
        "name": "Lasagne Courgettes et Ch\xe8vre",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Courgette",
                "quantity": 2
            },
            {
                "ingredient": "Fromage de ch\xe8vre",
                "quantity": 4
            },
            {
                "ingredient": "Lait",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Lasagnes",
                "quantity": 5,
                "unit": "feuilles"
            },
            {
                "ingredient": "Gruy\xe8re",
                "quantity": 40,
                "unit": "g"
            },
            {
                "ingredient": "Ma\xefzena",
                "quantity": 1,
                "unit": " cuill\xe8res"
            }
        ],
        "time": 35,
        "description": "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de ch\xe8vre frais. Pr\xe9parer la b\xe9chamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiy\xe8re. Passer au four \xe0 180\xb0 durant 20 \xe0 25 minutes.",
        "appliance": "Four",
        "ustensils": [
            "plat \xe0 gratin",
            "r\xe2pe \xe0 fromage",
            "fouet"
        ]
    },
    {
        "id": 37,
        "name": "Courgettes farcies au boeuf",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Courgette",
                "quantity": 2
            },
            {
                "ingredient": "Viande hach\xe9e",
                "quantity": 600,
                "unit": "g"
            },
            {
                "ingredient": "Huile d'olives",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Coulis de tomates",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Gruy\xe8re",
                "quantity": 50,
                "unit": "g"
            }
        ],
        "time": 60,
        "description": "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. R\xe9server.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hach\xe9e. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rap\xe9",
        "appliance": "Four",
        "ustensils": [
            "couteau",
            "cuill\xe8re en bois",
            "Poelle \xe0 frire"
        ]
    },
    {
        "id": 38,
        "name": "Pain Perdu",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain",
                "quantity": 6,
                "unit": "tranches"
            },
            {
                "ingredient": "Lait",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Sucre roux",
                "quantity": 75,
                "unit": "g"
            }
        ],
        "time": 20,
        "description": "Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes \xe0 180\xb0. Servir",
        "appliance": "Four",
        "ustensils": [
            "fouet",
            "bol",
            "Cuill\xe8re \xe0 Soupe"
        ]
    },
    {
        "id": 39,
        "name": "Crumble aux pommes",
        "servings": 40,
        "ingredients": [
            {
                "ingredient": "Pomme",
                "quantity": 2
            },
            {
                "ingredient": "Farine",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit": "g"
            },
            {
                "ingredient": "Sucre roux",
                "quantity": 80,
                "unit": "g"
            }
        ],
        "time": 40,
        "description": "D\xe9couper les pommes en d\xe9. M\xe9langer dans un saladier la farine, le sucre et le beurre. Bien m\xe9langer. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four",
        "appliance": "Four",
        "ustensils": [
            "saladier",
            "couteau",
            "fouet"
        ]
    },
    {
        "id": 40,
        "name": "Limonade",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Eau",
                "quantity": 1,
                "unit": "Litres"
            },
            {
                "ingredient": "Citron Vert",
                "quantity": 3
            },
            {
                "ingredient": "Sucre en poudre",
                "quantity": 4,
                "unit": " cuill\xe8res \xe0 caf\xe9"
            },
            {
                "ingredient": "Bicarbonate",
                "quantity": 1,
                "unit": " cuill\xe8res \xe0 caf\xe9"
            }
        ],
        "time": 10,
        "description": "Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien m\xe9langer. Ajouter le bicarbonate. Servir. Ajouter des gla\xe7on et une feuille de menthe pour la d\xe9co.",
        "appliance": "Saladier",
        "ustensils": [
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 41,
        "name": "Mousse au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Sucre vanill\xe9",
                "quantity": 1,
                "unit": "sachets"
            }
        ],
        "time": 20,
        "description": "S\xe9parer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au m\xe9lange de chocolat. M\xe9langez d\xe9licatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
        "appliance": "Casserolle",
        "ustensils": [
            "fouet",
            "spatule",
            "verres"
        ]
    },
    {
        "id": 42,
        "name": "Charlotte au poires",
        "servings": 3,
        "ingredients": [
            {
                "ingredient": "Chocolat",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Poires au jus",
                "quantity": 0.5,
                "unit": "boites"
            },
            {
                "ingredient": "Boudoirs",
                "quantity": 15
            }
        ],
        "time": 60,
        "description": "Commencez par pr\xe9parer la mousse au chocolat au moins 2 heures avant. Quand la mousse est pr\xeate et a repos\xe9e. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.",
        "appliance": "Moule \xe0 charlotte",
        "ustensils": [
            "saladier",
            "couteau",
            "fouet"
        ]
    },
    {
        "id": 43,
        "name": "Tarte au citron",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "P\xe2te bris\xe9e",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "g"
            },
            {
                "ingredient": "Beurre fondu",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Citron"
            }
        ],
        "time": 50,
        "description": "Pr\xe9chauffez le fours \xe0 200\xb0. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ",
        "appliance": "Four",
        "ustensils": [
            "rouleau \xe0 patisserie",
            "moule \xe0 tarte",
            "presse citron"
        ]
    },
    {
        "id": 44,
        "name": "Cr\xe8me d\xe9ssert au chocolat",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litres"
            },
            {
                "ingredient": "Chocolat",
                "quantity": 200,
                "unit": "g"
            },
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit": "g"
            },
            {
                "ingredient": "farine",
                "quantity": 40,
                "unit": "g"
            }
        ],
        "time": 15,
        "description": "M\xe9langer la farine et le beurre fondu en ajoutant le lait peu \xe0 peu. Ajouter du sucre apr\xe8s la cuisson. Bien m\xe9langer. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en m\xe9langeant avec une cuill\xe8re en bois. Mettre dans des verres",
        "appliance": "Casserolle",
        "ustensils": [
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 45,
        "name": "Cr\xe8me patissi\xe8re",
        "servings": 8,
        "ingredients": [
            {
                "ingredient": "Lait",
                "quantity": 50,
                "unit": "cl"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 2
            },
            {
                "ingredient": "Farine",
                "quantity": 30,
                "unit": "g"
            },
            {
                "ingredient": "Sucre",
                "quantity": 80,
                "unit": "g"
            }
        ],
        "time": 30,
        "description": "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre \xe0 feu doux pour faire \xe9paissir en remuant pendant 5 \xe0 10 minutes.",
        "appliance": "Casserolle",
        "ustensils": [
            "fouet",
            "saladier"
        ]
    },
    {
        "id": 46,
        "name": "Far breton",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Farine",
                "quantity": 250,
                "unit": "g"
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "g"
            },
            {
                "ingredient": "Sucre vanill\xe9",
                "quantity": 1,
                "unit": "sachets"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 4
            },
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litre"
            },
            {
                "ingredient": "Pruneaux",
                "quantity": 100,
                "unit": "g"
            }
        ],
        "time": 60,
        "description": "M\xe9langer la farine avec le sucre et les oeufs en ajoutant du sucre vanill\xe9. Ajouter le lait petit \xe0 petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurr\xe9 y placer les pruneaux et faire cuire \xe0 200\xb0 pendant 45 minutes",
        "appliance": "Four",
        "ustensils": [
            "fouet",
            "moule",
            "verres"
        ]
    },
    {
        "id": 47,
        "name": "Mousse au citron",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Jus de citron",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Mascarpone",
                "quantity": 250,
                "unit": "g"
            },
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Cr\xe8me Fra\xeeche",
                "quantity": 20,
                "unit": "cl"
            }
        ],
        "time": 5,
        "description": "M\xe9langer le jus de citron avec le sucre et la mascarpone. Ajouter la cr\xe8me fraiche. M\xe9langer le tout et mettre au cong\xe9lateur pendant 1 heure. Servir",
        "appliance": "Saladier",
        "ustensils": [
            "fouet",
            "verres",
            "cuill\xe8re en bois"
        ]
    },
    {
        "id": 48,
        "name": "Pizza",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "P\xe2te \xe0 pizza",
                "quantity": 1
            },
            {
                "ingredient": "Tomates pel\xe9es",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Lardons",
                "quantity": 1,
                "unit": "barquettes"
            },
            {
                "ingredient": "Champignons de paris",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Gruy\xe8re",
                "quantity": 200,
                "unit": "g"
            }
        ],
        "time": 40,
        "description": "\xc9taler la pate a pizza. Ecraser les tomates pel\xe9es, les \xe9taler sur la p\xe2te, ajouter les lardons et les champignons. Ajouter le gruy\xe8re eet passer au four \xe0 220\xb0 durant 20 minutes",
        "appliance": "Four",
        "ustensils": [
            "rouleau \xe0 patisserie",
            "r\xe2pe \xe0 fromage",
            "couteau"
        ]
    },
    {
        "id": 49,
        "name": "Smoothie tropical",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Bananes",
                "quantity": 2
            },
            {
                "ingredient": "Kiwis",
                "quantity": 3
            },
            {
                "ingredient": "Mangue",
                "quantity": 1
            },
            {
                "ingredient": "Ananas",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Miel",
                "quantity": 2,
                "unit": " cuill\xe8res"
            }
        ],
        "time": 0,
        "description": "D\xe9couper les fruits. Le passer au blender jusqu'\xe0 obtenir une texture liquide. Mettre au frais. Servir",
        "appliance": "Blender",
        "ustensils": [
            "couteau",
            "verres"
        ]
    },
    {
        "id": 50,
        "name": "Frangipane",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "P\xe2te feuillet\xe9e",
                "quantity": 400,
                "unit": "g"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 6
            },
            {
                "ingredient": "Poudre d'amendes",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Beurre",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Sucre glace",
                "quantity": 500,
                "unit": "g"
            }
        ],
        "time": 60,
        "description": "Pr\xe9parer la frangipane : M\xe9langer le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuillet\xe9 et mettre dans un moule \xe0 tarte. Garnir de frangipane et recouvrir du reste de pate feuillet\xe9e. Mettre au four 30 minutes",
        "appliance": "Four",
        "ustensils": [
            "rouleau \xe0 patisserie",
            "fouet"
        ]
    }
];
exports.default = recipes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lpuht":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getRecipesTemplate(recipes) {
    //Generate HTML template with all recipes, use map to loop through array of recipes
    return recipes.map((recipe)=>{
        // Take each recipe and return a template
        const { name , description , time , ingredients  } = recipe;
        // Ingredients is an array of objects, so we need to loop through it and get the name and quantity and unit
        // Take each ingredient and return a template
        const listIngredients = ingredients.map(({ ingredient , quantity , unit  })=>`
        <li class="ingredients__item"><b>${ingredient}: </b>${quantity ? quantity : ""}${unit ? unit : ""}</li>
        `).join("");
        return `
        <div class="recipe">
            <img class="recipe__img" src="https://picsum.photos/380/178" alt="recipe">
            <div class="recipe__wrap">
                <div class="recipe__header">
                    <h2 class="recipe__title">${name}</h2>
                    <div class="recipe__duration">
                        <img src="/Clock.ebf82c45.svg" alt="icon duration">
                        ${time} min
                    </div>
                </div>
                <div class="recipe__content">
                    <ul class="recipe__ingredients ingredients list-group">
                        ${listIngredients}
                    </ul>
                    <p class="recipe__description">
                        ${description}
                    </p>
                </div>
            </div>
        </div>
  `;
    }).join("");
}
exports.default = getRecipesTemplate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixg1I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.default = capitalizeFirstLetter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8YjjC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getBadgesTemplate(badges) {
    return badges.map(({ name , type  })=>{
        let color = "";
        if (type === "ingredients") color = "blue";
        else if (type === "appliance") color = "green";
        else if (type === "utensils") color = "tomato";
        return ` 
        <span class="btn btn-sm badge-${color}">
            ${name} <span class="badge" data-id="${name}"><i class="fa-regular fa-circle-xmark"></i></span>
        </span>
    `;
    }).join("");
}
exports.default = getBadgesTemplate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"forBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFilterListTemplate({ list , type  }) {
    return list.map((ingredient, id)=>`<span class="filter__option-wrap"><span class="filter__option" data-id="${ingredient}" data-type="${type}">${ingredient}</span></span>`).join("");
}
exports.default = getFilterListTemplate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire8658")

//# sourceMappingURL=index.975ef6c8.js.map
