!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function S(e){return l=e,f=setTimeout(O,t),s?y(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function O(){var e=p();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function T(e){return f=void 0,m&&o?y(e):(o=i=void 0,u)}function w(){var e=p(),n=h(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(O,t),y(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(p())},w}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var S="feedback-form-state",h=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),T=document.querySelector(".feedback-form textarea");h.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),e.currentTarget.reset(),localStorage.removeItem(S),w={}})),h.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(w))}),500));var w={};!function(){var e=localStorage.getItem(S);try{e=JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}e&&(e.email&&(O.value=e.email,w.email=e.email),e.message&&(T.value=e.message,w.message=e.message))}()}();
//# sourceMappingURL=03-feedback.f771cdfa.js.map