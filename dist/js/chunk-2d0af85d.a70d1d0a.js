(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af85d"],{"0f4e":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("w-search",{on:{add:function(e){return t.$router.push("/goods/edit/0")},search:function(e){return t.getList(1)}}},[a("div",{staticClass:"w-search-item"},[a("p",[t._v("套餐名称")]),a("el-input",{attrs:{placeholder:"请输入套餐名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"套餐名称",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"套餐名称",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"邮箱"}}),a("el-table-column",{attrs:{prop:"address",label:"人数",width:"100"}}),a("el-table-column",{attrs:{prop:"address",label:"是否显示",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")])]}}])})],1),a("w-pagination",{attrs:{params:t.pagination}})],1)},n=[],r={name:"list",data:function(){return{name:"",date:"",tableData:[1,2,3,4,5,6,7,7,8,8,8,2],pagination:{total:0,page:0,pageSize:10}}},methods:{getList:function(){}}},s=r,o=a("2877"),i=Object(o["a"])(s,l,n,!1,null,"011fb709",null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0af85d.a70d1d0a.js.map