(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tweakpane"] = factory();
	else
		root["Tweakpane"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/main/js/api/button.ts":
/*!***********************************!*\
  !*** ./src/main/js/api/button.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonApi = void 0;
var ButtonApi = /** @class */ (function () {
    /**
     * @hidden
     */
    function ButtonApi(buttonController) {
        this.controller = buttonController;
    }
    Object.defineProperty(ButtonApi.prototype, "hidden", {
        get: function () {
            return this.controller.viewModel.hidden;
        },
        set: function (hidden) {
            this.controller.viewModel.hidden = hidden;
        },
        enumerable: false,
        configurable: true
    });
    ButtonApi.prototype.dispose = function () {
        this.controller.viewModel.dispose();
    };
    ButtonApi.prototype.on = function (eventName, handler) {
        var emitter = this.controller.button.emitter;
        emitter.on(eventName, handler.bind(this));
        return this;
    };
    return ButtonApi;
}());
exports.ButtonApi = ButtonApi;


/***/ }),

/***/ "./src/main/js/api/event-handler-adapters.ts":
/*!***************************************************!*\
  !*** ./src/main/js/api/event-handler-adapters.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.folder = exports.monitor = exports.input = void 0;
/**
 * @hidden
 */
function input(_a) {
    var binding = _a.binding, eventName = _a.eventName, handler = _a.handler;
    if (eventName === 'change') {
        var emitter = binding.emitter;
        emitter.on('change', function (ev) {
            handler(ev.sender.getValueToWrite(ev.rawValue));
        });
    }
}
exports.input = input;
/**
 * @hidden
 */
function monitor(_a) {
    var binding = _a.binding, eventName = _a.eventName, handler = _a.handler;
    if (eventName === 'update') {
        var emitter = binding.emitter;
        emitter.on('update', function (ev) {
            handler(ev.sender.target.read());
        });
    }
}
exports.monitor = monitor;
/**
 * @hidden
 */
function folder(_a) {
    var eventName = _a.eventName, folder = _a.folder, handler = _a.handler, uiContainer = _a.uiContainer;
    if (eventName === 'change') {
        var emitter = uiContainer.emitter;
        emitter.on('inputchange', function (ev) {
            // TODO: Find more type-safe way
            handler(ev.inputBinding.getValueToWrite(ev.value));
        });
    }
    if (eventName === 'update') {
        var emitter = uiContainer.emitter;
        emitter.on('monitorupdate', function (ev) {
            handler(ev.monitorBinding.target.read());
        });
    }
    if (eventName === 'fold') {
        uiContainer.emitter.on('itemfold', function (ev) {
            handler(ev.expanded);
        });
        folder === null || folder === void 0 ? void 0 : folder.emitter.on('change', function (ev) {
            if (ev.propertyName !== 'expanded') {
                return;
            }
            handler(ev.sender.expanded);
        });
    }
}
exports.folder = folder;


/***/ }),

/***/ "./src/main/js/api/folder.ts":
/*!***********************************!*\
  !*** ./src/main/js/api/folder.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderApi = void 0;
var InputBindingControllerCreators = __webpack_require__(/*! ../controller/binding-creators/input */ "./src/main/js/controller/binding-creators/input.ts");
var MonitorBindingControllerCreators = __webpack_require__(/*! ../controller/binding-creators/monitor */ "./src/main/js/controller/binding-creators/monitor.ts");
var button_1 = __webpack_require__(/*! ../controller/button */ "./src/main/js/controller/button.ts");
var folder_1 = __webpack_require__(/*! ../controller/folder */ "./src/main/js/controller/folder.ts");
var separator_1 = __webpack_require__(/*! ../controller/separator */ "./src/main/js/controller/separator.ts");
var target_1 = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.ts");
var view_model_1 = __webpack_require__(/*! ../model/view-model */ "./src/main/js/model/view-model.ts");
var button_2 = __webpack_require__(/*! ./button */ "./src/main/js/api/button.ts");
var EventHandlerAdapters = __webpack_require__(/*! ./event-handler-adapters */ "./src/main/js/api/event-handler-adapters.ts");
var input_binding_1 = __webpack_require__(/*! ./input-binding */ "./src/main/js/api/input-binding.ts");
var monitor_binding_1 = __webpack_require__(/*! ./monitor-binding */ "./src/main/js/api/monitor-binding.ts");
var separator_2 = __webpack_require__(/*! ./separator */ "./src/main/js/api/separator.ts");
var FolderApi = /** @class */ (function () {
    /**
     * @hidden
     */
    function FolderApi(folderController) {
        this.controller = folderController;
    }
    Object.defineProperty(FolderApi.prototype, "expanded", {
        get: function () {
            return this.controller.folder.expanded;
        },
        set: function (expanded) {
            this.controller.folder.expanded = expanded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FolderApi.prototype, "hidden", {
        get: function () {
            return this.controller.viewModel.hidden;
        },
        set: function (hidden) {
            this.controller.viewModel.hidden = hidden;
        },
        enumerable: false,
        configurable: true
    });
    FolderApi.prototype.dispose = function () {
        this.controller.viewModel.dispose();
    };
    FolderApi.prototype.addInput = function (object, key, opt_params) {
        var params = opt_params || {};
        var uc = InputBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key, params.presetKey), params);
        this.controller.uiContainer.add(uc, params.index);
        return new input_binding_1.InputBindingApi(uc);
    };
    FolderApi.prototype.addMonitor = function (object, key, opt_params) {
        var params = opt_params || {};
        var uc = MonitorBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key), params);
        this.controller.uiContainer.add(uc, params.index);
        return new monitor_binding_1.MonitorBindingApi(uc);
    };
    FolderApi.prototype.addFolder = function (params) {
        var uc = new folder_1.FolderController(this.controller.document, __assign(__assign({}, params), { viewModel: new view_model_1.ViewModel() }));
        this.controller.uiContainer.add(uc, params.index);
        return new FolderApi(uc);
    };
    FolderApi.prototype.addButton = function (params) {
        var uc = new button_1.ButtonController(this.controller.document, __assign(__assign({}, params), { viewModel: new view_model_1.ViewModel() }));
        this.controller.uiContainer.add(uc, params.index);
        return new button_2.ButtonApi(uc);
    };
    FolderApi.prototype.addSeparator = function (opt_params) {
        var params = opt_params || {};
        var uc = new separator_1.SeparatorController(this.controller.document, {
            viewModel: new view_model_1.ViewModel(),
        });
        this.controller.uiContainer.add(uc, params.index);
        return new separator_2.SeparatorApi(uc);
    };
    FolderApi.prototype.on = function (eventName, handler) {
        EventHandlerAdapters.folder({
            eventName: eventName,
            folder: this.controller.folder,
            handler: handler.bind(this),
            uiContainer: this.controller.uiContainer,
        });
        return this;
    };
    return FolderApi;
}());
exports.FolderApi = FolderApi;


/***/ }),

/***/ "./src/main/js/api/input-binding.ts":
/*!******************************************!*\
  !*** ./src/main/js/api/input-binding.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBindingApi = void 0;
var HandlerAdapters = __webpack_require__(/*! ./event-handler-adapters */ "./src/main/js/api/event-handler-adapters.ts");
/**
 * The API for the input binding between the parameter and the pane.
 * @param In The type inner Tweakpane.
 * @param Out The type outer Tweakpane (= parameter object).
 */
var InputBindingApi = /** @class */ (function () {
    /**
     * @hidden
     */
    function InputBindingApi(bindingController) {
        this.controller = bindingController;
    }
    Object.defineProperty(InputBindingApi.prototype, "hidden", {
        get: function () {
            return this.controller.viewModel.hidden;
        },
        set: function (hidden) {
            this.controller.viewModel.hidden = hidden;
        },
        enumerable: false,
        configurable: true
    });
    InputBindingApi.prototype.dispose = function () {
        this.controller.viewModel.dispose();
    };
    InputBindingApi.prototype.on = function (eventName, handler) {
        HandlerAdapters.input({
            binding: this.controller.binding,
            eventName: eventName,
            handler: handler.bind(this),
        });
        return this;
    };
    InputBindingApi.prototype.refresh = function () {
        this.controller.binding.read();
    };
    return InputBindingApi;
}());
exports.InputBindingApi = InputBindingApi;


/***/ }),

/***/ "./src/main/js/api/monitor-binding.ts":
/*!********************************************!*\
  !*** ./src/main/js/api/monitor-binding.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorBindingApi = void 0;
var EventHandlerAdapters = __webpack_require__(/*! ./event-handler-adapters */ "./src/main/js/api/event-handler-adapters.ts");
/**
 * The API for the monitor binding between the parameter and the pane.
 */
var MonitorBindingApi = /** @class */ (function () {
    /**
     * @hidden
     */
    function MonitorBindingApi(bindingController) {
        this.controller = bindingController;
    }
    Object.defineProperty(MonitorBindingApi.prototype, "hidden", {
        get: function () {
            return this.controller.viewModel.hidden;
        },
        set: function (hidden) {
            this.controller.viewModel.hidden = hidden;
        },
        enumerable: false,
        configurable: true
    });
    MonitorBindingApi.prototype.dispose = function () {
        this.controller.viewModel.dispose();
    };
    MonitorBindingApi.prototype.on = function (eventName, handler) {
        EventHandlerAdapters.monitor({
            binding: this.controller.binding,
            eventName: eventName,
            handler: handler.bind(this),
        });
        return this;
    };
    MonitorBindingApi.prototype.refresh = function () {
        this.controller.binding.read();
    };
    return MonitorBindingApi;
}());
exports.MonitorBindingApi = MonitorBindingApi;


/***/ }),

/***/ "./src/main/js/api/preset.ts":
/*!***********************************!*\
  !*** ./src/main/js/api/preset.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.importJson = exports.exportJson = void 0;
/**
 * @hidden
 */
function exportJson(targets) {
    return targets.reduce(function (result, target) {
        var _a;
        return Object.assign(result, (_a = {},
            _a[target.presetKey] = target.read(),
            _a));
    }, {});
}
exports.exportJson = exportJson;
/**
 * @hidden
 */
function importJson(targets, preset) {
    targets.forEach(function (target) {
        var value = preset[target.presetKey];
        if (value !== undefined) {
            target.write(value);
        }
    });
}
exports.importJson = importJson;


/***/ }),

/***/ "./src/main/js/api/root.ts":
/*!*********************************!*\
  !*** ./src/main/js/api/root.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootApi = void 0;
var InputBindingControllerCreators = __webpack_require__(/*! ../controller/binding-creators/input */ "./src/main/js/controller/binding-creators/input.ts");
var MonitorBindingControllerCreators = __webpack_require__(/*! ../controller/binding-creators/monitor */ "./src/main/js/controller/binding-creators/monitor.ts");
var button_1 = __webpack_require__(/*! ../controller/button */ "./src/main/js/controller/button.ts");
var folder_1 = __webpack_require__(/*! ../controller/folder */ "./src/main/js/controller/folder.ts");
var input_binding_1 = __webpack_require__(/*! ../controller/input-binding */ "./src/main/js/controller/input-binding.ts");
var monitor_binding_1 = __webpack_require__(/*! ../controller/monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
var separator_1 = __webpack_require__(/*! ../controller/separator */ "./src/main/js/controller/separator.ts");
var UiUtil = __webpack_require__(/*! ../controller/ui-util */ "./src/main/js/controller/ui-util.ts");
var target_1 = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.ts");
var view_model_1 = __webpack_require__(/*! ../model/view-model */ "./src/main/js/model/view-model.ts");
var button_2 = __webpack_require__(/*! ./button */ "./src/main/js/api/button.ts");
var EventHandlerAdapters = __webpack_require__(/*! ./event-handler-adapters */ "./src/main/js/api/event-handler-adapters.ts");
var folder_2 = __webpack_require__(/*! ./folder */ "./src/main/js/api/folder.ts");
var input_binding_2 = __webpack_require__(/*! ./input-binding */ "./src/main/js/api/input-binding.ts");
var monitor_binding_2 = __webpack_require__(/*! ./monitor-binding */ "./src/main/js/api/monitor-binding.ts");
var Preset = __webpack_require__(/*! ./preset */ "./src/main/js/api/preset.ts");
var separator_2 = __webpack_require__(/*! ./separator */ "./src/main/js/api/separator.ts");
/**
 * The Tweakpane interface.
 *
 * ```
 * new Tweakpane(options: TweakpaneConfig): RootApi
 * ```
 *
 * See [[TweakpaneConfig]] interface for available options.
 */
var RootApi = /** @class */ (function () {
    /**
     * @hidden
     */
    function RootApi(rootController) {
        this.controller = rootController;
    }
    Object.defineProperty(RootApi.prototype, "element", {
        get: function () {
            return this.controller.view.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RootApi.prototype, "expanded", {
        get: function () {
            var folder = this.controller.folder;
            return folder ? folder.expanded : true;
        },
        set: function (expanded) {
            var folder = this.controller.folder;
            if (folder) {
                folder.expanded = expanded;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RootApi.prototype, "hidden", {
        get: function () {
            return this.controller.viewModel.hidden;
        },
        set: function (hidden) {
            this.controller.viewModel.hidden = hidden;
        },
        enumerable: false,
        configurable: true
    });
    RootApi.prototype.dispose = function () {
        this.controller.viewModel.dispose();
    };
    RootApi.prototype.addInput = function (object, key, opt_params) {
        var params = opt_params || {};
        var uc = InputBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key, params.presetKey), params);
        this.controller.uiContainer.add(uc, params.index);
        return new input_binding_2.InputBindingApi(uc);
    };
    RootApi.prototype.addMonitor = function (object, key, opt_params) {
        var params = opt_params || {};
        var uc = MonitorBindingControllerCreators.create(this.controller.document, new target_1.Target(object, key), params);
        this.controller.uiContainer.add(uc, params.index);
        return new monitor_binding_2.MonitorBindingApi(uc);
    };
    RootApi.prototype.addButton = function (params) {
        var uc = new button_1.ButtonController(this.controller.document, __assign(__assign({}, params), { viewModel: new view_model_1.ViewModel() }));
        this.controller.uiContainer.add(uc, params.index);
        return new button_2.ButtonApi(uc);
    };
    RootApi.prototype.addFolder = function (params) {
        var uc = new folder_1.FolderController(this.controller.document, __assign(__assign({}, params), { viewModel: new view_model_1.ViewModel() }));
        this.controller.uiContainer.add(uc, params.index);
        return new folder_2.FolderApi(uc);
    };
    RootApi.prototype.addSeparator = function (opt_params) {
        var params = opt_params || {};
        var uc = new separator_1.SeparatorController(this.controller.document, {
            viewModel: new view_model_1.ViewModel(),
        });
        this.controller.uiContainer.add(uc, params.index);
        return new separator_2.SeparatorApi(uc);
    };
    /**
     * Import a preset of all inputs.
     * @param preset The preset object to import.
     */
    RootApi.prototype.importPreset = function (preset) {
        var targets = UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).map(function (ibc) {
            return ibc.binding.target;
        });
        Preset.importJson(targets, preset);
        this.refresh();
    };
    /**
     * Export a preset of all inputs.
     * @return The exported preset object.
     */
    RootApi.prototype.exportPreset = function () {
        var targets = UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).map(function (ibc) {
            return ibc.binding.target;
        });
        return Preset.exportJson(targets);
    };
    /**
     * Adds a global event listener. It handles all events of child inputs/monitors.
     * @param eventName The event name to listen.
     * @return The API object itself.
     */
    RootApi.prototype.on = function (eventName, handler) {
        EventHandlerAdapters.folder({
            eventName: eventName,
            folder: this.controller.folder,
            handler: handler.bind(this),
            uiContainer: this.controller.uiContainer,
        });
        return this;
    };
    /**
     * Refreshes all bindings of the pane.
     */
    RootApi.prototype.refresh = function () {
        // Force-read all input bindings
        UiUtil.findControllers(this.controller.uiContainer.items, input_binding_1.InputBindingController).forEach(function (ibc) {
            ibc.binding.read();
        });
        // Force-read all monitor bindings
        UiUtil.findControllers(this.controller.uiContainer.items, monitor_binding_1.MonitorBindingController).forEach(function (mbc) {
            mbc.binding.read();
        });
    };
    return RootApi;
}());
exports.RootApi = RootApi;


/***/ }),

/***/ "./src/main/js/api/separator.ts":
/*!**************************************!*\
  !*** ./src/main/js/api/separator.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparatorApi = void 0;
var SeparatorApi = /** @class */ (function () {
    /**
     * @hidden
     */
    function SeparatorApi(controller) {
        this.controller = controller;
    }
    Object.defineProperty(SeparatorApi.prototype, "hidden", {
        get: function () {
            return this.controller.viewModel.hidden;
        },
        set: function (hidden) {
            this.controller.viewModel.hidden = hidden;
        },
        enumerable: false,
        configurable: true
    });
    SeparatorApi.prototype.dispose = function () {
        this.controller.viewModel.dispose();
    };
    return SeparatorApi;
}());
exports.SeparatorApi = SeparatorApi;


/***/ }),

/***/ "./src/main/js/binding/input.ts":
/*!**************************************!*\
  !*** ./src/main/js/binding/input.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBinding = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var InputBinding = /** @class */ (function () {
    function InputBinding(config) {
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.reader_ = config.reader;
        this.writer_ = config.writer;
        this.emitter = new emitter_1.Emitter();
        this.value = config.value;
        this.value.emitter.on('change', this.onValueChange_);
        this.target = config.target;
        this.read();
    }
    InputBinding.prototype.read = function () {
        var targetValue = this.target.read();
        if (targetValue !== undefined) {
            this.value.rawValue = this.reader_(targetValue);
        }
    };
    InputBinding.prototype.getValueToWrite = function (rawValue) {
        return this.writer_(rawValue);
    };
    InputBinding.prototype.write_ = function (rawValue) {
        this.target.write(this.getValueToWrite(rawValue));
    };
    InputBinding.prototype.onValueChange_ = function (ev) {
        this.write_(ev.rawValue);
        this.emitter.emit('change', {
            rawValue: ev.rawValue,
            sender: this,
        });
    };
    return InputBinding;
}());
exports.InputBinding = InputBinding;


/***/ }),

/***/ "./src/main/js/binding/monitor.ts":
/*!****************************************!*\
  !*** ./src/main/js/binding/monitor.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorBinding = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var MonitorBinding = /** @class */ (function () {
    function MonitorBinding(config) {
        this.onTick_ = this.onTick_.bind(this);
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.reader_ = config.reader;
        this.target = config.target;
        this.emitter = new emitter_1.Emitter();
        this.value = config.value;
        this.value.emitter.on('update', this.onValueUpdate_);
        this.ticker = config.ticker;
        this.ticker.emitter.on('tick', this.onTick_);
        this.read();
    }
    MonitorBinding.prototype.dispose = function () {
        this.ticker.disposable.dispose();
    };
    MonitorBinding.prototype.read = function () {
        var targetValue = this.target.read();
        if (targetValue !== undefined) {
            this.value.append(this.reader_(targetValue));
        }
    };
    MonitorBinding.prototype.onTick_ = function (_) {
        this.read();
    };
    MonitorBinding.prototype.onValueUpdate_ = function (ev) {
        this.emitter.emit('update', {
            rawValue: ev.rawValue,
            sender: this,
        });
    };
    return MonitorBinding;
}());
exports.MonitorBinding = MonitorBinding;


/***/ }),

/***/ "./src/main/js/constraint/composite.ts":
/*!*********************************************!*\
  !*** ./src/main/js/constraint/composite.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeConstraint = void 0;
/**
 * @hidden
 */
var CompositeConstraint = /** @class */ (function () {
    function CompositeConstraint(config) {
        this.constraints_ = config.constraints;
    }
    Object.defineProperty(CompositeConstraint.prototype, "constraints", {
        get: function () {
            return this.constraints_;
        },
        enumerable: false,
        configurable: true
    });
    CompositeConstraint.prototype.constrain = function (value) {
        return this.constraints_.reduce(function (result, c) {
            return c.constrain(result);
        }, value);
    };
    return CompositeConstraint;
}());
exports.CompositeConstraint = CompositeConstraint;


/***/ }),

/***/ "./src/main/js/constraint/list.ts":
/*!****************************************!*\
  !*** ./src/main/js/constraint/list.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConstraint = void 0;
/**
 * @hidden
 */
var ListConstraint = /** @class */ (function () {
    function ListConstraint(config) {
        this.opts_ = config.options;
    }
    Object.defineProperty(ListConstraint.prototype, "options", {
        get: function () {
            return this.opts_;
        },
        enumerable: false,
        configurable: true
    });
    ListConstraint.prototype.constrain = function (value) {
        var opts = this.opts_;
        if (opts.length === 0) {
            return value;
        }
        var matched = opts.filter(function (item) {
            return item.value === value;
        }).length > 0;
        return matched ? value : opts[0].value;
    };
    return ListConstraint;
}());
exports.ListConstraint = ListConstraint;


/***/ }),

/***/ "./src/main/js/constraint/point-2d.ts":
/*!********************************************!*\
  !*** ./src/main/js/constraint/point-2d.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2dConstraint = void 0;
var point_2d_1 = __webpack_require__(/*! ../model/point-2d */ "./src/main/js/model/point-2d.ts");
/**
 * @hidden
 */
var Point2dConstraint = /** @class */ (function () {
    function Point2dConstraint(config) {
        this.xConstraint = config.x;
        this.yConstraint = config.y;
    }
    Point2dConstraint.prototype.constrain = function (value) {
        return new point_2d_1.Point2d(this.xConstraint ? this.xConstraint.constrain(value.x) : value.x, this.yConstraint ? this.yConstraint.constrain(value.y) : value.y);
    };
    return Point2dConstraint;
}());
exports.Point2dConstraint = Point2dConstraint;


/***/ }),

/***/ "./src/main/js/constraint/range.ts":
/*!*****************************************!*\
  !*** ./src/main/js/constraint/range.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeConstraint = void 0;
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
/**
 * @hidden
 */
var RangeConstraint = /** @class */ (function () {
    function RangeConstraint(config) {
        this.maxValue = config.max;
        this.minValue = config.min;
    }
    RangeConstraint.prototype.constrain = function (value) {
        var result = value;
        if (!type_util_1.TypeUtil.isEmpty(this.minValue)) {
            result = Math.max(result, this.minValue);
        }
        if (!type_util_1.TypeUtil.isEmpty(this.maxValue)) {
            result = Math.min(result, this.maxValue);
        }
        return result;
    };
    return RangeConstraint;
}());
exports.RangeConstraint = RangeConstraint;


/***/ }),

/***/ "./src/main/js/constraint/step.ts":
/*!****************************************!*\
  !*** ./src/main/js/constraint/step.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StepConstraint = void 0;
/**
 * @hidden
 */
var StepConstraint = /** @class */ (function () {
    function StepConstraint(config) {
        this.step = config.step;
    }
    StepConstraint.prototype.constrain = function (value) {
        var r = value < 0
            ? -Math.round(-value / this.step)
            : Math.round(value / this.step);
        return r * this.step;
    };
    return StepConstraint;
}());
exports.StepConstraint = StepConstraint;


/***/ }),

/***/ "./src/main/js/constraint/util.ts":
/*!****************************************!*\
  !*** ./src/main/js/constraint/util.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintUtil = void 0;
var composite_1 = __webpack_require__(/*! ./composite */ "./src/main/js/constraint/composite.ts");
/**
 * @hidden
 */
exports.ConstraintUtil = {
    findConstraint: function (c, constraintClass) {
        if (c instanceof constraintClass) {
            return c;
        }
        if (c instanceof composite_1.CompositeConstraint) {
            var result = c.constraints.reduce(function (tmpResult, sc) {
                if (tmpResult) {
                    return tmpResult;
                }
                return sc instanceof constraintClass ? sc : null;
            }, null);
            if (result) {
                return result;
            }
        }
        return null;
    },
};


/***/ }),

/***/ "./src/main/js/controller/binding-creators/boolean-input.ts":
/*!******************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/boolean-input.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
var composite_1 = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.ts");
var list_1 = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.ts");
var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
var BooleanConverter = __webpack_require__(/*! ../../converter/boolean */ "./src/main/js/converter/boolean.ts");
var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
var checkbox_1 = __webpack_require__(/*! ../input/checkbox */ "./src/main/js/controller/input/checkbox.ts");
var list_2 = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
function createConstraint(params) {
    var constraints = [];
    if ('options' in params && params.options !== undefined) {
        constraints.push(new list_1.ListConstraint({
            options: UiUtil.normalizeInputParamsOptions(params.options, BooleanConverter.fromMixed),
        }));
    }
    return new composite_1.CompositeConstraint({
        constraints: constraints,
    });
}
function createController(document, value) {
    var c = value.constraint;
    if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
        return new list_2.ListInputController(document, {
            viewModel: new view_model_1.ViewModel(),
            stringifyValue: BooleanConverter.toString,
            value: value,
        });
    }
    return new checkbox_1.CheckboxInputController(document, {
        viewModel: new view_model_1.ViewModel(),
        value: value,
    });
}
/**
 * @hidden
 */
function create(document, target, params) {
    var initialValue = target.read();
    if (typeof initialValue !== 'boolean') {
        return null;
    }
    var value = new input_value_1.InputValue(false, createConstraint(params));
    var binding = new input_1.InputBinding({
        reader: BooleanConverter.fromMixed,
        target: target,
        value: value,
        writer: function (v) { return v; },
    });
    return new input_binding_1.InputBindingController(document, {
        binding: binding,
        controller: createController(document, value),
        label: params.label || target.key,
    });
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/boolean-monitor.ts":
/*!********************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/boolean-monitor.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var monitor_1 = __webpack_require__(/*! ../../binding/monitor */ "./src/main/js/binding/monitor.ts");
var BooleanConverter = __webpack_require__(/*! ../../converter/boolean */ "./src/main/js/converter/boolean.ts");
var boolean_1 = __webpack_require__(/*! ../../formatter/boolean */ "./src/main/js/formatter/boolean.ts");
var constants_1 = __webpack_require__(/*! ../../misc/constants */ "./src/main/js/misc/constants.ts");
var interval_1 = __webpack_require__(/*! ../../misc/ticker/interval */ "./src/main/js/misc/ticker/interval.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var monitor_value_1 = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.ts");
var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
var monitor_binding_1 = __webpack_require__(/*! ../monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
var multi_log_1 = __webpack_require__(/*! ../monitor/multi-log */ "./src/main/js/controller/monitor/multi-log.ts");
var single_log_1 = __webpack_require__(/*! ../monitor/single-log */ "./src/main/js/controller/monitor/single-log.ts");
/**
 * @hidden
 */
function create(document, target, params) {
    var initialValue = target.read();
    if (typeof initialValue !== 'boolean') {
        return null;
    }
    var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
    var controller = value.totalCount === 1
        ? new single_log_1.SingleLogMonitorController(document, {
            viewModel: new view_model_1.ViewModel(),
            formatter: new boolean_1.BooleanFormatter(),
            value: value,
        })
        : new multi_log_1.MultiLogMonitorController(document, {
            viewModel: new view_model_1.ViewModel(),
            formatter: new boolean_1.BooleanFormatter(),
            value: value,
        });
    var ticker = new interval_1.IntervalTicker(document, type_util_1.TypeUtil.getOrDefault(params.interval, constants_1.Constants.monitorDefaultInterval));
    return new monitor_binding_1.MonitorBindingController(document, {
        binding: new monitor_1.MonitorBinding({
            reader: BooleanConverter.fromMixed,
            target: target,
            ticker: ticker,
            value: value,
        }),
        controller: controller,
        label: params.label || target.key,
    });
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/color-input.ts":
/*!****************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/color-input.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createWithObject = exports.createWithNumber = exports.createWithString = void 0;
var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
var color_1 = __webpack_require__(/*! ../../formatter/color */ "./src/main/js/formatter/color.ts");
var color_2 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
var NumberColorParser = __webpack_require__(/*! ../../parser/number-color */ "./src/main/js/parser/number-color.ts");
var StringColorParser = __webpack_require__(/*! ../../parser/string-color */ "./src/main/js/parser/string-color.ts");
var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
var color_swatch_text_1 = __webpack_require__(/*! ../input/color-swatch-text */ "./src/main/js/controller/input/color-swatch-text.ts");
/**
 * @hidden
 */
function createWithString(document, target, params) {
    var initialValue = target.read();
    if (typeof initialValue !== 'string') {
        return null;
    }
    var notation = StringColorParser.getNotation(initialValue);
    if (!notation) {
        return null;
    }
    var converter = ColorConverter.fromString;
    var color = converter(initialValue);
    var value = new input_value_1.InputValue(color);
    var writer = ColorConverter.getStringifier(notation);
    return new input_binding_1.InputBindingController(document, {
        binding: new input_1.InputBinding({
            reader: converter,
            target: target,
            value: value,
            writer: writer,
        }),
        controller: new color_swatch_text_1.ColorSwatchTextInputController(document, {
            formatter: new color_1.ColorFormatter(writer),
            parser: StringColorParser.CompositeParser,
            supportsAlpha: StringColorParser.hasAlphaComponent(notation),
            value: value,
            viewModel: new view_model_1.ViewModel(),
        }),
        label: params.label || target.key,
    });
}
exports.createWithString = createWithString;
/**
 * @hidden
 */
