"use strict";var s=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var a=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var p=(t,o)=>{for(var r in o)s(t,r,{get:o[r],enumerable:!0})},x=(t,o,r,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of a(o))!l.call(t,e)&&e!==r&&s(t,e,{get:()=>o[e],enumerable:!(c=n(o,e))||c.enumerable});return t};var d=t=>x(s({},"__esModule",{value:!0}),t);var m={};p(m,{add:()=>f,sub:()=>g});module.exports=d(m);var f=()=>console.log(6);var g=()=>console.log(0);0&&(module.exports={add,sub});
