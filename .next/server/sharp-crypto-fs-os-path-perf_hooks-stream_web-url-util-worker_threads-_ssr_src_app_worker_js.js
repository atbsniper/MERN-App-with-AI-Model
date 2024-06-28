/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("sharp");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "stream/web":
/*!*****************************!*\
  !*** external "stream/web" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream/web");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "?c7c8":
/*!**********************************!*\
  !*** onnxruntime-node (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "(ssr)/./src/app/worker.js":
/*!***************************!*\
  !*** ./src/app/worker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _xenova_transformers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xenova/transformers */ \"(ssr)/./node_modules/@xenova/transformers/src/transformers.js\");\n\n// Skip local model check\n_xenova_transformers__WEBPACK_IMPORTED_MODULE_0__.env.allowLocalModels = false;\n// Use the Singleton pattern to enable lazy construction of the pipeline.\nclass PipelineSingleton {\n    static{\n        this.task = \"text-classification\";\n    }\n    static{\n        this.model = \"Xenova/distilbert-base-uncased-finetuned-sst-2-english\";\n    }\n    static{\n        this.instance = null;\n    }\n    static async getInstance(progress_callback = null) {\n        if (this.instance === null) {\n            this.instance = (0,_xenova_transformers__WEBPACK_IMPORTED_MODULE_0__.pipeline)(this.task, this.model, {\n                progress_callback\n            });\n        }\n        return this.instance;\n    }\n}\n// Listen for messages from the main thread\nself.addEventListener(\"message\", async (event)=>{\n    // Retrieve the classification pipeline. When called for the first time,\n    // this will load the pipeline and save it for future use.\n    let classifier = await PipelineSingleton.getInstance((x)=>{\n        // We also add a progress callback to the pipeline so that we can\n        // track model loading.\n        self.postMessage(x);\n    });\n    // Actually perform the classification\n    let output = await classifier(event.data.text);\n    // Send the output back to the main thread\n    self.postMessage({\n        status: \"complete\",\n        output: output\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvYXBwL3dvcmtlci5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDtBQUVyRCx5QkFBeUI7QUFDekJDLHFEQUFHQSxDQUFDQyxnQkFBZ0IsR0FBRztBQUV2Qix5RUFBeUU7QUFDekUsTUFBTUM7O2FBQ0tDLE9BQU87OzthQUNQQyxRQUFROzs7YUFDUkMsV0FBVzs7SUFFbEIsYUFBYUMsWUFBWUMsb0JBQW9CLElBQUksRUFBRTtRQUMvQyxJQUFJLElBQUksQ0FBQ0YsUUFBUSxLQUFLLE1BQU07WUFDeEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdOLDhEQUFRQSxDQUFDLElBQUksQ0FBQ0ksSUFBSSxFQUFFLElBQUksQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFRztZQUFrQjtRQUN4RTtRQUNBLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3hCO0FBQ0o7QUFFQSwyQ0FBMkM7QUFDM0NHLEtBQUtDLGdCQUFnQixDQUFDLFdBQVcsT0FBT0M7SUFDcEMsd0VBQXdFO0lBQ3hFLDBEQUEwRDtJQUMxRCxJQUFJQyxhQUFhLE1BQU1ULGtCQUFrQkksV0FBVyxDQUFDTSxDQUFBQTtRQUNqRCxpRUFBaUU7UUFDakUsdUJBQXVCO1FBQ3ZCSixLQUFLSyxXQUFXLENBQUNEO0lBQ3JCO0lBRUEsc0NBQXNDO0lBQ3RDLElBQUlFLFNBQVMsTUFBTUgsV0FBV0QsTUFBTUssSUFBSSxDQUFDQyxJQUFJO0lBRTdDLDBDQUEwQztJQUMxQ1IsS0FBS0ssV0FBVyxDQUFDO1FBQ2JJLFFBQVE7UUFDUkgsUUFBUUE7SUFDWjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy9hcHAvd29ya2VyLmpzP2VkMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGlwZWxpbmUsIGVudiB9IGZyb20gXCJAeGVub3ZhL3RyYW5zZm9ybWVyc1wiO1xuXG4vLyBTa2lwIGxvY2FsIG1vZGVsIGNoZWNrXG5lbnYuYWxsb3dMb2NhbE1vZGVscyA9IGZhbHNlO1xuXG4vLyBVc2UgdGhlIFNpbmdsZXRvbiBwYXR0ZXJuIHRvIGVuYWJsZSBsYXp5IGNvbnN0cnVjdGlvbiBvZiB0aGUgcGlwZWxpbmUuXG5jbGFzcyBQaXBlbGluZVNpbmdsZXRvbiB7XG4gICAgc3RhdGljIHRhc2sgPSAndGV4dC1jbGFzc2lmaWNhdGlvbic7XG4gICAgc3RhdGljIG1vZGVsID0gJ1hlbm92YS9kaXN0aWxiZXJ0LWJhc2UtdW5jYXNlZC1maW5ldHVuZWQtc3N0LTItZW5nbGlzaCc7XG4gICAgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbnN0YW5jZShwcm9ncmVzc19jYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBwaXBlbGluZSh0aGlzLnRhc2ssIHRoaXMubW9kZWwsIHsgcHJvZ3Jlc3NfY2FsbGJhY2sgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxufVxuXG4vLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGZyb20gdGhlIG1haW4gdGhyZWFkXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvLyBSZXRyaWV2ZSB0aGUgY2xhc3NpZmljYXRpb24gcGlwZWxpbmUuIFdoZW4gY2FsbGVkIGZvciB0aGUgZmlyc3QgdGltZSxcbiAgICAvLyB0aGlzIHdpbGwgbG9hZCB0aGUgcGlwZWxpbmUgYW5kIHNhdmUgaXQgZm9yIGZ1dHVyZSB1c2UuXG4gICAgbGV0IGNsYXNzaWZpZXIgPSBhd2FpdCBQaXBlbGluZVNpbmdsZXRvbi5nZXRJbnN0YW5jZSh4ID0+IHtcbiAgICAgICAgLy8gV2UgYWxzbyBhZGQgYSBwcm9ncmVzcyBjYWxsYmFjayB0byB0aGUgcGlwZWxpbmUgc28gdGhhdCB3ZSBjYW5cbiAgICAgICAgLy8gdHJhY2sgbW9kZWwgbG9hZGluZy5cbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh4KTtcbiAgICB9KTtcblxuICAgIC8vIEFjdHVhbGx5IHBlcmZvcm0gdGhlIGNsYXNzaWZpY2F0aW9uXG4gICAgbGV0IG91dHB1dCA9IGF3YWl0IGNsYXNzaWZpZXIoZXZlbnQuZGF0YS50ZXh0KTtcblxuICAgIC8vIFNlbmQgdGhlIG91dHB1dCBiYWNrIHRvIHRoZSBtYWluIHRocmVhZFxuICAgIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBzdGF0dXM6ICdjb21wbGV0ZScsXG4gICAgICAgIG91dHB1dDogb3V0cHV0LFxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOlsicGlwZWxpbmUiLCJlbnYiLCJhbGxvd0xvY2FsTW9kZWxzIiwiUGlwZWxpbmVTaW5nbGV0b24iLCJ0YXNrIiwibW9kZWwiLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwicHJvZ3Jlc3NfY2FsbGJhY2siLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NpZmllciIsIngiLCJwb3N0TWVzc2FnZSIsIm91dHB1dCIsImRhdGEiLCJ0ZXh0Iiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/app/worker.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-chunks/@xenova","vendor-chunks/onnxruntime-common","vendor-chunks/onnxruntime-web"], () => (__webpack_require__("(ssr)/./src/app/worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"sharp-crypto-fs-os-path-perf_hooks-stream_web-url-util-worker_threads-_ssr_src_app_worker_js": 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e("vendor-chunks/@xenova");
/******/ 			__webpack_require__.e("vendor-chunks/onnxruntime-common");
/******/ 			__webpack_require__.e("vendor-chunks/onnxruntime-web");
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;