function createWithNumber(document, target, params) {
    var initialValue = target.read();
    if (typeof initialValue !== 'number') {
        return null;
    }
    if (!('input' in params)) {
        return null;
    }
    if (params.input !== 'color' &&
        params.input !== 'color.rgb' &&
        params.input !== 'color.rgba') {
        return null;
    }
    var supportsAlpha = params.input === 'color.rgba';
    var parser = supportsAlpha
        ? NumberColorParser.RgbaParser
        : NumberColorParser.RgbParser;
    var color = parser(initialValue);
    if (!color) {
        return null;
    }
    var formatter = supportsAlpha
        ? new color_1.ColorFormatter(ColorConverter.toHexRgbaString)
        : new color_1.ColorFormatter(ColorConverter.toHexRgbString);
    var reader = supportsAlpha
        ? ColorConverter.fromNumberToRgba
        : ColorConverter.fromNumberToRgb;
    var writer = supportsAlpha
        ? ColorConverter.toRgbaNumber
        : ColorConverter.toRgbNumber;
    var value = new input_value_1.InputValue(color);
    return new input_binding_1.InputBindingController(document, {
        binding: new input_1.InputBinding({
            reader: reader,
            target: target,
            value: value,
            writer: writer,
        }),
        controller: new color_swatch_text_1.ColorSwatchTextInputController(document, {
            formatter: formatter,
            parser: StringColorParser.CompositeParser,
            supportsAlpha: supportsAlpha,
            value: value,
            viewModel: new view_model_1.ViewModel(),
        }),
        label: params.label || target.key,
    });
}
exports.createWithNumber = createWithNumber;
/**
 * @hidden
 */
function createWithObject(document, target, params) {
    var initialValue = target.read();
    if (!color_2.Color.isColorObject(initialValue)) {
        return null;
    }
    var color = color_2.Color.fromObject(initialValue);
    var supportsAlpha = color_2.Color.isRgbaColorObject(initialValue);
    var formatter = supportsAlpha
        ? new color_1.ColorFormatter(ColorConverter.toHexRgbaString)
        : new color_1.ColorFormatter(ColorConverter.toHexRgbString);
    var value = new input_value_1.InputValue(color);
    return new input_binding_1.InputBindingController(document, {
        binding: new input_1.InputBinding({
            reader: ColorConverter.fromObject,
            target: target,
            value: value,
            writer: color_2.Color.toRgbaObject,
        }),
        controller: new color_swatch_text_1.ColorSwatchTextInputController(document, {
            viewModel: new view_model_1.ViewModel(),
            formatter: formatter,
            parser: StringColorParser.CompositeParser,
            supportsAlpha: supportsAlpha,
            value: value,
        }),
        label: params.label || target.key,
    });
}
exports.createWithObject = createWithObject;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/input.ts":
/*!**********************************************************!*\
  !*** ./src/main/js/controller/binding-creators/input.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var BooleanInputBindingControllerCreators = __webpack_require__(/*! ./boolean-input */ "./src/main/js/controller/binding-creators/boolean-input.ts");
var ColorInputBindingControllerCreators = __webpack_require__(/*! ./color-input */ "./src/main/js/controller/binding-creators/color-input.ts");
var NumberInputBindingControllerCreators = __webpack_require__(/*! ./number-input */ "./src/main/js/controller/binding-creators/number-input.ts");
var Point2dInputBindingControllerCreators = __webpack_require__(/*! ./point-2d-input */ "./src/main/js/controller/binding-creators/point-2d-input.ts");
var StringInputBindingControllerCreators = __webpack_require__(/*! ./string-input */ "./src/main/js/controller/binding-creators/string-input.ts");
/**
 * @hidden
 */
function create(document, target, params) {
    var initialValue = target.read();
    if (type_util_1.TypeUtil.isEmpty(initialValue)) {
        throw new pane_error_1.PaneError({
            context: {
                key: target.key,
            },
            type: 'emptyvalue',
        });
    }
    var bc = [
        BooleanInputBindingControllerCreators.create,
        ColorInputBindingControllerCreators.createWithNumber,
        ColorInputBindingControllerCreators.createWithObject,
        ColorInputBindingControllerCreators.createWithString,
        NumberInputBindingControllerCreators.create,
        StringInputBindingControllerCreators.create,
        Point2dInputBindingControllerCreators.create,
    ].reduce(function (result, createBindingController) {
        return result || createBindingController(document, target, params);
    }, null);
    if (bc) {
        return bc;
    }
    throw new pane_error_1.PaneError({
        context: {
            key: target.key,
        },
        type: 'nomatchingcontroller',
    });
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/monitor.ts":
/*!************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/monitor.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var BooleanMonitorBindingControllerCreators = __webpack_require__(/*! ./boolean-monitor */ "./src/main/js/controller/binding-creators/boolean-monitor.ts");
var NumberMonitorBindingControllerCreators = __webpack_require__(/*! ./number-monitor */ "./src/main/js/controller/binding-creators/number-monitor.ts");
var StringMonitorBindingControllerCreators = __webpack_require__(/*! ./string-monitor */ "./src/main/js/controller/binding-creators/string-monitor.ts");
/**
 * @hidden
 */
function create(document, target, params) {
    var initialValue = target.read();
    if (type_util_1.TypeUtil.isEmpty(initialValue)) {
        throw new pane_error_1.PaneError({
            context: {
                key: target.key,
            },
            type: 'emptyvalue',
        });
    }
    var bc = [
        NumberMonitorBindingControllerCreators.create,
        StringMonitorBindingControllerCreators.create,
        BooleanMonitorBindingControllerCreators.create,
    ].reduce(function (result, createBindingController) {
        return result || createBindingController(document, target, params);
    }, null);
    if (bc) {
        return bc;
    }
    throw new pane_error_1.PaneError({
        context: {
            key: target.key,
        },
        type: 'nomatchingcontroller',
    });
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/number-input.ts":
/*!*****************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/number-input.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
var composite_1 = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.ts");
var list_1 = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.ts");
var range_1 = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.ts");
var step_1 = __webpack_require__(/*! ../../constraint/step */ "./src/main/js/constraint/step.ts");
var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
var NumberConverter = __webpack_require__(/*! ../../converter/number */ "./src/main/js/converter/number.ts");
var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
var string_number_1 = __webpack_require__(/*! ../../parser/string-number */ "./src/main/js/parser/string-number.ts");
var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
var list_2 = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.ts");
var number_text_1 = __webpack_require__(/*! ../input/number-text */ "./src/main/js/controller/input/number-text.ts");
var slider_text_1 = __webpack_require__(/*! ../input/slider-text */ "./src/main/js/controller/input/slider-text.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
function createConstraint(params) {
    var constraints = [];
    if ('step' in params && !type_util_1.TypeUtil.isEmpty(params.step)) {
        constraints.push(new step_1.StepConstraint({
            step: params.step,
        }));
    }
    if (('max' in params && !type_util_1.TypeUtil.isEmpty(params.max)) ||
        ('min' in params && !type_util_1.TypeUtil.isEmpty(params.min))) {
        constraints.push(new range_1.RangeConstraint({
            max: params.max,
            min: params.min,
        }));
    }
    if ('options' in params && params.options !== undefined) {
        constraints.push(new list_1.ListConstraint({
            options: UiUtil.normalizeInputParamsOptions(params.options, NumberConverter.fromMixed),
        }));
    }
    return new composite_1.CompositeConstraint({
        constraints: constraints,
    });
}
function createController(document, value) {
    var c = value.constraint;
    if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
        return new list_2.ListInputController(document, {
            stringifyValue: NumberConverter.toString,
            value: value,
            viewModel: new view_model_1.ViewModel(),
        });
    }
    if (c && util_1.ConstraintUtil.findConstraint(c, range_1.RangeConstraint)) {
        return new slider_text_1.SliderTextInputController(document, {
            formatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(value.constraint, value.rawValue)),
            parser: string_number_1.StringNumberParser,
            value: value,
            viewModel: new view_model_1.ViewModel(),
        });
    }
    return new number_text_1.NumberTextInputController(document, {
        formatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(value.constraint, value.rawValue)),
        parser: string_number_1.StringNumberParser,
        value: value,
        viewModel: new view_model_1.ViewModel(),
    });
}
/**
 * @hidden
 */
function create(document, target, params) {
    var initialValue = target.read();
    if (typeof initialValue !== 'number') {
        return null;
    }
    var value = new input_value_1.InputValue(0, createConstraint(params));
    var binding = new input_1.InputBinding({
        reader: NumberConverter.fromMixed,
        target: target,
        value: value,
        writer: function (v) { return v; },
    });
    var controller = createController(document, value);
    return new input_binding_1.InputBindingController(document, {
        binding: binding,
        controller: controller,
        label: params.label || target.key,
    });
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/number-monitor.ts":
/*!*******************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/number-monitor.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var monitor_1 = __webpack_require__(/*! ../../binding/monitor */ "./src/main/js/binding/monitor.ts");
var NumberConverter = __webpack_require__(/*! ../../converter/number */ "./src/main/js/converter/number.ts");
var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
var constants_1 = __webpack_require__(/*! ../../misc/constants */ "./src/main/js/misc/constants.ts");
var interval_1 = __webpack_require__(/*! ../../misc/ticker/interval */ "./src/main/js/misc/ticker/interval.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var monitor_value_1 = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.ts");
var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
var monitor_binding_1 = __webpack_require__(/*! ../monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
var graph_1 = __webpack_require__(/*! ../monitor/graph */ "./src/main/js/controller/monitor/graph.ts");
var multi_log_1 = __webpack_require__(/*! ../monitor/multi-log */ "./src/main/js/controller/monitor/multi-log.ts");
var single_log_1 = __webpack_require__(/*! ../monitor/single-log */ "./src/main/js/controller/monitor/single-log.ts");
function createFormatter() {
    // TODO: formatter precision
    return new number_1.NumberFormatter(2);
}
function createTextMonitor(document, target, params) {
    var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
    var controller = value.totalCount === 1
        ? new single_log_1.SingleLogMonitorController(document, {
            formatter: createFormatter(),
            value: value,
            viewModel: new view_model_1.ViewModel(),
        })
        : new multi_log_1.MultiLogMonitorController(document, {
            formatter: createFormatter(),
            value: value,
            viewModel: new view_model_1.ViewModel(),
        });
    var ticker = new interval_1.IntervalTicker(document, type_util_1.TypeUtil.getOrDefault(params.interval, constants_1.Constants.monitorDefaultInterval));
    return new monitor_binding_1.MonitorBindingController(document, {
        binding: new monitor_1.MonitorBinding({
            reader: NumberConverter.fromMixed,
            target: target,
            ticker: ticker,
            value: value,
        }),
        controller: controller,
        label: params.label || target.key,
    });
}
function createGraphMonitor(document, target, params) {
    var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 64));
    var ticker = new interval_1.IntervalTicker(document, type_util_1.TypeUtil.getOrDefault(params.interval, constants_1.Constants.monitorDefaultInterval));
    var controller = new graph_1.GraphMonitorController(document, {
        formatter: createFormatter(),
        maxValue: type_util_1.TypeUtil.getOrDefault('max' in params ? params.max : null, 100),
        minValue: type_util_1.TypeUtil.getOrDefault('min' in params ? params.min : null, 0),
        value: value,
        viewModel: new view_model_1.ViewModel(),
    });
    return new monitor_binding_1.MonitorBindingController(document, {
        binding: new monitor_1.MonitorBinding({
            reader: NumberConverter.fromMixed,
            target: target,
            ticker: ticker,
            value: value,
        }),
        controller: controller,
        label: params.label || target.key,
    });
}
function create(document, target, params) {
    var initialValue = target.read();
    if (typeof initialValue !== 'number') {
        return null;
    }
    if ('view' in params && params.view === 'graph') {
        return createGraphMonitor(document, target, params);
    }
    return createTextMonitor(document, target, params);
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/point-2d-input.ts":
/*!*******************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/point-2d-input.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
var composite_1 = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.ts");
var point_2d_1 = __webpack_require__(/*! ../../constraint/point-2d */ "./src/main/js/constraint/point-2d.ts");
var range_1 = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.ts");
var step_1 = __webpack_require__(/*! ../../constraint/step */ "./src/main/js/constraint/step.ts");
var Point2dConverter = __webpack_require__(/*! ../../converter/point-2d */ "./src/main/js/converter/point-2d.ts");
var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
var any_point_2d_1 = __webpack_require__(/*! ../../parser/any-point-2d */ "./src/main/js/parser/any-point-2d.ts");
var string_number_1 = __webpack_require__(/*! ../../parser/string-number */ "./src/main/js/parser/string-number.ts");
var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
var point_2d_pad_text_1 = __webpack_require__(/*! ../input/point-2d-pad-text */ "./src/main/js/controller/input/point-2d-pad-text.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
function createDimensionConstraint(params) {
    if (!params) {
        return undefined;
    }
    var constraints = [];
    if (!type_util_1.TypeUtil.isEmpty(params.step)) {
        constraints.push(new step_1.StepConstraint({
            step: params.step,
        }));
    }
    if (!type_util_1.TypeUtil.isEmpty(params.max) || !type_util_1.TypeUtil.isEmpty(params.min)) {
        constraints.push(new range_1.RangeConstraint({
            max: params.max,
            min: params.min,
        }));
    }
    return new composite_1.CompositeConstraint({
        constraints: constraints,
    });
}
function createConstraint(params) {
    return new point_2d_1.Point2dConstraint({
        x: createDimensionConstraint('x' in params ? params.x : undefined),
        y: createDimensionConstraint('y' in params ? params.y : undefined),
    });
}
function createController(document, value, invertsY) {
    var c = value.constraint;
    if (!(c instanceof point_2d_1.Point2dConstraint)) {
        throw pane_error_1.PaneError.shouldNeverHappen();
    }
    return new point_2d_pad_text_1.Point2dPadTextInputController(document, {
        invertsY: invertsY,
        parser: string_number_1.StringNumberParser,
        value: value,
        viewModel: new view_model_1.ViewModel(),
        xFormatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(c.xConstraint, value.rawValue.x)),
        yFormatter: new number_1.NumberFormatter(UiUtil.getSuitableDecimalDigits(c.yConstraint, value.rawValue.y)),
    });
}
/**
 * @hidden
 */
function create(document, target, params) {
    var initialValue = target.read();
    var p = any_point_2d_1.AnyPoint2dParser(initialValue);
    if (!p) {
        return null;
    }
    var value = new input_value_1.InputValue(p, createConstraint(params));
    var binding = new input_1.InputBinding({
        reader: Point2dConverter.fromMixed,
        target: target,
        value: value,
        writer: function (v) { return v.toObject(); },
    });
    var yParams = 'y' in params ? params.y : undefined;
    var invertsY = yParams ? !!yParams.inverted : false;
    var controller = createController(document, value, invertsY);
    return new input_binding_1.InputBindingController(document, {
        binding: binding,
        controller: controller,
        label: params.label || target.key,
    });
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/string-input.ts":
/*!*****************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/string-input.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var input_1 = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.ts");
var composite_1 = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.ts");
var list_1 = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.ts");
var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
var StringConverter = __webpack_require__(/*! ../../converter/string */ "./src/main/js/converter/string.ts");
var string_1 = __webpack_require__(/*! ../../formatter/string */ "./src/main/js/formatter/string.ts");
var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
var input_binding_1 = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.ts");
var list_2 = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.ts");
var text_1 = __webpack_require__(/*! ../input/text */ "./src/main/js/controller/input/text.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
function createConstraint(params) {
    var constraints = [];
    if ('options' in params && params.options !== undefined) {
        constraints.push(new list_1.ListConstraint({
            options: UiUtil.normalizeInputParamsOptions(params.options, StringConverter.fromMixed),
        }));
    }
    return new composite_1.CompositeConstraint({
        constraints: constraints,
    });
}
function createController(document, value) {
    var c = value.constraint;
    if (c && util_1.ConstraintUtil.findConstraint(c, list_1.ListConstraint)) {
        return new list_2.ListInputController(document, {
            stringifyValue: StringConverter.toString,
            value: value,
            viewModel: new view_model_1.ViewModel(),
        });
    }
    return new text_1.TextInputController(document, {
        formatter: new string_1.StringFormatter(),
        parser: StringConverter.toString,
        value: value,
        viewModel: new view_model_1.ViewModel(),
    });
}
/**
 * @hidden
 */
function create(document, target, params) {
    var initialValue = target.read();
    if (typeof initialValue !== 'string') {
        return null;
    }
    var value = new input_value_1.InputValue('', createConstraint(params));
    var binding = new input_1.InputBinding({
        reader: StringConverter.fromMixed,
        target: target,
        value: value,
        writer: function (v) { return v; },
    });
    var controller = createController(document, value);
    return new input_binding_1.InputBindingController(document, {
        binding: binding,
        controller: controller,
        label: params.label || target.key,
    });
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/binding-creators/string-monitor.ts":
/*!*******************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/string-monitor.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var monitor_1 = __webpack_require__(/*! ../../binding/monitor */ "./src/main/js/binding/monitor.ts");
var StringConverter = __webpack_require__(/*! ../../converter/string */ "./src/main/js/converter/string.ts");
var string_1 = __webpack_require__(/*! ../../formatter/string */ "./src/main/js/formatter/string.ts");
var constants_1 = __webpack_require__(/*! ../../misc/constants */ "./src/main/js/misc/constants.ts");
var interval_1 = __webpack_require__(/*! ../../misc/ticker/interval */ "./src/main/js/misc/ticker/interval.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var monitor_value_1 = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.ts");
var view_model_1 = __webpack_require__(/*! ../../model/view-model */ "./src/main/js/model/view-model.ts");
var monitor_binding_1 = __webpack_require__(/*! ../monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
var multi_log_1 = __webpack_require__(/*! ../monitor/multi-log */ "./src/main/js/controller/monitor/multi-log.ts");
var single_log_1 = __webpack_require__(/*! ../monitor/single-log */ "./src/main/js/controller/monitor/single-log.ts");
/**
 * @hidden
 */
function create(document, target, params) {
    var initialValue = target.read();
    if (typeof initialValue !== 'string') {
        return null;
    }
    var value = new monitor_value_1.MonitorValue(type_util_1.TypeUtil.getOrDefault(params.count, 1));
    var multiline = value.totalCount > 1 || ('multiline' in params && params.multiline);
    var controller = multiline
        ? new multi_log_1.MultiLogMonitorController(document, {
            formatter: new string_1.StringFormatter(),
            value: value,
            viewModel: new view_model_1.ViewModel(),
        })
        : new single_log_1.SingleLogMonitorController(document, {
            formatter: new string_1.StringFormatter(),
            value: value,
            viewModel: new view_model_1.ViewModel(),
        });
    var ticker = new interval_1.IntervalTicker(document, type_util_1.TypeUtil.getOrDefault(params.interval, constants_1.Constants.monitorDefaultInterval));
    return new monitor_binding_1.MonitorBindingController(document, {
        binding: new monitor_1.MonitorBinding({
            reader: StringConverter.fromMixed,
            target: target,
            ticker: ticker,
            value: value,
        }),
        controller: controller,
        label: params.label || target.key,
    });
}
exports.create = create;


/***/ }),

/***/ "./src/main/js/controller/button.ts":
/*!******************************************!*\
  !*** ./src/main/js/controller/button.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonController = void 0;
var button_1 = __webpack_require__(/*! ../model/button */ "./src/main/js/model/button.ts");
var button_2 = __webpack_require__(/*! ../view/button */ "./src/main/js/view/button.ts");
/**
 * @hidden
 */
var ButtonController = /** @class */ (function () {
    function ButtonController(document, config) {
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.button = new button_1.Button(config.title);
        this.viewModel = config.viewModel;
        this.view = new button_2.ButtonView(document, {
            button: this.button,
            model: this.viewModel,
        });
        this.view.buttonElement.addEventListener('click', this.onButtonClick_);
    }
    ButtonController.prototype.onButtonClick_ = function () {
        this.button.click();
    };
    return ButtonController;
}());
exports.ButtonController = ButtonController;


/***/ }),

/***/ "./src/main/js/controller/container-util.ts":
/*!**************************************************!*\
  !*** ./src/main/js/controller/container-util.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeExpandedFolderHeight = exports.updateAllItemsPositions = void 0;
var DomUtil = __webpack_require__(/*! ../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
function updateAllItemsPositions(uiContainer) {
    var visibleItems = uiContainer.items.filter(function (uc) { return !uc.viewModel.hidden; });
    var firstVisibleItem = visibleItems[0];
    var lastVisibleItem = visibleItems[visibleItems.length - 1];
    uiContainer.items.forEach(function (uc) {
        var ps = [];
        if (uc === firstVisibleItem) {
            ps.push('first');
        }
        if (uc === lastVisibleItem) {
            ps.push('last');
        }
        uc.viewModel.positions = ps;
    });
}
exports.updateAllItemsPositions = updateAllItemsPositions;
/**
 * @hidden
 */
function computeExpandedFolderHeight(folder, containerElement) {
    var height = 0;
    DomUtil.disableTransitionTemporarily(containerElement, function () {
        // Expand folder temporarily
        folder.expandedHeight = null;
        folder.temporaryExpanded = true;
        DomUtil.forceReflow(containerElement);
        // Compute height
        height = containerElement.clientHeight;
        // Restore expanded
        folder.temporaryExpanded = null;
        DomUtil.forceReflow(containerElement);
    });
    return height;
}
exports.computeExpandedFolderHeight = computeExpandedFolderHeight;


/***/ }),

/***/ "./src/main/js/controller/folder.ts":
/*!******************************************!*\
  !*** ./src/main/js/controller/folder.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderController = void 0;
var DomUtil = __webpack_require__(/*! ../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
var folder_1 = __webpack_require__(/*! ../model/folder */ "./src/main/js/model/folder.ts");
var ui_container_1 = __webpack_require__(/*! ../model/ui-container */ "./src/main/js/model/ui-container.ts");
var folder_2 = __webpack_require__(/*! ../view/folder */ "./src/main/js/view/folder.ts");
var ContainerUtil = __webpack_require__(/*! ./container-util */ "./src/main/js/controller/container-util.ts");
/**
 * @hidden
 */
var FolderController = /** @class */ (function () {
    function FolderController(document, config) {
        this.onContainerTransitionEnd_ = this.onContainerTransitionEnd_.bind(this);
        this.onFolderBeforeChange_ = this.onFolderBeforeChange_.bind(this);
        this.onTitleClick_ = this.onTitleClick_.bind(this);
        this.onUiContainerAdd_ = this.onUiContainerAdd_.bind(this);
        this.onUiContainerItemLayout_ = this.onUiContainerItemLayout_.bind(this);
        this.onUiContainerRemove_ = this.onUiContainerRemove_.bind(this);
        this.viewModel = config.viewModel;
        this.folder = new folder_1.Folder(config.title, type_util_1.TypeUtil.getOrDefault(config.expanded, true));
        this.folder.emitter.on('beforechange', this.onFolderBeforeChange_);
        this.ucList_ = new ui_container_1.UiContainer();
        this.ucList_.emitter.on('add', this.onUiContainerAdd_);
        this.ucList_.emitter.on('itemlayout', this.onUiContainerItemLayout_);
        this.ucList_.emitter.on('remove', this.onUiContainerRemove_);
        this.doc_ = document;
        this.view = new folder_2.FolderView(this.doc_, {
            folder: this.folder,
            model: this.viewModel,
        });
        this.view.titleElement.addEventListener('click', this.onTitleClick_);
        this.view.containerElement.addEventListener('transitionend', this.onContainerTransitionEnd_);
    }
    Object.defineProperty(FolderController.prototype, "document", {
        get: function () {
            return this.doc_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FolderController.prototype, "uiContainer", {
        get: function () {
            return this.ucList_;
        },
        enumerable: false,
        configurable: true
    });
    FolderController.prototype.onFolderBeforeChange_ = function (ev) {
        if (ev.propertyName !== 'expanded') {
            return;
        }
        if (type_util_1.TypeUtil.isEmpty(this.folder.expandedHeight)) {
            this.folder.expandedHeight = ContainerUtil.computeExpandedFolderHeight(this.folder, this.view.containerElement);
        }
        this.folder.shouldFixHeight = true;
        DomUtil.forceReflow(this.view.containerElement);
    };
    FolderController.prototype.onTitleClick_ = function () {
        this.folder.expanded = !this.folder.expanded;
    };
    FolderController.prototype.applyUiContainerChange_ = function () {
        ContainerUtil.updateAllItemsPositions(this.uiContainer);
    };
    FolderController.prototype.onUiContainerAdd_ = function (ev) {
        DomUtil.insertElementAt(this.view.containerElement, ev.uiController.view.element, ev.index);
        this.applyUiContainerChange_();
    };
    FolderController.prototype.onUiContainerRemove_ = function (_) {
        this.applyUiContainerChange_();
    };
    FolderController.prototype.onUiContainerItemLayout_ = function (_) {
        this.applyUiContainerChange_();
    };
    FolderController.prototype.onContainerTransitionEnd_ = function (ev) {
        if (ev.propertyName !== 'height') {
            return;
        }
        this.folder.shouldFixHeight = false;
        this.folder.expandedHeight = null;
    };
    return FolderController;
}());
exports.FolderController = FolderController;


/***/ }),

/***/ "./src/main/js/controller/input-binding.ts":
/*!*************************************************!*\
  !*** ./src/main/js/controller/input-binding.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBindingController = void 0;
var labeled_1 = __webpack_require__(/*! ../view/labeled */ "./src/main/js/view/labeled.ts");
/**
 * @hidden
 */
var InputBindingController = /** @class */ (function () {
    function InputBindingController(document, config) {
        this.binding = config.binding;
        this.controller = config.controller;
        this.view = new labeled_1.LabeledView(document, {
            model: this.controller.viewModel,
            label: config.label,
            view: this.controller.view,
        });
    }
    Object.defineProperty(InputBindingController.prototype, "viewModel", {
        get: function () {
            return this.controller.viewModel;
        },
        enumerable: false,
        configurable: true
    });
    return InputBindingController;
}());
exports.InputBindingController = InputBindingController;


/***/ }),

/***/ "./src/main/js/controller/input/a-palette.ts":
/*!***************************************************!*\
  !*** ./src/main/js/controller/input/a-palette.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APaletteInputController = void 0;
var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var a_palette_1 = __webpack_require__(/*! ../../view/input/a-palette */ "./src/main/js/view/input/a-palette.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
/**
 * @hidden
 */
var APaletteInputController = /** @class */ (function () {
    function APaletteInputController(document, config) {
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.view = new a_palette_1.APaletteInputView(document, {
            model: this.viewModel,
            value: this.value,
        });
        this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.element);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.element.addEventListener('keydown', this.onKeyDown_);
    }
    APaletteInputController.prototype.handlePointerEvent_ = function (d) {
        var alpha = d.px;
        var c = this.value.rawValue;
        var _a = c.getComponents('hsv'), h = _a[0], s = _a[1], v = _a[2];
        this.value.rawValue = new color_1.Color([h, s, v, alpha], 'hsv');
        this.view.update();
    };
    APaletteInputController.prototype.onPointerDown_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    APaletteInputController.prototype.onPointerMove_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    APaletteInputController.prototype.onPointerUp_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    APaletteInputController.prototype.onKeyDown_ = function (ev) {
        var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(true), UiUtil.getHorizontalStepKeys(ev));
        var c = this.value.rawValue;
        var _a = c.getComponents('hsv'), h = _a[0], s = _a[1], v = _a[2], a = _a[3];
        this.value.rawValue = new color_1.Color([h, s, v, a + step], 'hsv');
    };
    return APaletteInputController;
}());
exports.APaletteInputController = APaletteInputController;


/***/ }),

/***/ "./src/main/js/controller/input/checkbox.ts":
/*!**************************************************!*\
  !*** ./src/main/js/controller/input/checkbox.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxInputController = void 0;
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var checkbox_1 = __webpack_require__(/*! ../../view/input/checkbox */ "./src/main/js/view/input/checkbox.ts");
/**
 * @hidden
 */
var CheckboxInputController = /** @class */ (function () {
    function CheckboxInputController(document, config) {
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.view = new checkbox_1.CheckboxInputView(document, {
            model: this.viewModel,
            value: this.value,
        });
        this.view.inputElement.addEventListener('change', this.onInputChange_);
    }
    CheckboxInputController.prototype.onInputChange_ = function (e) {
        var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
        this.value.rawValue = inputElem.checked;
        this.view.update();
    };
    return CheckboxInputController;
}());
exports.CheckboxInputController = CheckboxInputController;


/***/ }),

