"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5051],{6983:function(e,t,n){var a=n(9619),r=n(1055),s=n(7051),o=n(5277),i=n(2893),l=n(824),c=n(7188),u=n(4711),m=n(1625);const p=new u.Z({attributions:"NASA"}),d=["^",["/",["%",["+",["time"],["interpolate",["linear"],["get","year"],1850,0,2015,12]],12],12],.5],y={variables:{minYear:1850,maxYear:2015},filter:["between",["get","year"],["var","minYear"],["var","maxYear"]],symbol:{symbolType:"circle",size:["*",["interpolate",["linear"],["get","mass"],0,8,2e5,26],["-",1.75,["*",d,.75]]],color:["interpolate",["linear"],d,0,"#ffe52c",1,"rgba(242,56,22,0.61)"],opacity:["-",1,["*",d,.75]]}},v=document.getElementById("min-year"),f=document.getElementById("max-year");function w(){const e=document.getElementById("status");e.querySelector("span.min-year").textContent=v.value,e.querySelector("span.max-year").textContent=f.value}v.addEventListener("input",(function(){y.variables.minYear=parseInt(v.value),w()})),f.addEventListener("input",(function(){y.variables.maxYear=parseInt(f.value),w()})),w();const b=new XMLHttpRequest;b.open("GET","data/csv/meteorite_landings.csv"),b.onload=function(){const e=b.responseText,t=[];let n,r=e.indexOf("\n")+1;for(;-1!=(n=e.indexOf("\n",r));){const o=e.substr(r,n-r).split(",");r=n+1;const i=(0,m.mi)([parseFloat(o[4]),parseFloat(o[3])]);isNaN(i[0])||isNaN(i[1])||t.push(new a.Z({mass:parseFloat(o[1])||0,year:parseInt(o[2])||0,geometry:new s.Z(i)}))}p.addFeatures(t)},b.send();const g=new r.Z({layers:[new i.Z({source:new o.Z({layer:"toner"})}),new c.Z({style:y,source:p,disableHitDetection:!0})],target:document.getElementById("map"),view:new l.ZP({center:[0,0],zoom:2})});!function e(){g.render(),window.requestAnimationFrame(e)}()}},function(e){var t;t=6983,e(e.s=t)}]);
//# sourceMappingURL=filter-points-webgl.js.map