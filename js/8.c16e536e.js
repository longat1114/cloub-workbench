(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{1100:function(t,e,n){},"43f5":function(t,e,n){"use strict";var i=n("f10a"),o=n.n(i);o.a},"4a0d":function(t,e,n){},"4b91":function(t,e,n){"use strict";var i=n("4a0d"),o=n.n(i);o.a},bac0:function(t,e,n){"use strict";var i=n("c5ba"),o=n.n(i);o.a},bfad:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dw-application",[n("dw-datatable",{attrs:{options:t.options,columns:t.columns,content:t.content}}),n("dw-datatable-aider"),n("dw-datatable-floating")],1)},o=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),a=n.n(r),s=n("436b"),c=n("e475"),d=n("6714"),u=(n("7f7f"),n("7514"),n("551c"),n("967e")),l=n.n(u),m=(n("96cf"),n("fa84")),f=n.n(m),p=n("2ef0"),h=n.n(p),b=n("2b0e"),w={count:"共173筆",button:{filter:"篩選",search:"搜尋",close:"關閉",next:"下一步",previous:"上一步",master:"分頁",detail:"分割",revert:"全部還原",cancel:"取消",save:"儲存",promise:"確定"},actions:{displaying:"編輯欄位",sorting:"內容排序",expanded:"全部展開",contracted:"全部收合",refresh:"重新整理",excel:"輸出Excel"},tooltip:{preset:"預設",pinned:"釘選",empty:"一鍵清除"},description:{title:"說明",keyword:"請輸入名稱或關鍵字",name:"名稱",description:"說明"},sorting:{title:"內容排序",allarea:"欄位名稱"},displaying:{title:"欄位編輯",allarea:"欄位名稱",rowarea:"行",columnarea:"欄",dataarea:"Σ值"},condition:{title:"篩選條件"},bookmark:{title:"歷史紀錄"},criterion:{title:"一般選項",name:"自訂條件名稱",desc:"說明"},selection:{step1:"篩選條件",step2:"已篩選條件",demo:{filtered:"品項編號",criteria:"包含",keyword:"00000",number:"共4筆"}}},g=w;function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C=function(){var t=function(){this._modules={}};return t.prototype={add:function(t,e){return this._modules[t]=e,this},load:function(t,e){var n=this._modules[t];return n().then(e)},dialog:function(t){var e=this,n=function(e,n){s["a"].create(x({component:n.default,parent:t},e))};return{show:function(t,i){e.load(t,n.bind(e,i||{}))}}}},t}();function y(t){var e=new C;e.add("description",(function(){return n.e(10).then(n.bind(null,"5ef4"))})).add("displaying",(function(){return n.e(11).then(n.bind(null,"89e3"))})).add("sorting",(function(){return n.e(13).then(n.bind(null,"07b8"))})).add("selection",(function(){return n.e(9).then(n.bind(null,"640a"))})).add("condition",(function(){return n.e(6).then(n.bind(null,"a682"))})).add("drilldown",(function(){return n.e(12).then(n.bind(null,"39a8"))}));var i=e.dialog(t);return i}var F=function(){var t=function(t){this._screen=y(t)};return t.prototype={show:function(t,e){this._screen.show(t,e)}},t}(),_=F,O=function(){function t(t,e,n){var i=t();return null!==i?Promise.resolve(i):e().then((function(t){return n(t)}))}function e(t,e){return t().then((function(t){return e(),t}))}function n(t){return t?"standard":"advanced"}var i=function(t){this._backend=t,this._customizeSort=null,this._customizeField=null,this.id=null,this.caption=null,this.presentation=null,this.dataGroup=null,this.schema=null,this.fields=null,this.menus=null,this.conditions={standard:!0,browsing:"0",form:null,userCriteria:null}};return i.prototype={allColumns:function(){return this.fields},initialize:function(){var t=f()(l.a.mark((function t(e){var n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this._backend.getMetadata(e);case 2:n=t.sent,this.id=e||"RPT007",this.caption=this.id,this.presentation=n.type,this.fields=n.fields;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getCustomizeSort:function(){var e=this;return t((function(){return e._customizeSort}),(function(){return e._backend.getCustomizeSort(e.id)}),(function(t){return e._customizeSort=t}))},setCustomizeSort:function(t){var n=this;return e((function(){return n._backend.setCustomizeSort(n.id,t)}),(function(){return n._customizeSort=t}))},containsCustomizeField:function(){return null!==this._customizeField?Promise.resolve(this._customizeField.length>0):this._backend.containsCustomizeField(this.id)},getCustomizeField:function(){var e=this;return t((function(){return e._customizeField}),(function(){return e._backend.getCustomizeField(e.id)}),(function(t){return e._customizeField=t}))},removeCustomizeField:function(){var t=this;return e((function(){return t._backend.removeCustomizeField(t.id)}),(function(){return t._customizeField=[]}))},setCustomizeField:function(t){var n=this;return e((function(){return n._backend.setCustomizeField(n.id,t)}),(function(){return n._customizeField=t}))},getConditionHistory:function(t){var e=n(t);return this._backend.getConditionHistory(this.id,e)},getConditionForm:function(){var e=this;return t((function(){return e.conditions.form}),(function(){return e._backend.getConditionForm(e.id)}),(function(t){return e.conditions.form=t}))},getConditionCriteria:function(t,e){var i=n(t);return this._backend.getConditionCriteria(this.id,i,e)}},i}(),D=O;function S(t){return new Promise((function(e,n){setTimeout((function(){t(e)}),1500)}))}function P(){var t=[{name:"item 4",caption:"item-4",index:4,visible:!0,width:100,isFixed:!0,description:"",area:"ColumnArea"},{name:"item#1",caption:"item-1",index:1,visible:!0,width:100,isFixed:!0,description:"this is item 1",area:"ColumnArea"},{name:"item 2",caption:"item-2",index:2,visible:!0,width:100,isFixed:!1,description:"",area:"ColumnArea"},{name:"item 3",caption:"item-3",index:3,visible:!0,width:100,isFixed:!0,description:"",area:"ColumnArea"},{name:"item 5",caption:"item-5",index:5,visible:!0,width:100,isFixed:!1,description:"",area:"DataArea"},{name:"item 6",caption:"item-6",index:6,visible:!0,width:100,isFixed:!1,description:"",area:"DataArea"},{name:"item 7",caption:"item-7",index:-1,visible:!1,width:100,isFixed:!0,description:"",area:"DataArea"},{name:"item 8",caption:"item-8",index:8,visible:!0,width:100,isFixed:!1,description:"",area:"RowArea"},{name:"item 9",caption:"item-9",index:-1,visible:!1,width:100,isFixed:!1,description:"",area:"RowArea"},{name:"item 10",caption:"item-10",index:10,visible:!0,width:100,isFixed:!1,description:"",area:"RowArea"},{name:"item 11",caption:"item-11",index:-1,visible:!1,width:100,isFixed:!1,description:"",area:"RowArea"},{name:"item 12",caption:"item-12",index:12,visible:!0,width:100,isFixed:!1,description:"",area:"RowArea"},{name:"item 13",caption:"item-13",index:-1,visible:!1,width:100,isFixed:!1,description:"",area:""},{name:"item 14",caption:"item-14",index:-1,visible:!1,width:100,isFixed:!1,description:"",area:""},{name:"item 15",caption:"item-15",index:-1,visible:!1,width:100,isFixed:!1,description:"",area:""},{name:"item 16",caption:"item-16",index:16,visible:!0,width:100,isFixed:!1,description:"",area:""},{name:"item 17",caption:"item-17",index:17,visible:!0,width:100,isFixed:!1,description:"",area:""}];return t}function z(){var t={type:"grid",fields:P()};return S((function(e){return e(t)}))}function j(){var t=[{name:"item 13",mode:"desc"},{name:"item#1",mode:"asc"},{name:"item 17",mode:"asc"},{name:"item 11",mode:"desc"},{name:"item 5",mode:"asc"}];return S((function(e){return e(t)}))}function k(){var t=[{name:"item 13",index:1,width:100,visible:!0,isFixed:!0},{name:"item 1",index:3,width:120,visible:!0,isFixed:!1},{name:"item 17",index:2,width:130,visible:!1,isFixed:!1},{name:"item 11",index:6,width:140,visible:!1,isFixed:!1},{name:"item 5",index:4,width:150,visible:!0,isFixed:!0}];return S((function(e){return e(t)}))}function E(){var t=[{id:"0",name:"DFKLF3459803#0",description:"DFKLF3459803DEFEFEFE2748973289479822394893284902834908239084",date:"2018/03/26",preset:!0,pinned:!0,mode:"standard"},{id:"1",name:"DFKLF3459803#1",description:"DFKLF3459803DEFEFEFE274897328947982239489328490283490823908490890890",date:"2018/03/27",preset:!1,pinned:!1,mode:"standard"},{id:"2",name:"DFKLF3459803#2",description:"DFKLF3459803DEFEFEFE274897328947982239489328490283490823908490890890",date:"2018/03/28",preset:!1,pinned:!0,mode:"standard"},{id:"3",name:"DFKLF3459803#3",description:"DFKLF3459803DEFEFEFE2748",date:"2018/03/29",preset:!1,pinned:!1,mode:"standard"}];return S((function(e){return e(t)}))}function R(){var t=[{id:"cond_1",caption:"SingleBox",editor:"SingleBox",format:"",filter:{option:"SqlParameter",target:"@super_order_id"},formControl:{required:!0,defultValue:"",rightDefaultValue:""},openwin:{targetId:"",targetColumn:""}},{id:"cond_2",caption:"RangeBox",editor:"RangeBox",format:"",filter:{option:"Defult",target:""},formControl:{required:!1,defultValue:"",rightDefaultValue:""},openwin:{targetId:"",targetColumn:""}},{id:"cond_3",caption:"MultiBox",editor:"MultiBox",format:"",filter:{option:"Defult",target:""},formControl:{required:!1,defultValue:"",rightDefaultValue:""},openwin:{targetId:"",targetColumn:""}},{id:"cond_4",caption:"DateTimePicker",editor:"DateTimePicker",format:"",filter:{option:"Defult",target:""},formControl:{required:!1,defultValue:"",rightDefaultValue:""},openwin:{targetId:"",targetColumn:""}},{id:"cond_5",caption:"RangeDateTimePicker",editor:"RangeDateTimePicker",format:"",filter:{option:"Defult",target:""},formControl:{required:!1,defultValue:"",rightDefaultValue:""},openwin:{targetId:"",targetColumn:""}},{id:"cond_6",caption:"CheckBox",editor:"CheckBox",format:"is_consigned = 0;is_consigned = 1",filter:{option:"Defult",target:""},formControl:{required:!1,defultValue:"",rightDefaultValue:""},openwin:{targetId:"",targetColumn:""}},{id:"cond_7",caption:"ComboBox",editor:"ComboBox",format:"un_released:d.input_part_release_qty=0;released:d.input_part_release_qty>0",filter:{option:"Defult",target:""},formControl:{required:!1,defultValue:"",rightDefaultValue:""},openwin:{targetId:"",targetColumn:""}},{id:"cond_8",caption:"UserType",editor:"UserType",format:"",filter:{option:"Defult",target:""},formControl:{required:!1,defultValue:"",rightDefaultValue:""},openwin:{targetId:"",targetColumn:""}}];return S((function(e){return e(t)}))}function T(t){var e={conditions:{condition:"and",rules:[{operator:"",operand:"",type:"",value:[],mode:[]}]}};return S((function(t){return t(e)}))}var q=function(){var t=function(){};return t.prototype={getMetadata:function(t){return z()},getCustomizeSort:function(t){return j()},setCustomizeSort:function(t,e){return S((function(t){return t(e)}))},containsCustomizeField:function(t){return S((function(t){return t(!0)}))},getCustomizeField:function(t){return k()},removeCustomizeField:function(t){return S((function(t){return t([])}))},setCustomizeField:function(t,e){return S((function(t){return t(e)}))},getConditionHistory:function(t,e){return E()},getConditionForm:function(t){return R()},getConditionCriteria:function(t,e,n){return T()}},t}(),V=q;function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=b["default"].extend({static:function(){return{context:null,screen:null,columns:null}},methods:{id:function(){return this.context.id},presentation:function(){return this.context.presentation},initialize:function(){var t=f()(l.a.mark((function t(e){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.context=new D(new V),this.screen=new _(this.$options.host),t.next=4,this.context.initialize(e);case 4:this.columns=this.context.allColumns();case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),load:function(t){},getDescription:function(){return Promise.resolve(this.columns)},getCustomizeSort:function(){return this.context.getCustomizeSort()},setCustomizeSort:function(t){var e=this;return this.context.setCustomizeSort(t).then((function(t){return e.$emit("sorting-complete",t),t}))},getCustomizeField:function(){return this.context.getCustomizeField()},setCustomizeField:function(t){var e=this;return this.context.setCustomizeField(t).then((function(t){return e.columns=t.map((function(t){var n=h.a.find(e.columns,["name",t.name]);return B({},n,{},t)})),t}))},getConditionHistory:function(t){return this.context.getConditionHistory(t)},getConditionForm:function(){return this.context.getConditionForm()},getConditionCriteria:function(t,e){return this.context.getConditionCriteria(t,e)},showConditionScreen:function(){var t=this.context.conditions;this.screen.show("condition",{standard:t.standard,browsing:t.browsing,criteria:t.userCriteria,tryConditionHistory:this.getConditionHistory,tryConditionForm:this.getConditionForm,tryConditionCriteria:this.getConditionCriteria,tryComplete:function(){}})},showSelectionScreen:function(){this.screen.show("selection")},showDisplayingScreen:function(){this.screen.show("displaying",{presentation:this.presentation(),datatableColumns:this.columns,tryContent:this.getCustomizeField,tryComplete:this.setCustomizeField})},showSortingScreen:function(){this.screen.show("sorting",{datatableColumns:this.columns,tryContent:this.getCustomizeSort,tryComplete:this.setCustomizeSort})},showDescriptionScreen:function(){this.screen.show("description",{tryContent:this.getDescription})},showDrilldownScreen:function(t){var e=t.prop,n=t.value,i=t.data;this.screen.show("drilldown",{column:e,context:n,data:i})}},data:function(){return{drilldown:[{name:"RPT0170",text:"(RPT017) Order",link:"RPT017"},{name:"RPT0171",text:"(RPT017) Order",link:"RPT017"},{name:"RPT0172",text:"(RPT017) Order",link:"RPT017"},{name:"RPT0173",text:"(RPT017) Order",link:"RPT017"},{name:"RPT0174",text:"(RPT017) Order",link:"RPT017"}],selection:{step1:{columnDefs:[{prop:".",showCheckbox:!0,showHeaderCheckbox:!0,width:48},{prop:"name",name:g.description.name},{prop:"description",name:g.description.description}],rowData:[{name:"name",description:g.description.name},{name:"description",description:g.description.description}]},step2:{columnDefs:[{prop:"name",name:g.description.name},{prop:"description",name:g.description.description}],rowData:[{name:"name",description:g.description.name}]}}}}}),L=I,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dw-drilldown-cell",on:{click:t.onShowScreen}},[t._v("\n  "+t._s(t.params.value)+"\n")])},K=[],$=n("d328"),M=b["default"].extend({mixins:[Object($["a"])("intent","dw-drilldown-cell")],methods:{onShowScreen:function(){var t=this.params,e=t.column,n=t.value,i=t.data,o={prop:e.colId,value:n,data:i};this.intent("drilldown",o)}}}),Q=M,G=(n("bac0"),n("2877")),U=Object(G["a"])(Q,H,K,!1,null,null,null),J=U.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dw-datatable-sticky fixed-top-right"},[n("dw-button",{staticClass:"dw-datatable-aider",attrs:{round:"",icon:"question"},on:{click:t.onShowScreen}})],1)},W=[],X={mixins:[Object($["a"])("intent","dw-datatable-aider")],methods:{onShowScreen:function(){this.intent("description")}}},Y=X,Z=(n("4b91"),n("eebe")),tt=n.n(Z),et=n("9c40"),nt=Object(G["a"])(Y,N,W,!1,null,null,null),it=nt.exports;tt()(nt,"components",{QBtn:et["a"]});var ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dw-datatable-sticky absolute-bottom-right"},[n("dw-button",{staticClass:"dw-datatable-floating",attrs:{round:"",icon:"filter"},on:{click:t.onShowScreen}})],1)},rt=[],at={mixins:[Object($["a"])("intent","dw-datatable-floating")],methods:{onShowScreen:function(){this.intent("condition")}}},st=at,ct=(n("43f5"),Object(G["a"])(st,ot,rt,!1,null,null,null)),dt=ct.exports;tt()(ct,"components",{QBtn:et["a"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dw-datatable-actions",on:{touchend:t.onTouchend}},[n("dw-icon",{staticClass:"dw-datatable-action-icon",attrs:{name:"menu"}}),n("q-menu",{ref:"popup",attrs:{"content-class":"dw-datatable-actions-popup",anchor:"bottom right",self:"top right",offset:[0,-4]}},[n("q-list",{staticClass:"dw-datatable-actions-body"},[n("q-item",{staticClass:"dw-datatable-action dw-datatable-action-noicon dw-datatable-action-separator"},[n("q-item-section",{staticClass:"dw-datatable-action-content"},[n("dw-label",{staticClass:"dw-datatable-action-text",attrs:{value:t._t.count}})],1)],1),t._l(t.actions,(function(t){return n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.name,staticClass:"dw-datatable-action",class:{"dw-datatable-action-separator":t.separator},attrs:{clickable:""},on:{click:t.action}},[n("q-item-section",{staticClass:"dw-datatable-action-content"},[n("dw-icon",{staticClass:"dw-datatable-action-icon",attrs:{name:t.icon}}),n("dw-label",{staticClass:"dw-datatable-action-text",attrs:{value:t.text}})],1)],1)}))],2)],1)],1)},lt=[],mt=b["default"].extend({mixins:[Object($["a"])("_t","dw-datatable-actions"),Object($["a"])("intent","dw-datatable-actions")],computed:{actions:function(){return[{name:"displaying",text:this._t.actions.displaying,icon:"edit",action:this.showDisplayingScreen},{name:"sorting",text:this._t.actions.sorting,icon:"sortby",action:this.showSortingScreen},{name:"expanded",text:this._t.actions.expanded,icon:"all-expand",action:this.dummy},{name:"contracted",text:this._t.actions.contracted,icon:"all-collapse",action:this.dummy,separator:!0},{name:"refresh",text:this._t.actions.refresh,icon:"refresh",action:this.dummy},{name:"excel",text:this._t.actions.excel,icon:"excel-export",action:this.dummy}]}},methods:{showDisplayingScreen:function(){this.intent("displaying")},showSortingScreen:function(){this.intent("sorting")},dummy:function(){},onTouchend:function(){this.$refs.popup.toggle()}}}),ft=mt,pt=(n("fd47"),n("4e73")),ht=n("1c1c"),bt=n("66e5"),wt=n("4074"),gt=n("7f67"),vt=Object(G["a"])(ft,ut,lt,!1,null,null,null),xt=vt.exports;function Ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function yt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ct(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}tt()(vt,"components",{QMenu:pt["a"],QList:ht["a"],QItem:bt["a"],QItemSection:wt["a"]}),tt()(vt,"directives",{ClosePopup:gt["a"]});var Ft={components:{"dw-datatable-aider":it,"dw-datatable-floating":dt},mixins:[c["a"],d["a"]],provide:function(){return{_t:g,vm:this.vm,intent:this.showScreen}},computed:{vm:function(){return new L({host:this})}},methods:{showScreen:function(t,e){var n=t[0].toUpperCase()+t.slice(1),i="show".concat(n,"Screen");this.vm[i](e)}},created:function(){this.vm.initialize(null)},beforeMount:function(){var t=this;this.defGrid().then((function(e){var n=yt({},e.component.view,{extensions:{"drilldown-cell":J,"datatable-actions":xt}});t.options=n,t.columns=e.component.columns})),this.loadGrid().then((function(e){return t.content=e}))}},_t=Ft,Ot=Object(G["a"])(_t,i,o,!1,null,null,null),Dt=Ot.exports;e["default"]=Dt},c5ba:function(t,e,n){},f10a:function(t,e,n){},fd47:function(t,e,n){"use strict";var i=n("1100"),o=n.n(i);o.a}}]);