(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"258e":function(n,t,o){"use strict";o.r(t);var e=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("dw-application",[o("dw-datatable",{attrs:{options:n.options,columns:n.columns,content:n.content}})],1)},i=[],c=o("e475"),s=o("6714"),u={mixins:[c["a"],s["a"]],beforeMount:function(){var n=this;this.defPivot().then((function(t){n.options=t.component.view,n.columns=t.component.columns})),this.loadPivot().then((function(t){return n.content=t}))}},a=u,l=o("2877"),p=Object(l["a"])(a,e,i,!1,null,null,null);t["default"]=p.exports}}]);