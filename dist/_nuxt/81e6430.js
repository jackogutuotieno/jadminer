(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{460:function(e,t,n){"use strict";n.r(t);var r={name:"my-component",data:function(){return{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"yyyy-MM-dd"},{label:"Percent",field:"score",type:"percentage"}],rows:[{id:1,name:"John",age:20,createdAt:"2011-10-31",score:.03343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.03343},{id:4,name:"Chris",age:55,createdAt:"2011-10-11",score:.03343},{id:5,name:"Dan",age:40,createdAt:"2011-10-21",score:.03343},{id:6,name:"John",age:20,createdAt:"2011-10-31",score:.03343}]}}},o=n(43),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vue-good-table",{attrs:{columns:e.columns,rows:e.rows,"pagination-options":{enabled:!0,mode:"records",perPage:5,position:"top",perPageDropdown:[3,7,9],dropdownAllowAll:!1,setCurrentPage:2,nextLabel:"next",prevLabel:"prev",rowsPerPageLabel:"Rows per page",ofLabel:"of",pageLabel:"page",allLabel:"All",infoFn:function(e){return"my own page "+e.firstRecordOnPage}}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);