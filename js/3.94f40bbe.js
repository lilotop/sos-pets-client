(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"025e":function(e,t,a){"use strict";function n(e){var t=e.age,a=t.length-1,n=parseInt(t.slice(0,a)),s=t.slice(a);return 1===n?"y"===s?"שנה":"חודש":2===n?"y"===s?"שנתיים":"חודשיים":n+("y"===s?" שנים":" חודשים")}function s(e){var t=e.sex;switch(t){case"m":return"זכר";case"f":return"נקבה";default:return"אחר"}}t["a"]={sex:s,age:n}},1:function(e,t){},2:function(e,t){},"8b24":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-list",e._l(e.pets,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/dogs/"+t.id}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{rounded:"",size:"100px"}},[a("q-img",{attrs:{src:"statics/images/"+t.id+"1.jpg",ratio:1}})],1)],1),a("q-item-section",{attrs:{top:""}},[a("div",{staticClass:"text-h6"},[e._v(e._s(t.name))]),a("div",[e._v(e._s(e.utils.age(t)))]),a("div",[e._v(e._s(e.utils.sex(t)))])])],1)})),1)},s=[],r=a("967e"),i=a.n(r),c=(a("96cf"),a("fa84")),u=a.n(c),o=a("025e"),l=a("c0d6"),d={name:"PageIndex",data:function(){return{pets:[]}},methods:{},mounted:function(){var e=this;return u()(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.utils=o["a"],t.next=3,l["a"].loadFromServer();case 3:e.pets=l["a"].dogs;case 4:case"end":return t.stop()}}),t)})))()}},p=d,f=a("2877"),v=a("eebe"),m=a.n(v),g=a("1c1c"),w=a("66e5"),b=a("4074"),x=a("cb32"),h=a("068f"),_=a("714f"),k=Object(f["a"])(p,n,s,!1,null,null,null);t["default"]=k.exports;m()(k,"components",{QList:g["a"],QItem:w["a"],QItemSection:b["a"],QAvatar:x["a"],QImg:h["a"]}),m()(k,"directives",{Ripple:_["a"]})},c0d6:function(e,t,a){"use strict";var n,s=a("967e"),r=a.n(s),i=(a("96cf"),a("fa84")),c=a.n(i),u=a("bc3a"),o=a.n(u),l=a("86ec"),d=a.n(l),p=a("2b0e"),f=p["a"].observable({dogs:[],error:null,loadFromServer:function(e){return c()(r.a.mark((function t(){var a;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n&&!e){t.next=6;break}return t.next=3,o.a.get("statics/sos-data.csv");case 3:a=t.sent,f.dogs=d()(a.data,{columns:!0,skip_empty_lines:!0}),n=!0;case 6:case"end":return t.stop()}}),t)})))()}});t["a"]=f}}]);