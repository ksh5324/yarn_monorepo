"use strict";var r=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var x=(o,s)=>{for(var e in s)r(o,e,{get:s[e],enumerable:!0})},a=(o,s,e,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let t of l(s))!p.call(o,t)&&t!==e&&r(o,t,{get:()=>s[t],enumerable:!(n=c(s,t))||n.enumerable});return o};var g=o=>a(r({},"__esModule",{value:!0}),o);var b={};x(b,{add:()=>f,consoles:()=>d,sub:()=>m});module.exports=g(b);var f=()=>console.log(6);var m=()=>console.log(0);var d=o=>{console.log(o)};0&&(module.exports={add,consoles,sub});
