(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0ddf":function(t,n,o){"use strict";o.r(n);var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("dw-application",[o("dw-datatable",{attrs:{options:t.agOptions,columns:t.columnDefs,content:t.rowData}})],1)},a=[],e=o("f724"),s=o("22cf"),r={mixins:[e["a"],s["a"]],data:function(){return{agOptions:void 0}},beforeMount:function(){var t=this;this.columnDefs=this.defGrid(),this.loadGrid().then((function(n){return t.rowData=n})),this.agOptions={rowSelection:"single"}}},c=r,u=o("2877"),l=Object(u["a"])(c,i,a,!1,null,null,null);n["default"]=l.exports}}]);