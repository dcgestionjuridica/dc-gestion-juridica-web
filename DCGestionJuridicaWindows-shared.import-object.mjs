
import * as Li9za2lrby5tanM from './skiko.mjs';
import * as QGpzLWpvZGEvY29yZQ from './js-joda.esm.js';
import * as d2FzbTpqcy1zdHJpbmc from './DCGestionJuridicaWindows-shared.js-builtins.mjs';

const wasmJsTag = WebAssembly.JSTag;
const wasmTag = wasmJsTag ?? new WebAssembly.Tag({ parameters: ['externref'] });

// Placed here to give access to it from externals (js_code)
let wasmExports;

if (typeof process !== 'undefined' && process.release.name === 'node') {
    function doNotUseRequire() {
        throw new Error("Do not use top-level require. Prefer to use JS import or define your own require instead. Read more: https://kotl.in/r9txlt")
    }

    var require = new Proxy((function() {}), {
        apply(target, thisArg, argumentsList) {
            if (globalThis.require != null) {
                return globalThis.require.apply(thisArg, argumentsList);
            } else {
                doNotUseRequire();
            }
        },
        get(target, prop, receiver) {
            if (globalThis.require != null) {
                return Reflect.get(globalThis.require, prop);
            } else {
                doNotUseRequire();
            }
        },
    });
}

export function setWasmExports(exports) {
    wasmExports = exports;
}

const _ref_Li9za2lrby5tanM_ = Li9za2lrby5tanM;
const _ref_Li9za2lrby5tanM_c2tpa29BcGk = Li9za2lrby5tanM.skikoApi;
const _ref_QGpzLWpvZGEvY29yZQ_ = QGpzLWpvZGEvY29yZQ;

const cachedJsObjects = new WeakMap();
function getCachedJsObject(ref, ifNotCached) {
    if (typeof ref !== 'object' && typeof ref !== 'function') return ifNotCached;
    const cached = cachedJsObjects.get(ref);
    if (cached !== void 0) return cached;
    cachedJsObjects.set(ref, ifNotCached);
    return ifNotCached;
}

