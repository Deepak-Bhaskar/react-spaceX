!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(3),i=n.n(c),o=n(0),s=n.n(o),l=n(4),u=n(1),f=n(5),p=n.n(f),m=(n(7),function(e){var t=e._handleFilters,n=e.activeYear,a=e.land_success,r=e.launch_success;return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("h2",null,"Filters"),s.a.createElement("div",{className:"sidebarContent"},s.a.createElement("div",{className:"sidebarTitle"},"Launch Year"),s.a.createElement("ul",{className:"sidebarList"},s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("activeYear",2006)},className:2006===n?"active":""},"2006"),s.a.createElement("span",{onClick:function(){return t("activeYear",2007)},className:2007===n?"active":""},"2007")),s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("activeYear",2008)},className:2008===n?"active":""},"2008"),s.a.createElement("span",{onClick:function(){return t("activeYear",2009)},className:2009===n?"active":""},"2009")),s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("activeYear",2010)},className:2010===n?"active":""},"2010"),s.a.createElement("span",{onClick:function(){return t("activeYear",2011)},className:2011===n?"active":""},"2011")),s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("activeYear",2012)},className:2012===n?"active":""},"2012"),s.a.createElement("span",{onClick:function(){return t("activeYear",2013)},className:2013===n?"active":""},"2013")),s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("activeYear",2014)},className:2014===n?"active":""},"2014"),s.a.createElement("span",{onClick:function(){return t("activeYear",2015)},className:2015===n?"active":""},"2015")),s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("activeYear",2016)},className:2016===n?"active":""},"2016"),s.a.createElement("span",{onClick:function(){return t("activeYear",2017)},className:2017===n?"active":""},"2017")),s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("activeYear",2018)},className:2018===n?"active":""},"2018"),s.a.createElement("span",{onClick:function(){return t("activeYear",2019)},className:2019===n?"active":""},"2019")),s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("activeYear",2020)},className:2020===n?"active":""},"2020"))),s.a.createElement("div",{className:"sidebarTitle"},"Successful Launch"),s.a.createElement("ul",{className:"sidebarList"},s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("launch_success",!0)},className:!0===r?"active":""},"True"),s.a.createElement("span",{onClick:function(){return t("launch_success",!1)},className:!1===r?"active":""},"False"))),s.a.createElement("div",{className:"sidebarTitle"},"Successful Landing"),s.a.createElement("ul",{className:"sidebarList"},s.a.createElement("li",null,s.a.createElement("span",{onClick:function(){return t("land_success",!0)},className:!0===a?"active":""},"True"),s.a.createElement("span",{onClick:function(){return t("land_success",null)},className:null===a?"active":""},"False")))))}),h=function(e){var t=e.missions,n=e.loading;return s.a.createElement(s.a.Fragment,null,t&&t.length&&!n?t.map((function(e){var t=e.mission_name.length>10?"".concat(e.mission_name.substring(0,10),"..."):e.mission_name;return s.a.createElement("div",{className:"column",key:e.flight_number},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"cardImage"},s.a.createElement("img",{src:"https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg",alt:"rocket images"})),s.a.createElement("div",{className:"cardContent"},s.a.createElement(u.Link,{to:"#",className:"cardTitle"},"".concat(t," #").concat(e.flight_number)),s.a.createElement("ul",{className:"contentList"},s.a.createElement("li",null,s.a.createElement("span",{className:"title"},"Mission Ids "),s.a.createElement("ul",null,e.mission_id.map((function(e){return s.a.createElement("li",{key:e},s.a.createElement("span",{className:"content"},e))})))),s.a.createElement("li",null,s.a.createElement("span",{className:"title"},"Launch Year "),s.a.createElement("span",{className:"content"},e.launch_year)),s.a.createElement("li",null,s.a.createElement("span",{className:"title"},"successful Launch "),s.a.createElement("span",{className:"content"},"".concat(e.launch_success))),s.a.createElement("li",null,s.a.createElement("span",{className:"title"},"successful Landing "),s.a.createElement("span",{className:"content"},"".concat(e.rocket.first_stage.cores[0].land_success)))))))})):!n&&t&&0==t.length?s.a.createElement("h3",{className:"emptyMission"},"No missions found"):s.a.createElement("h3",{className:"emptyMission"},"Loading..."))};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,a,r=b(c);function c(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),N(_(t=r.call(this,e)),"_handleFilters",(function(e,n){t.props.history.push({pathname:"/spaceX",state:N({},e,n)})})),n=t.props.staticContext.data,t.state={missions:n,loading:!n,activeYear:"",launch_success:"",land_success:""},t.fetchRepos=t.fetchRepos.bind(_(t)),t}return t=c,(n=[{key:"componentDidMount",value:function(){this.state.missions||this.fetchRepos(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e,t){e.match.params.id!==this.props.match.params.id&&this.fetchRepos(this.props.match.params.id)}},{key:"fetchRepos",value:function(e){var t=this;this.setState((function(){return{loading:!0}})),this.props.fetchInitialData(e).then((function(e){return t.setState((function(){return{missions:missions,loading:!1}}))}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.missions,a=e.activeYear,r=e.launch_success,c=e.land_success;return s.a.createElement("div",{className:"bgGrey"},s.a.createElement("div",{className:"container"},s.a.createElement("header",null,s.a.createElement("h1",{className:"mainHeading"},"spaceX launch programs")),s.a.createElement("div",{className:"mainWrapper"},s.a.createElement(m,{_handleFilters:this._handleFilters,activeYear:a,launch_success:r,land_success:c}),s.a.createElement("div",{className:"missionWrapper"},s.a.createElement(h,{missions:n,loading:t})))))}}])&&v(t.prototype,n),a&&v(t,a),c}(o.Component);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=C(e);if(t){var r=C(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,a,r=k(c);function c(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),P(x(t=r.call(this,e)),"_handleFilters",(function(e,n){t.setState(P({},e,t.state[e]!==n?n:""),(function(){t.props.history.push("/spaceX")}))})),n=t.props.staticContext.data,t.state={missions:n,loading:!n,activeYear:"",launch_success:"",land_success:""},t.fetchLaunches=t.fetchLaunches.bind(x(t)),t}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state,n=this.state,a=n.launch_success,r=n.land_success,c=n.activeYear;if(t){var i=Object.keys(t);this.setState(P({},i[0],t[i[0]]),(function(){var t=e.state,n=t.launch_success,a=t.land_success,r=t.activeYear;e.fetchLaunches(n,a,r)}))}this.state.missions||t||this.fetchLaunches(a,r,c)}},{key:"shouldComponentUpdate",value:function(e,t){var n=t.launch_success,a=t.land_success,r=t.activeYear;return t!==this.state&&(n===this.state.launch_success&&a===this.state.land_success&&r===this.state.activeYear||(this.fetchLaunches(n,a,r),!0))}},{key:"fetchLaunches",value:function(e,t,n){var a=this;this.setState((function(){return{loading:!0}})),this.props.fetchInitialData(e,t,n).then((function(e){return a.setState((function(){return{missions:e,loading:!1}}))}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.missions,a=e.activeYear,r=e.launch_success,c=e.land_success;return s.a.createElement("div",{className:"bgGrey"},s.a.createElement("div",{className:"container"},s.a.createElement("header",null,s.a.createElement("h1",{className:"mainHeading"},"spaceX launch programs")),s.a.createElement("div",{className:"mainWrapper"},s.a.createElement(m,{_handleFilters:this._handleFilters,activeYear:a,launch_success:r,land_success:c}),s.a.createElement("div",{className:"missionWrapper"},s.a.createElement(h,{missions:n,loading:t})))))}}])&&j(t.prototype,n),a&&j(t,a),c}(o.Component),T=n(6),L=n.n(T);function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a="";return a=encodeURI("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=".concat(e,"&land_success=").concat(t,"&launch_year=").concat(n)),L()(a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.warn(e),null}))}var I=[{path:"/",exact:!0,component:O,fetchInitialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return D(e.split("/").pop())}},{exact:!0,path:"/spaceX",component:Y,fetchInitialData:function(e,t,n){return D(e,t,n)}}];function F(){return s.a.createElement("div",null,"Four Oh Four")}function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=z(e);if(t){var r=z(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return H(this,n)}}function H(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(c,e);var t,n,a,r=G(c);function c(){return A(this,c),r.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.Switch,null,I.map((function(e){var t=e.path,n=e.exact,a=e.component,r=X(e,["path","exact","component"]);return s.a.createElement(u.Route,{key:t,path:t,exact:n,render:function(e){return s.a.createElement(a,q({},e,r))}})})),s.a.createElement(u.Route,{render:function(e){return s.a.createElement(F,e)}})))}}])&&W(t.prototype,n),a&&W(t,a),c}(o.Component),J=r()();J.use(i()()),J.use(r.a.static("public")),J.get("*",(function(e,t,n){var a=I.find((function(t){return Object(u.matchPath)(e.url,t)}))||{};(a.fetchInitialData?a.fetchInitialData(e.path):Promise.resolve()).then((function(n){var a={data:n},r=Object(l.renderToString)(s.a.createElement(u.StaticRouter,{location:e.url,context:a},s.a.createElement(B,null)));t.send('\n      <!DOCTYPE html>\n      <html>\n        <head>\n        <meta name="description" content="This is SSR app with React">\n        <meta name="robots" content="noindex, nofollow">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n          <title>SSR with REACT</title>\n          <script src="/bundle.js" defer><\/script>\n          <script>window.__INITIAL_DATA__ = '.concat(p()(n),'<\/script>\n        </head>\n\n        <body>\n          <div id="app">').concat(r,"</div>\n        </body>\n      </html>\n    "))})).catch(n)})),J.listen(3e3,(function(){console.log("Server is listening on port: 3000")}))}]);