/***/ "./src/main/js/controller/input/color-component-texts.ts":
/*!***************************************************************!*\
  !*** ./src/main/js/controller/input/color-component-texts.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorComponentTextsInputController = void 0;
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var color_component_texts_1 = __webpack_require__(/*! ../../view/input/color-component-texts */ "./src/main/js/view/input/color-component-texts.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
/**
 * @hidden
 */
var ColorComponentTextsInputController = /** @class */ (function () {
    function ColorComponentTextsInputController(document, config) {
        var _this = this;
        this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
        this.parser_ = config.parser;
        this.pickedColor = config.pickedColor;
        this.viewModel = config.viewModel;
        this.view = new color_component_texts_1.ColorComponentTextsInputView(document, {
            model: this.viewModel,
            pickedColor: this.pickedColor,
        });
        this.view.inputElements.forEach(function (inputElem) {
            inputElem.addEventListener('change', _this.onInputChange_);
            inputElem.addEventListener('keydown', _this.onInputKeyDown_);
        });
        this.view.modeSelectElement.addEventListener('change', this.onModeSelectChange_);
    }
    Object.defineProperty(ColorComponentTextsInputController.prototype, "value", {
        get: function () {
            return this.pickedColor.value;
        },
        enumerable: false,
        configurable: true
    });
    ColorComponentTextsInputController.prototype.findIndexOfInputElem_ = function (inputElem) {
        var inputElems = this.view.inputElements;
        for (var i = 0; i < inputElems.length; i++) {
            if (inputElems[i] === inputElem) {
                return i;
            }
        }
        return null;
    };
    ColorComponentTextsInputController.prototype.updateComponent_ = function (index, newValue) {
        var mode = this.pickedColor.mode;
        var comps = this.value.rawValue.getComponents(mode);
        var newComps = comps.map(function (comp, i) {
            return i === index ? newValue : comp;
        });
        this.value.rawValue = new color_1.Color(newComps, mode);
        this.view.update();
    };
    ColorComponentTextsInputController.prototype.onInputChange_ = function (e) {
        var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
        var parsedValue = this.parser_(inputElem.value);
        if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
            return;
        }
        var compIndex = this.findIndexOfInputElem_(inputElem);
        if (type_util_1.TypeUtil.isEmpty(compIndex)) {
            return;
        }
        this.updateComponent_(compIndex, parsedValue);
    };
    ColorComponentTextsInputController.prototype.onInputKeyDown_ = function (e) {
        var compIndex = this.findIndexOfInputElem_(e.currentTarget);
        var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(compIndex === 3), UiUtil.getVerticalStepKeys(e));
        if (step === 0) {
            return;
        }
        var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
        var parsedValue = this.parser_(inputElem.value);
        if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
            return;
        }
        if (type_util_1.TypeUtil.isEmpty(compIndex)) {
            return;
        }
        this.updateComponent_(compIndex, parsedValue + step);
    };
    ColorComponentTextsInputController.prototype.onModeSelectChange_ = function (ev) {
        var selectElem = ev.currentTarget;
        this.pickedColor.mode = selectElem.value;
    };
    return ColorComponentTextsInputController;
}());
exports.ColorComponentTextsInputController = ColorComponentTextsInputController;


/***/ }),

/***/ "./src/main/js/controller/input/color-picker.ts":
/*!******************************************************!*\
  !*** ./src/main/js/controller/input/color-picker.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPickerInputController = void 0;
var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var foldable_1 = __webpack_require__(/*! ../../model/foldable */ "./src/main/js/model/foldable.ts");
var input_value_1 = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.ts");
var ModelSync = __webpack_require__(/*! ../../model/model-sync */ "./src/main/js/model/model-sync.ts");
var string_number_1 = __webpack_require__(/*! ../../parser/string-number */ "./src/main/js/parser/string-number.ts");
var color_picker_1 = __webpack_require__(/*! ../../view/input/color-picker */ "./src/main/js/view/input/color-picker.ts");
var a_palette_1 = __webpack_require__(/*! ./a-palette */ "./src/main/js/controller/input/a-palette.ts");
var color_component_texts_1 = __webpack_require__(/*! ./color-component-texts */ "./src/main/js/controller/input/color-component-texts.ts");
var h_palette_1 = __webpack_require__(/*! ./h-palette */ "./src/main/js/controller/input/h-palette.ts");
var number_text_1 = __webpack_require__(/*! ./number-text */ "./src/main/js/controller/input/number-text.ts");
var sv_palette_1 = __webpack_require__(/*! ./sv-palette */ "./src/main/js/controller/input/sv-palette.ts");
/**
 * @hidden
 */
var ColorPickerInputController = /** @class */ (function () {
    function ColorPickerInputController(document, config) {
        var _this = this;
        this.onFocusableElementBlur_ = this.onFocusableElementBlur_.bind(this);
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.pickedColor = config.pickedColor;
        this.foldable = new foldable_1.Foldable();
        this.viewModel = config.viewModel;
        this.hPaletteIc_ = new h_palette_1.HPaletteInputController(document, {
            value: this.pickedColor.value,
            viewModel: this.viewModel,
        });
        this.svPaletteIc_ = new sv_palette_1.SvPaletteInputController(document, {
            value: this.pickedColor.value,
            viewModel: this.viewModel,
        });
        this.alphaIcs_ = config.supportsAlpha
            ? {
                palette: new a_palette_1.APaletteInputController(document, {
                    value: this.pickedColor.value,
                    viewModel: this.viewModel,
                }),
                text: new number_text_1.NumberTextInputController(document, {
                    formatter: new number_1.NumberFormatter(2),
                    parser: string_number_1.StringNumberParser,
                    step: 0.1,
                    value: new input_value_1.InputValue(0),
                    viewModel: this.viewModel,
                }),
            }
            : null;
        if (this.alphaIcs_) {
            ModelSync.connect({
                primary: {
                    apply: function (from, to) {
                        to.rawValue = from.value.rawValue.getComponents()[3];
                    },
                    emitter: function (m) { return m.value.emitter; },
                    value: this.pickedColor,
                },
                secondary: {
                    apply: function (from, to) {
                        var comps = to.value.rawValue.getComponents();
                        comps[3] = from.rawValue;
                        to.value.rawValue = new color_1.Color(comps, to.value.rawValue.mode);
                    },
                    emitter: function (m) { return m.emitter; },
                    value: this.alphaIcs_.text.value,
                },
            });
        }
        this.compTextsIc_ = new color_component_texts_1.ColorComponentTextsInputController(document, {
            parser: string_number_1.StringNumberParser,
            pickedColor: this.pickedColor,
            viewModel: this.viewModel,
        });
        this.view = new color_picker_1.ColorPickerInputView(document, {
            alphaInputViews: this.alphaIcs_
                ? {
                    palette: this.alphaIcs_.palette.view,
                    text: this.alphaIcs_.text.view,
                }
                : null,
            componentTextsView: this.compTextsIc_.view,
            foldable: this.foldable,
            hPaletteInputView: this.hPaletteIc_.view,
            model: this.viewModel,
            pickedColor: this.pickedColor,
            supportsAlpha: config.supportsAlpha,
            svPaletteInputView: this.svPaletteIc_.view,
        });
        this.view.element.addEventListener('keydown', this.onKeyDown_);
        this.view.allFocusableElements.forEach(function (elem) {
            elem.addEventListener('blur', _this.onFocusableElementBlur_);
        });
    }
    Object.defineProperty(ColorPickerInputController.prototype, "value", {
        get: function () {
            return this.pickedColor.value;
        },
        enumerable: false,
        configurable: true
    });
    ColorPickerInputController.prototype.onFocusableElementBlur_ = function (e) {
        var elem = this.view.element;
        var nextTarget = type_util_1.TypeUtil.forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) {
            this.foldable.expanded = false;
        }
    };
    ColorPickerInputController.prototype.onKeyDown_ = function (ev) {
        if (ev.keyCode === 27) {
            this.foldable.expanded = false;
        }
    };
    return ColorPickerInputController;
}());
exports.ColorPickerInputController = ColorPickerInputController;


/***/ }),

/***/ "./src/main/js/controller/input/color-swatch-text.ts":
/*!***********************************************************!*\
  !*** ./src/main/js/controller/input/color-swatch-text.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwatchTextInputController = void 0;
var color_swatch_text_1 = __webpack_require__(/*! ../../view/input/color-swatch-text */ "./src/main/js/view/input/color-swatch-text.ts");
var color_swatch_1 = __webpack_require__(/*! ../input/color-swatch */ "./src/main/js/controller/input/color-swatch.ts");
var text_1 = __webpack_require__(/*! ./text */ "./src/main/js/controller/input/text.ts");
/**
 * @hidden
 */
var ColorSwatchTextInputController = /** @class */ (function () {
    function ColorSwatchTextInputController(document, config) {
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.swatchIc_ = new color_swatch_1.ColorSwatchInputController(document, {
            supportsAlpha: config.supportsAlpha,
            value: this.value,
            viewModel: this.viewModel,
        });
        this.textIc_ = new text_1.TextInputController(document, {
            formatter: config.formatter,
            parser: config.parser,
            value: this.value,
            viewModel: this.viewModel,
        });
        this.view = new color_swatch_text_1.ColorSwatchTextInputView(document, {
            swatchInputView: this.swatchIc_.view,
            textInputView: this.textIc_.view,
            model: this.viewModel,
        });
    }
    return ColorSwatchTextInputController;
}());
exports.ColorSwatchTextInputController = ColorSwatchTextInputController;


/***/ }),

/***/ "./src/main/js/controller/input/color-swatch.ts":
/*!******************************************************!*\
  !*** ./src/main/js/controller/input/color-swatch.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwatchInputController = void 0;
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var picked_color_1 = __webpack_require__(/*! ../../model/picked-color */ "./src/main/js/model/picked-color.ts");
var color_swatch_1 = __webpack_require__(/*! ../../view/input/color-swatch */ "./src/main/js/view/input/color-swatch.ts");
var color_picker_1 = __webpack_require__(/*! ./color-picker */ "./src/main/js/controller/input/color-picker.ts");
/**
 * @hidden
 */
var ColorSwatchInputController = /** @class */ (function () {
    function ColorSwatchInputController(document, config) {
        this.onButtonBlur_ = this.onButtonBlur_.bind(this);
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.pickerIc_ = new color_picker_1.ColorPickerInputController(document, {
            pickedColor: new picked_color_1.PickedColor(this.value),
            supportsAlpha: config.supportsAlpha,
            viewModel: this.viewModel,
        });
        this.view = new color_swatch_1.ColorSwatchInputView(document, {
            model: this.viewModel,
            pickerInputView: this.pickerIc_.view,
            value: this.value,
        });
        this.view.buttonElement.addEventListener('blur', this.onButtonBlur_);
        this.view.buttonElement.addEventListener('click', this.onButtonClick_);
    }
    ColorSwatchInputController.prototype.onButtonBlur_ = function (e) {
        var elem = this.view.element;
        var nextTarget = type_util_1.TypeUtil.forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) {
            this.pickerIc_.foldable.expanded = false;
        }
    };
    ColorSwatchInputController.prototype.onButtonClick_ = function () {
        this.pickerIc_.foldable.expanded = !this.pickerIc_.foldable.expanded;
        if (this.pickerIc_.foldable.expanded) {
            this.pickerIc_.view.allFocusableElements[0].focus();
        }
    };
    return ColorSwatchInputController;
}());
exports.ColorSwatchInputController = ColorSwatchInputController;


/***/ }),

/***/ "./src/main/js/controller/input/h-palette.ts":
/*!***************************************************!*\
  !*** ./src/main/js/controller/input/h-palette.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HPaletteInputController = void 0;
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var h_palette_1 = __webpack_require__(/*! ../../view/input/h-palette */ "./src/main/js/view/input/h-palette.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
/**
 * @hidden
 */
var HPaletteInputController = /** @class */ (function () {
    function HPaletteInputController(document, config) {
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.view = new h_palette_1.HPaletteInputView(document, {
            model: this.viewModel,
            value: this.value,
        });
        this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.element);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.element.addEventListener('keydown', this.onKeyDown_);
    }
    HPaletteInputController.prototype.handlePointerEvent_ = function (d) {
        var hue = number_util_1.NumberUtil.map(d.px, 0, 1, 0, 360);
        var c = this.value.rawValue;
        var _a = c.getComponents('hsv'), s = _a[1], v = _a[2], a = _a[3];
        this.value.rawValue = new color_1.Color([hue, s, v, a], 'hsv');
        this.view.update();
    };
    HPaletteInputController.prototype.onPointerDown_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    HPaletteInputController.prototype.onPointerMove_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    HPaletteInputController.prototype.onPointerUp_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    HPaletteInputController.prototype.onKeyDown_ = function (ev) {
        var step = UiUtil.getStepForKey(UiUtil.getBaseStepForColor(false), UiUtil.getHorizontalStepKeys(ev));
        var c = this.value.rawValue;
        var _a = c.getComponents('hsv'), h = _a[0], s = _a[1], v = _a[2], a = _a[3];
        this.value.rawValue = new color_1.Color([h + step, s, v, a], 'hsv');
    };
    return HPaletteInputController;
}());
exports.HPaletteInputController = HPaletteInputController;


/***/ }),

/***/ "./src/main/js/controller/input/list.ts":
/*!**********************************************!*\
  !*** ./src/main/js/controller/input/list.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInputController = void 0;
var list_1 = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.ts");
var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var list_2 = __webpack_require__(/*! ../../view/input/list */ "./src/main/js/view/input/list.ts");
function findListItems(value) {
    var c = value.constraint
        ? util_1.ConstraintUtil.findConstraint(value.constraint, list_1.ListConstraint)
        : null;
    if (!c) {
        return null;
    }
    return c.options;
}
/**
 * @hidden
 */
var ListInputController = /** @class */ (function () {
    function ListInputController(document, config) {
        this.onSelectChange_ = this.onSelectChange_.bind(this);
        this.value_ = config.value;
        this.listItems_ = findListItems(this.value_) || [];
        this.viewModel = config.viewModel;
        this.view_ = new list_2.ListInputView(document, {
            model: this.viewModel,
            options: this.listItems_,
            stringifyValue: config.stringifyValue,
            value: this.value_,
        });
        this.view_.selectElement.addEventListener('change', this.onSelectChange_);
    }
    Object.defineProperty(ListInputController.prototype, "value", {
        get: function () {
            return this.value_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListInputController.prototype, "view", {
        get: function () {
            return this.view_;
        },
        enumerable: false,
        configurable: true
    });
    ListInputController.prototype.onSelectChange_ = function (e) {
        var selectElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
        var optElem = selectElem.selectedOptions.item(0);
        if (!optElem) {
            return;
        }
        var itemIndex = Number(optElem.dataset.index);
        this.value_.rawValue = this.listItems_[itemIndex].value;
        this.view_.update();
    };
    return ListInputController;
}());
exports.ListInputController = ListInputController;


/***/ }),

/***/ "./src/main/js/controller/input/number-text.ts":
/*!*****************************************************!*\
  !*** ./src/main/js/controller/input/number-text.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberTextInputController = void 0;
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
var text_1 = __webpack_require__(/*! ./text */ "./src/main/js/controller/input/text.ts");
/**
 * @hidden
 */
var NumberTextInputController = /** @class */ (function (_super) {
    __extends(NumberTextInputController, _super);
    function NumberTextInputController(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onInputKeyDown_ = _this.onInputKeyDown_.bind(_this);
        _this.step_ = type_util_1.TypeUtil.getOrDefault(config.step, UiUtil.getStepForTextInput(_this.value.constraint));
        _this.view.inputElement.addEventListener('keydown', _this.onInputKeyDown_);
        return _this;
    }
    NumberTextInputController.prototype.onInputKeyDown_ = function (e) {
        var step = UiUtil.getStepForKey(this.step_, UiUtil.getVerticalStepKeys(e));
        if (step !== 0) {
            this.value.rawValue += step;
            this.view.update();
        }
    };
    return NumberTextInputController;
}(text_1.TextInputController));
exports.NumberTextInputController = NumberTextInputController;


/***/ }),

/***/ "./src/main/js/controller/input/point-2d-pad-text.ts":
/*!***********************************************************!*\
  !*** ./src/main/js/controller/input/point-2d-pad-text.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2dPadTextInputController = void 0;
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var point_2d_pad_text_1 = __webpack_require__(/*! ../../view/input/point-2d-pad-text */ "./src/main/js/view/input/point-2d-pad-text.ts");
var point_2d_pad_1 = __webpack_require__(/*! ./point-2d-pad */ "./src/main/js/controller/input/point-2d-pad.ts");
var point_2d_text_1 = __webpack_require__(/*! ./point-2d-text */ "./src/main/js/controller/input/point-2d-text.ts");
/**
 * @hidden
 */
var Point2dPadTextInputController = /** @class */ (function () {
    function Point2dPadTextInputController(document, config) {
        this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
        this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.padIc_ = new point_2d_pad_1.Point2dPadInputController(document, {
            invertsY: config.invertsY,
            value: this.value,
            viewModel: this.viewModel,
        });
        this.textIc_ = new point_2d_text_1.Point2dTextInputController(document, {
            parser: config.parser,
            value: this.value,
            viewModel: this.viewModel,
            xFormatter: config.xFormatter,
            yFormatter: config.yFormatter,
        });
        this.view = new point_2d_pad_text_1.Point2dPadTextInputView(document, {
            model: this.viewModel,
            padInputView: this.padIc_.view,
            textInputView: this.textIc_.view,
        });
        this.view.padButtonElement.addEventListener('blur', this.onPadButtonBlur_);
        this.view.padButtonElement.addEventListener('click', this.onPadButtonClick_);
    }
    Point2dPadTextInputController.prototype.onPadButtonBlur_ = function (e) {
        var elem = this.view.element;
        var nextTarget = type_util_1.TypeUtil.forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) {
            this.padIc_.foldable.expanded = false;
        }
    };
    Point2dPadTextInputController.prototype.onPadButtonClick_ = function () {
        this.padIc_.foldable.expanded = !this.padIc_.foldable.expanded;
        if (this.padIc_.foldable.expanded) {
            this.padIc_.view.allFocusableElements[0].focus();
        }
    };
    return Point2dPadTextInputController;
}());
exports.Point2dPadTextInputController = Point2dPadTextInputController;


/***/ }),

/***/ "./src/main/js/controller/input/point-2d-pad.ts":
/*!******************************************************!*\
  !*** ./src/main/js/controller/input/point-2d-pad.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2dPadInputController = void 0;
var point_2d_1 = __webpack_require__(/*! ../../constraint/point-2d */ "./src/main/js/constraint/point-2d.ts");
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var foldable_1 = __webpack_require__(/*! ../../model/foldable */ "./src/main/js/model/foldable.ts");
var point_2d_2 = __webpack_require__(/*! ../../model/point-2d */ "./src/main/js/model/point-2d.ts");
var point_2d_pad_1 = __webpack_require__(/*! ../../view/input/point-2d-pad */ "./src/main/js/view/input/point-2d-pad.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
/**
 * @hidden
 */
var Point2dPadInputController = /** @class */ (function () {
    function Point2dPadInputController(document, config) {
        var _this = this;
        this.onFocusableElementBlur_ = this.onFocusableElementBlur_.bind(this);
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.foldable = new foldable_1.Foldable();
        this.maxValue_ = UiUtil.getSuitableMaxValueForPoint2dPad(this.value.constraint, this.value.rawValue);
        this.invertsY_ = config.invertsY;
        var c = this.value.constraint;
        this.xStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.xConstraint : undefined);
        this.yStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.yConstraint : undefined);
        this.viewModel = config.viewModel;
        this.view = new point_2d_pad_1.Point2dPadInputView(document, {
            foldable: this.foldable,
            invertsY: this.invertsY_,
            maxValue: this.maxValue_,
            model: this.viewModel,
            value: this.value,
        });
        this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.padElement);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.padElement.addEventListener('keydown', this.onPadKeyDown_);
        this.view.element.addEventListener('keydown', this.onKeyDown_);
        this.view.allFocusableElements.forEach(function (elem) {
            elem.addEventListener('blur', _this.onFocusableElementBlur_);
        });
    }
    Point2dPadInputController.prototype.handlePointerEvent_ = function (d) {
        var max = this.maxValue_;
        var px = number_util_1.NumberUtil.map(d.px, 0, 1, -max, +max);
        var py = number_util_1.NumberUtil.map(this.invertsY_ ? 1 - d.py : d.py, 0, 1, -max, +max);
        this.value.rawValue = new point_2d_2.Point2d(px, py);
        this.view.update();
    };
    Point2dPadInputController.prototype.onPointerDown_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    Point2dPadInputController.prototype.onPointerMove_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    Point2dPadInputController.prototype.onPointerUp_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    Point2dPadInputController.prototype.onPadKeyDown_ = function (ev) {
        if (UiUtil.isArrowKey(ev.keyCode)) {
            ev.preventDefault();
        }
        this.value.rawValue = new point_2d_2.Point2d(this.value.rawValue.x +
            UiUtil.getStepForKey(this.xStep_, UiUtil.getHorizontalStepKeys(ev)), this.value.rawValue.y +
            UiUtil.getStepForKey(this.yStep_, UiUtil.getVerticalStepKeys(ev)) *
                (this.invertsY_ ? 1 : -1));
    };
    Point2dPadInputController.prototype.onFocusableElementBlur_ = function (e) {
        var elem = this.view.element;
        var nextTarget = type_util_1.TypeUtil.forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) {
            this.foldable.expanded = false;
        }
    };
    Point2dPadInputController.prototype.onKeyDown_ = function (ev) {
        if (ev.keyCode === 27) {
            this.foldable.expanded = false;
        }
    };
    return Point2dPadInputController;
}());
exports.Point2dPadInputController = Point2dPadInputController;


/***/ }),

/***/ "./src/main/js/controller/input/point-2d-text.ts":
/*!*******************************************************!*\
  !*** ./src/main/js/controller/input/point-2d-text.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2dTextInputController = void 0;
var point_2d_1 = __webpack_require__(/*! ../../constraint/point-2d */ "./src/main/js/constraint/point-2d.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var point_2d_2 = __webpack_require__(/*! ../../model/point-2d */ "./src/main/js/model/point-2d.ts");
var point_2d_text_1 = __webpack_require__(/*! ../../view/input/point-2d-text */ "./src/main/js/view/input/point-2d-text.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
/**
 * @hidden
 */
var Point2dTextInputController = /** @class */ (function () {
    function Point2dTextInputController(document, config) {
        var _this = this;
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
        this.parser_ = config.parser;
        this.value = config.value;
        var c = this.value.constraint;
        this.xStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.xConstraint : undefined);
        this.yStep_ = UiUtil.getStepForTextInput(c instanceof point_2d_1.Point2dConstraint ? c.yConstraint : undefined);
        this.viewModel = config.viewModel;
        this.view = new point_2d_text_1.Point2dTextInputView(document, {
            model: this.viewModel,
            value: this.value,
            xFormatter: config.xFormatter,
            yFormatter: config.yFormatter,
        });
        this.view.inputElements.forEach(function (inputElem) {
            inputElem.addEventListener('change', _this.onInputChange_);
            inputElem.addEventListener('keydown', _this.onInputKeyDown_);
        });
    }
    Point2dTextInputController.prototype.findIndexOfInputElem_ = function (inputElem) {
        var inputElems = this.view.inputElements;
        for (var i = 0; i < inputElems.length; i++) {
            if (inputElems[i] === inputElem) {
                return i;
            }
        }
        return null;
    };
    Point2dTextInputController.prototype.updateComponent_ = function (index, newValue) {
        var comps = this.value.rawValue.getComponents();
        var newComps = comps.map(function (comp, i) {
            return i === index ? newValue : comp;
        });
        this.value.rawValue = new point_2d_2.Point2d(newComps[0], newComps[1]);
        this.view.update();
    };
    Point2dTextInputController.prototype.onInputChange_ = function (e) {
        var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
        var parsedValue = this.parser_(inputElem.value);
        if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
            return;
        }
        var compIndex = this.findIndexOfInputElem_(inputElem);
        if (type_util_1.TypeUtil.isEmpty(compIndex)) {
            return;
        }
        this.updateComponent_(compIndex, parsedValue);
    };
    Point2dTextInputController.prototype.onInputKeyDown_ = function (e) {
        var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
        var parsedValue = this.parser_(inputElem.value);
        if (type_util_1.TypeUtil.isEmpty(parsedValue)) {
            return;
        }
        var compIndex = this.findIndexOfInputElem_(inputElem);
        if (type_util_1.TypeUtil.isEmpty(compIndex)) {
            return;
        }
        var step = UiUtil.getStepForKey(compIndex === 0 ? this.xStep_ : this.yStep_, UiUtil.getVerticalStepKeys(e));
        if (step === 0) {
            return;
        }
        this.updateComponent_(compIndex, parsedValue + step);
    };
    return Point2dTextInputController;
}());
exports.Point2dTextInputController = Point2dTextInputController;


/***/ }),

/***/ "./src/main/js/controller/input/slider-text.ts":
/*!*****************************************************!*\
  !*** ./src/main/js/controller/input/slider-text.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderTextInputController = void 0;
var slider_text_1 = __webpack_require__(/*! ../../view/input/slider-text */ "./src/main/js/view/input/slider-text.ts");
var number_text_1 = __webpack_require__(/*! ./number-text */ "./src/main/js/controller/input/number-text.ts");
var slider_1 = __webpack_require__(/*! ./slider */ "./src/main/js/controller/input/slider.ts");
/**
 * @hidden
 */
var SliderTextInputController = /** @class */ (function () {
    function SliderTextInputController(document, config) {
        this.value_ = config.value;
        this.viewModel = config.viewModel;
        this.sliderIc_ = new slider_1.SliderInputController(document, {
            value: config.value,
            viewModel: this.viewModel,
        });
        this.textIc_ = new number_text_1.NumberTextInputController(document, {
            formatter: config.formatter,
            parser: config.parser,
            value: config.value,
            viewModel: this.viewModel,
        });
        this.view_ = new slider_text_1.SliderTextInputView(document, {
            model: this.viewModel,
            sliderInputView: this.sliderIc_.view,
            textInputView: this.textIc_.view,
        });
    }
    Object.defineProperty(SliderTextInputController.prototype, "value", {
        get: function () {
            return this.value_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SliderTextInputController.prototype, "view", {
        get: function () {
            return this.view_;
        },
        enumerable: false,
        configurable: true
    });
    return SliderTextInputController;
}());
exports.SliderTextInputController = SliderTextInputController;


/***/ }),

/***/ "./src/main/js/controller/input/slider.ts":
/*!************************************************!*\
  !*** ./src/main/js/controller/input/slider.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderInputController = void 0;
var range_1 = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.ts");
var util_1 = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.ts");
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var slider_1 = __webpack_require__(/*! ../../view/input/slider */ "./src/main/js/view/input/slider.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
function findRange(value) {
    var c = value.constraint
        ? util_1.ConstraintUtil.findConstraint(value.constraint, range_1.RangeConstraint)
        : null;
    if (!c) {
        return [undefined, undefined];
    }
    return [c.minValue, c.maxValue];
}
function estimateSuitableRange(value) {
    var _a = findRange(value), min = _a[0], max = _a[1];
    return [
        type_util_1.TypeUtil.getOrDefault(min, 0),
        type_util_1.TypeUtil.getOrDefault(max, 100),
    ];
}
/**
 * @hidden
 */
var SliderInputController = /** @class */ (function () {
    function SliderInputController(document, config) {
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.step_ = UiUtil.getStepForTextInput(this.value.constraint);
        var _a = estimateSuitableRange(this.value), min = _a[0], max = _a[1];
        this.minValue_ = min;
        this.maxValue_ = max;
        this.viewModel = config.viewModel;
        this.view = new slider_1.SliderInputView(document, {
            maxValue: this.maxValue_,
            minValue: this.minValue_,
            model: this.viewModel,
            value: this.value,
        });
        this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.outerElement);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.outerElement.addEventListener('keydown', this.onKeyDown_);
    }
    SliderInputController.prototype.handlePointerEvent_ = function (d) {
        this.value.rawValue = number_util_1.NumberUtil.map(d.px, 0, 1, this.minValue_, this.maxValue_);
    };
    SliderInputController.prototype.onPointerDown_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    SliderInputController.prototype.onPointerMove_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    SliderInputController.prototype.onPointerUp_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    SliderInputController.prototype.onKeyDown_ = function (ev) {
        this.value.rawValue += UiUtil.getStepForKey(this.step_, UiUtil.getHorizontalStepKeys(ev));
    };
    return SliderInputController;
}());
exports.SliderInputController = SliderInputController;


/***/ }),

