(window.webpackJsonp=window.webpackJsonp||[]).push([[20,2,3,4,5,6,7,9,10,12],{449:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,l=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=l=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=l=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!l);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=l=l||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&l||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=l=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=l},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},450:function(t,e,n){"use strict";n.r(e);var r=n(449),l={components:{CallAgents:n.n(r).a},data:function(){return{startVal:0,endVal:2017}}},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("CallAgents",{attrs:{startVal:t.startVal,endVal:t.endVal,duration:3e3}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CallAgents:n(450).default})},451:function(t,e,n){"use strict";n.r(e);var r=n(449),l={components:{ActiveCallers:n.n(r).a},data:function(){return{startVal:0,endVal:100}}},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ActiveCallers",{attrs:{startVal:t.startVal,endVal:t.endVal,duration:3e3}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ActiveCallers:n(451).default})},452:function(t,e,n){"use strict";n.r(e);var r=n(449),l={components:{DailyVisits:n.n(r).a},data:function(){return{startVal:0,endVal:2e3}}},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("DailyVisits",{attrs:{startVal:t.startVal,endVal:t.endVal,duration:3e3}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DailyVisits:n(452).default})},454:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{value:null}},methods:{setToday:function(){var t=new Date;this.value=new Date(t.getFullYear(),t.getMonth(),t.getDate())},clearDate:function(){this.value=""}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-calendar",{attrs:{"value-as-date":"",locale:"en"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("div",{staticClass:"d-flex",attrs:{dir:"ltr"}},[t.value?n("b-button",{attrs:{size:"sm",variant:"outline-danger"},on:{click:t.clearDate}},[t._v("\n      Clear date\n    ")]):t._e(),t._v(" "),n("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-primary"},on:{click:t.setToday}},[t._v("\n      Set Today\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{options:{chart:{title:{text:"Chart one"}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},series:[{title:"No of Calls",name:"No of Calls",data:[55,62,89,66,98,72,101,75,94,120,117,139]}]}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("apexchart",{attrs:{width:"100%",type:"area",options:t.options,series:t.series}})],1)}),[],!1,null,null,null);e.default=component.exports},456:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{currentPage:1,perPage:5,items:[{id:1,name:"John Doe",date:"01/01/2021",organization:"Organization One",callPriority:"High",status:"Open"},{id:2,name:"Mary Doe",date:"01/02/2021",organization:"Organization Two",callPriority:"Low",status:"Closed"},{id:3,name:"Karen Doe",date:"01/03/2021",organization:"Organization Three",callPriority:"Medium",status:"Open"},{id:4,name:"Phillip Doe",date:"01/04/2021",organization:"Organization Four",callPriority:"High",status:"In Progress"},{id:5,name:"Anne Doe",date:"01/05/2021",organization:"Organization Four",callPriority:"Medium",status:"In Progress"},{id:3,firstName:"james",lastName:"jones",organization:"eewewe",callType:"dwdwd",status:"resolved"},{id:3,firstName:"james",lastName:"jones",organization:"eewewe",callType:"dwdwd",status:"resolved"},{id:3,firstName:"james",lastName:"jones",organization:"eewewe",callType:"dwdwd",status:"resolved"}]}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tasksTable"},[n("b-table",{staticClass:"table-hover table-striped",attrs:{items:t.items,"per-page":t.perPage,"current-page":t.currentPage}}),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.items.length,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)}),[],!1,null,null,null);e.default=component.exports},457:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{series:[44,55,13],chartOptions:{labels:["Open","Closed","In Progress"],chart:{type:"donut"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("apexchart",{attrs:{type:"donut",options:t.chartOptions,series:t.series}})],1)}),[],!1,null,null,null);e.default=component.exports},458:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{series:[{data:[40,50,80]}],options:{chart:{type:"bar",height:200},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["High","Medium","Low"]}}}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"barChart"},[n("apexchart",{attrs:{width:"100%",type:"bar",options:t.options,series:t.series}})],1)}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);var r=n(43),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-jumbotron",{staticClass:"mainHeader"},[n("b-container",[n("h1",[t._v("Welcome back, "),n("span",[t._v("John Doe")])]),t._v(" "),n("hr",{staticClass:"my-4"}),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at varius nibh. Nulla facilisi. Proin id tempor purus, sodales efficitur nibh.\n            ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},478:function(t,e,n){"use strict";n.r(e);var r=n(43),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-container",{staticClass:"p-0",attrs:{fluid:""}},[n("Header")],1),t._v(" "),n("b-container",{staticClass:"counterSummary"},[n("b-row",[n("b-col",{attrs:{lg:"3"}},[n("b-card",{attrs:{title:"Call Agents",shadow:""}},[n("b-card-text",[n("h2",[n("CallAgents")],1),t._v(" "),n("span",{staticClass:"icon-earphones-alt"})])],1)],1),t._v(" "),n("b-col",{attrs:{lg:"3"}},[n("b-card",{attrs:{title:"Active Callers",shadow:""}},[n("b-card-text",[n("h2",[n("ActiveCallers")],1),t._v(" "),n("span",{staticClass:"icon-call-out"})])],1)],1),t._v(" "),n("b-col",{attrs:{lg:"3"}},[n("b-card",{attrs:{title:"Daily Visits",shadow:""}},[n("b-card-text",[n("h2",[n("DailyVisits")],1),t._v(" "),n("span",{staticClass:"icon-eye"})])],1)],1),t._v(" "),n("b-col",{attrs:{lg:"3"}},[n("b-card",{attrs:{title:"Calls Resolved",shadow:""}},[n("b-card-text",[n("h2",[t._v("1900")]),t._v(" "),n("span",{staticClass:"icon-cursor"})])],1)],1)],1)],1),t._v(" "),n("b-container",[n("b-row",{staticClass:"chartData"},[n("b-col",{staticClass:"left-col",attrs:{lg:"8"}},[n("div",{staticClass:"chart"},[n("div",{staticClass:"title-header"},[n("h3",[t._v("Monthly Calls Overview")])]),t._v(" "),n("AreaChart")],1),t._v(" "),n("div",{staticClass:"card mt-4"},[n("div",{staticClass:"title-header"},[n("h3",[t._v("Calls Status")])]),t._v(" "),n("Table")],1),t._v(" "),n("div",{staticClass:"card block-list mt-4"},[n("div",{staticClass:"title-header"},[n("h3",[t._v("My Tasks")])]),t._v(" "),n("ul",[n("li",[n("h3",[t._v("01")]),t._v(" "),n("h4",[t._v("Call John Doe")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),t._v(" "),n("span",{staticClass:"status"},[t._v("Done")])]),t._v(" "),n("li",[n("h3",[t._v("02")]),t._v(" "),n("h4",[t._v("Call John Doe")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),t._v(" "),n("span",{staticClass:"status"},[t._v("In progress")])]),t._v(" "),n("li",[n("h3",[t._v("03")]),t._v(" "),n("h4",[t._v("Call John Doe")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),t._v(" "),n("span",{staticClass:"status"},[t._v("Not done")])]),t._v(" "),n("li",[n("h3",[t._v("04")]),t._v(" "),n("h4",[t._v("Call John Doe")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),t._v(" "),n("span",{staticClass:"status"},[t._v("Not done")])])]),t._v(" "),n("b-link",{staticClass:"btn btn-primary m-2",attrs:{to:"/"}},[t._v("View all tasks")])],1)]),t._v(" "),n("b-col",{staticClass:"right-col",attrs:{lg:"4"}},[n("div",{staticClass:"chart"},[n("div",{staticClass:"title-header"},[n("h3",[t._v("Calls by Status")])]),t._v(" "),n("DonutChart")],1),t._v(" "),n("div",{staticClass:"chart"},[n("div",{staticClass:"title-header"},[n("h3",[t._v("Calls Priority Overwiew")])]),t._v(" "),n("BarChart")],1),t._v(" "),n("div",{staticClass:"card block-list mt-4"},[n("div",{staticClass:"title-header"},[n("h3",[t._v("Notifications")])]),t._v(" "),n("ul",{staticClass:"mb-0"},[n("li",[n("h4",[t._v("Lorem ipsum dolor sit amet")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])]),t._v(" "),n("li",[n("h4",[t._v("Phasellus cursus purus lacus")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])]),t._v(" "),n("li",[n("h4",[t._v("Morbi eleifend lacus sit amet")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])])]),t._v(" "),n("b-link",{staticClass:"btn btn-primary m-2",attrs:{to:"/"}},[t._v("View all notifications")])],1),t._v(" "),n("div",{staticClass:"calWidget"},[n("h3",[t._v("Calendar")]),t._v(" "),n("Calendar")],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(459).default,CallAgents:n(450).default,ActiveCallers:n(451).default,DailyVisits:n(452).default,AreaChart:n(455).default,Table:n(456).default,DonutChart:n(457).default,BarChart:n(458).default,Calendar:n(454).default})}}]);