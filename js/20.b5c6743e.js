(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"2bb3":function(n,t,o){"use strict";o.r(t);var e=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("dw-application",{attrs:{drilldown:""}},[o("dw-datatable",{attrs:{options:n.options,columns:n.columns,content:n.content}})],1)},i=[],c=o("e475"),s=o("6714"),a={mixins:[c["a"],s["a"]],beforeMount:function(){var n=this;this.defGrid().then((function(t){n.options=t.component.view,n.columns=t.component.columns})),this.loadGrid().then((function(t){return n.content=t}))}},l=a,u=o("2877"),r=Object(u["a"])(l,e,i,!1,null,null,null);t["default"]=r.exports}}]);