/***/ "./src/main/js/controller/input/sv-palette.ts":
/*!****************************************************!*\
  !*** ./src/main/js/controller/input/sv-palette.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SvPaletteInputController = void 0;
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pointer_handler_1 = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.ts");
var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var sv_palette_1 = __webpack_require__(/*! ../../view/input/sv-palette */ "./src/main/js/view/input/sv-palette.ts");
var UiUtil = __webpack_require__(/*! ../ui-util */ "./src/main/js/controller/ui-util.ts");
/**
 * @hidden
 */
var SvPaletteInputController = /** @class */ (function () {
    function SvPaletteInputController(document, config) {
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.view = new sv_palette_1.SvPaletteInputView(document, {
            model: this.viewModel,
            value: this.value,
        });
        this.ptHandler_ = new pointer_handler_1.PointerHandler(document, this.view.element);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.element.addEventListener('keydown', this.onKeyDown_);
    }
    SvPaletteInputController.prototype.handlePointerEvent_ = function (d) {
        var saturation = number_util_1.NumberUtil.map(d.px, 0, 1, 0, 100);
        var value = number_util_1.NumberUtil.map(d.py, 0, 1, 100, 0);
        var _a = this.value.rawValue.getComponents('hsv'), h = _a[0], a = _a[3];
        this.value.rawValue = new color_1.Color([h, saturation, value, a], 'hsv');
        this.view.update();
    };
    SvPaletteInputController.prototype.onPointerDown_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    SvPaletteInputController.prototype.onPointerMove_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    SvPaletteInputController.prototype.onPointerUp_ = function (ev) {
        this.handlePointerEvent_(ev.data);
    };
    SvPaletteInputController.prototype.onKeyDown_ = function (ev) {
        if (UiUtil.isArrowKey(ev.keyCode)) {
            ev.preventDefault();
        }
        var _a = this.value.rawValue.getComponents('hsv'), h = _a[0], s = _a[1], v = _a[2], a = _a[3];
        var baseStep = UiUtil.getBaseStepForColor(false);
        this.value.rawValue = new color_1.Color([
            h,
            s + UiUtil.getStepForKey(baseStep, UiUtil.getHorizontalStepKeys(ev)),
            v + UiUtil.getStepForKey(baseStep, UiUtil.getVerticalStepKeys(ev)),
            a,
        ], 'hsv');
    };
    return SvPaletteInputController;
}());
exports.SvPaletteInputController = SvPaletteInputController;


/***/ }),

/***/ "./src/main/js/controller/input/text.ts":
/*!**********************************************!*\
  !*** ./src/main/js/controller/input/text.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInputController = void 0;
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var text_1 = __webpack_require__(/*! ../../view/input/text */ "./src/main/js/view/input/text.ts");
/**
 * @hidden
 */
var TextInputController = /** @class */ (function () {
    function TextInputController(document, config) {
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.parser_ = config.parser;
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.view = new text_1.TextInputView(document, {
            formatter: config.formatter,
            model: this.viewModel,
            value: this.value,
        });
        this.view.inputElement.addEventListener('change', this.onInputChange_);
    }
    TextInputController.prototype.onInputChange_ = function (e) {
        var inputElem = type_util_1.TypeUtil.forceCast(e.currentTarget);
        var value = inputElem.value;
        var parsedValue = this.parser_(value);
        if (!type_util_1.TypeUtil.isEmpty(parsedValue)) {
            this.value.rawValue = parsedValue;
        }
        this.view.update();
    };
    return TextInputController;
}());
exports.TextInputController = TextInputController;


/***/ }),

/***/ "./src/main/js/controller/monitor-binding.ts":
/*!***************************************************!*\
  !*** ./src/main/js/controller/monitor-binding.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorBindingController = void 0;
var labeled_1 = __webpack_require__(/*! ../view/labeled */ "./src/main/js/view/labeled.ts");
/**
 * @hidden
 */
var MonitorBindingController = /** @class */ (function () {
    function MonitorBindingController(document, config) {
        var _this = this;
        this.binding = config.binding;
        this.controller = config.controller;
        this.view = new labeled_1.LabeledView(document, {
            label: config.label,
            model: this.viewModel,
            view: this.controller.view,
        });
        this.viewModel.emitter.on('dispose', function () {
            _this.binding.dispose();
        });
    }
    Object.defineProperty(MonitorBindingController.prototype, "viewModel", {
        get: function () {
            return this.controller.viewModel;
        },
        enumerable: false,
        configurable: true
    });
    return MonitorBindingController;
}());
exports.MonitorBindingController = MonitorBindingController;


/***/ }),

/***/ "./src/main/js/controller/monitor/graph.ts":
/*!*************************************************!*\
  !*** ./src/main/js/controller/monitor/graph.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphMonitorController = void 0;
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var graph_cursor_1 = __webpack_require__(/*! ../../model/graph-cursor */ "./src/main/js/model/graph-cursor.ts");
var graph_1 = __webpack_require__(/*! ../../view/monitor/graph */ "./src/main/js/view/monitor/graph.ts");
/**
 * @hidden
 */
var GraphMonitorController = /** @class */ (function () {
    function GraphMonitorController(document, config) {
        this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
        this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
        this.value = config.value;
        this.cursor_ = new graph_cursor_1.GraphCursor();
        this.viewModel = config.viewModel;
        this.view = new graph_1.GraphMonitorView(document, {
            cursor: this.cursor_,
            formatter: config.formatter,
            maxValue: config.maxValue,
            minValue: config.minValue,
            model: this.viewModel,
            value: this.value,
        });
        this.view.graphElement.addEventListener('mouseleave', this.onGraphMouseLeave_);
        this.view.graphElement.addEventListener('mousemove', this.onGraphMouseMove_);
    }
    GraphMonitorController.prototype.onGraphMouseLeave_ = function () {
        this.cursor_.index = -1;
    };
    GraphMonitorController.prototype.onGraphMouseMove_ = function (e) {
        var bounds = this.view.graphElement.getBoundingClientRect();
        var x = e.offsetX;
        this.cursor_.index = Math.floor(number_util_1.NumberUtil.map(x, 0, bounds.width, 0, this.value.totalCount));
    };
    return GraphMonitorController;
}());
exports.GraphMonitorController = GraphMonitorController;


/***/ }),

/***/ "./src/main/js/controller/monitor/multi-log.ts":
/*!*****************************************************!*\
  !*** ./src/main/js/controller/monitor/multi-log.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLogMonitorController = void 0;
var multi_log_1 = __webpack_require__(/*! ../../view/monitor/multi-log */ "./src/main/js/view/monitor/multi-log.ts");
/**
 * @hidden
 */
var MultiLogMonitorController = /** @class */ (function () {
    function MultiLogMonitorController(document, config) {
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.view = new multi_log_1.MultiLogMonitorView(document, {
            formatter: config.formatter,
            model: this.viewModel,
            value: this.value,
        });
    }
    return MultiLogMonitorController;
}());
exports.MultiLogMonitorController = MultiLogMonitorController;


/***/ }),

/***/ "./src/main/js/controller/monitor/single-log.ts":
/*!******************************************************!*\
  !*** ./src/main/js/controller/monitor/single-log.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleLogMonitorController = void 0;
var single_log_1 = __webpack_require__(/*! ../../view/monitor/single-log */ "./src/main/js/view/monitor/single-log.ts");
/**
 * @hidden
 */
var SingleLogMonitorController = /** @class */ (function () {
    function SingleLogMonitorController(document, config) {
        this.value = config.value;
        this.viewModel = config.viewModel;
        this.view = new single_log_1.SingleLogMonitorView(document, {
            formatter: config.formatter,
            model: this.viewModel,
            value: this.value,
        });
    }
    return SingleLogMonitorController;
}());
exports.SingleLogMonitorController = SingleLogMonitorController;


/***/ }),

/***/ "./src/main/js/controller/root.ts":
/*!****************************************!*\
  !*** ./src/main/js/controller/root.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RootController = void 0;
var DomUtil = __webpack_require__(/*! ../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
var folder_1 = __webpack_require__(/*! ../model/folder */ "./src/main/js/model/folder.ts");
var ui_container_1 = __webpack_require__(/*! ../model/ui-container */ "./src/main/js/model/ui-container.ts");
var root_1 = __webpack_require__(/*! ../view/root */ "./src/main/js/view/root.ts");
var ContainerUtil = __webpack_require__(/*! ./container-util */ "./src/main/js/controller/container-util.ts");
function createFolder(config) {
    if (!config.title) {
        return null;
    }
    return new folder_1.Folder(config.title, type_util_1.TypeUtil.getOrDefault(config.expanded, true));
}
/**
 * @hidden
 */
var RootController = /** @class */ (function () {
    function RootController(document, config) {
        this.onContainerTransitionEnd_ = this.onContainerTransitionEnd_.bind(this);
        this.onFolderBeforeChange_ = this.onFolderBeforeChange_.bind(this);
        this.onTitleClick_ = this.onTitleClick_.bind(this);
        this.onUiContainerAdd_ = this.onUiContainerAdd_.bind(this);
        this.onUiContainerItemLayout_ = this.onUiContainerItemLayout_.bind(this);
        this.onUiContainerRemove_ = this.onUiContainerRemove_.bind(this);
        this.folder = createFolder(config);
        if (this.folder) {
            this.folder.emitter.on('beforechange', this.onFolderBeforeChange_);
        }
        this.ucList_ = new ui_container_1.UiContainer();
        this.ucList_.emitter.on('add', this.onUiContainerAdd_);
        this.ucList_.emitter.on('itemlayout', this.onUiContainerItemLayout_);
        this.ucList_.emitter.on('remove', this.onUiContainerRemove_);
        this.doc_ = document;
        this.viewModel = config.viewModel;
        this.view = new root_1.RootView(this.doc_, {
            folder: this.folder,
            model: this.viewModel,
        });
        if (this.view.titleElement) {
            this.view.titleElement.addEventListener('click', this.onTitleClick_);
        }
        this.view.containerElement.addEventListener('transitionend', this.onContainerTransitionEnd_);
    }
    Object.defineProperty(RootController.prototype, "document", {
        get: function () {
            return this.doc_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RootController.prototype, "uiContainer", {
        get: function () {
            return this.ucList_;
        },
        enumerable: false,
        configurable: true
    });
    RootController.prototype.onFolderBeforeChange_ = function (ev) {
        if (ev.propertyName !== 'expanded') {
            return;
        }
        var folder = this.folder;
        if (!folder) {
            return;
        }
        if (type_util_1.TypeUtil.isEmpty(folder.expandedHeight)) {
            folder.expandedHeight = ContainerUtil.computeExpandedFolderHeight(folder, this.view.containerElement);
        }
        folder.shouldFixHeight = true;
        DomUtil.forceReflow(this.view.containerElement);
    };
    RootController.prototype.applyUiContainerChange_ = function () {
        ContainerUtil.updateAllItemsPositions(this.uiContainer);
    };
    RootController.prototype.onUiContainerAdd_ = function (ev) {
        DomUtil.insertElementAt(this.view.containerElement, ev.uiController.view.element, ev.index);
        this.applyUiContainerChange_();
    };
    RootController.prototype.onUiContainerRemove_ = function (_) {
        this.applyUiContainerChange_();
    };
    RootController.prototype.onUiContainerItemLayout_ = function (_) {
        this.applyUiContainerChange_();
    };
    RootController.prototype.onTitleClick_ = function () {
        if (this.folder) {
            this.folder.expanded = !this.folder.expanded;
        }
    };
    RootController.prototype.onContainerTransitionEnd_ = function (ev) {
        if (ev.propertyName !== 'height') {
            return;
        }
        if (this.folder) {
            this.folder.shouldFixHeight = false;
            this.folder.expandedHeight = null;
        }
    };
    return RootController;
}());
exports.RootController = RootController;


/***/ }),

/***/ "./src/main/js/controller/separator.ts":
/*!*********************************************!*\
  !*** ./src/main/js/controller/separator.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparatorController = void 0;
var separator_1 = __webpack_require__(/*! ../view/separator */ "./src/main/js/view/separator.ts");
/**
 * @hidden
 */
var SeparatorController = /** @class */ (function () {
    function SeparatorController(document, config) {
        this.viewModel = config.viewModel;
        this.view = new separator_1.SeparatorView(document, {
            model: this.viewModel,
        });
    }
    return SeparatorController;
}());
exports.SeparatorController = SeparatorController;


/***/ }),

/***/ "./src/main/js/controller/ui-util.ts":
/*!*******************************************!*\
  !*** ./src/main/js/controller/ui-util.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseStepForColor = exports.getSuitableMaxValueForPoint2dPad = exports.getSuitableDecimalDigits = exports.isArrowKey = exports.isVerticalArrowKey = exports.getHorizontalStepKeys = exports.getVerticalStepKeys = exports.getStepForKey = exports.getStepForTextInput = exports.findControllers = exports.normalizeInputParamsOptions = void 0;
var point_2d_1 = __webpack_require__(/*! ../constraint/point-2d */ "./src/main/js/constraint/point-2d.ts");
var range_1 = __webpack_require__(/*! ../constraint/range */ "./src/main/js/constraint/range.ts");
var step_1 = __webpack_require__(/*! ../constraint/step */ "./src/main/js/constraint/step.ts");
var util_1 = __webpack_require__(/*! ../constraint/util */ "./src/main/js/constraint/util.ts");
var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
var folder_1 = __webpack_require__(/*! ./folder */ "./src/main/js/controller/folder.ts");
/**
 * @hidden
 */
function normalizeInputParamsOptions(options, convert) {
    if (Array.isArray(options)) {
        return options.map(function (item) {
            return {
                text: item.text,
                value: convert(item.value),
            };
        });
    }
    var textToValueMap = options;
    var texts = Object.keys(textToValueMap);
    return texts.reduce(function (result, text) {
        return result.concat({
            text: text,
            value: convert(textToValueMap[text]),
        });
    }, []);
}
exports.normalizeInputParamsOptions = normalizeInputParamsOptions;
/**
 * @hidden
 */
function findControllers(uiControllers, controllerClass) {
    return uiControllers.reduce(function (results, uc) {
        if (uc instanceof folder_1.FolderController) {
            // eslint-disable-next-line no-use-before-define
            results.push.apply(results, findControllers(uc.uiContainer.items, controllerClass));
        }
        if (uc instanceof controllerClass) {
            results.push(uc);
        }
        return results;
    }, []);
}
exports.findControllers = findControllers;
function findStep(constraint) {
    var c = constraint
        ? util_1.ConstraintUtil.findConstraint(constraint, step_1.StepConstraint)
        : null;
    if (!c) {
        return null;
    }
    return c.step;
}
/**
 * @hidden
 */
function getStepForTextInput(constraint) {
    var step = findStep(constraint);
    return type_util_1.TypeUtil.getOrDefault(step, 1);
}
exports.getStepForTextInput = getStepForTextInput;
/**
 * @hidden
 */
function getStepForKey(baseStep, keys) {
    var step = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
    if (keys.upKey) {
        return +step;
    }
    else if (keys.downKey) {
        return -step;
    }
    return 0;
}
exports.getStepForKey = getStepForKey;
/**
 * @hidden
 */
function getVerticalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.keyCode === 40,
        shiftKey: ev.shiftKey,
        upKey: ev.keyCode === 38,
    };
}
exports.getVerticalStepKeys = getVerticalStepKeys;
/**
 * @hidden
 */
function getHorizontalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.keyCode === 37,
        shiftKey: ev.shiftKey,
        upKey: ev.keyCode === 39,
    };
}
exports.getHorizontalStepKeys = getHorizontalStepKeys;
/**
 * @hidden
 */
function isVerticalArrowKey(keyCode) {
    return keyCode === 38 || keyCode === 40;
}
exports.isVerticalArrowKey = isVerticalArrowKey;
/**
 * @hidden
 */
function isArrowKey(keyCode) {
    return isVerticalArrowKey(keyCode) || keyCode === 37 || keyCode === 39;
}
exports.isArrowKey = isArrowKey;
/**
 * @hidden
 */
function getSuitableDecimalDigits(constraint, rawValue) {
    var sc = constraint && util_1.ConstraintUtil.findConstraint(constraint, step_1.StepConstraint);
    if (sc) {
        return number_util_1.NumberUtil.getDecimalDigits(sc.step);
    }
    return Math.max(number_util_1.NumberUtil.getDecimalDigits(rawValue), 2);
}
exports.getSuitableDecimalDigits = getSuitableDecimalDigits;
/**
 * @hidden
 */
function getSuitableMaxDimensionValue(constraint, rawValue) {
    var rc = constraint && util_1.ConstraintUtil.findConstraint(constraint, range_1.RangeConstraint);
    if (rc) {
        return Math.max(Math.abs(rc.minValue || 0), Math.abs(rc.maxValue || 0));
    }
    var step = getStepForTextInput(constraint);
    return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
}
/**
 * @hidden
 */
function getSuitableMaxValueForPoint2dPad(constraint, rawValue) {
    var xc = constraint instanceof point_2d_1.Point2dConstraint
        ? constraint.xConstraint
        : undefined;
    var yc = constraint instanceof point_2d_1.Point2dConstraint
        ? constraint.yConstraint
        : undefined;
    var xr = getSuitableMaxDimensionValue(xc, rawValue.x);
    var yr = getSuitableMaxDimensionValue(yc, rawValue.y);
    return Math.max(xr, yr);
}
exports.getSuitableMaxValueForPoint2dPad = getSuitableMaxValueForPoint2dPad;
/**
 * @hidden
 */
function getBaseStepForColor(forAlpha) {
    return forAlpha ? 0.1 : 1;
}
exports.getBaseStepForColor = getBaseStepForColor;


/***/ }),

/***/ "./src/main/js/converter/boolean.ts":
/*!******************************************!*\
  !*** ./src/main/js/converter/boolean.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = exports.fromMixed = void 0;
/**
 * @hidden
 */
function fromMixed(value) {
    if (value === 'false') {
        return false;
    }
    return !!value;
}
exports.fromMixed = fromMixed;
/**
 * @hidden
 */
function toString(value) {
    return String(value);
}
exports.toString = toString;


/***/ }),

/***/ "./src/main/js/converter/color.ts":
/*!****************************************!*\
  !*** ./src/main/js/converter/color.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toRgbaNumber = exports.toRgbNumber = exports.getStringifier = exports.toFunctionalHslaString = exports.toFunctionalHslString = exports.toFunctionalRgbaString = exports.toFunctionalRgbString = exports.toHexRgbaString = exports.toHexRgbString = exports.fromNumberToRgba = exports.fromNumberToRgb = exports.fromObject = exports.fromString = void 0;
var number_1 = __webpack_require__(/*! ../formatter/number */ "./src/main/js/formatter/number.ts");
var ColorModel = __webpack_require__(/*! ../misc/color-model */ "./src/main/js/misc/color-model.ts");
var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
var color_1 = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.ts");
var NumberColorParser = __webpack_require__(/*! ../parser/number-color */ "./src/main/js/parser/number-color.ts");
var StringColorParser = __webpack_require__(/*! ../parser/string-color */ "./src/main/js/parser/string-color.ts");
function createEmptyColor() {
    return new color_1.Color([0, 0, 0], 'rgb');
}
/**
 * @hidden
 */
function fromString(value) {
    if (typeof value === 'string') {
        var cv = StringColorParser.CompositeParser(value);
        if (cv) {
            return cv;
        }
    }
    return createEmptyColor();
}
exports.fromString = fromString;
/**
 * @hidden
 */
function fromObject(value) {
    if (color_1.Color.isColorObject(value)) {
        return color_1.Color.fromObject(value);
    }
    return createEmptyColor();
}
exports.fromObject = fromObject;
/**
 * @hidden
 */
function fromNumberToRgb(value) {
    if (typeof value === 'number') {
        var cv = NumberColorParser.RgbParser(value);
        if (cv) {
            return cv;
        }
    }
    return createEmptyColor();
}
exports.fromNumberToRgb = fromNumberToRgb;
/**
 * @hidden
 */
function fromNumberToRgba(value) {
    if (typeof value === 'number') {
        var cv = NumberColorParser.RgbaParser(value);
        if (cv) {
            return cv;
        }
    }
    return createEmptyColor();
}
exports.fromNumberToRgba = fromNumberToRgba;
function zerofill(comp) {
    var hex = number_util_1.NumberUtil.constrain(Math.floor(comp), 0, 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
/**
 * @hidden
 */
function toHexRgbString(value) {
    var hexes = ColorModel.withoutAlpha(value.getComponents('rgb'))
        .map(zerofill)
        .join('');
    return "#" + hexes;
}
exports.toHexRgbString = toHexRgbString;
/**
 * @hidden
 */
function toHexRgbaString(value) {
    var rgbaComps = value.getComponents('rgb');
    var hexes = [rgbaComps[0], rgbaComps[1], rgbaComps[2], rgbaComps[3] * 255]
        .map(zerofill)
        .join('');
    return "#" + hexes;
}
exports.toHexRgbaString = toHexRgbaString;
/**
 * @hidden
 */
function toFunctionalRgbString(value) {
    var formatter = new number_1.NumberFormatter(0);
    var comps = ColorModel.withoutAlpha(value.getComponents('rgb')).map(function (comp) { return formatter.format(comp); });
    return "rgb(" + comps.join(', ') + ")";
}
exports.toFunctionalRgbString = toFunctionalRgbString;
/**
 * @hidden
 */
function toFunctionalRgbaString(value) {
    var aFormatter = new number_1.NumberFormatter(2);
    var rgbFormatter = new number_1.NumberFormatter(0);
    var comps = value.getComponents('rgb').map(function (comp, index) {
        var formatter = index === 3 ? aFormatter : rgbFormatter;
        return formatter.format(comp);
    });
    return "rgba(" + comps.join(', ') + ")";
}
exports.toFunctionalRgbaString = toFunctionalRgbaString;
/**
 * @hidden
 */
function toFunctionalHslString(value) {
    var formatter = new number_1.NumberFormatter(0);
    var comps = ColorModel.withoutAlpha(value.getComponents('hsl')).map(function (comp) { return formatter.format(comp); });
    return "hsl(" + comps.join(', ') + ")";
}
exports.toFunctionalHslString = toFunctionalHslString;
/**
 * @hidden
 */
function toFunctionalHslaString(value) {
    var aFormatter = new number_1.NumberFormatter(2);
    var hslFormatter = new number_1.NumberFormatter(0);
    var comps = value.getComponents('hsl').map(function (comp, index) {
        var formatter = index === 3 ? aFormatter : hslFormatter;
        return formatter.format(comp);
    });
    return "hsla(" + comps.join(', ') + ")";
}
exports.toFunctionalHslaString = toFunctionalHslaString;
var NOTATION_TO_STRINGIFIER_MAP = {
    'func.hsl': toFunctionalHslString,
    'func.hsla': toFunctionalHslaString,
    'func.rgb': toFunctionalRgbString,
    'func.rgba': toFunctionalRgbaString,
    'hex.rgb': toHexRgbString,
    'hex.rgba': toHexRgbaString,
};
function getStringifier(notation) {
    return NOTATION_TO_STRINGIFIER_MAP[notation];
}
exports.getStringifier = getStringifier;
/**
 * @hidden
 */
function toRgbNumber(value) {
    return ColorModel.withoutAlpha(value.getComponents('rgb')).reduce(function (result, comp) {
        return (result << 8) | (Math.floor(comp) & 0xff);
    }, 0);
}
exports.toRgbNumber = toRgbNumber;
/**
 * @hidden
 */
function toRgbaNumber(value) {
    return value.getComponents('rgb').reduce(function (result, comp, index) {
        var hex = Math.floor(index === 3 ? comp * 255 : comp) & 0xff;
        return (result << 8) | hex;
    }, 0);
}
exports.toRgbaNumber = toRgbaNumber;


/***/ }),

/***/ "./src/main/js/converter/number.ts":
/*!*****************************************!*\
  !*** ./src/main/js/converter/number.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = exports.fromMixed = void 0;
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
var string_number_1 = __webpack_require__(/*! ../parser/string-number */ "./src/main/js/parser/string-number.ts");
/**
 * @hidden
 */
function fromMixed(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        var pv = string_number_1.StringNumberParser(value);
        if (!type_util_1.TypeUtil.isEmpty(pv)) {
            return pv;
        }
    }
    return 0;
}
exports.fromMixed = fromMixed;
/**
 * @hidden
 */
function toString(value) {
    return String(value);
}
exports.toString = toString;


/***/ }),

/***/ "./src/main/js/converter/point-2d.ts":
/*!*******************************************!*\
  !*** ./src/main/js/converter/point-2d.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromMixed = void 0;
var point_2d_1 = __webpack_require__(/*! ../model/point-2d */ "./src/main/js/model/point-2d.ts");
var any_point_2d_1 = __webpack_require__(/*! ../parser/any-point-2d */ "./src/main/js/parser/any-point-2d.ts");
/**
 * @hidden
 */
function fromMixed(value) {
    return any_point_2d_1.AnyPoint2dParser(value) || new point_2d_1.Point2d();
}
exports.fromMixed = fromMixed;


/***/ }),

/***/ "./src/main/js/converter/string.ts":
/*!*****************************************!*\
  !*** ./src/main/js/converter/string.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = exports.fromMixed = void 0;
/**
 * @hidden
 */
function fromMixed(value) {
    return String(value);
}
exports.fromMixed = fromMixed;
/**
 * @hidden
 */
function toString(value) {
    return value;
}
exports.toString = toString;


/***/ }),

/***/ "./src/main/js/formatter/boolean.ts":
/*!******************************************!*\
  !*** ./src/main/js/formatter/boolean.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanFormatter = void 0;
var BooleanConverter = __webpack_require__(/*! ../converter/boolean */ "./src/main/js/converter/boolean.ts");
/**
 * @hidden
 */
var BooleanFormatter = /** @class */ (function () {
    function BooleanFormatter() {
    }
    BooleanFormatter.prototype.format = function (value) {
        return BooleanConverter.toString(value);
    };
    return BooleanFormatter;
}());
exports.BooleanFormatter = BooleanFormatter;


/***/ }),

/***/ "./src/main/js/formatter/color.ts":
/*!****************************************!*\
  !*** ./src/main/js/formatter/color.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorFormatter = void 0;
/**
 * @hidden
 */
var ColorFormatter = /** @class */ (function () {
    function ColorFormatter(stringifier) {
        this.stringifier_ = stringifier;
    }
    ColorFormatter.prototype.format = function (value) {
        return this.stringifier_(value);
    };
    return ColorFormatter;
}());
exports.ColorFormatter = ColorFormatter;


/***/ }),

/***/ "./src/main/js/formatter/number.ts":
/*!*****************************************!*\
  !*** ./src/main/js/formatter/number.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberFormatter = void 0;
/**
 * @hidden
 */
var NumberFormatter = /** @class */ (function () {
    function NumberFormatter(digits) {
        this.digits_ = digits;
    }
    Object.defineProperty(NumberFormatter.prototype, "digits", {
        get: function () {
            return this.digits_;
        },
        enumerable: false,
        configurable: true
    });
    NumberFormatter.prototype.format = function (value) {
        return value.toFixed(Math.max(Math.min(this.digits_, 20), 0));
    };
    return NumberFormatter;
}());
exports.NumberFormatter = NumberFormatter;


/***/ }),

/***/ "./src/main/js/formatter/string.ts":
/*!*****************************************!*\
  !*** ./src/main/js/formatter/string.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFormatter = void 0;
/**
 * @hidden
 */
var StringFormatter = /** @class */ (function () {
    function StringFormatter() {
    }
    StringFormatter.prototype.format = function (value) {
        return value;
    };
    return StringFormatter;
}());
exports.StringFormatter = StringFormatter;


/***/ }),

/***/ "./src/main/js/index.ts":
/*!******************************!*\
  !*** ./src/main/js/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Style = __webpack_require__(/*! ../sass/bundle.scss */ "./src/main/sass/bundle.scss");
var tweakpane_without_style_1 = __webpack_require__(/*! ./tweakpane-without-style */ "./src/main/js/tweakpane-without-style.ts");
function embedDefaultStyleIfNeeded(document) {
    var MARKER = 'tweakpane';
    if (document.querySelector("style[data-for=" + MARKER + "]")) {
        return;
    }
    var styleElem = document.createElement('style');
    styleElem.dataset.for = MARKER;
    styleElem.textContent = Style.toString();
    if (document.head) {
        document.head.appendChild(styleElem);
    }
}
// tslint:disable-next-line: no-default-export
var Tweakpane = /** @class */ (function (_super) {
    __extends(Tweakpane, _super);
    function Tweakpane(opt_config) {
        var _this = _super.call(this, opt_config) || this;
        embedDefaultStyleIfNeeded(_this.document);
        return _this;
    }
    return Tweakpane;
}(tweakpane_without_style_1.TweakpaneWithoutStyle));
exports.default = Tweakpane;


/***/ }),