const js_code = {
    'kotlin.createJsError' : (message, cause) => new Error(message, { cause }),
    'kotlin.wasm.internal.jsThrow' : wasmTag === wasmJsTag ? (e) => { throw e; } : () => {},
    'kotlin.wasm.internal.getJsEmptyString' : () => '',
    'kotlin.wasm.internal.externrefToDouble' : (ref) => Number(ref),
    'kotlin.wasm.internal.externrefToInt' : (ref) => Number(ref),
    'kotlin.wasm.internal.intToExternref' : (x) => x,
    'kotlin.wasm.internal.externrefToString' : (ref) => String(ref),
    'kotlin.wasm.internal.externrefEquals' : (lhs, rhs) => lhs === rhs,
    'kotlin.wasm.internal.externrefHashCode' : 
    (() => {
    const dataView = new DataView(new ArrayBuffer(8));
    function numberHashCode(obj) {
        if ((obj | 0) === obj) {
            return obj | 0;
        } else {
            dataView.setFloat64(0, obj, true);
            return (dataView.getInt32(0, true) * 31 | 0) + dataView.getInt32(4, true) | 0;
        }
    }

    const hashCodes = new WeakMap();
    function getObjectHashCode(obj) {
        const res = hashCodes.get(obj);
        if (res === undefined) {
            const POW_2_32 = 4294967296;
            const hash = (Math.random() * POW_2_32) | 0;
            hashCodes.set(obj, hash);
            return hash;
        }
        return res;
    }

    function getStringHashCode(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            var code  = str.charCodeAt(i);
            hash  = (hash * 31 + code) | 0;
        }
        return hash;
    }

    return (obj) => {
        if (obj == null) {
            return 0;
        }
        switch (typeof obj) {
            case "object":
            case "function":
                return getObjectHashCode(obj);
            case "number":
                return numberHashCode(obj);
            case "boolean":
                return obj ? 1231 : 1237;
            default:
                return getStringHashCode(String(obj)); 
        }
    }
    })(),
    'kotlin.wasm.internal.isNullish' : (ref) => ref == null,
    'kotlin.wasm.internal.getJsTrue' : () => true,
    'kotlin.wasm.internal.getJsFalse' : () => false,
    'kotlin.wasm.internal.kotlinUIntToJsNumberUnsafe' : (x) => x >>> 0,
    'kotlin.wasm.internal.kotlinULongToJsBigIntUnsafe' : (x) => x & 0xFFFFFFFFFFFFFFFFn,
    'kotlin.wasm.internal.newJsArray' : () => [],
    'kotlin.wasm.internal.jsArrayPush' : (array, element) => { array.push(element); },
    'kotlin.wasm.internal.getCachedJsObject_$external_fun' : (p0, p1) => getCachedJsObject(p0, p1),
    'kotlin.wasm.internal.utoa32_$external_fun' : (p0) => String(p0),
    'kotlin.wasm.internal.utoa64_$external_fun' : (p0) => String(p0),
    'kotlin.wasm.internal.itoa32_$external_fun' : (p0) => String(p0),
    'kotlin.wasm.internal.itoa64_$external_fun' : (p0) => String(p0),
    'kotlin.js.jsCatch' : (f) => { 
        let result = null;
        try { 
            f();
        } catch (e) {
           result = e;
        }
        return result;
         },
    'kotlin.js.__convertKotlinClosureToJsClosure_0' : (f, trampoline) => getCachedJsObject(f, () => trampoline(f, )),
    'kotlin.js.jsThrow' : (e) => { throw e; },
    'kotlin.io.printlnImpl' : (message) => console.log(message),
    'kotlin.js.jsArrayGet' : (array, index) => array[index],
    'kotlin.js.jsArraySet' : (array, index, value) => { array[index] = value },
    'kotlin.js.JsArray_$external_fun' : () => new Array(),
    'kotlin.js.length_$external_prop_getter' : (_this) => _this.length,
    'kotlin.js.stackPlaceHolder_js_code' : () => (''),
    'kotlin.js.message_$external_prop_getter' : (_this) => _this.message,
    'kotlin.js.name_$external_prop_setter' : (_this, v) => _this.name = v,
    'kotlin.js.stack_$external_prop_getter' : (_this) => _this.stack,
    'kotlin.js.kotlinException_$external_prop_getter' : (_this) => _this.kotlinException,
    'kotlin.js.kotlinException_$external_prop_setter' : (_this, v) => _this.kotlinException = v,
    'kotlin.js.JsError_$external_class_instanceof' : (x) => x instanceof Error,
    'kotlin.js.JsString_$external_class_instanceof' : (x) => typeof x === 'string',
    'kotlin.js.JsString_$external_class_get' : () => JsString,
    'kotlin.js.then_$external_fun' : (_this, p0) => _this.then(p0),
    'kotlin.js.__convertKotlinClosureToJsClosure_1' : (f, trampoline) => getCachedJsObject(f, (p0) => trampoline(f, p0)),
    'kotlin.js.then_$external_fun_1' : (_this, p0, p1) => _this.then(p0, p1),
    'kotlin.js.catch_$external_fun' : (_this, p0) => _this.catch(p0),
    'kotlin.random.initialSeed' : () => ((Math.random() * Math.pow(2, 32)) | 0),
    'kotlin.wasm.internal.getJsClassName' : (jsKlass) => jsKlass.name,
    'kotlin.wasm.internal.instanceOf' : (ref, jsKlass) => ref instanceof jsKlass,
    'kotlin.wasm.internal.getConstructor' : (obj) => obj.constructor,
    'kotlin.time.Date_$external_fun' : () => new Date(),
    'kotlin.time.getTime_$external_fun' : (_this, ) => _this.getTime(),
    'kotlin.time.tryGetPerformance' : () => typeof globalThis !== 'undefined' && typeof globalThis.performance !== 'undefined' ? globalThis.performance : null,
    'kotlin.time.getPerformanceNow' : (performance) => performance.now(),
    'kotlin.time.dateNow' : () => Date.now(),
    'kotlinx.coroutines.tryGetProcess' : () => (typeof(process) !== 'undefined' && typeof(process.nextTick) === 'function') ? process : null,
    'kotlinx.coroutines.tryGetWindow' : () => (typeof(window) !== 'undefined' && window != null && typeof(window.addEventListener) === 'function') ? window : null,
    'kotlinx.coroutines.nextTick_$external_fun' : (_this, p0) => _this.nextTick(p0),
    'kotlinx.coroutines.createScheduleMessagePoster' : (process) => () => Promise.resolve(0).then(process),
    'kotlinx.coroutines.__callJsClosure_(()->Unit)' : (f, ) => f(),
    'kotlinx.coroutines.createRescheduleMessagePoster' : (window) => () => window.postMessage('dispatchCoroutine', '*'),
    'kotlinx.coroutines.subscribeToWindowMessages' : (window, process) => {
        const handler = (event) => {
            if (event.source == window && event.data == 'dispatchCoroutine') {
                event.stopPropagation();
                process();
            }
        }
        window.addEventListener('message', handler, true);
    },
    'kotlinx.coroutines.setTimeout' : (window, handler, timeout) => window.setTimeout(handler, timeout),
    'kotlinx.coroutines.clearTimeout' : (handle) => { if (typeof clearTimeout !== 'undefined') clearTimeout(handle); },
    'kotlinx.coroutines.clearTimeout_$external_fun' : (_this, p0) => _this.clearTimeout(p0),
    'kotlinx.coroutines.setTimeout_$external_fun' : (p0, p1) => setTimeout(p0, p1),
    'kotlinx.coroutines.internal.throwAsyncJsError' : (message, className, stack) => { 
            var error = new Error();
            error.message = message;
            error.name = className;
            error.stack = stack;
            if (typeof globalThis.reportError === 'function') {
                // Up-to-date browsers and some non-browser JS runtimes (Deno, Bun)
                globalThis.reportError(error);
            } else {
                // Fallback for old browsers (pre-2022), Node.js
                setTimeout(function () { throw error }, 0);
            }
         },
    'org.khronos.webgl.getMethodImplForInt8Array' : (obj, index) => obj[index],
    'org.khronos.webgl.byteLength_$external_prop_getter' : (_this) => _this.byteLength,
    'org.khronos.webgl.Int8Array_$external_fun' : (p0, p1, p2, isDefault0, isDefault1) => new Int8Array(p0, isDefault0 ? undefined : p1, isDefault1 ? undefined : p2, ),
    'org.khronos.webgl.length_$external_prop_getter' : (_this) => _this.length,
    'org.w3c.dom.clipboard.clipboardData_$external_prop_getter' : (_this) => _this.clipboardData,
    'org.w3c.dom.clipboard.ClipboardEvent_$external_class_instanceof' : (x) => x instanceof ClipboardEvent,
    'org.w3c.dom.css.cursor_$external_prop_setter' : (_this, v) => _this.cursor = v,
    'org.w3c.dom.css.display_$external_prop_setter' : (_this, v) => _this.display = v,
    'org.w3c.dom.css.fontSize_$external_prop_getter' : (_this) => _this.fontSize,
    'org.w3c.dom.css.fontSize_$external_prop_setter' : (_this, v) => _this.fontSize = v,
    'org.w3c.dom.css.height_$external_prop_setter' : (_this, v) => _this.height = v,
    'org.w3c.dom.css.left_$external_prop_setter' : (_this, v) => _this.left = v,
    'org.w3c.dom.css.opacity_$external_prop_setter' : (_this, v) => _this.opacity = v,
    'org.w3c.dom.css.outline_$external_prop_setter' : (_this, v) => _this.outline = v,
    'org.w3c.dom.css.position_$external_prop_setter' : (_this, v) => _this.position = v,
    'org.w3c.dom.css.top_$external_prop_setter' : (_this, v) => _this.top = v,
    'org.w3c.dom.css.whiteSpace_$external_prop_setter' : (_this, v) => _this.whiteSpace = v,
    'org.w3c.dom.css.width_$external_prop_setter' : (_this, v) => _this.width = v,
    'org.w3c.dom.css.setProperty_$external_fun' : (_this, p0, p1, p2, isDefault0) => _this.setProperty(p0, p1, isDefault0 ? undefined : p2, ),
    'org.w3c.dom.css.style_$external_prop_getter' : (_this) => _this.style,
    'org.w3c.dom.events.type_$external_prop_getter' : (_this) => _this.type,
    'org.w3c.dom.events.target_$external_prop_getter' : (_this) => _this.target,
    'org.w3c.dom.events.cancelable_$external_prop_getter' : (_this) => _this.cancelable,
    'org.w3c.dom.events.timeStamp_$external_prop_getter' : (_this) => _this.timeStamp,
    'org.w3c.dom.events.preventDefault_$external_fun' : (_this, ) => _this.preventDefault(),
    'org.w3c.dom.events.Event_$external_class_instanceof' : (x) => x instanceof Event,
    'org.w3c.dom.events.deltaX_$external_prop_getter' : (_this) => _this.deltaX,
    'org.w3c.dom.events.deltaY_$external_prop_getter' : (_this) => _this.deltaY,
    'org.w3c.dom.events.deltaMode_$external_prop_getter' : (_this) => _this.deltaMode,
    'org.w3c.dom.events.DOM_DELTA_PIXEL_$external_prop_getter' : (_this) => _this.DOM_DELTA_PIXEL,
    'org.w3c.dom.events.DOM_DELTA_LINE_$external_prop_getter' : (_this) => _this.DOM_DELTA_LINE,
    'org.w3c.dom.events.DOM_DELTA_PAGE_$external_prop_getter' : (_this) => _this.DOM_DELTA_PAGE,
    'org.w3c.dom.events.Companion_$external_object_getInstance' : () => WheelEvent,
    'org.w3c.dom.events.WheelEvent_$external_class_instanceof' : (x) => x instanceof WheelEvent,
    'org.w3c.dom.events.key_$external_prop_getter' : (_this) => _this.key,
    'org.w3c.dom.events.code_$external_prop_getter' : (_this) => _this.code,
    'org.w3c.dom.events.ctrlKey_$external_prop_getter' : (_this) => _this.ctrlKey,
    'org.w3c.dom.events.shiftKey_$external_prop_getter' : (_this) => _this.shiftKey,
    'org.w3c.dom.events.altKey_$external_prop_getter' : (_this) => _this.altKey,
    'org.w3c.dom.events.metaKey_$external_prop_getter' : (_this) => _this.metaKey,
    'org.w3c.dom.events.repeat_$external_prop_getter' : (_this) => _this.repeat,
    'org.w3c.dom.events.isComposing_$external_prop_getter' : (_this) => _this.isComposing,
    'org.w3c.dom.events.keyCode_$external_prop_getter' : (_this) => _this.keyCode,
    'org.w3c.dom.events.KeyboardEvent_$external_class_instanceof' : (x) => x instanceof KeyboardEvent,
    'org.w3c.dom.events.KeyboardEvent_$external_class_get' : () => KeyboardEvent,
    'org.w3c.dom.events.addEventListener_$external_fun' : (_this, p0, p1, p2) => _this.addEventListener(p0, p1, p2),
    'org.w3c.dom.events.addEventListener_$external_fun_1' : (_this, p0, p1, p2) => _this.addEventListener(p0, p1, p2),
    'org.w3c.dom.events.addEventListener_$external_fun_2' : (_this, p0, p1) => _this.addEventListener(p0, p1),
    'org.w3c.dom.events.addEventListener_$external_fun_3' : (_this, p0, p1) => _this.addEventListener(p0, p1),
    'org.w3c.dom.events.removeEventListener_$external_fun' : (_this, p0, p1) => _this.removeEventListener(p0, p1),
    'org.w3c.dom.events.removeEventListener_$external_fun_1' : (_this, p0, p1) => _this.removeEventListener(p0, p1),
    'org.w3c.dom.events.clientX_$external_prop_getter' : (_this) => _this.clientX,
    'org.w3c.dom.events.clientY_$external_prop_getter' : (_this) => _this.clientY,
    'org.w3c.dom.events.ctrlKey_$external_prop_getter_1' : (_this) => _this.ctrlKey,
    'org.w3c.dom.events.shiftKey_$external_prop_getter_1' : (_this) => _this.shiftKey,
    'org.w3c.dom.events.altKey_$external_prop_getter_1' : (_this) => _this.altKey,
    'org.w3c.dom.events.metaKey_$external_prop_getter_1' : (_this) => _this.metaKey,
    'org.w3c.dom.events.button_$external_prop_getter' : (_this) => _this.button,
    'org.w3c.dom.events.buttons_$external_prop_getter' : (_this) => _this.buttons,
    'org.w3c.dom.events.offsetX_$external_prop_getter' : (_this) => _this.offsetX,
    'org.w3c.dom.events.offsetY_$external_prop_getter' : (_this) => _this.offsetY,
    'org.w3c.dom.events.isComposing_$external_prop_getter_1' : (_this) => _this.isComposing,
    'org.w3c.dom.events.InputEvent_$external_class_instanceof' : (x) => x instanceof InputEvent,
    'org.w3c.dom.events.InputEvent_$external_class_get' : () => InputEvent,
    'org.w3c.dom.events.data_$external_prop_getter' : (_this) => _this.data,
    'org.w3c.dom.events.CompositionEvent_$external_class_instanceof' : (x) => x instanceof CompositionEvent,
    'org.w3c.dom.events.CompositionEvent_$external_class_get' : () => CompositionEvent,
    'org.w3c.dom.ShadowRootInit' : (mode) => ({ mode: mode }),
    'org.w3c.dom.AddEventListenerOptions_js_code' : (passive, once, capture) => ({ passive: passive, once: once, capture: capture }),
    'org.w3c.dom.location_$external_prop_getter' : (_this) => _this.location,
    'org.w3c.dom.history_$external_prop_getter' : (_this) => _this.history,
    'org.w3c.dom.navigator_$external_prop_getter' : (_this) => _this.navigator,
    'org.w3c.dom.devicePixelRatio_$external_prop_getter' : (_this) => _this.devicePixelRatio,
    'org.w3c.dom.open_$external_fun' : (_this, p0, p1, p2, isDefault0, isDefault1, isDefault2) => _this.open(isDefault0 ? undefined : p0, isDefault1 ? undefined : p1, isDefault2 ? undefined : p2, ),
    'org.w3c.dom.requestAnimationFrame_$external_fun' : (_this, p0) => _this.requestAnimationFrame(p0),
    'org.w3c.dom.matchMedia_$external_fun' : (_this, p0) => _this.matchMedia(p0),
    'org.w3c.dom.getComputedStyle_$external_fun' : (_this, p0, p1, isDefault0) => _this.getComputedStyle(p0, isDefault0 ? undefined : p1, ),
    'org.w3c.dom.matches_$external_prop_getter' : (_this) => _this.matches,
    'org.w3c.dom.addListener_$external_fun' : (_this, p0) => _this.addListener(p0),
    'org.w3c.dom.MediaQueryList_$external_class_instanceof' : (x) => x instanceof MediaQueryList,
    'org.w3c.dom.MediaQueryList_$external_class_get' : () => MediaQueryList,
    'org.w3c.dom.protocol_$external_prop_getter' : (_this) => _this.protocol,
    'org.w3c.dom.pathname_$external_prop_getter' : (_this) => _this.pathname,
    'org.w3c.dom.search_$external_prop_getter' : (_this) => _this.search,
    'org.w3c.dom.tabIndex_$external_prop_setter' : (_this, v) => _this.tabIndex = v,
    'org.w3c.dom.innerText_$external_prop_setter' : (_this, v) => _this.innerText = v,
    'org.w3c.dom.click_$external_fun' : (_this, ) => _this.click(),
    'org.w3c.dom.focus_$external_fun' : (_this, ) => _this.focus(),
    'org.w3c.dom.blur_$external_fun' : (_this, ) => _this.blur(),
    'org.w3c.dom.HTMLElement_$external_class_instanceof' : (x) => x instanceof HTMLElement,
    'org.w3c.dom.HTMLElement_$external_class_get' : () => HTMLElement,
    'org.w3c.dom.dropEffect_$external_prop_setter' : (_this, v) => _this.dropEffect = v,
    'org.w3c.dom.setDragImage_$external_fun' : (_this, p0, p1, p2) => _this.setDragImage(p0, p1, p2),
    'org.w3c.dom.getData_$external_fun' : (_this, p0) => _this.getData(p0),
    'org.w3c.dom.setData_$external_fun' : (_this, p0, p1) => _this.setData(p0, p1),
    'org.w3c.dom.documentElement_$external_prop_getter' : (_this) => _this.documentElement,
    'org.w3c.dom.body_$external_prop_getter' : (_this) => _this.body,
    'org.w3c.dom.activeElement_$external_prop_getter' : (_this) => _this.activeElement,
    'org.w3c.dom.createElement_$external_fun' : (_this, p0, p1, isDefault0) => _this.createElement(p0, isDefault0 ? undefined : p1, ),
    'org.w3c.dom.hasFocus_$external_fun' : (_this, ) => _this.hasFocus(),
    'org.w3c.dom.getElementById_$external_fun' : (_this, p0) => _this.getElementById(p0),
    'org.w3c.dom.namespaceURI_$external_prop_getter' : (_this) => _this.namespaceURI,
    'org.w3c.dom.localName_$external_prop_getter' : (_this) => _this.localName,
    'org.w3c.dom.id_$external_prop_setter' : (_this, v) => _this.id = v,
    'org.w3c.dom.classList_$external_prop_getter' : (_this) => _this.classList,
    'org.w3c.dom.shadowRoot_$external_prop_getter' : (_this) => _this.shadowRoot,
    'org.w3c.dom.clientWidth_$external_prop_getter' : (_this) => _this.clientWidth,
    'org.w3c.dom.clientHeight_$external_prop_getter' : (_this) => _this.clientHeight,
    'org.w3c.dom.getAttribute_$external_fun' : (_this, p0) => _this.getAttribute(p0),
    'org.w3c.dom.getAttributeNS_$external_fun' : (_this, p0, p1) => _this.getAttributeNS(p0, p1),
    'org.w3c.dom.setAttribute_$external_fun' : (_this, p0, p1) => _this.setAttribute(p0, p1),
    'org.w3c.dom.attachShadow_$external_fun' : (_this, p0) => _this.attachShadow(p0),
    'org.w3c.dom.getBoundingClientRect_$external_fun' : (_this, ) => _this.getBoundingClientRect(),
    'org.w3c.dom.Element_$external_class_instanceof' : (x) => x instanceof Element,
    'org.w3c.dom.nodeName_$external_prop_getter' : (_this) => _this.nodeName,
    'org.w3c.dom.isConnected_$external_prop_getter' : (_this) => _this.isConnected,
    'org.w3c.dom.childNodes_$external_prop_getter' : (_this) => _this.childNodes,
    'org.w3c.dom.firstChild_$external_prop_getter' : (_this) => _this.firstChild,
    'org.w3c.dom.textContent_$external_prop_setter' : (_this, v) => _this.textContent = v,
    'org.w3c.dom.hasChildNodes_$external_fun' : (_this, ) => _this.hasChildNodes(),
    'org.w3c.dom.lookupPrefix_$external_fun' : (_this, p0) => _this.lookupPrefix(p0),
    'org.w3c.dom.appendChild_$external_fun' : (_this, p0) => _this.appendChild(p0),
    'org.w3c.dom.removeChild_$external_fun' : (_this, p0) => _this.removeChild(p0),
    'org.w3c.dom.width_$external_prop_getter' : (_this) => _this.width,
    'org.w3c.dom.width_$external_prop_setter' : (_this, v) => _this.width = v,
    'org.w3c.dom.height_$external_prop_getter' : (_this) => _this.height,
    'org.w3c.dom.height_$external_prop_setter' : (_this, v) => _this.height = v,
    'org.w3c.dom.HTMLCanvasElement_$external_class_instanceof' : (x) => x instanceof HTMLCanvasElement,
    'org.w3c.dom.HTMLCanvasElement_$external_class_get' : () => HTMLCanvasElement,
    'org.w3c.dom.HTMLDivElement_$external_class_instanceof' : (x) => x instanceof HTMLDivElement,
    'org.w3c.dom.HTMLDivElement_$external_class_get' : () => HTMLDivElement,
    'org.w3c.dom.HTMLTextAreaElement_$external_class_instanceof' : (x) => x instanceof HTMLTextAreaElement,
    'org.w3c.dom.HTMLTextAreaElement_$external_class_get' : () => HTMLTextAreaElement,
    'org.w3c.dom.matches_$external_prop_getter_1' : (_this) => _this.matches,
    'org.w3c.dom.MediaQueryListEvent_$external_class_instanceof' : (x) => x instanceof MediaQueryListEvent,
    'org.w3c.dom.MediaQueryListEvent_$external_class_get' : () => MediaQueryListEvent,
    'org.w3c.dom.dataTransfer_$external_prop_getter' : (_this) => _this.dataTransfer,
    'org.w3c.dom.DragEvent_$external_class_instanceof' : (x) => x instanceof DragEvent,
    'org.w3c.dom.DragEvent_$external_class_get' : () => DragEvent,
    'org.w3c.dom.add_$external_fun' : (_this, p0) => _this.add(...p0),
    'org.w3c.dom.userAgent_$external_prop_getter' : (_this) => _this.userAgent,
    'org.w3c.dom.language_$external_prop_getter' : (_this) => _this.language,
    'org.w3c.dom.caches_$external_prop_getter' : (_this) => _this.caches,
    'org.w3c.dom.fetch_$external_fun' : (_this, p0, p1, isDefault0) => _this.fetch(p0, isDefault0 ? undefined : p1, ),
    'org.w3c.dom.replaceState_$external_fun' : (_this, p0, p1, p2, isDefault0) => _this.replaceState(p0, p1, isDefault0 ? undefined : p2, ),
    'org.w3c.dom.item_$external_fun' : (_this, p0) => _this.item(p0),
    'org.w3c.dom.top_$external_prop_getter' : (_this) => _this.top,
    'org.w3c.dom.left_$external_prop_getter' : (_this) => _this.left,
    'org.w3c.dom.remove_$external_fun' : (_this, ) => _this.remove(),
    'org.w3c.dom.Companion_$external_object_getInstance' : () => ({}),
    'org.w3c.dom.parsing.DOMParser_$external_fun' : () => new DOMParser(),
    'org.w3c.dom.parsing.parseFromString_$external_fun' : (_this, p0, p1) => _this.parseFromString(p0, p1),
    'org.w3c.dom.pointerevents.pointerId_$external_prop_getter' : (_this) => _this.pointerId,
    'org.w3c.dom.pointerevents.pressure_$external_prop_getter' : (_this) => _this.pressure,
    'org.w3c.dom.url.URLSearchParams_$external_fun' : (p0, isDefault0) => new URLSearchParams(isDefault0 ? undefined : p0, ),
    'org.w3c.dom.url.get_$external_fun' : (_this, p0) => _this.get(p0),
    'org.w3c.fetch.ok_$external_prop_getter' : (_this) => _this.ok,
    'org.w3c.fetch.clone_$external_fun' : (_this, ) => _this.clone(),
    'org.w3c.fetch.arrayBuffer_$external_fun' : (_this, ) => _this.arrayBuffer(),
    'org.w3c.fetch.blob_$external_fun' : (_this, ) => _this.blob(),
    'org.w3c.performance.now_$external_fun' : (_this, ) => _this.now(),
    'org.w3c.performance.performance_$external_prop_getter' : (_this) => _this.performance,
    'org.w3c.workers.CacheQueryOptions_js_code' : (ignoreSearch, ignoreMethod, ignoreVary, cacheName) => ({ ignoreSearch: ignoreSearch, ignoreMethod: ignoreMethod, ignoreVary: ignoreVary, cacheName: cacheName }),
    'org.w3c.workers.match_$external_fun' : (_this, p0, p1, isDefault0) => _this.match(p0, isDefault0 ? undefined : p1, ),
    'org.w3c.workers.put_$external_fun' : (_this, p0, p1) => _this.put(p0, p1),
    'org.w3c.workers.open_$external_fun' : (_this, p0) => _this.open(p0),
    'org.w3c.workers.delete_$external_fun' : (_this, p0) => _this.delete(p0),
    'kotlinx.browser.window_$external_prop_getter' : () => window,
    'kotlinx.browser.document_$external_prop_getter' : () => document,
    'org.w3c.dom.length_$external_prop_getter' : (_this) => _this.length,
    'androidx.compose.runtime.internal.weakMap_js_code' : () => (new WeakMap()),
    'androidx.compose.runtime.internal.set_$external_fun' : (_this, p0, p1) => _this.set(p0, p1),
    'androidx.compose.runtime.internal.get_$external_fun' : (_this, p0) => _this.get(p0),
    'androidx.compose.runtime.internal.WeakRef_$external_fun' : (p0) => new WeakRef(p0),
    'androidx.compose.runtime.internal.deref_$external_fun' : (_this, ) => _this.deref(),
    'org.jetbrains.skiko.GL_$external_prop_getter' : () => _ref_Li9za2lrby5tanM_.GL,
    'org.jetbrains.skia.impl.FinalizationRegistry_$external_fun' : (p0) => new FinalizationRegistry(p0),
    'org.jetbrains.skia.impl.register_$external_fun' : (_this, p0, p1, p2) => _this.register(p0, p1, p2),
    'org.jetbrains.skia.impl.unregister_$external_fun' : (_this, p0) => _this.unregister(p0),
    'org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun' : () => _ref_Li9za2lrby5tanM_c2tpa29BcGk._releaseLocalCallbackScope(),
    'org.jetbrains.skiko.wasm.createDefaultContextAttributes' : () => {
        return {
            alpha: 1,
            depth: 1,
            stencil: 8,
            antialias: 0,
            premultipliedAlpha: 1,
            preserveDrawingBuffer: 0,
            preferLowPowerToHighPerformance: 0,
            failIfMajorPerformanceCaveat: 0,
            enableExtensionsByDefault: 1,
            explicitSwapControl: 0,
            renderViaOffscreenBackBuffer: 0,
            majorVersion: 2,
        }
    }
    ,
    'org.jetbrains.skiko.wasm.awaitSkiko_$external_prop_getter' : () => _ref_Li9za2lrby5tanM_.awaitSkiko,
    'org.jetbrains.skiko.createContext_$external_fun' : (_this, p0, p1) => _this.createContext(p0, p1),
    'org.jetbrains.skiko.makeContextCurrent_$external_fun' : (_this, p0) => _this.makeContextCurrent(p0),
    'org.jetbrains.skiko.getNavigatorInfo' : () => navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform,
    'org.jetbrains.skiko.defaultFetchInit_js_code' : () => ({}),
    'org.jetbrains.skiko.jsCatch' : function (f) { try { f(); } catch (e) { return e;}; return null; },
    'org.jetbrains.skiko.jsThrow' : (e) => { throw e; },
    'androidx.lifecycle.WeakRef_$external_fun' : (p0) => new WeakRef(p0),
    'androidx.lifecycle.deref_$external_fun' : (_this, ) => _this.deref(),
    'androidx.compose.ui.text.intl.getUserPreferredLanguagesAsArray' : () => window.navigator.languages,
    'androidx.compose.ui.text.FinalizationRegistry_$external_fun' : (p0) => new FinalizationRegistry(p0),
    'androidx.compose.ui.text.register_$external_fun' : (_this, p0, p1) => _this.register(p0, p1),
    'androidx.compose.ui.text.WeakRef_$external_fun' : (p0) => new WeakRef(p0),
    'androidx.compose.ui.text.deref_$external_fun' : (_this, ) => _this.deref(),
    'androidx.compose.ui.text.intl.parseLanguageTagToIntlLocale' : (languageTag) => new Intl.Locale(languageTag),
    'androidx.compose.ui.text.intl._language_$external_prop_getter' : (_this) => _this.language,
    'androidx.compose.ui.text.intl._script_$external_prop_getter' : (_this) => _this.script,
    'androidx.compose.ui.text.intl._region_$external_prop_getter' : (_this) => _this.region,
    'androidx.compose.ui.text.intl._baseName_$external_prop_getter' : (_this) => _this.baseName,
    'androidx.compose.ui.internal.weakMap_js_code' : () => (new WeakMap()),
    'androidx.compose.ui.internal.set_$external_fun' : (_this, p0, p1) => _this.set(p0, p1),
    'androidx.compose.ui.internal.get_$external_fun' : (_this, p0) => _this.get(p0),
    'androidx.compose.ui.platform.createClipboardItemWithPlainText' : (text) => [new ClipboardItem({'text/plain': new Blob([text], { type: 'text/plain' })})],
    'androidx.compose.ui.platform.emptyClipboardItems' : () => [new ClipboardItem({'text/plain': new Blob([''], { type: 'text/plain' })})],
    'androidx.compose.ui.platform.invalidClipboardItems' : () => [],
    'androidx.compose.ui.platform.warn' : (text) => { console.warn(text) },
    'androidx.compose.ui.events.withSignal' : (signal) => ({signal: signal}),
    'androidx.compose.ui.events.withSignalAndPassive' : (signal, passive) => ({signal: signal, passive: passive}),
    'androidx.compose.ui.events.AbortController_$external_fun' : () => new AbortController(),
    'androidx.compose.ui.events.signal_$external_prop_getter' : (_this) => _this.signal,
    'androidx.compose.ui.internal.focusExt' : (element, _preventScroll) => element.focus({ preventScroll: _preventScroll }),
    'androidx.compose.ui.node.WeakRef_$external_fun' : (p0) => new WeakRef(p0),
    'androidx.compose.ui.node.deref_$external_fun' : (_this, ) => _this.deref(),
    'androidx.compose.ui.platform.setBackingInputBox' : (container, left, top, width, height) => { 
        container.style.setProperty("--compose-internal-web-backing-input-left", left);
        container.style.setProperty("--compose-internal-web-backing-input-top", top);
        container.style.setProperty("--compose-internal-web-backing-input-width", width);
        container.style.setProperty("--compose-internal-web-backing-input-height", height)
     },
    'androidx.compose.ui.platform.isVibrationSupported' : () => 
            typeof window !== 'undefined' &&
            window.navigator != null &&
            typeof window.navigator.vibrate === 'function'
        ,
    'androidx.compose.ui.platform.vibrate' : (pattern) => { window.navigator.vibrate(pattern) },
    'androidx.compose.ui.platform.isTypedEvent' : (evt) => !evt.metaKey && !evt.ctrlKey && evt.key.charAt(0) === evt.key,
    'androidx.compose.ui.platform.value_$external_prop_setter' : (_this, v) => _this.value = v,
    'androidx.compose.ui.platform.selectionStart_$external_prop_getter' : (_this) => _this.selectionStart,
    'androidx.compose.ui.platform.selectionEnd_$external_prop_getter' : (_this) => _this.selectionEnd,
    'androidx.compose.ui.platform.setSelectionRange_$external_fun' : (_this, p0, p1, p2, isDefault0) => _this.setSelectionRange(p0, p1, isDefault0 ? undefined : p2, ),
    'androidx.compose.ui.platform.data_$external_prop_getter' : (_this) => _this.data,
    'androidx.compose.ui.platform.inputType_$external_prop_getter' : (_this) => _this.inputType,
    'androidx.compose.ui.platform.textRangeStart_$external_prop_getter' : (_this) => _this.textRangeStart,
    'androidx.compose.ui.platform.textRangeStart_$external_prop_setter' : (_this, v) => _this.textRangeStart = v,
    'androidx.compose.ui.platform.textRangeEnd_$external_prop_getter' : (_this) => _this.textRangeEnd,
    'androidx.compose.ui.platform.textRangeEnd_$external_prop_setter' : (_this, v) => _this.textRangeEnd = v,
    'androidx.compose.ui.platform.activeElement_$external_prop_getter' : (_this) => _this.activeElement,
    'androidx.compose.ui.platform.getRootNode_$external_fun' : (_this, ) => _this.getRootNode(),
    'androidx.compose.ui.platform.getW3CClipboard' : () => window.navigator.clipboard,
    'androidx.compose.ui.platform.isSecureContext' : () => window.isSecureContext === true,
    'androidx.compose.ui.platform.isFullClipboardApiSupported' : () => Boolean(
            window.navigator.clipboard && 
            window.navigator.clipboard.write && 
            window.navigator.clipboard.read && 
            typeof(ClipboardItem) !== 'undefined'
            )
        ,
    'androidx.compose.ui.platform.isFallbackWriteTextApiAvailable' : () => Boolean(window.navigator.clipboard && window.navigator.clipboard.writeText),
    'androidx.compose.ui.platform.types_$external_prop_getter' : (_this) => _this.types,
    'androidx.compose.ui.platform.getType_$external_fun' : (_this, p0) => _this.getType(p0),
    'androidx.compose.ui.platform.read_$external_fun' : (_this, ) => _this.read(),
    'androidx.compose.ui.platform.write_$external_fun' : (_this, p0) => _this.write(p0),
    'androidx.compose.ui.platform.writeText_$external_fun' : (_this, p0) => _this.writeText(p0),
    'androidx.compose.ui.platform.W3CTemporaryClipboard_$external_class_instanceof' : (x) => x instanceof Clipboard,
    'androidx.compose.ui.platform.W3CTemporaryClipboard_$external_class_get' : () => Clipboard,
    'androidx.compose.ui.platform.isFullWakeLockApiSupported' : () => Boolean(
            window.navigator.wakeLock && 
            typeof(WakeLockSentinel) !== 'undefined'
            )
        ,
    'androidx.compose.ui.platform.accessibility.removeAllChildrenOf' : (element) => { element.replaceChildren() },
    'androidx.compose.ui.platform.accessibility.setA11YAriaRole' : (element, ariaRoleId) => { 
            var roleValue = "";
            switch (ariaRoleId) {
                case 0: // Role.Button
                    roleValue = "button";
                    break;
                case 1: // Role.Checkbox
                    roleValue = "checkbox";
                    break;
                case 2: // Role.Switch
                    roleValue = "switch";
                    break;
                case 3: // Role.RadioButton
                    roleValue = "radio";
                    break;
                case 4: // Role.Tab
                    roleValue = "tab";
                    break;
                case 5: // Role.Image
                    roleValue = "img";
                    break;
                case 6: // Role.DropdownList
                    roleValue = "menu";
                    break;
                case 7: // heading https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role
                    roleValue = "heading";
                    break;
                case 8: // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role
                    roleValue = "textbox";
                    break;
                case 9: // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role
                    roleValue = "list";
                    break;
                case 10: // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role
                    roleValue = "grid";
                    break;
                default:
                    break;
            }
            if (roleValue.length > 0) { 
                element.setAttribute("role", roleValue);
            } else {
                element.removeAttribute("role");
            }
         },
    'androidx.compose.ui.platform.accessibility.setSizeAndPosition' : (element, left, top, width, height) => { 
           element.style.left = "" + left + "px";
           element.style.top = "" + top + "px";
           element.style.width = "" + width + "px";
           element.style.height = "" + height + "px";
         },
    'androidx.compose.ui.window.documentIsVisible' : () => document.visibilityState === 'visible',
    'androidx.compose.ui.window.isTouchEvent' : (event) => event.pointerType === 'touch',
    'androidx.compose.ui.window.releasePointerCapture' : (target, pointerId) => { try { target.releasePointerCapture(pointerId) } catch (e) {} },
    'androidx.compose.ui.window.isMouseEvent' : (event) => event.pointerType === 'mouse',
    'androidx.compose.ui.window.setPointerCapture' : (target, pointerId) => { try { target.setPointerCapture(pointerId) } catch (e) {} },
    'androidx.compose.ui.window.getCoalescedEvents' : (pointerEvent) => pointerEvent.getCoalescedEvents ? pointerEvent.getCoalescedEvents() : [],
    'androidx.compose.ui.window.getPointerEventCode' : (event) => {
            switch (event.type) {
              case 'pointerdown':
                return 1; // PointerEventType.Press
              case 'pointerup':
                return 2; // PointerEventType.Release
              case 'pointermove':
                return 3; // PointerEventType.Move
              case 'pointerenter':
                return 4; //PointerEventType.Enter
              case 'pointerleave':
                return 5; //PointerEventType.Exit
              default:
                return 0; // PointerEventType.Unknown
            } 
        },
    'androidx.compose.ui.window.activeElement_$external_prop_getter' : (_this) => _this.activeElement,
    'androidx.compose.ui.window.isMatchMediaSupported' : () => window.matchMedia != undefined,
    'androidx.compose.foundation.internal.isClipboardWriteSupported' : () => Boolean(window.navigator.clipboard && (window.navigator.clipboard.write || window.navigator.clipboard.writeText)),
    'androidx.compose.foundation.internal.isClipboardReadSupported' : () => Boolean(window.navigator.clipboard && window.navigator.clipboard.read),
    'androidx.compose.foundation.internal.getTextFromBlob' : (blob) => blob.text(),
    'androidx.compose.foundation.internal.doesJsArrayContainValue' : (jsArray, value) => jsArray.includes(value),
    'androidx.compose.foundation.text.EventListener' : (handler) => (event) => { handler(event) },
    'androidx.compose.foundation.gestures.legacyWheelDeltaX' : (event) => (event.wheelDeltaX == null) ? NaN : event.wheelDeltaX,
    'androidx.compose.foundation.gestures.legacyWheelDeltaY' : (event) => (event.wheelDeltaY == null) ? NaN : event.wheelDeltaY,
    'androidx.compose.foundation.internal.weakMap_js_code' : () => (new WeakMap()),
    'androidx.compose.foundation.internal.set_$external_fun' : (_this, p0, p1) => _this.set(p0, p1),
    'androidx.compose.foundation.internal.get_$external_fun' : (_this, p0) => _this.get(p0),
    'kotlinx.datetime.internal.Date_$external_fun' : (p0) => new Date(p0),
    'kotlinx.datetime.internal.getTimezoneOffset_$external_fun' : (_this, ) => _this.getTimezoneOffset(),
    'kotlinx.datetime.internal.JSJoda.ZoneRulesProvider_$external_object_getInstance' : () => _ref_QGpzLWpvZGEvY29yZQ_.ZoneRulesProvider,
    'kotlinx.datetime.internal.JSJoda.id_$external_fun' : (_this, ) => _this.id(),
    'kotlinx.datetime.internal.JSJoda.systemDefault_$external_fun' : (_this, ) => _this.systemDefault(),
    'kotlinx.datetime.internal.JSJoda.Companion_$external_object_getInstance' : () => _ref_QGpzLWpvZGEvY29yZQ_.ZoneId,
    'kotlinx.datetime.internal.withCaughtJsException' : (body) => {
        try {
            body();
            return null;
        } catch(e) {
            return e;
        }
    },
    'kotlinx.datetime.internal.getExceptionMessage' : (jsException) => jsException.message,
    'kotlinx.datetime.internal.getZones' : (rulesProvider) => rulesProvider.getTzdbData().zones,
    'kotlinx.datetime.internal.getLinks' : (rulesProvider) => rulesProvider.getTzdbData().links,
    'androidx.compose.material3.internal.weakMap_js_code' : () => (new WeakMap()),
    'androidx.compose.material3.internal.set_$external_fun' : (_this, p0, p1) => _this.set(p0, p1),
    'androidx.compose.material3.internal.get_$external_fun' : (_this, p0) => _this.get(p0),
    'androidx.compose.material3.internal.getFirstDayOfWeek' : (locale) => { try { 
               return new Intl.Locale(locale).weekInfo.firstDay; 
            } catch (error) { 
               return -1; 
          }},
    'androidx.compose.material3.internal.emptyLocaleOptions' : () => new Object(),
    'androidx.compose.material3.internal.Date_$external_fun' : (p0) => new Date(p0),
    'androidx.compose.material3.internal.Date_$external_fun_1' : (p0, p1, p2) => new Date(p0, p1, p2),
    'androidx.compose.material3.internal.getDay_$external_fun' : (_this, ) => _this.getDay(),
    'androidx.compose.material3.internal.toLocaleDateString_$external_fun' : (_this, p0, p1, isDefault0) => _this.toLocaleDateString(p0, isDefault0 ? undefined : p1, ),
    'androidx.compose.material3.internal.now_$external_fun' : (_this, ) => _this.now(),
    'androidx.compose.material3.internal.Companion_$external_object_getInstance' : () => Date,
    'androidx.compose.material3.internal.weekday_$external_prop_setter' : (_this, v) => _this.weekday = v,
    'androidx.compose.material3.internal.year_$external_prop_setter' : (_this, v) => _this.year = v,
    'androidx.compose.material3.internal.month_$external_prop_setter' : (_this, v) => _this.month = v,
    'androidx.compose.material3.internal.day_$external_prop_setter' : (_this, v) => _this.day = v,
    'androidx.compose.material3.internal.hour_$external_prop_setter' : (_this, v) => _this.hour = v,
    'androidx.compose.material3.internal.minute_$external_prop_setter' : (_this, v) => _this.minute = v,
    'androidx.compose.material3.internal.second_$external_prop_setter' : (_this, v) => _this.second = v,
    'androidx.compose.material3.internal.Date_$external_class_instanceof' : (x) => x instanceof Date,
    'androidx.compose.material3.internal.Date_$external_class_get' : () => Date,
    'org.jetbrains.compose.resources.Locale_$external_fun' : (p0) => new Intl.Locale(p0),
    'org.jetbrains.compose.resources.language_$external_prop_getter' : (_this) => _this.language,
    'org.jetbrains.compose.resources.script_$external_prop_getter' : (_this) => _this.script,
    'org.jetbrains.compose.resources.region_$external_prop_getter' : (_this) => _this.region,
    'org.jetbrains.compose.resources.jsExportBlobAsArrayBuffer' : (blob) => blob.arrayBuffer(),
    'org.jetbrains.compose.resources.jsFetchWithSignal' : (url, signal) => window.fetch(url, { signal }),
    'org.jetbrains.compose.resources.AbortController_$external_fun' : () => new AbortController(),
    'org.jetbrains.compose.resources.signal_$external_prop_getter' : (_this) => _this.signal,
    'org.jetbrains.compose.resources.abort_$external_fun' : (_this, ) => _this.abort(),
    'org.jetbrains.compose.resources.copyArrayBufferToWasmMemory' : (ab, ptr) => {
          const data = new Uint8Array(ab);
          new Uint8Array(wasmExports.memory.buffer).set(data, ptr);
    },
    'org.jetbrains.compose.resources.supportsCacheApi' : () => Boolean(window.caches),
    'com.carvajalrivera.crgestionjuridicawindows.estadoJs' : () => globalThis.DC_PUSH ? globalThis.DC_PUSH.estado() : 'no',
    'com.carvajalrivera.crgestionjuridicawindows.activarJs' : (clave) => { if (globalThis.DC_PUSH) globalThis.DC_PUSH.activar(clave, 'sw.js'); },
    'com.carvajalrivera.crgestionjuridicawindows.desactivarJs' : () => { if (globalThis.DC_PUSH) globalThis.DC_PUSH.desactivar(); },
    'com.carvajalrivera.crgestionjuridicawindows.resultadoJs' : () => globalThis.DC_PUSH ? String(globalThis.DC_PUSH.resultado || '') : '',
    'com.carvajalrivera.crgestionjuridicawindows.errorJs' : () => globalThis.DC_PUSH ? String(globalThis.DC_PUSH.error || '') : 'Falta avisos-push.js',
    'com.carvajalrivera.crgestionjuridicawindows.leerJs' : (base64, mime) => { if (globalThis.DC_OCR) globalThis.DC_OCR.leer(base64, mime); },
    'com.carvajalrivera.crgestionjuridicawindows.resultadoJs_1' : () => globalThis.DC_OCR ? String(globalThis.DC_OCR.resultado || '') : '',
    'com.carvajalrivera.crgestionjuridicawindows.errorJs_1' : () => globalThis.DC_OCR ? String(globalThis.DC_OCR.error || '') : 'Falta comprobante.js',
    'com.carvajalrivera.crgestionjuridicawindows.recibidaJs' : () => (() => { const o = globalThis.DC_OCR; if (!o || !o.recibida) return ''; const r = o.recibida; o.recibida = null; return JSON.stringify(r); })(),
    'com.carvajalrivera.crgestionjuridicawindows.escucharJs' : (activo) => { if (globalThis.DC_OCR) globalThis.DC_OCR.escuchar(activo); },
    'com.carvajalrivera.crgestionjuridicawindows.clicJs' : (volumen) => { if (globalThis.DC_CLIC) globalThis.DC_CLIC(volumen); },
    'com.carvajalrivera.crgestionjuridicawindows.hablarJs' : (texto, alTerminar) => (() => {
            if (!('speechSynthesis' in window)) return false;
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(texto);
            u.lang = 'es-CO';
            const voces = window.speechSynthesis.getVoices();
            const voz = voces.find(v => v.lang && v.lang.toLowerCase().startsWith('es-co')) || voces.find(v => v.lang && v.lang.toLowerCase().startsWith('es'));
            if (voz) u.voice = voz;
            u.onend = () => alTerminar();
            u.onerror = () => alTerminar();
            window.speechSynthesis.speak(u);
            return true;
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.callarJs' : () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); },
    'com.carvajalrivera.crgestionjuridicawindows.dictarJs' : (alTexto) => (() => {
            const R = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!R) return false;
            const r = new R();
            r.lang = 'es-CO';
            r.interimResults = false;
            r.maxAlternatives = 1;
            r.onresult = (e) => { const t = Array.from(e.results).map(x => x[0].transcript).join(' '); if (t) alTexto(t); };
            try { r.start(); } catch (e) { return false; }
            return true;
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.navegadorEnLinea' : () => navigator.onLine !== false,
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.registrarJs' : (tipo, mensaje, detalle) => { try { if (globalThis.DC_DIAG) globalThis.DC_DIAG.registrar(tipo, mensaje, JSON.parse(detalle)); } catch (e) {} },
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.ponerVersionJs' : (v) => { if (globalThis.DC_DIAG) globalThis.DC_DIAG.version = v; },
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.latidoJs' : (pantalla) => { if (globalThis.DC_DIAG) { globalThis.DC_DIAG.pantalla = pantalla; globalThis.DC_DIAG.latido(); } },
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.tomarJs' : () => globalThis.DC_DIAG ? globalThis.DC_DIAG.tomar() : '[]',
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.devolverJs' : (texto) => { if (globalThis.DC_DIAG) globalThis.DC_DIAG.devolver(texto); },
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.xhrSincrono' : (metodo, url, encabezados, cuerpo) => (() => {
            const x = new XMLHttpRequest();
            x.open(metodo, url, false);
            const h = JSON.parse(encabezados);
            for (const k in h) x.setRequestHeader(k, h[k]);
            const D = globalThis.DC_DIAG, t0 = D ? D.empieza(metodo, url) : 0;
            try { x.send(cuerpo); } catch (e) { if (D) D.termina(metodo, url, t0, 0); return "0\n"; }
            if (D) D.termina(metodo, url, t0, x.status);
            return x.status + "\n" + (x.responseText || "");
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.codificarComponente' : (texto) => encodeURIComponent(texto),
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.configuracionPagina' : (clave) => (globalThis.DC_CONFIG && typeof globalThis.DC_CONFIG[clave] === 'string') ? globalThis.DC_CONFIG[clave] : null,
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.fetchPost' : (url, encabezados, cuerpo) => fetch(url, { method: 'POST', headers: JSON.parse(encabezados), body: cuerpo })
            .then(r => r.text().then(t => r.status + "\n" + t))
            .catch(e => "0\n"),
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.hashPagina' : () => globalThis.location ? globalThis.location.hash : '',
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.limpiarHashPagina' : () => { if (globalThis.history && globalThis.location) globalThis.history.replaceState(null, '', globalThis.location.pathname + globalThis.location.search); },
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.decodificarComponente' : (texto) => decodeURIComponent(texto.replace(/\+/g, ' ')),
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.agenteNavegadorJs' : () => navigator.userAgent,
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.fetchGet' : (url, encabezados) => fetch(url, { headers: JSON.parse(encabezados) })
            .then(r => r.text().then(t => r.status + "\n" + t))
            .catch(e => "0\n"),
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.fetchPostJs' : (url, encabezados, cuerpo) => fetch(url, { method: 'POST', headers: JSON.parse(encabezados), body: cuerpo })
            .then(r => r.text().then(t => r.status + "\n" + t))
            .catch(e => "0\n"),
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.leerRutasJs' : (clave) => { try { return window.localStorage.getItem(clave); } catch (e) { return null; } },
    'com.carvajalrivera.crgestionjuridicawindows.datos.remoto.guardarRutasJs' : (clave, valor) => { try { window.localStorage.setItem(clave, valor); } catch (e) {} },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.elegirArchivoJs' : (aceptar, alElegir) => {
            const input = document.createElement('input');
            input.type = 'file';
            if (aceptar) input.accept = aceptar;
            input.style.display = 'none';
            input.addEventListener('change', () => {
                const f = input.files && input.files[0];
                input.remove();
                if (!f) return;
                const lector = new FileReader();
                lector.onload = () => {
                    const url = String(lector.result || '');
                    alElegir(f.name, f.type || '', url.substring(url.indexOf(',') + 1));
                };
                lector.readAsDataURL(f);
            });
            document.body.appendChild(input);
            input.click();
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.__convertKotlinClosureToJsClosure_3' : (f, trampoline) => getCachedJsObject(f, (p0, p1, p2) => trampoline(f, p0, p1, p2)),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.blobUrlJs' : (mime, base64) => (() => {
            const bin = atob(base64);
            const arr = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
            return URL.createObjectURL(new Blob([arr], { type: mime }));
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.descargarUrlJs' : (url, nombre) => {
            const a = document.createElement('a');
            a.href = url;
            if (nombre) a.download = nombre;
            a.rel = 'noopener';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.remove();
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.abrirUrlJs' : (url) => (() => { window.open(url, '_blank'); return true; })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.imprimirUrlJs' : (url) => {
            const f = document.createElement('iframe');
            f.style.position = 'fixed'; f.style.right = '0'; f.style.bottom = '0';
            f.style.width = '0'; f.style.height = '0'; f.style.border = '0';
            f.src = url;
            f.onload = () => { try { f.contentWindow.focus(); f.contentWindow.print(); } catch (e) { window.open(url, '_blank'); } };
            document.body.appendChild(f);
            setTimeout(() => f.remove(), 600000);
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.copiarTextoJs' : (texto) => {
            try { navigator.clipboard.writeText(texto); } catch (e) {
                const t = document.createElement('textarea'); t.value = texto; document.body.appendChild(t);
                t.select(); try { document.execCommand('copy'); } catch (e2) {} t.remove();
            }
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.copiarImagenJs' : (base64) => (() => {
            try {
                const bin = atob(base64);
                const arr = new Uint8Array(bin.length);
                for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
                navigator.clipboard.write([new ClipboardItem({ 'image/png': new Blob([arr], { type: 'image/png' }) })]);
                return true;
            } catch (e) { return false; }
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.obtenerBinarioJs' : (url, encabezados) => (() => {
            const x = new XMLHttpRequest();
            x.open('GET', url, false);
            x.overrideMimeType('text/plain; charset=x-user-defined');
            const h = JSON.parse(encabezados);
            for (const k in h) x.setRequestHeader(k, h[k]);
            const D = globalThis.DC_DIAG, t0 = D ? D.empieza('GET', url) : 0;
            try { x.send(null); } catch (e) { if (D) D.termina('GET', url, t0, 0); return "0\n"; }
            if (D) D.termina('GET', url, t0, x.status);
            const t = x.responseText || '';
            if (x.status < 200 || x.status > 299) return x.status + "\n" + btoa(unescape(encodeURIComponent(t)));
            let bin = '';
            const paso = 8192;
            for (let i = 0; i < t.length; i += paso) {
                const trozo = t.substring(i, i + paso);
                let s = '';
                for (let j = 0; j < trozo.length; j++) s += String.fromCharCode(trozo.charCodeAt(j) & 0xff);
                bin += s;
            }
            return x.status + "\n" + btoa(bin);
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.enviarBinarioJs' : (metodo, url, encabezados, base64) => (() => {
            const bin = atob(base64);
            const arr = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
            const x = new XMLHttpRequest();
            x.open(metodo, url, false);
            const h = JSON.parse(encabezados);
            for (const k in h) x.setRequestHeader(k, h[k]);
            const D = globalThis.DC_DIAG, t0 = D ? D.empieza(metodo, url) : 0;
            try { x.send(arr); } catch (e) { if (D) D.termina(metodo, url, t0, 0); return "0\n"; }
            if (D) D.termina(metodo, url, t0, x.status);
            return x.status + "\n" + (x.responseText || '');
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.registrarFuenteJs' : (familia, url, peso) => {
            try {
                fetch(url).then(r => r.arrayBuffer()).then(b => new FontFace(familia, b, { weight: peso }).load())
                    .then(f => document.fonts.add(f)).catch(() => {});
            } catch (e) {}
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoCrearJs' : (w, h) => (() => {
            const L = (window.__dcLienzos = window.__dcLienzos || []);
            const c = document.createElement('canvas'); c.width = w; c.height = h;
            const g = c.getContext('2d'); g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
            L.push(c); return L.length - 1;
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoEscalarJs' : (id, s) => { window.__dcLienzos[id].getContext('2d').scale(s, s); },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoRectJs' : (id, x, y, w, h, color, relleno, grosor) => {
            const g = window.__dcLienzos[id].getContext('2d');
            if (relleno) { g.fillStyle = color; g.fillRect(x, y, w, h); }
            else { g.strokeStyle = color; g.lineWidth = grosor; g.strokeRect(x, y, w, h); }
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoPastillaJs' : (id, x1, x2, y, grosor, color) => {
            const g = window.__dcLienzos[id].getContext('2d');
            g.save(); g.strokeStyle = color; g.lineWidth = grosor; g.lineCap = 'round';
            g.beginPath(); g.moveTo(x1 + grosor / 2, y); g.lineTo(x2 - grosor / 2, y); g.stroke(); g.restore();
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoLineaJs' : (id, x1, y1, x2, y2, color, grosor) => {
            const g = window.__dcLienzos[id].getContext('2d');
            g.strokeStyle = color; g.lineWidth = grosor; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoTextoJs' : (id, t, x, y, fuente, color) => {
            const g = window.__dcLienzos[id].getContext('2d');
            g.font = fuente; g.fillStyle = color; g.textBaseline = 'alphabetic'; g.fillText(t, x, y);
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.medirTextoJs' : (t, fuente) => (() => {
            const c = (window.__dcMedidor = window.__dcMedidor || document.createElement('canvas').getContext('2d'));
            c.font = fuente; return c.measureText(t).width;
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.metricaJs' : (fuente, subida) => (() => {
            const c = (window.__dcMedidor = window.__dcMedidor || document.createElement('canvas').getContext('2d'));
            c.font = fuente; const m = c.measureText('Hg');
            const tam = parseFloat(fuente.split(' ')[1]) || 12;
            if (subida) return m.fontBoundingBoxAscent || tam * 0.93;
            return m.fontBoundingBoxDescent || tam * 0.24;
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.imagenDePixelesJs' : (w, h, base64) => (() => {
            const bin = atob(base64);
            const datos = new ImageData(w, h);
            for (let i = 0; i < bin.length; i++) datos.data[i] = bin.charCodeAt(i);
            const c = document.createElement('canvas'); c.width = w; c.height = h;
            c.getContext('2d').putImageData(datos, 0, 0);
            const L = (window.__dcLienzos = window.__dcLienzos || []);
            L.push(c); return L.length - 1;
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoImagenJs' : (id, imagen, x, y, w, h) => {
            const g = window.__dcLienzos[id].getContext('2d');
            g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
            g.drawImage(window.__dcLienzos[imagen], x, y, w, h);
        },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoExportarJs' : (id, tipo) => (() => {
            const u = window.__dcLienzos[id].toDataURL(tipo, 0.9);
            return u.substring(u.indexOf(',') + 1);
        })(),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.lienzoLiberarJs' : (id) => { const c = window.__dcLienzos[id]; if (c) { c.width = 0; c.height = 0; window.__dcLienzos[id] = null; } },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.normalizarJs' : (texto) => texto.normalize('NFD'),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.hostJs' : (u) => new URL(u).hostname,
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.esquemaJs' : (u) => new URL(u).protocol.replace(':', ''),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.rutaJs' : (u) => decodeURI(new URL(u).pathname),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.resolverJs' : (b, h) => new URL(h, b).href,
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.decodificarJs' : (t) => decodeURIComponent(t.replace(/\+/g, ' ')),
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.leerLocalJs' : (clave) => { try { return window.localStorage.getItem(clave); } catch (e) { return null; } },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.guardarLocalJs' : (clave, valor) => { try { window.localStorage.setItem(clave, valor); } catch (e) {} },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.ponerTituloJs' : (t) => { document.title = t; },
    'com.carvajalrivera.crgestionjuridicawindows.plataforma.ponerRutaJs' : (r) => { if (globalThis.history && globalThis.location && globalThis.location.hash !== r) globalThis.history.replaceState(null, '', globalThis.location.pathname + globalThis.location.search + r); },
    'com.carvajalrivera.crgestionjuridicawindows.tiempo.milisJs' : () => Date.now(),
    'com.carvajalrivera.crgestionjuridicawindows.tiempo.desfaseMinutosJs' : (milis) => new Date(milis).getTimezoneOffset()
}

const StringConstantsProxy = new Proxy({}, {
  get(_, prop) { return prop; }
});

export { wasmTag as __TAG };

export const importObject = {
    js_code,
    intrinsics: {
        memory: new WebAssembly.Memory({ initial: 0 }),
        tag: wasmTag
    },
    "'": StringConstantsProxy,
    'wasm:js-string': d2FzbTpqcy1zdHJpbmc,
    './skiko.mjs': Li9za2lrby5tanM,
};
    