/***/ "./src/main/js/misc/class-name.ts":
/*!****************************************!*\
  !*** ./src/main/js/misc/class-name.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassName = void 0;
var PREFIX = 'tp';
var TYPE_TO_POSTFIX_MAP = {
    '': 'v',
    input: 'iv',
    monitor: 'mv',
};
function ClassName(viewName, opt_viewType) {
    var viewType = opt_viewType || '';
    var postfix = TYPE_TO_POSTFIX_MAP[viewType];
    return function (opt_elementName, opt_modifier) {
        return [
            PREFIX,
            '-',
            viewName,
            postfix,
            opt_elementName ? "_" + opt_elementName : '',
            opt_modifier ? "-" + opt_modifier : '',
        ].join('');
    };
}
exports.ClassName = ClassName;


/***/ }),

/***/ "./src/main/js/misc/color-model.ts":
/*!*****************************************!*\
  !*** ./src/main/js/misc/color-model.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMode = exports.withAlpha = exports.withoutAlpha = exports.opaque = void 0;
var number_util_1 = __webpack_require__(/*! ./number-util */ "./src/main/js/misc/number-util.ts");
function rgbToHsl(r, g, b) {
    var rp = number_util_1.NumberUtil.constrain(r / 255, 0, 1);
    var gp = number_util_1.NumberUtil.constrain(g / 255, 0, 1);
    var bp = number_util_1.NumberUtil.constrain(b / 255, 0, 1);
    var cmax = Math.max(rp, gp, bp);
    var cmin = Math.min(rp, gp, bp);
    var c = cmax - cmin;
    var h = 0;
    var s = 0;
    var l = (cmin + cmax) / 2;
    if (c !== 0) {
        s = l > 0.5 ? c / (2 - cmin - cmax) : c / (cmax + cmin);
        if (rp === cmax) {
            h = (gp - bp) / c;
        }
        else if (gp === cmax) {
            h = 2 + (bp - rp) / c;
        }
        else {
            h = 4 + (rp - gp) / c;
        }
        h = h / 6 + (h < 0 ? 1 : 0);
    }
    return [h * 360, s * 100, l * 100];
}
function hslToRgb(h, s, l) {
    var _a, _b, _c, _d, _e, _f;
    var hp = ((h % 360) + 360) % 360;
    var sp = number_util_1.NumberUtil.constrain(s / 100, 0, 1);
    var lp = number_util_1.NumberUtil.constrain(l / 100, 0, 1);
    var c = (1 - Math.abs(2 * lp - 1)) * sp;
    var x = c * (1 - Math.abs(((hp / 60) % 2) - 1));
    var m = lp - c / 2;
    var rp, gp, bp;
    if (hp >= 0 && hp < 60) {
        _a = [c, x, 0], rp = _a[0], gp = _a[1], bp = _a[2];
    }
    else if (hp >= 60 && hp < 120) {
        _b = [x, c, 0], rp = _b[0], gp = _b[1], bp = _b[2];
    }
    else if (hp >= 120 && hp < 180) {
        _c = [0, c, x], rp = _c[0], gp = _c[1], bp = _c[2];
    }
    else if (hp >= 180 && hp < 240) {
        _d = [0, x, c], rp = _d[0], gp = _d[1], bp = _d[2];
    }
    else if (hp >= 240 && hp < 300) {
        _e = [x, 0, c], rp = _e[0], gp = _e[1], bp = _e[2];
    }
    else {
        _f = [c, 0, x], rp = _f[0], gp = _f[1], bp = _f[2];
    }
    return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
}
function rgbToHsv(r, g, b) {
    var rp = number_util_1.NumberUtil.constrain(r / 255, 0, 1);
    var gp = number_util_1.NumberUtil.constrain(g / 255, 0, 1);
    var bp = number_util_1.NumberUtil.constrain(b / 255, 0, 1);
    var cmax = Math.max(rp, gp, bp);
    var cmin = Math.min(rp, gp, bp);
    var d = cmax - cmin;
    var h;
    if (d === 0) {
        h = 0;
    }
    else if (cmax === rp) {
        h = 60 * (((((gp - bp) / d) % 6) + 6) % 6);
    }
    else if (cmax === gp) {
        h = 60 * ((bp - rp) / d + 2);
    }
    else {
        h = 60 * ((rp - gp) / d + 4);
    }
    var s = cmax === 0 ? 0 : d / cmax;
    var v = cmax;
    return [h, s * 100, v * 100];
}
function hsvToRgb(h, s, v) {
    var _a, _b, _c, _d, _e, _f;
    var hp = number_util_1.NumberUtil.loop(h, 360);
    var sp = number_util_1.NumberUtil.constrain(s / 100, 0, 1);
    var vp = number_util_1.NumberUtil.constrain(v / 100, 0, 1);
    var c = vp * sp;
    var x = c * (1 - Math.abs(((hp / 60) % 2) - 1));
    var m = vp - c;
    var rp, gp, bp;
    if (hp >= 0 && hp < 60) {
        _a = [c, x, 0], rp = _a[0], gp = _a[1], bp = _a[2];
    }
    else if (hp >= 60 && hp < 120) {
        _b = [x, c, 0], rp = _b[0], gp = _b[1], bp = _b[2];
    }
    else if (hp >= 120 && hp < 180) {
        _c = [0, c, x], rp = _c[0], gp = _c[1], bp = _c[2];
    }
    else if (hp >= 180 && hp < 240) {
        _d = [0, x, c], rp = _d[0], gp = _d[1], bp = _d[2];
    }
    else if (hp >= 240 && hp < 300) {
        _e = [x, 0, c], rp = _e[0], gp = _e[1], bp = _e[2];
    }
    else {
        _f = [c, 0, x], rp = _f[0], gp = _f[1], bp = _f[2];
    }
    return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
}
/**
 * @hidden
 */
function opaque(comps) {
    return [comps[0], comps[1], comps[2], 1];
}
exports.opaque = opaque;
/**
 * @hidden
 */
function withoutAlpha(comps) {
    return [comps[0], comps[1], comps[2]];
}
exports.withoutAlpha = withoutAlpha;
/**
 * @hidden
 */
function withAlpha(comps, alpha) {
    return [comps[0], comps[1], comps[2], alpha];
}
exports.withAlpha = withAlpha;
var MODE_CONVERTER_MAP = {
    hsl: {
        hsl: function (h, s, l) { return [h, s, l]; },
        hsv: function (h, s, l) {
            var _a = hslToRgb(h, s, l), r = _a[0], g = _a[1], b = _a[2];
            return rgbToHsv(r, g, b);
        },
        rgb: hslToRgb,
    },
    hsv: {
        hsl: function (h, s, v) {
            var _a = hsvToRgb(h, s, v), r = _a[0], g = _a[1], b = _a[2];
            return rgbToHsl(r, g, b);
        },
        hsv: function (h, s, v) { return [h, s, v]; },
        rgb: hsvToRgb,
    },
    rgb: {
        hsl: rgbToHsl,
        hsv: rgbToHsv,
        rgb: function (r, g, b) { return [r, g, b]; },
    },
};
/**
 * @hidden
 */
function convertMode(components, fromMode, toMode) {
    var _a;
    return (_a = MODE_CONVERTER_MAP[fromMode])[toMode].apply(_a, components);
}
exports.convertMode = convertMode;


/***/ }),

/***/ "./src/main/js/misc/constants.ts":
/*!***************************************!*\
  !*** ./src/main/js/misc/constants.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
exports.Constants = {
    monitorDefaultInterval: 200,
};


/***/ }),

/***/ "./src/main/js/misc/disposing-util.ts":
/*!********************************************!*\
  !*** ./src/main/js/misc/disposing-util.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.disposeElement = void 0;
function disposeElement(elem) {
    if (elem && elem.parentElement) {
        elem.parentElement.removeChild(elem);
    }
    return null;
}
exports.disposeElement = disposeElement;


/***/ }),

/***/ "./src/main/js/misc/dom-util.ts":
/*!**************************************!*\
  !*** ./src/main/js/misc/dom-util.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOfChildElement = exports.removeElement = exports.insertElementAt = exports.createSvgIconElement = exports.getCanvasContext = exports.getWindowDocument = exports.supportsTouch = exports.disableTransitionTemporarily = exports.forceReflow = exports.SVG_NS = void 0;
var type_util_1 = __webpack_require__(/*! ./type-util */ "./src/main/js/misc/type-util.ts");
exports.SVG_NS = 'http://www.w3.org/2000/svg';
function forceReflow(element) {
    // tslint:disable-next-line:no-unused-expression
    element.offsetHeight;
}
exports.forceReflow = forceReflow;
function disableTransitionTemporarily(element, callback) {
    var t = element.style.transition;
    element.style.transition = 'none';
    callback();
    element.style.transition = t;
}
exports.disableTransitionTemporarily = disableTransitionTemporarily;
function supportsTouch(document) {
    return document.ontouchstart !== undefined;
}
exports.supportsTouch = supportsTouch;
function getWindowDocument() {
    // tslint:disable-next-line:function-constructor
    var globalObj = type_util_1.TypeUtil.forceCast(new Function('return this')());
    return globalObj.document;
}
exports.getWindowDocument = getWindowDocument;
function isBrowser() {
    // Webpack defines process.browser = true;
    // https://github.com/webpack/node-libs-browser
    // https://github.com/defunctzombie/node-process
    return !!process.browser;
}
function getCanvasContext(canvasElement) {
    // HTMLCanvasElement.prototype.getContext is not defined on testing environment
    return isBrowser() ? canvasElement.getContext('2d') : null;
}
exports.getCanvasContext = getCanvasContext;
// tslint:disable: max-line-length
var ICON_ID_TO_INNER_HTML_MAP = {
    p2dpad: '<path d="M8 2V14" stroke="currentColor" stroke-width="1.5"/><path d="M2 8H14" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="2" fill="currentColor"/>',
};
function createSvgIconElement(document, iconId) {
    var elem = document.createElementNS(exports.SVG_NS, 'svg');
    elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
    return elem;
}
exports.createSvgIconElement = createSvgIconElement;
function insertElementAt(parentElement, element, index) {
    parentElement.insertBefore(element, parentElement.children[index]);
}
exports.insertElementAt = insertElementAt;
function removeElement(element) {
    if (element.parentElement) {
        element.parentElement.removeChild(element);
    }
}
exports.removeElement = removeElement;
function indexOfChildElement(element) {
    var parentElem = element.parentElement;
    if (!parentElem) {
        return -1;
    }
    var children = Array.prototype.slice.call(parentElem.children);
    return children.indexOf(element);
}
exports.indexOfChildElement = indexOfChildElement;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/main/js/misc/emitter.ts":
/*!*************************************!*\
  !*** ./src/main/js/misc/emitter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
/**
 * @hidden
 */
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.observers_ = {};
    }
    Emitter.prototype.on = function (eventName, handler) {
        var observers = this.observers_[eventName];
        if (!observers) {
            observers = this.observers_[eventName] = [];
        }
        observers.push({
            handler: handler,
        });
        return this;
    };
    Emitter.prototype.off = function (eventName, handler) {
        var observers = this.observers_[eventName];
        if (observers) {
            this.observers_[eventName] = observers.filter(function (observer) {
                return observer.handler !== handler;
            });
        }
        return this;
    };
    Emitter.prototype.emit = function (eventName, event) {
        var observers = this.observers_[eventName];
        if (!observers) {
            return;
        }
        observers.forEach(function (observer) {
            observer.handler(event);
        });
    };
    return Emitter;
}());
exports.Emitter = Emitter;


/***/ }),

/***/ "./src/main/js/misc/number-util.ts":
/*!*****************************************!*\
  !*** ./src/main/js/misc/number-util.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtil = void 0;
exports.NumberUtil = {
    map: function (value, start1, end1, start2, end2) {
        var p = (value - start1) / (end1 - start1);
        return start2 + p * (end2 - start2);
    },
    getDecimalDigits: function (value) {
        var text = String(value.toFixed(10));
        var frac = text.split('.')[1];
        return frac.replace(/0+$/, '').length;
    },
    constrain: function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    },
    loop: function (value, max) {
        return ((value % max) + max) % max;
    },
};


/***/ }),

/***/ "./src/main/js/misc/pane-error.ts":
/*!****************************************!*\
  !*** ./src/main/js/misc/pane-error.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PaneError = void 0;
function createMessage(config) {
    if (config.type === 'alreadydisposed') {
        return 'View has been already disposed';
    }
    if (config.type === 'emptyvalue') {
        return "Value is empty for " + config.context.key;
    }
    if (config.type === 'invalidparams') {
        return "Invalid parameters for " + config.context.name;
    }
    if (config.type === 'nomatchingcontroller') {
        return "No matching controller for " + config.context.key;
    }
    if (config.type === 'shouldneverhappen') {
        return 'This error should never happen';
    }
    return 'Unexpected error';
}
var PaneError = /** @class */ (function () {
    function PaneError(config) {
        this.message = createMessage(config);
        this.name = this.constructor.name;
        this.stack = new Error(this.message).stack;
        this.type = config.type;
    }
    PaneError.alreadyDisposed = function () {
        return new PaneError({ type: 'alreadydisposed' });
    };
    PaneError.shouldNeverHappen = function () {
        return new PaneError({ type: 'shouldneverhappen' });
    };
    return PaneError;
}());
exports.PaneError = PaneError;
PaneError.prototype = Object.create(Error.prototype);
PaneError.prototype.constructor = PaneError;


/***/ }),

/***/ "./src/main/js/misc/pointer-handler.ts":
/*!*********************************************!*\
  !*** ./src/main/js/misc/pointer-handler.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PointerHandler = void 0;
var DomUtil = __webpack_require__(/*! ./dom-util */ "./src/main/js/misc/dom-util.ts");
var emitter_1 = __webpack_require__(/*! ./emitter */ "./src/main/js/misc/emitter.ts");
/**
 * A utility class to handle both mouse and touch events.
 * @hidden
 */
var PointerHandler = /** @class */ (function () {
    function PointerHandler(document, element) {
        this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
        this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
        this.onMouseDown_ = this.onMouseDown_.bind(this);
        this.onTouchMove_ = this.onTouchMove_.bind(this);
        this.onTouchStart_ = this.onTouchStart_.bind(this);
        this.document = document;
        this.element = element;
        this.emitter = new emitter_1.Emitter();
        this.pressed_ = false;
        if (DomUtil.supportsTouch(this.document)) {
            element.addEventListener('touchstart', this.onTouchStart_);
            element.addEventListener('touchmove', this.onTouchMove_);
        }
        else {
            element.addEventListener('mousedown', this.onMouseDown_);
            this.document.addEventListener('mousemove', this.onDocumentMouseMove_);
            this.document.addEventListener('mouseup', this.onDocumentMouseUp_);
        }
    }
    PointerHandler.prototype.computePosition_ = function (offsetX, offsetY) {
        var rect = this.element.getBoundingClientRect();
        return {
            px: offsetX / rect.width,
            py: offsetY / rect.height,
        };
    };
    PointerHandler.prototype.onMouseDown_ = function (e) {
        var _a;
        // Prevent native text selection
        e.preventDefault();
        (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.focus();
        this.pressed_ = true;
        this.emitter.emit('down', {
            data: this.computePosition_(e.offsetX, e.offsetY),
            sender: this,
        });
    };
    PointerHandler.prototype.onDocumentMouseMove_ = function (e) {
        if (!this.pressed_) {
            return;
        }
        var win = this.document.defaultView;
        var rect = this.element.getBoundingClientRect();
        this.emitter.emit('move', {
            data: this.computePosition_(e.pageX - (((win && win.scrollX) || 0) + rect.left), e.pageY - (((win && win.scrollY) || 0) + rect.top)),
            sender: this,
        });
    };
    PointerHandler.prototype.onDocumentMouseUp_ = function (e) {
        if (!this.pressed_) {
            return;
        }
        this.pressed_ = false;
        var win = this.document.defaultView;
        var rect = this.element.getBoundingClientRect();
        this.emitter.emit('up', {
            data: this.computePosition_(e.pageX - (((win && win.scrollX) || 0) + rect.left), e.pageY - (((win && win.scrollY) || 0) + rect.top)),
            sender: this,
        });
    };
    PointerHandler.prototype.onTouchStart_ = function (e) {
        // Prevent native page scroll
        e.preventDefault();
        var touch = e.targetTouches[0];
        var rect = this.element.getBoundingClientRect();
        this.emitter.emit('down', {
            data: this.computePosition_(touch.clientX - rect.left, touch.clientY - rect.top),
            sender: this,
        });
    };
    PointerHandler.prototype.onTouchMove_ = function (e) {
        var touch = e.targetTouches[0];
        var rect = this.element.getBoundingClientRect();
        this.emitter.emit('move', {
            data: this.computePosition_(touch.clientX - rect.left, touch.clientY - rect.top),
            sender: this,
        });
    };
    return PointerHandler;
}());
exports.PointerHandler = PointerHandler;


/***/ }),

/***/ "./src/main/js/misc/ticker/interval.ts":
/*!*********************************************!*\
  !*** ./src/main/js/misc/ticker/interval.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervalTicker = void 0;
var disposable_1 = __webpack_require__(/*! ../../model/disposable */ "./src/main/js/model/disposable.ts");
var emitter_1 = __webpack_require__(/*! ../emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var IntervalTicker = /** @class */ (function () {
    function IntervalTicker(document, interval) {
        var _this = this;
        this.onTick_ = this.onTick_.bind(this);
        this.onWindowBlur_ = this.onWindowBlur_.bind(this);
        this.onWindowFocus_ = this.onWindowFocus_.bind(this);
        this.active_ = true;
        this.doc_ = document;
        this.emitter = new emitter_1.Emitter();
        if (interval <= 0) {
            this.id_ = null;
        }
        else {
            var win = this.doc_.defaultView;
            if (win) {
                this.id_ = win.setInterval(function () {
                    if (!_this.active_) {
                        return;
                    }
                    _this.onTick_();
                }, interval);
            }
        }
        // TODO: Stop on blur?
        // const win = document.defaultView;
        // if (win) {
        //   win.addEventListener('blur', this.onWindowBlur_);
        //   win.addEventListener('focus', this.onWindowFocus_);
        // }
        this.disposable = new disposable_1.Disposable();
        this.disposable.emitter.on('dispose', function () {
            if (_this.id_ !== null) {
                var win = _this.doc_.defaultView;
                if (win) {
                    win.clearInterval(_this.id_);
                }
            }
            _this.id_ = null;
        });
    }
    IntervalTicker.prototype.onTick_ = function () {
        this.emitter.emit('tick', {
            sender: this,
        });
    };
    IntervalTicker.prototype.onWindowBlur_ = function () {
        this.active_ = false;
    };
    IntervalTicker.prototype.onWindowFocus_ = function () {
        this.active_ = true;
    };
    return IntervalTicker;
}());
exports.IntervalTicker = IntervalTicker;


/***/ }),

/***/ "./src/main/js/misc/type-util.ts":
/*!***************************************!*\
  !*** ./src/main/js/misc/type-util.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUtil = void 0;
exports.TypeUtil = {
    forceCast: function (v) {
        return v;
    },
    isEmpty: function (value) {
        return value === null || value === undefined;
    },
    getOrDefault: function (value, defaultValue) {
        return !exports.TypeUtil.isEmpty(value) ? value : defaultValue;
    },
    deepEqualsArray: function (a1, a2) {
        if (a1.length !== a2.length) {
            return false;
        }
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
                return false;
            }
        }
        return true;
    },
};


/***/ }),

/***/ "./src/main/js/model/button.ts":
/*!*************************************!*\
  !*** ./src/main/js/model/button.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var Button = /** @class */ (function () {
    function Button(title) {
        this.emitter = new emitter_1.Emitter();
        this.title = title;
    }
    Button.prototype.click = function () {
        this.emitter.emit('click', {
            sender: this,
        });
    };
    return Button;
}());
exports.Button = Button;


/***/ }),

/***/ "./src/main/js/model/color.ts":
/*!************************************!*\
  !*** ./src/main/js/model/color.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var ColorModel = __webpack_require__(/*! ../misc/color-model */ "./src/main/js/misc/color-model.ts");
var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
var CONSTRAINT_MAP = {
    hsl: function (comps) {
        return [
            number_util_1.NumberUtil.loop(comps[0], 360),
            number_util_1.NumberUtil.constrain(comps[1], 0, 100),
            number_util_1.NumberUtil.constrain(comps[2], 0, 100),
            number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1),
        ];
    },
    hsv: function (comps) {
        return [
            number_util_1.NumberUtil.loop(comps[0], 360),
            number_util_1.NumberUtil.constrain(comps[1], 0, 100),
            number_util_1.NumberUtil.constrain(comps[2], 0, 100),
            number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1),
        ];
    },
    rgb: function (comps) {
        return [
            number_util_1.NumberUtil.constrain(comps[0], 0, 255),
            number_util_1.NumberUtil.constrain(comps[1], 0, 255),
            number_util_1.NumberUtil.constrain(comps[2], 0, 255),
            number_util_1.NumberUtil.constrain(type_util_1.TypeUtil.getOrDefault(comps[3], 1), 0, 1),
        ];
    },
};
function isRgbColorComponent(obj, key) {
    if (typeof obj !== 'object' || type_util_1.TypeUtil.isEmpty(obj)) {
        return false;
    }
    return key in obj && typeof obj[key] === 'number';
}
/**
 * @hidden
 */
var Color = /** @class */ (function () {
    function Color(comps, mode) {
        this.mode_ = mode;
        this.comps_ = CONSTRAINT_MAP[mode](comps);
    }
    Color.fromObject = function (obj) {
        var comps = 'a' in obj ? [obj.r, obj.g, obj.b, obj.a] : [obj.r, obj.g, obj.b];
        return new Color(comps, 'rgb');
    };
    Color.toRgbaObject = function (color) {
        return color.toRgbaObject();
    };
    Color.isRgbColorObject = function (obj) {
        return (isRgbColorComponent(obj, 'r') &&
            isRgbColorComponent(obj, 'g') &&
            isRgbColorComponent(obj, 'b'));
    };
    Color.isRgbaColorObject = function (obj) {
        return this.isRgbColorObject(obj) && isRgbColorComponent(obj, 'a');
    };
    Color.isColorObject = function (obj) {
        return this.isRgbColorObject(obj);
    };
    Object.defineProperty(Color.prototype, "mode", {
        get: function () {
            return this.mode_;
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.getComponents = function (opt_mode) {
        return ColorModel.withAlpha(ColorModel.convertMode(ColorModel.withoutAlpha(this.comps_), this.mode_, opt_mode || this.mode_), this.comps_[3]);
    };
    Color.prototype.toRgbaObject = function () {
        var rgbComps = this.getComponents('rgb');
        // tslint:disable:object-literal-sort-keys
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3],
        };
        // tslint:enable:object-literal-sort-keys
    };
    return Color;
}());
exports.Color = Color;


/***/ }),

/***/ "./src/main/js/model/disposable.ts":
/*!*****************************************!*\
  !*** ./src/main/js/model/disposable.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Disposable = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var Disposable = /** @class */ (function () {
    function Disposable() {
        this.emitter = new emitter_1.Emitter();
        this.disposed_ = false;
    }
    Object.defineProperty(Disposable.prototype, "disposed", {
        get: function () {
            return this.disposed_;
        },
        enumerable: false,
        configurable: true
    });
    Disposable.prototype.dispose = function () {
        if (this.disposed_) {
            return false;
        }
        this.disposed_ = true;
        this.emitter.emit('dispose', {
            sender: this,
        });
        return true;
    };
    return Disposable;
}());
exports.Disposable = Disposable;


/***/ }),

/***/ "./src/main/js/model/foldable.ts":
/*!***************************************!*\
  !*** ./src/main/js/model/foldable.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Foldable = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var Foldable = /** @class */ (function () {
    function Foldable() {
        this.emitter = new emitter_1.Emitter();
        this.expanded_ = false;
    }
    Object.defineProperty(Foldable.prototype, "expanded", {
        get: function () {
            return this.expanded_;
        },
        set: function (expanded) {
            var changed = this.expanded_ !== expanded;
            if (changed) {
                this.expanded_ = expanded;
                this.emitter.emit('change', {
                    sender: this,
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    return Foldable;
}());
exports.Foldable = Foldable;


/***/ }),

/***/ "./src/main/js/model/folder.ts":
/*!*************************************!*\
  !*** ./src/main/js/model/folder.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
/**
 * @hidden
 */
var Folder = /** @class */ (function () {
    function Folder(title, expanded) {
        this.emitter = new emitter_1.Emitter();
        this.expanded_ = expanded;
        this.expandedHeight_ = null;
        this.temporaryExpanded_ = null;
        this.shouldFixHeight_ = false;
        this.title = title;
    }
    Object.defineProperty(Folder.prototype, "expanded", {
        get: function () {
            return this.expanded_;
        },
        set: function (expanded) {
            var changed = this.expanded_ !== expanded;
            if (!changed) {
                return;
            }
            this.emitter.emit('beforechange', {
                propertyName: 'expanded',
                sender: this,
            });
            this.expanded_ = expanded;
            this.emitter.emit('change', {
                propertyName: 'expanded',
                sender: this,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "temporaryExpanded", {
        get: function () {
            return this.temporaryExpanded_;
        },
        set: function (expanded) {
            var changed = this.temporaryExpanded_ !== expanded;
            if (!changed) {
                return;
            }
            this.emitter.emit('beforechange', {
                propertyName: 'temporaryExpanded',
                sender: this,
            });
            this.temporaryExpanded_ = expanded;
            this.emitter.emit('change', {
                propertyName: 'temporaryExpanded',
                sender: this,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "expandedHeight", {
        get: function () {
            return this.expandedHeight_;
        },
        set: function (expandedHeight) {
            var changed = this.expandedHeight_ !== expandedHeight;
            if (!changed) {
                return;
            }
            this.emitter.emit('beforechange', {
                propertyName: 'expandedHeight',
                sender: this,
            });
            this.expandedHeight_ = expandedHeight;
            this.emitter.emit('change', {
                propertyName: 'expandedHeight',
                sender: this,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "shouldFixHeight", {
        get: function () {
            return this.shouldFixHeight_;
        },
        set: function (shouldFixHeight) {
            var changed = this.shouldFixHeight_ !== shouldFixHeight;
            if (!changed) {
                return;
            }
            this.emitter.emit('beforechange', {
                propertyName: 'shouldFixHeight',
                sender: this,
            });
            this.shouldFixHeight_ = shouldFixHeight;
            this.emitter.emit('change', {
                propertyName: 'shouldFixHeight',
                sender: this,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "styleExpanded", {
        get: function () {
            return type_util_1.TypeUtil.getOrDefault(this.temporaryExpanded, this.expanded);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "styleHeight", {
        get: function () {
            if (!this.styleExpanded) {
                return '0';
            }
            if (this.shouldFixHeight && !type_util_1.TypeUtil.isEmpty(this.expandedHeight)) {
                return this.expandedHeight + "px";
            }
            return 'auto';
        },
        enumerable: false,
        configurable: true
    });
    return Folder;
}());
exports.Folder = Folder;


/***/ }),

/***/ "./src/main/js/model/graph-cursor.ts":
/*!*******************************************!*\
  !*** ./src/main/js/model/graph-cursor.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphCursor = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var GraphCursor = /** @class */ (function () {
    function GraphCursor() {
        this.emitter = new emitter_1.Emitter();
        this.index_ = -1;
    }
    Object.defineProperty(GraphCursor.prototype, "index", {
        get: function () {
            return this.index_;
        },
        set: function (index) {
            var changed = this.index_ !== index;
            if (changed) {
                this.index_ = index;
                this.emitter.emit('change', {
                    index: index,
                    sender: this,
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    return GraphCursor;
}());
exports.GraphCursor = GraphCursor;


/***/ }),

/***/ "./src/main/js/model/input-value.ts":
/*!******************************************!*\
  !*** ./src/main/js/model/input-value.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputValue = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var InputValue = /** @class */ (function () {
    function InputValue(initialValue, constraint) {
        this.constraint_ = constraint;
        this.emitter = new emitter_1.Emitter();
        this.rawValue_ = initialValue;
    }
    InputValue.equalsValue = function (v1, v2) {
        return v1 === v2;
    };
    Object.defineProperty(InputValue.prototype, "constraint", {
        get: function () {
            return this.constraint_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputValue.prototype, "rawValue", {
        get: function () {
            return this.rawValue_;
        },
        set: function (rawValue) {
            var constrainedValue = this.constraint_
                ? this.constraint_.constrain(rawValue)
                : rawValue;
            var changed = !InputValue.equalsValue(this.rawValue_, constrainedValue);
            if (changed) {
                this.rawValue_ = constrainedValue;
                this.emitter.emit('change', {
                    rawValue: constrainedValue,
                    sender: this,
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    return InputValue;
}());
exports.InputValue = InputValue;


/***/ }),

/***/ "./src/main/js/model/list.ts":
/*!***********************************!*\
  !*** ./src/main/js/model/list.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var List = /** @class */ (function () {
    function List() {
        this.emitter = new emitter_1.Emitter();
        this.items_ = [];
    }
    Object.defineProperty(List.prototype, "items", {
        get: function () {
            return this.items_;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.add = function (item, opt_index) {
        var index = opt_index !== undefined ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        this.emitter.emit('add', {
            index: index,
            item: item,
            sender: this,
        });
    };
    List.prototype.remove = function (item) {
        var index = this.items_.indexOf(item);
        if (index < 0) {
            return;
        }
        this.items_.splice(index, 1);
        this.emitter.emit('remove', {
            sender: this,
        });
    };
    return List;
}());
exports.List = List;


/***/ }),

/***/ "./src/main/js/model/model-sync.ts":
/*!*****************************************!*\
  !*** ./src/main/js/model/model-sync.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
/**
 * @hidden
 */
function connect(_a) {
    var primary = _a.primary, secondary = _a.secondary;
    primary.emitter(primary.value).on('change', function () {
        primary.apply(primary.value, secondary.value);
    });
    secondary.emitter(secondary.value).on('change', function () {
        secondary.apply(secondary.value, primary.value);
    });
    primary.apply(primary.value, secondary.value);
}
exports.connect = connect;


/***/ }),

/***/ "./src/main/js/model/monitor-value.ts":
/*!********************************************!*\
  !*** ./src/main/js/model/monitor-value.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorValue = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
/**
 * @hidden
 */
var MonitorValue = /** @class */ (function () {
    function MonitorValue(totalCount) {
        this.emitter = new emitter_1.Emitter();
        this.rawValues_ = [];
        this.totalCount_ = totalCount;
    }
    Object.defineProperty(MonitorValue.prototype, "rawValues", {
        get: function () {
            return this.rawValues_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonitorValue.prototype, "totalCount", {
        get: function () {
            return this.totalCount_;
        },
        enumerable: false,
        configurable: true
    });
    MonitorValue.prototype.append = function (rawValue) {
        this.rawValues_.push(rawValue);
        if (this.rawValues_.length > this.totalCount_) {
            this.rawValues_.splice(0, this.rawValues_.length - this.totalCount_);
        }
        this.emitter.emit('update', {
            rawValue: rawValue,
            sender: this,
        });
    };
    return MonitorValue;
}());
exports.MonitorValue = MonitorValue;


/***/ }),

/***/ "./src/main/js/model/picked-color.ts":
/*!*******************************************!*\
  !*** ./src/main/js/model/picked-color.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PickedColor = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
var PickedColor = /** @class */ (function () {
    function PickedColor(value) {
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.mode_ = 'rgb';
        this.value = value;
        this.value.emitter.on('change', this.onValueChange_);
        this.emitter = new emitter_1.Emitter();
    }
    Object.defineProperty(PickedColor.prototype, "mode", {
        get: function () {
            return this.mode_;
        },
        set: function (mode) {
            if (this.mode_ === mode) {
                return;
            }
            this.mode_ = mode;
            this.emitter.emit('change', {
                propertyName: 'mode',
                sender: this,
            });
        },
        enumerable: false,
        configurable: true
    });
    PickedColor.prototype.onValueChange_ = function () {
        this.emitter.emit('change', {
            propertyName: 'value',
            sender: this,
        });
    };
    return PickedColor;
}());
exports.PickedColor = PickedColor;


/***/ }),

/***/ "./src/main/js/model/point-2d.ts":
/*!***************************************!*\
  !*** ./src/main/js/model/point-2d.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2d = void 0;
var Point2d = /** @class */ (function () {
    function Point2d(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point2d.prototype.getComponents = function () {
        return [this.x, this.y];
    };
    Point2d.prototype.toObject = function () {
        return {
            x: this.x,
            y: this.y,
        };
    };
    return Point2d;
}());
exports.Point2d = Point2d;


/***/ }),

/***/ "./src/main/js/model/target.ts":
/*!*************************************!*\
  !*** ./src/main/js/model/target.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Target = void 0;
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
/**
 * @hidden
 */
var Target = /** @class */ (function () {
    function Target(object, key, opt_id) {
        this.obj_ = object;
        this.key_ = key;
        this.presetKey_ = type_util_1.TypeUtil.getOrDefault(opt_id, key);
    }
    Object.defineProperty(Target.prototype, "key", {
        get: function () {
            return this.key_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Target.prototype, "presetKey", {
        get: function () {
            return this.presetKey_;
        },
        enumerable: false,
        configurable: true
    });
    Target.prototype.read = function () {
        return this.obj_[this.key_];
    };
    Target.prototype.write = function (value) {
        this.obj_[this.key_] = value;
    };
    return Target;
}());
exports.Target = Target;


/***/ }),

/***/ "./src/main/js/model/ui-container.ts":
/*!*******************************************!*\
  !*** ./src/main/js/model/ui-container.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UiContainer = void 0;
var folder_1 = __webpack_require__(/*! ../controller/folder */ "./src/main/js/controller/folder.ts");
var input_binding_1 = __webpack_require__(/*! ../controller/input-binding */ "./src/main/js/controller/input-binding.ts");
var monitor_binding_1 = __webpack_require__(/*! ../controller/monitor-binding */ "./src/main/js/controller/monitor-binding.ts");
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
var list_1 = __webpack_require__(/*! ./list */ "./src/main/js/model/list.ts");
/**
 * @hidden
 */
var UiContainer = /** @class */ (function () {
    function UiContainer() {
        this.onItemFolderFold_ = this.onItemFolderFold_.bind(this);
        this.onListItemLayout_ = this.onListItemLayout_.bind(this);
        this.onSubitemLayout_ = this.onSubitemLayout_.bind(this);
        this.onSubitemFolderFold_ = this.onSubitemFolderFold_.bind(this);
        this.onSubitemInputChange_ = this.onSubitemInputChange_.bind(this);
        this.onSubitemMonitorUpdate_ = this.onSubitemMonitorUpdate_.bind(this);
        this.onItemInputChange_ = this.onItemInputChange_.bind(this);
        this.onListAdd_ = this.onListAdd_.bind(this);
        this.onListItemDispose_ = this.onListItemDispose_.bind(this);
        this.onListRemove_ = this.onListRemove_.bind(this);
        this.onItemMonitorUpdate_ = this.onItemMonitorUpdate_.bind(this);
        this.ucList_ = new list_1.List();
        this.emitter = new emitter_1.Emitter();
        this.ucList_.emitter.on('add', this.onListAdd_);
        this.ucList_.emitter.on('remove', this.onListRemove_);
    }
    Object.defineProperty(UiContainer.prototype, "items", {
        get: function () {
            return this.ucList_.items;
        },
        enumerable: false,
        configurable: true
    });
    UiContainer.prototype.add = function (uc, opt_index) {
        this.ucList_.add(uc, opt_index);
    };
    UiContainer.prototype.onListAdd_ = function (ev) {
        var uc = ev.item;
        this.emitter.emit('add', {
            index: ev.index,
            sender: this,
            uiController: uc,
        });
        uc.viewModel.emitter.on('dispose', this.onListItemDispose_);
        uc.viewModel.emitter.on('change', this.onListItemLayout_);
        if (uc instanceof input_binding_1.InputBindingController) {
            var emitter = uc.binding.emitter;
            // TODO: Find more type-safe way
            emitter.on('change', this.onItemInputChange_);
        }
        else if (uc instanceof monitor_binding_1.MonitorBindingController) {
            var emitter = uc.binding.emitter;
            // TODO: Find more type-safe way
            emitter.on('update', this.onItemMonitorUpdate_);
        }
        else if (uc instanceof folder_1.FolderController) {
            uc.folder.emitter.on('change', this.onItemFolderFold_);
            var emitter = uc.uiContainer.emitter;
            emitter.on('itemfold', this.onSubitemFolderFold_);
            emitter.on('itemlayout', this.onSubitemLayout_);
            emitter.on('inputchange', this.onSubitemInputChange_);
            emitter.on('monitorupdate', this.onSubitemMonitorUpdate_);
        }
    };
    UiContainer.prototype.onListRemove_ = function (_) {
        this.emitter.emit('remove', {
            sender: this,
        });
    };
    UiContainer.prototype.onListItemLayout_ = function (ev) {
        if (ev.propertyName === 'hidden' || ev.propertyName === 'positions') {
            this.emitter.emit('itemlayout', {
                sender: this,
            });
        }
    };
    UiContainer.prototype.onListItemDispose_ = function (_) {
        var _this = this;
        var disposedUcs = this.ucList_.items.filter(function (uc) {
            return uc.viewModel.disposed;
        });
        disposedUcs.forEach(function (uc) {
            _this.ucList_.remove(uc);
        });
    };
    UiContainer.prototype.onItemInputChange_ = function (ev) {
        this.emitter.emit('inputchange', {
            inputBinding: ev.sender,
            sender: this,
            value: ev.rawValue,
        });
    };
    UiContainer.prototype.onItemMonitorUpdate_ = function (ev) {
        this.emitter.emit('monitorupdate', {
            monitorBinding: ev.sender,
            sender: this,
            value: ev.rawValue,
        });
    };
    UiContainer.prototype.onItemFolderFold_ = function (ev) {
        if (ev.propertyName !== 'expanded') {
            return;
        }
        this.emitter.emit('itemfold', {
            expanded: ev.sender.expanded,
            sender: this,
        });
    };
    UiContainer.prototype.onSubitemLayout_ = function (_) {
        this.emitter.emit('itemlayout', {
            sender: this,
        });
    };
    UiContainer.prototype.onSubitemInputChange_ = function (ev) {
        this.emitter.emit('inputchange', {
            inputBinding: ev.inputBinding,
            sender: this,
            value: ev.value,
        });
    };
    UiContainer.prototype.onSubitemMonitorUpdate_ = function (ev) {
        this.emitter.emit('monitorupdate', {
            monitorBinding: ev.monitorBinding,
            sender: this,
            value: ev.value,
        });
    };
    UiContainer.prototype.onSubitemFolderFold_ = function (ev) {
        this.emitter.emit('itemfold', {
            expanded: ev.expanded,
            sender: this,
        });
    };
    return UiContainer;
}());
exports.UiContainer = UiContainer;


/***/ }),

/***/ "./src/main/js/model/view-model.ts":
/*!*****************************************!*\
  !*** ./src/main/js/model/view-model.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewModel = void 0;
var emitter_1 = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.ts");
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
var disposable_1 = __webpack_require__(/*! ./disposable */ "./src/main/js/model/disposable.ts");
var ViewModel = /** @class */ (function () {
    function ViewModel() {
        this.onDispose_ = this.onDispose_.bind(this);
        this.emitter = new emitter_1.Emitter();
        this.positions_ = [];
        this.hidden_ = false;
        this.disposable_ = new disposable_1.Disposable();
        this.disposable_.emitter.on('dispose', this.onDispose_);
    }
    Object.defineProperty(ViewModel.prototype, "hidden", {
        get: function () {
            return this.hidden_;
        },
        set: function (hidden) {
            if (this.hidden_ === hidden) {
                return;
            }
            this.hidden_ = hidden;
            this.emitter.emit('change', {
                propertyName: 'hidden',
                sender: this,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "positions", {
        get: function () {
            return this.positions_;
        },
        set: function (positions) {
            if (type_util_1.TypeUtil.deepEqualsArray(positions, this.positions_)) {
                return;
            }
            this.positions_ = positions;
            this.emitter.emit('change', {
                propertyName: 'positions',
                sender: this,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "disposed", {
        get: function () {
            return this.disposable_.disposed;
        },
        enumerable: false,
        configurable: true
    });
    ViewModel.prototype.dispose = function () {
        this.disposable_.dispose();
    };
    ViewModel.prototype.onDispose_ = function () {
        this.emitter.emit('dispose', {
            sender: this,
        });
    };
    return ViewModel;
}());
exports.ViewModel = ViewModel;


/***/ }),

/***/ "./src/main/js/model/view-positions.ts":
/*!*********************************************!*\
  !*** ./src/main/js/model/view-positions.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
function getAll() {
    return ['first', 'last'];
}
exports.getAll = getAll;


/***/ }),

/***/ "./src/main/js/parser/any-point-2d.ts":
/*!********************************************!*\
  !*** ./src/main/js/parser/any-point-2d.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnyPoint2dParser = void 0;
var type_util_1 = __webpack_require__(/*! ../misc/type-util */ "./src/main/js/misc/type-util.ts");
var point_2d_1 = __webpack_require__(/*! ../model/point-2d */ "./src/main/js/model/point-2d.ts");
/**
 * @hidden
 */
exports.AnyPoint2dParser = function (obj) {
    if (type_util_1.TypeUtil.isEmpty(obj)) {
        return null;
    }
    var x = obj.x;
    var y = obj.y;
    if (typeof x !== 'number' || typeof y !== 'number') {
        return null;
    }
    return new point_2d_1.Point2d(x, y);
};


/***/ }),

/***/ "./src/main/js/parser/number-color.ts":
/*!********************************************!*\
  !*** ./src/main/js/parser/number-color.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbaParser = exports.RgbParser = void 0;
var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
var color_1 = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.ts");
/**
 * @hidden
 */
exports.RgbParser = function (num) {
    return new color_1.Color([(num >> 16) & 0xff, (num >> 8) & 0xff, num & 0xff], 'rgb');
};
/**
 * @hidden
 */
exports.RgbaParser = function (num) {
    return new color_1.Color([
        (num >> 24) & 0xff,
        (num >> 16) & 0xff,
        (num >> 8) & 0xff,
        number_util_1.NumberUtil.map(num & 0xff, 0, 255, 0, 1),
    ], 'rgb');
};


/***/ }),

/***/ "./src/main/js/parser/string-color.ts":
/*!********************************************!*\
  !*** ./src/main/js/parser/string-color.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAlphaComponent = exports.CompositeParser = exports.getNotation = void 0;
var number_util_1 = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.ts");
var color_1 = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.ts");
function parseCssNumberOrPercentage(text, maxValue) {
    var m = text.match(/^(.+)%$/);
    if (!m) {
        return Math.min(parseFloat(text), maxValue);
    }
    return Math.min(parseFloat(m[1]) * 0.01 * maxValue, maxValue);
}
var ANGLE_TO_DEG_MAP = {
    deg: function (angle) { return angle; },
    grad: function (angle) { return (angle * 360) / 400; },
    rad: function (angle) { return (angle * 360) / (2 * Math.PI); },
    turn: function (angle) { return angle * 360; },
};
function parseCssNumberOrAngle(text) {
    var m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
    if (!m) {
        return parseFloat(text);
    }
    var angle = parseFloat(m[1]);
    var unit = m[2];
    return ANGLE_TO_DEG_MAP[unit](angle);
}
var NOTATION_TO_PARSER_MAP = {
    'func.rgb': function (text) {
        var m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!m) {
            return null;
        }
        var comps = [
            parseCssNumberOrPercentage(m[1], 255),
            parseCssNumberOrPercentage(m[2], 255),
            parseCssNumberOrPercentage(m[3], 255),
        ];
        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
            return null;
        }
        return new color_1.Color(comps, 'rgb');
    },
    'func.rgba': function (text) {
        var m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!m) {
            return null;
        }
        var comps = [
            parseCssNumberOrPercentage(m[1], 255),
            parseCssNumberOrPercentage(m[2], 255),
            parseCssNumberOrPercentage(m[3], 255),
            parseCssNumberOrPercentage(m[4], 1),
        ];
        if (isNaN(comps[0]) ||
            isNaN(comps[1]) ||
            isNaN(comps[2]) ||
            isNaN(comps[3])) {
            return null;
        }
        return new color_1.Color(comps, 'rgb');
    },
    'func.hsl': function (text) {
        var m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!m) {
            return null;
        }
        var comps = [
            parseCssNumberOrAngle(m[1]),
            parseCssNumberOrPercentage(m[2], 100),
            parseCssNumberOrPercentage(m[3], 100),
        ];
        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
            return null;
        }
        return new color_1.Color(comps, 'hsl');
    },
    'func.hsla': function (text) {
        var m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!m) {
            return null;
        }
        var comps = [
            parseCssNumberOrAngle(m[1]),
            parseCssNumberOrPercentage(m[2], 100),
            parseCssNumberOrPercentage(m[3], 100),
            parseCssNumberOrPercentage(m[4], 1),
        ];
        if (isNaN(comps[0]) ||
            isNaN(comps[1]) ||
            isNaN(comps[2]) ||
            isNaN(comps[3])) {
            return null;
        }
        return new color_1.Color(comps, 'hsl');
    },
    'hex.rgb': function (text) {
        var mRrggbb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (mRrggbb) {
            return new color_1.Color([
                parseInt(mRrggbb[1] + mRrggbb[1], 16),
                parseInt(mRrggbb[2] + mRrggbb[2], 16),
                parseInt(mRrggbb[3] + mRrggbb[3], 16),
            ], 'rgb');
        }
        var mRgb = text.match(/^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        if (mRgb) {
            return new color_1.Color([parseInt(mRgb[1], 16), parseInt(mRgb[2], 16), parseInt(mRgb[3], 16)], 'rgb');
        }
        return null;
    },
    'hex.rgba': function (text) {
        var mRrggbb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (mRrggbb) {
            return new color_1.Color([
                parseInt(mRrggbb[1] + mRrggbb[1], 16),
                parseInt(mRrggbb[2] + mRrggbb[2], 16),
                parseInt(mRrggbb[3] + mRrggbb[3], 16),
                number_util_1.NumberUtil.map(parseInt(mRrggbb[4] + mRrggbb[4], 16), 0, 255, 0, 1),
            ], 'rgb');
        }
        var mRgb = text.match(/^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        if (mRgb) {
            return new color_1.Color([
                parseInt(mRgb[1], 16),
                parseInt(mRgb[2], 16),
                parseInt(mRgb[3], 16),
                number_util_1.NumberUtil.map(parseInt(mRgb[4], 16), 0, 255, 0, 1),
            ], 'rgb');
        }
        return null;
    },
};
/**
 * @hidden
 */
function getNotation(text) {
    var notations = Object.keys(NOTATION_TO_PARSER_MAP);
    return notations.reduce(function (result, notation) {
        if (result) {
            return result;
        }
        var subparser = NOTATION_TO_PARSER_MAP[notation];
        return subparser(text) ? notation : null;
    }, null);
}
exports.getNotation = getNotation;
/**
 * @hidden
 */
exports.CompositeParser = function (text) {
    var notation = getNotation(text);
    return notation ? NOTATION_TO_PARSER_MAP[notation](text) : null;
};
function hasAlphaComponent(notation) {
    return (notation === 'func.hsla' ||
        notation === 'func.rgba' ||
        notation === 'hex.rgba');
}
exports.hasAlphaComponent = hasAlphaComponent;


/***/ }),

/***/ "./src/main/js/parser/string-number.ts":
/*!*********************************************!*\
  !*** ./src/main/js/parser/string-number.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNumberParser = void 0;
/**
 * @hidden
 */
exports.StringNumberParser = function (text) {
    var num = parseFloat(text);
    if (isNaN(num)) {
        return null;
    }
    return num;
};


/***/ }),

/***/ "./src/main/js/tweakpane-without-style.ts":
/*!************************************************!*\
  !*** ./src/main/js/tweakpane-without-style.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweakpaneWithoutStyle = void 0;
var root_1 = __webpack_require__(/*! ./api/root */ "./src/main/js/api/root.ts");
var root_2 = __webpack_require__(/*! ./controller/root */ "./src/main/js/controller/root.ts");
var class_name_1 = __webpack_require__(/*! ./misc/class-name */ "./src/main/js/misc/class-name.ts");
var DomUtil = __webpack_require__(/*! ./misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var pane_error_1 = __webpack_require__(/*! ./misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var type_util_1 = __webpack_require__(/*! ./misc/type-util */ "./src/main/js/misc/type-util.ts");
var view_model_1 = __webpack_require__(/*! ./model/view-model */ "./src/main/js/model/view-model.ts");
function createDefaultWrapperElement(document) {
    var elem = document.createElement('div');
    elem.classList.add(class_name_1.ClassName('dfw')());
    if (document.body) {
        document.body.appendChild(elem);
    }
    return elem;
}
var TweakpaneWithoutStyle = /** @class */ (function (_super) {
    __extends(TweakpaneWithoutStyle, _super);
    function TweakpaneWithoutStyle(opt_config) {
        var _this = this;
        var config = opt_config || {};
        var document = type_util_1.TypeUtil.getOrDefault(config.document, DomUtil.getWindowDocument());
        var rootController = new root_2.RootController(document, {
            viewModel: new view_model_1.ViewModel(),
            title: config.title,
        });
        _this = _super.call(this, rootController) || this;
        _this.containerElem_ =
            config.container || createDefaultWrapperElement(document);
        _this.containerElem_.appendChild(_this.element);
        _this.doc_ = document;
        _this.usesDefaultWrapper_ = !config.container;
        return _this;
    }
    TweakpaneWithoutStyle.prototype.dispose = function () {
        var containerElem = this.containerElem_;
        if (!containerElem) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        if (this.usesDefaultWrapper_) {
            var parentElem = containerElem.parentElement;
            if (parentElem) {
                parentElem.removeChild(containerElem);
            }
        }
        this.containerElem_ = null;
        this.doc_ = null;
        _super.prototype.dispose.call(this);
    };
    Object.defineProperty(TweakpaneWithoutStyle.prototype, "document", {
        get: function () {
            if (!this.doc_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.doc_;
        },
        enumerable: false,
        configurable: true
    });
    return TweakpaneWithoutStyle;
}(root_1.RootApi));
exports.TweakpaneWithoutStyle = TweakpaneWithoutStyle;


/***/ }),

/***/ "./src/main/js/view/button.ts":
/*!************************************!*\
  !*** ./src/main/js/view/button.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonView = void 0;
var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('btn');
/**
 * @hidden
 */
var ButtonView = /** @class */ (function (_super) {
    __extends(ButtonView, _super);
    function ButtonView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.button = config.button;
        _this.element.classList.add(className());
        var buttonElem = document.createElement('button');
        buttonElem.classList.add(className('b'));
        buttonElem.textContent = _this.button.title;
        _this.element.appendChild(buttonElem);
        _this.buttonElem_ = buttonElem;
        config.model.emitter.on('dispose', function () {
            _this.buttonElem_ = DisposingUtil.disposeElement(_this.buttonElem_);
        });
        return _this;
    }
    Object.defineProperty(ButtonView.prototype, "buttonElement", {
        get: function () {
            if (!this.buttonElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.buttonElem_;
        },
        enumerable: false,
        configurable: true
    });
    return ButtonView;
}(view_1.View));
exports.ButtonView = ButtonView;


/***/ }),

/***/ "./src/main/js/view/folder.ts":
/*!************************************!*\
  !*** ./src/main/js/view/folder.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderView = void 0;
var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('fld');
/**
 * @hidden
 */
var FolderView = /** @class */ (function (_super) {
    __extends(FolderView, _super);
    function FolderView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onFolderChange_ = _this.onFolderChange_.bind(_this);
        _this.folder_ = config.folder;
        _this.folder_.emitter.on('change', _this.onFolderChange_);
        _this.element.classList.add(className());
        var titleElem = document.createElement('button');
        titleElem.classList.add(className('t'));
        titleElem.textContent = _this.folder_.title;
        _this.element.appendChild(titleElem);
        _this.titleElem_ = titleElem;
        var markElem = document.createElement('div');
        markElem.classList.add(className('m'));
        _this.titleElem_.appendChild(markElem);
        var containerElem = document.createElement('div');
        containerElem.classList.add(className('c'));
        _this.element.appendChild(containerElem);
        _this.containerElem_ = containerElem;
        _this.applyModel_();
        config.model.emitter.on('dispose', function () {
            _this.containerElem_ = DisposingUtil.disposeElement(_this.containerElem_);
            _this.titleElem_ = DisposingUtil.disposeElement(_this.titleElem_);
        });
        return _this;
    }
    Object.defineProperty(FolderView.prototype, "titleElement", {
        get: function () {
            if (!this.titleElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.titleElem_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FolderView.prototype, "containerElement", {
        get: function () {
            if (!this.containerElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.containerElem_;
        },
        enumerable: false,
        configurable: true
    });
    FolderView.prototype.applyModel_ = function () {
        var containerElem = this.containerElem_;
        if (!containerElem) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var expanded = this.folder_.styleExpanded;
        var expandedClass = className(undefined, 'expanded');
        if (expanded) {
            this.element.classList.add(expandedClass);
        }
        else {
            this.element.classList.remove(expandedClass);
        }
        containerElem.style.height = this.folder_.styleHeight;
    };
    FolderView.prototype.onFolderChange_ = function () {
        this.applyModel_();
    };
    return FolderView;
}(view_1.View));
exports.FolderView = FolderView;


/***/ }),

/***/ "./src/main/js/view/input/a-palette.ts":
/*!*********************************************!*\
  !*** ./src/main/js/view/input/a-palette.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.APaletteInputView = void 0;
var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var ColorModel = __webpack_require__(/*! ../../misc/color-model */ "./src/main/js/misc/color-model.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('apl', 'input');
/**
 * @hidden
 */
var APaletteInputView = /** @class */ (function (_super) {
    __extends(APaletteInputView, _super);
    function APaletteInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.value = config.value;
        _this.value.emitter.on('change', _this.onValueChange_);
        _this.element.classList.add(className());
        _this.element.tabIndex = 0;
        var canvasElem = document.createElement('canvas');
        canvasElem.classList.add(className('c'));
        _this.element.appendChild(canvasElem);
        _this.canvasElem_ = canvasElem;
        var markerElem = document.createElement('div');
        markerElem.classList.add(className('m'));
        _this.element.appendChild(markerElem);
        _this.markerElem_ = markerElem;
        var previewElem = document.createElement('div');
        previewElem.classList.add(className('p'));
        _this.markerElem_.appendChild(previewElem);
        _this.previewElem_ = previewElem;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.canvasElem_ = DisposingUtil.disposeElement(_this.canvasElem_);
            _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
        });
        return _this;
    }
    Object.defineProperty(APaletteInputView.prototype, "canvasElement", {
        get: function () {
            if (!this.canvasElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.canvasElem_;
        },
        enumerable: false,
        configurable: true
    });
    APaletteInputView.prototype.update = function () {
        if (!this.markerElem_ || !this.previewElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var ctx = DomUtil.getCanvasContext(this.canvasElement);
        if (!ctx) {
            return;
        }
        var width = this.canvasElement.width;
        var height = this.canvasElement.height;
        ctx.clearRect(0, 0, width, height);
        var c = this.value.rawValue;
        var hsvComps = c.getComponents('hsv');
        var cellCount = 64;
        var cw = Math.ceil(width / cellCount);
        for (var ix = 0; ix < cellCount; ix++) {
            var alpha = number_util_1.NumberUtil.map(ix, 0, cellCount - 1, 0, 1);
            ctx.fillStyle = ColorConverter.toFunctionalRgbaString(new color_1.Color(ColorModel.withAlpha(ColorModel.withoutAlpha(hsvComps), alpha), 'hsv'));
            var x = Math.floor(number_util_1.NumberUtil.map(ix, 0, cellCount - 1, 0, width - cw));
            var nx = ix < cellCount - 1
                ? Math.floor(number_util_1.NumberUtil.map(ix + 1, 0, cellCount - 1, 0, width - cw))
                : width;
            ctx.fillRect(x, 0, nx - x, height);
        }
        this.previewElem_.style.backgroundColor = ColorConverter.toFunctionalRgbaString(c);
        var left = number_util_1.NumberUtil.map(hsvComps[3], 0, 1, 0, 100);
        this.markerElem_.style.left = left + "%";
    };
    APaletteInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return APaletteInputView;
}(view_1.View));
exports.APaletteInputView = APaletteInputView;


/***/ }),

/***/ "./src/main/js/view/input/checkbox.ts":
/*!********************************************!*\
  !*** ./src/main/js/view/input/checkbox.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('ckb', 'input');
/**
 * @hidden
 */
var CheckboxInputView = /** @class */ (function (_super) {
    __extends(CheckboxInputView, _super);
    function CheckboxInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.element.classList.add(className());
        var labelElem = document.createElement('label');
        labelElem.classList.add(className('l'));
        _this.element.appendChild(labelElem);
        var inputElem = document.createElement('input');
        inputElem.classList.add(className('i'));
        inputElem.type = 'checkbox';
        labelElem.appendChild(inputElem);
        _this.inputElem_ = inputElem;
        var markElem = document.createElement('div');
        markElem.classList.add(className('m'));
        labelElem.appendChild(markElem);
        config.value.emitter.on('change', _this.onValueChange_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
        });
        return _this;
    }
    Object.defineProperty(CheckboxInputView.prototype, "inputElement", {
        get: function () {
            if (!this.inputElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.inputElem_;
        },
        enumerable: false,
        configurable: true
    });
    CheckboxInputView.prototype.update = function () {
        if (!this.inputElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        this.inputElem_.checked = this.value.rawValue;
    };
    CheckboxInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return CheckboxInputView;
}(view_1.View));
exports.CheckboxInputView = CheckboxInputView;


/***/ }),

/***/ "./src/main/js/view/input/color-component-texts.ts":
/*!*********************************************************!*\
  !*** ./src/main/js/view/input/color-component-texts.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorComponentTextsInputView = void 0;
var number_1 = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.ts");
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('cctxts', 'input');
var FORMATTER = new number_1.NumberFormatter(0);
function createModeSelectElement(document) {
    var selectElem = document.createElement('select');
    var items = [
        { text: 'RGB', value: 'rgb' },
        { text: 'HSL', value: 'hsl' },
        { text: 'HSV', value: 'hsv' },
    ];
    selectElem.appendChild(items.reduce(function (frag, item) {
        var optElem = document.createElement('option');
        optElem.textContent = item.text;
        optElem.value = item.value;
        frag.appendChild(optElem);
        return frag;
    }, document.createDocumentFragment()));
    return selectElem;
}
/**
 * @hidden
 */
var ColorComponentTextsInputView = /** @class */ (function (_super) {
    __extends(ColorComponentTextsInputView, _super);
    function ColorComponentTextsInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.element.classList.add(className());
        var modeElem = document.createElement('div');
        modeElem.classList.add(className('m'));
        _this.modeSelectElement = createModeSelectElement(document);
        _this.modeSelectElement.classList.add(className('ms'));
        modeElem.appendChild(_this.modeSelectElement);
        var modeMarkerElem = document.createElement('div');
        modeMarkerElem.classList.add(className('mm'));
        modeElem.appendChild(modeMarkerElem);
        _this.element.appendChild(modeElem);
        var wrapperElem = document.createElement('div');
        wrapperElem.classList.add(className('w'));
        _this.element.appendChild(wrapperElem);
        var inputElems = [0, 1, 2].map(function () {
            var inputElem = document.createElement('input');
            inputElem.classList.add(className('i'));
            inputElem.type = 'text';
            return inputElem;
        });
        inputElems.forEach(function (elem) {
            wrapperElem.appendChild(elem);
        });
        _this.inputElems_ = [inputElems[0], inputElems[1], inputElems[2]];
        _this.pickedColor = config.pickedColor;
        _this.pickedColor.emitter.on('change', _this.onValueChange_);
        _this.update();
        config.model.emitter.on('dispose', function () {
            if (_this.inputElems_) {
                _this.inputElems_.forEach(function (elem) {
                    DisposingUtil.disposeElement(elem);
                });
                _this.inputElems_ = null;
            }
        });
        return _this;
    }
    Object.defineProperty(ColorComponentTextsInputView.prototype, "inputElements", {
        get: function () {
            if (!this.inputElems_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.inputElems_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorComponentTextsInputView.prototype, "value", {
        get: function () {
            return this.pickedColor.value;
        },
        enumerable: false,
        configurable: true
    });
    ColorComponentTextsInputView.prototype.update = function () {
        var inputElems = this.inputElems_;
        if (!inputElems) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var comps = this.pickedColor.value.rawValue.getComponents(this.pickedColor.mode);
        comps.forEach(function (comp, index) {
            var inputElem = inputElems[index];
            if (!inputElem) {
                return;
            }
            inputElem.value = FORMATTER.format(comp);
        });
    };
    ColorComponentTextsInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return ColorComponentTextsInputView;
}(view_1.View));
exports.ColorComponentTextsInputView = ColorComponentTextsInputView;


/***/ }),

/***/ "./src/main/js/view/input/color-picker.ts":
/*!************************************************!*\
  !*** ./src/main/js/view/input/color-picker.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPickerInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var type_util_1 = __webpack_require__(/*! ../../misc/type-util */ "./src/main/js/misc/type-util.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('clp', 'input');
/**
 * @hidden
 */
var ColorPickerInputView = /** @class */ (function (_super) {
    __extends(ColorPickerInputView, _super);
    function ColorPickerInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onFoldableChange_ = _this.onFoldableChange_.bind(_this);
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.pickedColor = config.pickedColor;
        _this.pickedColor.value.emitter.on('change', _this.onValueChange_);
        _this.foldable = config.foldable;
        _this.foldable.emitter.on('change', _this.onFoldableChange_);
        _this.element.classList.add(className());
        var hsvElem = document.createElement('div');
        hsvElem.classList.add(className('hsv'));
        var svElem = document.createElement('div');
        svElem.classList.add(className('sv'));
        _this.svPaletteView_ = config.svPaletteInputView;
        svElem.appendChild(_this.svPaletteView_.element);
        hsvElem.appendChild(svElem);
        var hElem = document.createElement('div');
        hElem.classList.add(className('h'));
        _this.hPaletteView_ = config.hPaletteInputView;
        hElem.appendChild(_this.hPaletteView_.element);
        hsvElem.appendChild(hElem);
        _this.element.appendChild(hsvElem);
        var rgbElem = document.createElement('div');
        rgbElem.classList.add(className('rgb'));
        _this.compTextsView_ = config.componentTextsView;
        rgbElem.appendChild(_this.compTextsView_.element);
        _this.element.appendChild(rgbElem);
        if (config.alphaInputViews) {
            _this.alphaViews_ = {
                palette: config.alphaInputViews.palette,
                text: config.alphaInputViews.text,
            };
            var aElem = document.createElement('div');
            aElem.classList.add(className('a'));
            var apElem = document.createElement('div');
            apElem.classList.add(className('ap'));
            apElem.appendChild(_this.alphaViews_.palette.element);
            aElem.appendChild(apElem);
            var atElem = document.createElement('div');
            atElem.classList.add(className('at'));
            atElem.appendChild(_this.alphaViews_.text.element);
            aElem.appendChild(atElem);
            _this.element.appendChild(aElem);
        }
        _this.update();
        return _this;
    }
    Object.defineProperty(ColorPickerInputView.prototype, "allFocusableElements", {
        get: function () {
            var elems = __spreadArrays([
                this.svPaletteView_.element,
                this.hPaletteView_.element
            ], this.compTextsView_.inputElements);
            if (this.alphaViews_) {
                elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
            }
            return type_util_1.TypeUtil.forceCast(elems);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorPickerInputView.prototype, "value", {
        get: function () {
            return this.pickedColor.value;
        },
        enumerable: false,
        configurable: true
    });
    ColorPickerInputView.prototype.update = function () {
        if (this.foldable.expanded) {
            this.element.classList.add(className(undefined, 'expanded'));
        }
        else {
            this.element.classList.remove(className(undefined, 'expanded'));
        }
    };
    ColorPickerInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    ColorPickerInputView.prototype.onFoldableChange_ = function () {
        this.update();
    };
    return ColorPickerInputView;
}(view_1.View));
exports.ColorPickerInputView = ColorPickerInputView;


/***/ }),

/***/ "./src/main/js/view/input/color-swatch-text.ts":
/*!*****************************************************!*\
  !*** ./src/main/js/view/input/color-swatch-text.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwatchTextInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('cswtxt', 'input');
/**
 * @hidden
 */
var ColorSwatchTextInputView = /** @class */ (function (_super) {
    __extends(ColorSwatchTextInputView, _super);
    function ColorSwatchTextInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.element.classList.add(className());
        var swatchElem = document.createElement('div');
        swatchElem.classList.add(className('s'));
        _this.swatchInputView_ = config.swatchInputView;
        swatchElem.appendChild(_this.swatchInputView_.element);
        _this.element.appendChild(swatchElem);
        var textElem = document.createElement('div');
        textElem.classList.add(className('t'));
        _this.textInputView = config.textInputView;
        textElem.appendChild(_this.textInputView.element);
        _this.element.appendChild(textElem);
        return _this;
    }
    Object.defineProperty(ColorSwatchTextInputView.prototype, "value", {
        get: function () {
            return this.textInputView.value;
        },
        enumerable: false,
        configurable: true
    });
    ColorSwatchTextInputView.prototype.update = function () {
        this.swatchInputView_.update();
        this.textInputView.update();
    };
    return ColorSwatchTextInputView;
}(view_1.View));
exports.ColorSwatchTextInputView = ColorSwatchTextInputView;


/***/ }),

/***/ "./src/main/js/view/input/color-swatch.ts":
/*!************************************************!*\
  !*** ./src/main/js/view/input/color-swatch.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwatchInputView = void 0;
var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('csw', 'input');
/**
 * @hidden
 */
var ColorSwatchInputView = /** @class */ (function (_super) {
    __extends(ColorSwatchInputView, _super);
    function ColorSwatchInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        if (_this.element === null) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        config.value.emitter.on('change', _this.onValueChange_);
        _this.value = config.value;
        _this.element.classList.add(className());
        var swatchElem = document.createElement('div');
        swatchElem.classList.add(className('sw'));
        _this.element.appendChild(swatchElem);
        _this.swatchElem_ = swatchElem;
        var buttonElem = document.createElement('button');
        buttonElem.classList.add(className('b'));
        _this.element.appendChild(buttonElem);
        _this.buttonElem_ = buttonElem;
        var pickerElem = document.createElement('div');
        pickerElem.classList.add(className('p'));
        _this.pickerView_ = config.pickerInputView;
        pickerElem.appendChild(_this.pickerView_.element);
        _this.element.appendChild(pickerElem);
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.buttonElem_ = DisposingUtil.disposeElement(_this.buttonElem_);
            _this.swatchElem_ = DisposingUtil.disposeElement(_this.swatchElem_);
        });
        return _this;
    }
    Object.defineProperty(ColorSwatchInputView.prototype, "buttonElement", {
        get: function () {
            if (this.buttonElem_ === null) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.buttonElem_;
        },
        enumerable: false,
        configurable: true
    });
    ColorSwatchInputView.prototype.update = function () {
        if (!this.swatchElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var value = this.value.rawValue;
        this.swatchElem_.style.backgroundColor = ColorConverter.toHexRgbaString(value);
    };
    ColorSwatchInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return ColorSwatchInputView;
}(view_1.View));
exports.ColorSwatchInputView = ColorSwatchInputView;


/***/ }),

/***/ "./src/main/js/view/input/h-palette.ts":
/*!*********************************************!*\
  !*** ./src/main/js/view/input/h-palette.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HPaletteInputView = void 0;
var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('hpl', 'input');
/**
 * @hidden
 */
var HPaletteInputView = /** @class */ (function (_super) {
    __extends(HPaletteInputView, _super);
    function HPaletteInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.value = config.value;
        _this.value.emitter.on('change', _this.onValueChange_);
        _this.element.classList.add(className());
        _this.element.tabIndex = 0;
        var canvasElem = document.createElement('canvas');
        canvasElem.classList.add(className('c'));
        _this.element.appendChild(canvasElem);
        _this.canvasElem_ = canvasElem;
        var markerElem = document.createElement('div');
        markerElem.classList.add(className('m'));
        _this.element.appendChild(markerElem);
        _this.markerElem_ = markerElem;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.canvasElem_ = DisposingUtil.disposeElement(_this.canvasElem_);
            _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
        });
        return _this;
    }
    Object.defineProperty(HPaletteInputView.prototype, "canvasElement", {
        get: function () {
            if (!this.canvasElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.canvasElem_;
        },
        enumerable: false,
        configurable: true
    });
    HPaletteInputView.prototype.update = function () {
        if (!this.markerElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var ctx = DomUtil.getCanvasContext(this.canvasElement);
        if (!ctx) {
            return;
        }
        var width = this.canvasElement.width;
        var height = this.canvasElement.height;
        var cellCount = 64;
        var cw = Math.ceil(width / cellCount);
        for (var ix = 0; ix < cellCount; ix++) {
            var hue = number_util_1.NumberUtil.map(ix, 0, cellCount - 1, 0, 360);
            ctx.fillStyle = ColorConverter.toFunctionalRgbString(new color_1.Color([hue, 100, 100], 'hsv'));
            var x = Math.floor(number_util_1.NumberUtil.map(ix, 0, cellCount - 1, 0, width - cw));
            ctx.fillRect(x, 0, cw, height);
        }
        var c = this.value.rawValue;
        var h = c.getComponents('hsv')[0];
        this.markerElem_.style.backgroundColor = ColorConverter.toFunctionalRgbString(new color_1.Color([h, 100, 100], 'hsv'));
        var left = number_util_1.NumberUtil.map(h, 0, 360, 0, 100);
        this.markerElem_.style.left = left + "%";
    };
    HPaletteInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return HPaletteInputView;
}(view_1.View));
exports.HPaletteInputView = HPaletteInputView;


/***/ }),

/***/ "./src/main/js/view/input/list.ts":
/*!****************************************!*\
  !*** ./src/main/js/view/input/list.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('lst', 'input');
/**
 * @hidden
 */
var ListInputView = /** @class */ (function (_super) {
    __extends(ListInputView, _super);
    function ListInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.element.classList.add(className());
        _this.stringifyValue_ = config.stringifyValue;
        var selectElem = document.createElement('select');
        selectElem.classList.add(className('s'));
        config.options.forEach(function (item, index) {
            var optionElem = document.createElement('option');
            optionElem.dataset.index = String(index);
            optionElem.textContent = item.text;
            optionElem.value = _this.stringifyValue_(item.value);
            selectElem.appendChild(optionElem);
        });
        _this.element.appendChild(selectElem);
        _this.selectElem_ = selectElem;
        var markElem = document.createElement('div');
        markElem.classList.add(className('m'));
        _this.element.appendChild(markElem);
        config.value.emitter.on('change', _this.onValueChange_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.selectElem_ = DisposingUtil.disposeElement(_this.selectElem_);
        });
        return _this;
    }
    Object.defineProperty(ListInputView.prototype, "selectElement", {
        get: function () {
            if (!this.selectElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.selectElem_;
        },
        enumerable: false,
        configurable: true
    });
    ListInputView.prototype.update = function () {
        if (!this.selectElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        this.selectElem_.value = this.stringifyValue_(this.value.rawValue);
    };
    ListInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return ListInputView;
}(view_1.View));
exports.ListInputView = ListInputView;


/***/ }),

/***/ "./src/main/js/view/input/point-2d-pad-text.ts":
/*!*****************************************************!*\
  !*** ./src/main/js/view/input/point-2d-pad-text.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2dPadTextInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('p2dpadtxt', 'input');
/**
 * @hidden
 */
var Point2dPadTextInputView = /** @class */ (function (_super) {
    __extends(Point2dPadTextInputView, _super);
    function Point2dPadTextInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.element.classList.add(className());
        var padWrapperElem = document.createElement('div');
        padWrapperElem.classList.add(className('w'));
        _this.element.appendChild(padWrapperElem);
        var buttonElem = document.createElement('button');
        buttonElem.classList.add(className('b'));
        buttonElem.appendChild(DomUtil.createSvgIconElement(document, 'p2dpad'));
        padWrapperElem.appendChild(buttonElem);
        _this.padButtonElem_ = buttonElem;
        var padElem = document.createElement('div');
        padElem.classList.add(className('p'));
        padWrapperElem.appendChild(padElem);
        _this.padInputView_ = config.padInputView;
        padElem.appendChild(_this.padInputView_.element);
        var textElem = document.createElement('div');
        textElem.classList.add(className('t'));
        _this.textInputView_ = config.textInputView;
        textElem.appendChild(_this.textInputView_.element);
        _this.element.appendChild(textElem);
        return _this;
    }
    Object.defineProperty(Point2dPadTextInputView.prototype, "value", {
        get: function () {
            return this.textInputView_.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2dPadTextInputView.prototype, "padButtonElement", {
        get: function () {
            return this.padButtonElem_;
        },
        enumerable: false,
        configurable: true
    });
    Point2dPadTextInputView.prototype.update = function () {
        this.padInputView_.update();
        this.textInputView_.update();
    };
    return Point2dPadTextInputView;
}(view_1.View));
exports.Point2dPadTextInputView = Point2dPadTextInputView;


/***/ }),

/***/ "./src/main/js/view/input/point-2d-pad.ts":
/*!************************************************!*\
  !*** ./src/main/js/view/input/point-2d-pad.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2dPadInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var SVG_NS = DomUtil.SVG_NS;
var className = class_name_1.ClassName('p2dpad', 'input');
/**
 * @hidden
 */
var Point2dPadInputView = /** @class */ (function (_super) {
    __extends(Point2dPadInputView, _super);
    function Point2dPadInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onFoldableChange_ = _this.onFoldableChange_.bind(_this);
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.foldable = config.foldable;
        _this.foldable.emitter.on('change', _this.onFoldableChange_);
        _this.invertsY_ = config.invertsY;
        _this.maxValue_ = config.maxValue;
        _this.element.classList.add(className());
        var padElem = document.createElement('div');
        padElem.tabIndex = 0;
        padElem.classList.add(className('p'));
        _this.element.appendChild(padElem);
        _this.padElem_ = padElem;
        var svgElem = document.createElementNS(SVG_NS, 'svg');
        svgElem.classList.add(className('g'));
        _this.padElem_.appendChild(svgElem);
        _this.svgElem_ = svgElem;
        var xAxisElem = document.createElementNS(SVG_NS, 'line');
        xAxisElem.classList.add(className('ax'));
        xAxisElem.setAttributeNS(null, 'x1', '0');
        xAxisElem.setAttributeNS(null, 'y1', '50%');
        xAxisElem.setAttributeNS(null, 'x2', '100%');
        xAxisElem.setAttributeNS(null, 'y2', '50%');
        _this.svgElem_.appendChild(xAxisElem);
        var yAxisElem = document.createElementNS(SVG_NS, 'line');
        yAxisElem.classList.add(className('ax'));
        yAxisElem.setAttributeNS(null, 'x1', '50%');
        yAxisElem.setAttributeNS(null, 'y1', '0');
        yAxisElem.setAttributeNS(null, 'x2', '50%');
        yAxisElem.setAttributeNS(null, 'y2', '100%');
        _this.svgElem_.appendChild(yAxisElem);
        var lineElem = document.createElementNS(SVG_NS, 'line');
        lineElem.classList.add(className('l'));
        lineElem.setAttributeNS(null, 'x1', '50%');
        lineElem.setAttributeNS(null, 'y1', '50%');
        _this.svgElem_.appendChild(lineElem);
        _this.lineElem_ = lineElem;
        var markerElem = document.createElementNS(SVG_NS, 'circle');
        markerElem.classList.add(className('m'));
        markerElem.setAttributeNS(null, 'r', '2px');
        _this.svgElem_.appendChild(markerElem);
        _this.markerElem_ = markerElem;
        config.value.emitter.on('change', _this.onValueChange_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.padElem_ = DisposingUtil.disposeElement(_this.padElem_);
        });
        return _this;
    }
    Object.defineProperty(Point2dPadInputView.prototype, "padElement", {
        get: function () {
            if (!this.padElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.padElem_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2dPadInputView.prototype, "allFocusableElements", {
        get: function () {
            if (!this.padElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return [this.padElem_];
        },
        enumerable: false,
        configurable: true
    });
    Point2dPadInputView.prototype.update = function () {
        if (this.foldable.expanded) {
            this.element.classList.add(className(undefined, 'expanded'));
        }
        else {
            this.element.classList.remove(className(undefined, 'expanded'));
        }
        var lineElem = this.lineElem_;
        var markerElem = this.markerElem_;
        if (!lineElem || !markerElem) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var _a = this.value.rawValue.getComponents(), x = _a[0], y = _a[1];
        var max = this.maxValue_;
        var px = number_util_1.NumberUtil.map(x, -max, +max, 0, 100);
        var py = number_util_1.NumberUtil.map(y, -max, +max, 0, 100);
        var ipy = this.invertsY_ ? 100 - py : py;
        lineElem.setAttributeNS(null, 'x2', px + "%");
        lineElem.setAttributeNS(null, 'y2', ipy + "%");
        markerElem.setAttributeNS(null, 'cx', px + "%");
        markerElem.setAttributeNS(null, 'cy', ipy + "%");
    };
    Point2dPadInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    Point2dPadInputView.prototype.onFoldableChange_ = function () {
        this.update();
    };
    return Point2dPadInputView;
}(view_1.View));
exports.Point2dPadInputView = Point2dPadInputView;


/***/ }),

/***/ "./src/main/js/view/input/point-2d-text.ts":
/*!*************************************************!*\
  !*** ./src/main/js/view/input/point-2d-text.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2dTextInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var COMPONENT_LABELS = ['X', 'Y'];
var className = class_name_1.ClassName('p2dtxt', 'input');
/**
 * @hidden
 */
var Point2dTextInputView = /** @class */ (function (_super) {
    __extends(Point2dTextInputView, _super);
    function Point2dTextInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.formatters_ = [config.xFormatter, config.yFormatter];
        _this.element.classList.add(className());
        var inputElems = COMPONENT_LABELS.map(function () {
            var inputElem = document.createElement('input');
            inputElem.classList.add(className('i'));
            inputElem.type = 'text';
            return inputElem;
        });
        COMPONENT_LABELS.forEach(function (_, index) {
            var elem = document.createElement('div');
            elem.classList.add(className('w'));
            elem.appendChild(inputElems[index]);
            _this.element.appendChild(elem);
        });
        _this.inputElems_ = [inputElems[0], inputElems[1]];
        config.value.emitter.on('change', _this.onValueChange_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            if (_this.inputElems_) {
                _this.inputElems_.forEach(function (elem) {
                    DisposingUtil.disposeElement(elem);
                });
                _this.inputElems_ = null;
            }
        });
        return _this;
    }
    Object.defineProperty(Point2dTextInputView.prototype, "inputElements", {
        get: function () {
            if (!this.inputElems_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.inputElems_;
        },
        enumerable: false,
        configurable: true
    });
    Point2dTextInputView.prototype.update = function () {
        var _this = this;
        var inputElems = this.inputElems_;
        if (!inputElems) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var xyComps = this.value.rawValue.getComponents();
        xyComps.forEach(function (comp, index) {
            var inputElem = inputElems[index];
            inputElem.value = _this.formatters_[index].format(comp);
        });
    };
    Point2dTextInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return Point2dTextInputView;
}(view_1.View));
exports.Point2dTextInputView = Point2dTextInputView;


/***/ }),

/***/ "./src/main/js/view/input/slider-text.ts":
/*!***********************************************!*\
  !*** ./src/main/js/view/input/slider-text.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderTextInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('sldtxt', 'input');
/**
 * @hidden
 */
var SliderTextInputView = /** @class */ (function (_super) {
    __extends(SliderTextInputView, _super);
    function SliderTextInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.element.classList.add(className());
        var sliderElem = document.createElement('div');
        sliderElem.classList.add(className('s'));
        _this.sliderInputView_ = config.sliderInputView;
        sliderElem.appendChild(_this.sliderInputView_.element);
        _this.element.appendChild(sliderElem);
        var textElem = document.createElement('div');
        textElem.classList.add(className('t'));
        _this.textInputView_ = config.textInputView;
        textElem.appendChild(_this.textInputView_.element);
        _this.element.appendChild(textElem);
        return _this;
    }
    Object.defineProperty(SliderTextInputView.prototype, "value", {
        get: function () {
            return this.sliderInputView_.value;
        },
        enumerable: false,
        configurable: true
    });
    SliderTextInputView.prototype.update = function () {
        this.sliderInputView_.update();
        this.textInputView_.update();
    };
    return SliderTextInputView;
}(view_1.View));
exports.SliderTextInputView = SliderTextInputView;


/***/ }),

/***/ "./src/main/js/view/input/slider.ts":
/*!******************************************!*\
  !*** ./src/main/js/view/input/slider.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('sld', 'input');
/**
 * @hidden
 */
var SliderInputView = /** @class */ (function (_super) {
    __extends(SliderInputView, _super);
    function SliderInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.minValue_ = config.minValue;
        _this.maxValue_ = config.maxValue;
        _this.element.classList.add(className());
        var outerElem = document.createElement('div');
        outerElem.classList.add(className('o'));
        outerElem.tabIndex = 0;
        _this.element.appendChild(outerElem);
        _this.outerElem_ = outerElem;
        var innerElem = document.createElement('div');
        innerElem.classList.add(className('i'));
        _this.outerElem_.appendChild(innerElem);
        _this.innerElem_ = innerElem;
        config.value.emitter.on('change', _this.onValueChange_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.innerElem_ = DisposingUtil.disposeElement(_this.innerElem_);
            _this.outerElem_ = DisposingUtil.disposeElement(_this.outerElem_);
        });
        return _this;
    }
    Object.defineProperty(SliderInputView.prototype, "outerElement", {
        get: function () {
            if (!this.outerElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.outerElem_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SliderInputView.prototype, "innerElement", {
        get: function () {
            if (!this.innerElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.innerElem_;
        },
        enumerable: false,
        configurable: true
    });
    SliderInputView.prototype.update = function () {
        if (!this.innerElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var p = number_util_1.NumberUtil.constrain(number_util_1.NumberUtil.map(this.value.rawValue, this.minValue_, this.maxValue_, 0, 100), 0, 100);
        this.innerElem_.style.width = p + "%";
    };
    SliderInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return SliderInputView;
}(view_1.View));
exports.SliderInputView = SliderInputView;


/***/ }),

/***/ "./src/main/js/view/input/sv-palette.ts":
/*!**********************************************!*\
  !*** ./src/main/js/view/input/sv-palette.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvPaletteInputView = void 0;
var ColorConverter = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.ts");
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var color_1 = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('svp', 'input');
/**
 * @hidden
 */
var SvPaletteInputView = /** @class */ (function (_super) {
    __extends(SvPaletteInputView, _super);
    function SvPaletteInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.value = config.value;
        _this.value.emitter.on('change', _this.onValueChange_);
        _this.element.classList.add(className());
        _this.element.tabIndex = 0;
        var canvasElem = document.createElement('canvas');
        canvasElem.classList.add(className('c'));
        _this.element.appendChild(canvasElem);
        _this.canvasElem_ = canvasElem;
        var markerElem = document.createElement('div');
        markerElem.classList.add(className('m'));
        _this.element.appendChild(markerElem);
        _this.markerElem_ = markerElem;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.canvasElem_ = DisposingUtil.disposeElement(_this.canvasElem_);
            _this.markerElem_ = DisposingUtil.disposeElement(_this.markerElem_);
        });
        return _this;
    }
    Object.defineProperty(SvPaletteInputView.prototype, "canvasElement", {
        get: function () {
            if (!this.canvasElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.canvasElem_;
        },
        enumerable: false,
        configurable: true
    });
    SvPaletteInputView.prototype.update = function () {
        if (!this.markerElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var ctx = DomUtil.getCanvasContext(this.canvasElement);
        if (!ctx) {
            return;
        }
        var c = this.value.rawValue;
        var hsvComps = c.getComponents('hsv');
        var width = this.canvasElement.width;
        var height = this.canvasElement.height;
        var cellCount = 64;
        var cw = Math.ceil(width / cellCount);
        var ch = Math.ceil(height / cellCount);
        for (var iy = 0; iy < cellCount; iy++) {
            for (var ix = 0; ix < cellCount; ix++) {
                var s = number_util_1.NumberUtil.map(ix, 0, cellCount - 1, 0, 100);
                var v = number_util_1.NumberUtil.map(iy, 0, cellCount - 1, 100, 0);
                ctx.fillStyle = ColorConverter.toFunctionalRgbString(new color_1.Color([hsvComps[0], s, v], 'hsv'));
                var x = Math.floor(number_util_1.NumberUtil.map(ix, 0, cellCount - 1, 0, width - cw));
                var y = Math.floor(number_util_1.NumberUtil.map(iy, 0, cellCount - 1, 0, height - ch));
                ctx.fillRect(x, y, cw, ch);
            }
        }
        var left = number_util_1.NumberUtil.map(hsvComps[1], 0, 100, 0, 100);
        this.markerElem_.style.left = left + "%";
        var top = number_util_1.NumberUtil.map(hsvComps[2], 0, 100, 100, 0);
        this.markerElem_.style.top = top + "%";
    };
    SvPaletteInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return SvPaletteInputView;
}(view_1.View));
exports.SvPaletteInputView = SvPaletteInputView;


/***/ }),

/***/ "./src/main/js/view/input/text.ts":
/*!****************************************!*\
  !*** ./src/main/js/view/input/text.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInputView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('txt', 'input');
/**
 * @hidden
 */
var TextInputView = /** @class */ (function (_super) {
    __extends(TextInputView, _super);
    function TextInputView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueChange_ = _this.onValueChange_.bind(_this);
        _this.formatter_ = config.formatter;
        _this.element.classList.add(className());
        var inputElem = document.createElement('input');
        inputElem.classList.add(className('i'));
        inputElem.type = 'text';
        _this.element.appendChild(inputElem);
        _this.inputElem_ = inputElem;
        config.value.emitter.on('change', _this.onValueChange_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
        });
        return _this;
    }
    Object.defineProperty(TextInputView.prototype, "inputElement", {
        get: function () {
            if (!this.inputElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.inputElem_;
        },
        enumerable: false,
        configurable: true
    });
    TextInputView.prototype.update = function () {
        if (!this.inputElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        this.inputElem_.value = this.formatter_.format(this.value.rawValue);
    };
    TextInputView.prototype.onValueChange_ = function () {
        this.update();
    };
    return TextInputView;
}(view_1.View));
exports.TextInputView = TextInputView;


/***/ }),

/***/ "./src/main/js/view/labeled.ts":
/*!*************************************!*\
  !*** ./src/main/js/view/labeled.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabeledView = void 0;
var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('lbl');
function createLabelNode(document, label) {
    var frag = document.createDocumentFragment();
    var lineNodes = label.split('\n').map(function (line) {
        return document.createTextNode(line);
    });
    lineNodes.forEach(function (lineNode, index) {
        if (index > 0) {
            frag.appendChild(document.createElement('br'));
        }
        frag.appendChild(lineNode);
    });
    return frag;
}
/**
 * @hidden
 */
var LabeledView = /** @class */ (function (_super) {
    __extends(LabeledView, _super);
    function LabeledView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.label = config.label;
        _this.element.classList.add(className());
        var labelElem = document.createElement('div');
        labelElem.classList.add(className('l'));
        labelElem.appendChild(createLabelNode(document, _this.label));
        _this.element.appendChild(labelElem);
        var viewElem = document.createElement('div');
        viewElem.classList.add(className('v'));
        viewElem.appendChild(config.view.element);
        _this.element.appendChild(viewElem);
        return _this;
    }
    return LabeledView;
}(view_1.View));
exports.LabeledView = LabeledView;


/***/ }),

/***/ "./src/main/js/view/monitor/graph.ts":
/*!*******************************************!*\
  !*** ./src/main/js/view/monitor/graph.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphMonitorView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var DomUtil = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.ts");
var number_util_1 = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var SVG_NS = DomUtil.SVG_NS;
var className = class_name_1.ClassName('grp', 'monitor');
/**
 * @hidden
 */
var GraphMonitorView = /** @class */ (function (_super) {
    __extends(GraphMonitorView, _super);
    function GraphMonitorView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onCursorChange_ = _this.onCursorChange_.bind(_this);
        _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
        _this.element.classList.add(className());
        _this.formatter_ = config.formatter;
        _this.minValue_ = config.minValue;
        _this.maxValue_ = config.maxValue;
        _this.cursor_ = config.cursor;
        _this.cursor_.emitter.on('change', _this.onCursorChange_);
        var svgElem = document.createElementNS(SVG_NS, 'svg');
        svgElem.classList.add(className('g'));
        _this.element.appendChild(svgElem);
        _this.svgElem_ = svgElem;
        var lineElem = document.createElementNS(SVG_NS, 'polyline');
        _this.svgElem_.appendChild(lineElem);
        _this.lineElem_ = lineElem;
        var tooltipElem = document.createElement('div');
        tooltipElem.classList.add(className('t'));
        _this.element.appendChild(tooltipElem);
        _this.tooltipElem_ = tooltipElem;
        config.value.emitter.on('update', _this.onValueUpdate_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.lineElem_ = DisposingUtil.disposeElement(_this.lineElem_);
            _this.svgElem_ = DisposingUtil.disposeElement(_this.svgElem_);
            _this.tooltipElem_ = DisposingUtil.disposeElement(_this.tooltipElem_);
        });
        return _this;
    }
    Object.defineProperty(GraphMonitorView.prototype, "graphElement", {
        get: function () {
            if (!this.svgElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.svgElem_;
        },
        enumerable: false,
        configurable: true
    });
    GraphMonitorView.prototype.update = function () {
        var tooltipElem = this.tooltipElem_;
        if (!this.lineElem_ || !this.svgElem_ || !tooltipElem) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var bounds = this.svgElem_.getBoundingClientRect();
        // Graph
        var maxIndex = this.value.totalCount - 1;
        var min = this.minValue_;
        var max = this.maxValue_;
        this.lineElem_.setAttributeNS(null, 'points', this.value.rawValues
            .map(function (v, index) {
            var x = number_util_1.NumberUtil.map(index, 0, maxIndex, 0, bounds.width);
            var y = number_util_1.NumberUtil.map(v, min, max, bounds.height, 0);
            return [x, y].join(',');
        })
            .join(' '));
        // Cursor
        var value = this.value.rawValues[this.cursor_.index];
        if (value === undefined) {
            tooltipElem.classList.remove(className('t', 'valid'));
            return;
        }
        tooltipElem.classList.add(className('t', 'valid'));
        var tx = number_util_1.NumberUtil.map(this.cursor_.index, 0, maxIndex, 0, bounds.width);
        var ty = number_util_1.NumberUtil.map(value, min, max, bounds.height, 0);
        tooltipElem.style.left = tx + "px";
        tooltipElem.style.top = ty + "px";
        tooltipElem.textContent = "" + this.formatter_.format(value);
    };
    GraphMonitorView.prototype.onValueUpdate_ = function () {
        this.update();
    };
    GraphMonitorView.prototype.onCursorChange_ = function () {
        this.update();
    };
    return GraphMonitorView;
}(view_1.View));
exports.GraphMonitorView = GraphMonitorView;


/***/ }),

/***/ "./src/main/js/view/monitor/multi-log.ts":
/*!***********************************************!*\
  !*** ./src/main/js/view/monitor/multi-log.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLogMonitorView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('mll', 'monitor');
/**
 * @hidden
 */
var MultiLogMonitorView = /** @class */ (function (_super) {
    __extends(MultiLogMonitorView, _super);
    function MultiLogMonitorView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
        _this.formatter_ = config.formatter;
        _this.element.classList.add(className());
        var textareaElem = document.createElement('textarea');
        textareaElem.classList.add(className('i'));
        textareaElem.readOnly = true;
        _this.element.appendChild(textareaElem);
        _this.textareaElem_ = textareaElem;
        config.value.emitter.on('update', _this.onValueUpdate_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.textareaElem_ = DisposingUtil.disposeElement(_this.textareaElem_);
        });
        return _this;
    }
    MultiLogMonitorView.prototype.update = function () {
        var _this = this;
        var elem = this.textareaElem_;
        if (!elem) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
        elem.textContent = this.value.rawValues
            .map(function (value) {
            return _this.formatter_.format(value);
        })
            .join('\n');
        if (shouldScroll) {
            elem.scrollTop = elem.scrollHeight;
        }
    };
    MultiLogMonitorView.prototype.onValueUpdate_ = function () {
        this.update();
    };
    return MultiLogMonitorView;
}(view_1.View));
exports.MultiLogMonitorView = MultiLogMonitorView;


/***/ }),

/***/ "./src/main/js/view/monitor/single-log.ts":
/*!************************************************!*\
  !*** ./src/main/js/view/monitor/single-log.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleLogMonitorView = void 0;
var class_name_1 = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ../view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('sgl', 'monitor');
/**
 * @hidden
 */
var SingleLogMonitorView = /** @class */ (function (_super) {
    __extends(SingleLogMonitorView, _super);
    function SingleLogMonitorView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onValueUpdate_ = _this.onValueUpdate_.bind(_this);
        _this.formatter_ = config.formatter;
        _this.element.classList.add(className());
        var inputElem = document.createElement('input');
        inputElem.classList.add(className('i'));
        inputElem.readOnly = true;
        inputElem.type = 'text';
        _this.element.appendChild(inputElem);
        _this.inputElem_ = inputElem;
        config.value.emitter.on('update', _this.onValueUpdate_);
        _this.value = config.value;
        _this.update();
        config.model.emitter.on('dispose', function () {
            _this.inputElem_ = DisposingUtil.disposeElement(_this.inputElem_);
        });
        return _this;
    }
    SingleLogMonitorView.prototype.update = function () {
        if (!this.inputElem_) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var values = this.value.rawValues;
        this.inputElem_.value =
            values.length > 0
                ? this.formatter_.format(values[values.length - 1])
                : '';
    };
    SingleLogMonitorView.prototype.onValueUpdate_ = function () {
        this.update();
    };
    return SingleLogMonitorView;
}(view_1.View));
exports.SingleLogMonitorView = SingleLogMonitorView;


/***/ }),

/***/ "./src/main/js/view/root.ts":
/*!**********************************!*\
  !*** ./src/main/js/view/root.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootView = void 0;
var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('rot');
/**
 * @hidden
 */
var RootView = /** @class */ (function (_super) {
    __extends(RootView, _super);
    function RootView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.onFolderChange_ = _this.onFolderChange_.bind(_this);
        _this.folder_ = config.folder;
        if (_this.folder_) {
            _this.folder_.emitter.on('change', _this.onFolderChange_);
        }
        _this.element.classList.add(className());
        var folder = _this.folder_;
        if (folder) {
            var titleElem = document.createElement('button');
            titleElem.classList.add(className('t'));
            titleElem.textContent = folder.title;
            _this.element.appendChild(titleElem);
            var markElem = document.createElement('div');
            markElem.classList.add(className('m'));
            titleElem.appendChild(markElem);
            _this.titleElem_ = titleElem;
        }
        var containerElem = document.createElement('div');
        containerElem.classList.add(className('c'));
        _this.element.appendChild(containerElem);
        _this.containerElem_ = containerElem;
        _this.applyModel_();
        config.model.emitter.on('dispose', function () {
            _this.containerElem_ = DisposingUtil.disposeElement(_this.containerElem_);
            _this.folder_ = null;
            _this.titleElem_ = DisposingUtil.disposeElement(_this.titleElem_);
        });
        return _this;
    }
    Object.defineProperty(RootView.prototype, "titleElement", {
        get: function () {
            return this.titleElem_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RootView.prototype, "containerElement", {
        get: function () {
            if (!this.containerElem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.containerElem_;
        },
        enumerable: false,
        configurable: true
    });
    RootView.prototype.applyModel_ = function () {
        var containerElem = this.containerElem_;
        if (!containerElem) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        var expanded = this.folder_ ? this.folder_.styleExpanded : true;
        var expandedClass = className(undefined, 'expanded');
        if (expanded) {
            this.element.classList.add(expandedClass);
        }
        else {
            this.element.classList.remove(expandedClass);
        }
        containerElem.style.height = this.folder_
            ? this.folder_.styleHeight
            : 'auto';
    };
    RootView.prototype.onFolderChange_ = function () {
        this.applyModel_();
    };
    return RootView;
}(view_1.View));
exports.RootView = RootView;


/***/ }),

/***/ "./src/main/js/view/separator.ts":
/*!***************************************!*\
  !*** ./src/main/js/view/separator.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparatorView = void 0;
var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
var view_1 = __webpack_require__(/*! ./view */ "./src/main/js/view/view.ts");
var className = class_name_1.ClassName('spt');
/**
 * @hidden
 */
var SeparatorView = /** @class */ (function (_super) {
    __extends(SeparatorView, _super);
    function SeparatorView(document, config) {
        var _this = _super.call(this, document, config) || this;
        _this.element.classList.add(className());
        var hrElem = document.createElement('hr');
        hrElem.classList.add(className('r'));
        _this.element.appendChild(hrElem);
        return _this;
    }
    return SeparatorView;
}(view_1.View));
exports.SeparatorView = SeparatorView;


/***/ }),

/***/ "./src/main/js/view/view.ts":
/*!**********************************!*\
  !*** ./src/main/js/view/view.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var class_name_1 = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.ts");
var DisposingUtil = __webpack_require__(/*! ../misc/disposing-util */ "./src/main/js/misc/disposing-util.ts");
var pane_error_1 = __webpack_require__(/*! ../misc/pane-error */ "./src/main/js/misc/pane-error.ts");
var ViewPositions = __webpack_require__(/*! ../model/view-positions */ "./src/main/js/model/view-positions.ts");
var className = class_name_1.ClassName('');
/**
 * @hidden
 */
var View = /** @class */ (function () {
    function View(document, config) {
        this.onChange_ = this.onChange_.bind(this);
        this.onDispose_ = this.onDispose_.bind(this);
        this.model_ = config.model;
        this.model_.emitter.on('change', this.onChange_);
        this.model_.emitter.on('dispose', this.onDispose_);
        this.doc_ = document;
        this.elem_ = this.doc_.createElement('div');
        this.elem_.classList.add(className());
    }
    Object.defineProperty(View.prototype, "document", {
        get: function () {
            if (!this.doc_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.doc_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "element", {
        get: function () {
            if (!this.elem_) {
                throw pane_error_1.PaneError.alreadyDisposed();
            }
            return this.elem_;
        },
        enumerable: false,
        configurable: true
    });
    View.prototype.onDispose_ = function () {
        this.doc_ = null;
        this.elem_ = DisposingUtil.disposeElement(this.elem_);
    };
    View.prototype.onChange_ = function (ev) {
        var elem = this.elem_;
        if (!elem) {
            throw pane_error_1.PaneError.alreadyDisposed();
        }
        if (ev.propertyName === 'hidden') {
            var hiddenClass = className(undefined, 'hidden');
            if (this.model_.hidden) {
                elem.classList.add(hiddenClass);
            }
            else {
                elem.classList.remove(hiddenClass);
            }
        }
        else if (ev.propertyName === 'positions') {
            ViewPositions.getAll().forEach(function (pos) {
                elem.classList.remove(className(undefined, pos));
            });
            this.model_.positions.forEach(function (pos) {
                elem.classList.add(className(undefined, pos));
            });
        }
    };
    return View;
}());
exports.View = View;


/***/ }),

/***/ "./src/main/sass/bundle.scss":
/*!***********************************!*\
  !*** ./src/main/sass/bundle.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tp-fldv_t,.tp-rotv_t{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--folder-background-color);color:var(--folder-foreground-color);cursor:pointer;display:block;height:24px;line-height:24px;overflow:hidden;padding-left:30px;position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-fldv_t:hover,.tp-rotv_t:hover{background-color:var(--folder-background-color-hover)}.tp-fldv_t:focus,.tp-rotv_t:focus{background-color:var(--folder-background-color-focus)}.tp-fldv_t:active,.tp-rotv_t:active{background-color:var(--folder-background-color-active)}.tp-fldv_m,.tp-rotv_m{background:linear-gradient(to left, var(--folder-foreground-color), var(--folder-foreground-color) 2px, transparent 2px, transparent 4px, var(--folder-foreground-color) 4px);border-radius:2px;bottom:0;content:'';display:block;height:6px;left:12px;margin:auto;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-fldv.tp-fldv-expanded>.tp-fldv_t>.tp-fldv_m,.tp-rotv.tp-rotv-expanded .tp-rotv_m{transform:none}.tp-fldv_c,.tp-rotv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-fldv_c>.tp-fldv.tp-v-first,.tp-rotv_c>.tp-fldv.tp-v-first{margin-top:-4px}.tp-fldv_c>.tp-fldv.tp-v-last,.tp-rotv_c>.tp-fldv.tp-v-last{margin-bottom:-4px}.tp-fldv_c>*:not(.tp-v-first),.tp-rotv_c>*:not(.tp-v-first){margin-top:4px}.tp-fldv_c>.tp-fldv:not(.tp-v-hidden)+.tp-fldv,.tp-rotv_c>.tp-fldv:not(.tp-v-hidden)+.tp-fldv{margin-top:0}.tp-fldv_c>.tp-sptv:not(.tp-v-hidden)+.tp-sptv,.tp-rotv_c>.tp-sptv:not(.tp-v-hidden)+.tp-sptv{margin-top:0}.tp-fldv.tp-fldv-expanded>.tp-fldv_c,.tp-rotv.tp-rotv-expanded .tp-rotv_c{opacity:1;padding-bottom:4px;padding-top:4px;transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-btnv{padding:0 4px}.tp-btnv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;font-weight:bold;height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.tp-btnv_b:hover{background-color:var(--button-background-color-hover)}.tp-btnv_b:focus{background-color:var(--button-background-color-focus)}.tp-btnv_b:active{background-color:var(--button-background-color-active)}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-expanded .tp-fldv_t{transition:border-radius 0s}.tp-fldv_c{border-left:var(--folder-background-color) solid 4px}.tp-fldv_t:hover+.tp-fldv_c{border-left-color:var(--folder-background-color-hover)}.tp-fldv_t:focus+.tp-fldv_c{border-left-color:var(--folder-background-color-focus)}.tp-fldv_t:active+.tp-fldv_c{border-left-color:var(--folder-background-color-active)}.tp-fldv_c>.tp-fldv{margin-left:4px}.tp-fldv_c>.tp-fldv>.tp-fldv_t{border-top-left-radius:2px;border-bottom-left-radius:2px}.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_t{border-bottom-left-radius:0}.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:2px}.tp-ckbiv_l{display:block;position:relative}.tp-ckbiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background:red;left:0;opacity:0;position:absolute;top:0}.tp-ckbiv_m{background-color:var(--input-background-color);border-radius:2px;cursor:pointer;display:block;height:20px;position:relative;width:20px}.tp-ckbiv_m::before{background-color:var(--input-foreground-color);border-radius:2px;bottom:4px;content:'';display:block;left:4px;opacity:0;position:absolute;right:4px;top:4px}.tp-ckbiv_i:hover+.tp-ckbiv_m{background-color:var(--input-background-color-hover)}.tp-ckbiv_i:focus+.tp-ckbiv_m{background-color:var(--input-background-color-focus)}.tp-ckbiv_i:active+.tp-ckbiv_m{background-color:var(--input-background-color-active)}.tp-ckbiv_i:checked+.tp-ckbiv_m::before{opacity:1}.tp-cctxtsiv{display:flex;width:100%}.tp-cctxtsiv_m{margin-right:4px;position:relative}.tp-cctxtsiv_ms{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;border-radius:2px;color:var(--label-foreground-color);cursor:pointer;height:20px;line-height:20px;padding:0 18px 0 4px}.tp-cctxtsiv_ms:hover{background-color:var(--input-background-color-hover)}.tp-cctxtsiv_ms:focus{background-color:var(--input-background-color-focus)}.tp-cctxtsiv_ms:active{background-color:var(--input-background-color-active)}.tp-cctxtsiv_mm{border-color:var(--label-foreground-color) transparent transparent;border-style:solid;border-width:3px;box-sizing:border-box;height:6px;pointer-events:none;width:6px;bottom:0;margin:auto;position:absolute;right:6px;top:3px}.tp-cctxtsiv_w{display:flex;flex:1}.tp-cctxtsiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;border-radius:0;flex:1;padding:0 4px}.tp-cctxtsiv_i:hover{background-color:var(--input-background-color-hover)}.tp-cctxtsiv_i:focus{background-color:var(--input-background-color-focus)}.tp-cctxtsiv_i:active{background-color:var(--input-background-color-active)}.tp-cctxtsiv_i:first-child{border-bottom-left-radius:2px;border-top-left-radius:2px}.tp-cctxtsiv_i:last-child{border-bottom-right-radius:2px;border-top-right-radius:2px}.tp-cctxtsiv_i+.tp-cctxtsiv_i{margin-left:1px}.tp-clpiv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);display:none;padding:4px;position:relative;visibility:hidden;z-index:1000}.tp-clpiv.tp-clpiv-expanded{display:block;visibility:visible}.tp-clpiv_h,.tp-clpiv_ap{margin-left:6px;margin-right:6px}.tp-clpiv_h{margin-top:4px}.tp-clpiv_rgb{display:flex;margin-top:4px;width:100%}.tp-clpiv_a{display:flex;margin-top:4px;padding-top:8px;position:relative}.tp-clpiv_a:before{background-color:var(--separator-color);content:'';height:4px;left:-4px;position:absolute;right:-4px;top:0}.tp-clpiv_ap{flex:3}.tp-clpiv_at{flex:1}.tp-svpiv{border-radius:2px;outline:none;overflow:hidden;position:relative}.tp-svpiv_c{cursor:crosshair;display:block;height:80px;width:100%}.tp-svpiv_m{border-radius:100%;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;-webkit-filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpiv:focus .tp-svpiv_m{border-color:#fff}.tp-hpliv{cursor:pointer;height:20px;outline:none;position:relative}.tp-hpliv_c{border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hpliv_m{border-radius:2px;border:rgba(255,255,255,0.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,0.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hpliv:focus .tp-hpliv_m{border-color:#fff}.tp-apliv{cursor:pointer;height:20px;outline:none;position:relative}.tp-apliv_c{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;background-color:#fff;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-apliv_m{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,0.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-apliv_p{border-radius:2px;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-apliv:focus .tp-apliv_p{border-color:#fff}.tp-lstiv{display:block;padding:0;position:relative}.tp-lstiv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;height:20px;line-height:20px;padding:0 4px;width:100%}.tp-lstiv_s:hover{background-color:var(--button-background-color-hover)}.tp-lstiv_s:focus{background-color:var(--button-background-color-focus)}.tp-lstiv_s:active{background-color:var(--button-background-color-active)}.tp-lstiv_m{border-color:var(--button-foreground-color) transparent transparent;border-style:solid;border-width:3px;box-sizing:border-box;height:6px;pointer-events:none;width:6px;bottom:0;margin:auto;position:absolute;right:6px;top:3px}.tp-p2dpadiv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);display:none;padding:4px 4px 4px 28px;position:relative;visibility:hidden;z-index:1000}.tp-p2dpadiv.tp-p2dpadiv-expanded{display:block;visibility:visible}.tp-p2dpadiv_p{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpadiv_p:hover{background-color:var(--input-background-color-hover)}.tp-p2dpadiv_p:focus{background-color:var(--input-background-color-focus)}.tp-p2dpadiv_p:active{background-color:var(--input-background-color-active)}.tp-p2dpadiv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpadiv_ax{stroke:var(--input-guide-color)}.tp-p2dpadiv_l{stroke:var(--input-foreground-color);stroke-linecap:round;stroke-dasharray:1px 3px}.tp-p2dpadiv_m{fill:var(--input-foreground-color)}.tp-p2dpadtxtiv{display:flex;position:relative}.tp-p2dpadtxtiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;font-weight:bold;height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:20px;position:relative;width:20px}.tp-p2dpadtxtiv_b:hover{background-color:var(--button-background-color-hover)}.tp-p2dpadtxtiv_b:focus{background-color:var(--button-background-color-focus)}.tp-p2dpadtxtiv_b:active{background-color:var(--button-background-color-active)}.tp-p2dpadtxtiv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dpadtxtiv_p{left:-4px;position:absolute;right:-4px;top:20px}.tp-p2dpadtxtiv_t{margin-left:4px}.tp-p2dtxtiv{display:flex}.tp-p2dtxtiv_w{align-items:center;display:flex}.tp-p2dtxtiv_w:nth-child(1){margin-right:1px}.tp-p2dtxtiv_w:nth-child(2){margin-left:1px}.tp-p2dtxtiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;padding:0 4px;width:100%}.tp-p2dtxtiv_i:hover{background-color:var(--input-background-color-hover)}.tp-p2dtxtiv_i:focus{background-color:var(--input-background-color-focus)}.tp-p2dtxtiv_i:active{background-color:var(--input-background-color-active)}.tp-p2dtxtiv_w:nth-child(1) .tp-p2dtxtiv_i{border-top-right-radius:0;border-bottom-right-radius:0}.tp-p2dtxtiv_w:nth-child(2) .tp-p2dtxtiv_i{border-top-left-radius:0;border-bottom-left-radius:0}.tp-sldiv{display:block;padding:0}.tp-sldiv_o{box-sizing:border-box;cursor:pointer;height:20px;margin:0 6px;outline:none;position:relative}.tp-sldiv_o::before{background-color:var(--input-background-color);border-radius:1px;bottom:0;content:'';display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldiv_i{height:100%;left:0;position:absolute;top:0}.tp-sldiv_i::before{background-color:var(--button-background-color);border-radius:2px;bottom:0;content:'';display:block;height:12px;margin:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldiv_o:hover .tp-sldiv_i::before{background-color:var(--button-background-color-hover)}.tp-sldiv_o:focus .tp-sldiv_i::before{background-color:var(--button-background-color-focus)}.tp-sldiv_o:active .tp-sldiv_i::before{background-color:var(--button-background-color-active)}.tp-txtiv{display:block;padding:0}.tp-txtiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%;padding:0 4px}.tp-txtiv_i:hover{background-color:var(--input-background-color-hover)}.tp-txtiv_i:focus{background-color:var(--input-background-color-focus)}.tp-txtiv_i:active{background-color:var(--input-background-color-active)}.tp-cswiv{background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;background-color:#fff;border-radius:2px}.tp-cswiv_sw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:20px;line-height:20px;min-width:0;width:100%}.tp-cswiv_sw:hover{background-color:var(--input-background-color-hover)}.tp-cswiv_sw:focus{background-color:var(--input-background-color-focus)}.tp-cswiv_sw:active{background-color:var(--input-background-color-active)}.tp-cswiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:20px;left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:20px}.tp-cswiv_b:focus::after{border:rgba(255,255,255,0.75) solid 2px;border-radius:2px;bottom:0;content:'';display:block;left:0;position:absolute;right:0;top:0}.tp-cswiv_p{left:-4px;position:absolute;right:-4px;top:20px}.tp-cswtxtiv{display:flex;position:relative}.tp-cswtxtiv_s{flex-grow:0;flex-shrink:0;width:20px}.tp-cswtxtiv_t{flex:1;margin-left:4px}.tp-sldtxtiv{display:flex}.tp-sldtxtiv_s{flex:2}.tp-sldtxtiv_t{flex:1;margin-left:4px}.tp-lblv{align-items:center;display:flex;padding-left:4px;padding-right:4px}.tp-lblv_l{color:var(--label-foreground-color);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;padding-left:4px;padding-right:16px}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-grpmv{display:block;padding:0;position:relative}.tp-grpmv_g{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;display:block;height:60px}.tp-grpmv_g polyline{fill:none;stroke:var(--monitor-foreground-color);stroke-linejoin:round}.tp-grpmv_t{color:var(--monitor-foreground-color);font-size:0.9em;left:0;pointer-events:none;position:absolute;text-indent:4px;top:0;visibility:hidden}.tp-grpmv_t.tp-grpmv_t-valid{visibility:visible}.tp-grpmv_t::before{background-color:var(--monitor-foreground-color);border-radius:100%;content:'';display:block;height:4px;left:-2px;position:absolute;top:-2px;width:4px}.tp-sglmv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;padding:0 4px}.tp-mllmv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%;display:block;height:60px;line-height:20px;padding:0 4px;resize:none;white-space:pre}.tp-cswmv_sw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:20px;width:100%}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono,Source Code Pro,Menlo,Courier,monospace);--base-background-color: var(--tp-base-background-color, #2f3137);--base-shadow-color: var(--tp-base-shadow-color, rgba(0,0,0,0.2));--button-background-color: var(--tp-button-background-color, #adafb8);--button-background-color-active: var(--tp-button-background-color-active, #d6d7db);--button-background-color-focus: var(--tp-button-background-color-focus, #c8cad0);--button-background-color-hover: var(--tp-button-background-color-hover, #bbbcc4);--button-foreground-color: var(--tp-button-foreground-color, #2f3137);--folder-background-color: var(--tp-folder-background-color, rgba(200,202,208,0.1));--folder-background-color-active: var(--tp-folder-background-color-active, rgba(200,202,208,0.25));--folder-background-color-focus: var(--tp-folder-background-color-focus, rgba(200,202,208,0.2));--folder-background-color-hover: var(--tp-folder-background-color-hover, rgba(200,202,208,0.15));--folder-foreground-color: var(--tp-folder-foreground-color, #c8cad0);--input-background-color: var(--tp-input-background-color, rgba(200,202,208,0.15));--input-background-color-active: var(--tp-input-background-color-active, rgba(200,202,208,0.35));--input-background-color-focus: var(--tp-input-background-color-focus, rgba(200,202,208,0.25));--input-background-color-hover: var(--tp-input-background-color-hover, rgba(200,202,208,0.15));--input-foreground-color: var(--tp-input-foreground-color, #c8cad0);--input-guide-color: var(--tp-input-guide-color, rgba(47,49,55,0.5));--label-foreground-color: var(--tp-label-foreground-color, rgba(200,202,208,0.8));--monitor-background-color: var(--tp-monitor-background-color, rgba(24,24,27,0.5));--monitor-foreground-color: var(--tp-monitor-foreground-color, rgba(200,202,208,0.7));--separator-color: var(--tp-separator-color, rgba(24,24,27,0.3));background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);font-family:var(--font-family);font-size:11px;font-weight:500;text-align:left}.tp-rotv_t{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top-left-radius:6px;border-top-right-radius:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_t{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv_m{transition:none}.tp-rotv_c>.tp-fldv:last-child>.tp-fldv_c{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.tp-rotv_c>.tp-fldv:last-child:not(.tp-fldv-expanded)>.tp-fldv_t{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.tp-rotv_c>.tp-fldv:first-child>.tp-fldv_t{border-top-left-radius:6px;border-top-right-radius:6px}.tp-sptv_r{background-color:var(--separator-color);border-width:0;display:block;height:4px;margin:0;width:100%}.tp-v.tp-v-hidden{display:none}\n", ""]);

// exports


/***/ })

/******/ })["default"];
});