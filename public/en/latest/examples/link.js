"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2799],{2091:function(t,e,i){var s=i(2486),n=i(8322),r=i(2222),a=i(1507),o=i(3312);function h(t){return parseFloat(t)}function l(t){return function(t){return(0,o.FH)(t,5)}(t).toString()}function _(t,e){return!isNaN(t)&&t!==h(l(e))}class c extends n.ZP{constructor(t){let e;super(),e=!0===(t=Object.assign({animate:!0,replace:!1,prefix:""},t||{})).animate?{duration:250}:t.animate?t.animate:null,this.animationOptions_=e,this.replace_=t.replace,this.prefix_=t.prefix,this.listenerKeys_=[],this.initial_=!0,this.updateState_=this.updateState_.bind(this)}getParamName_(t){return this.prefix_?this.prefix_+t:t}get_(t,e){return t.get(this.getParamName_(e))}set_(t,e,i){t.set(this.getParamName_(e),i)}delete_(t,e){t.delete(this.getParamName_(e))}setMap(t){const e=this.getMap();super.setMap(t),t!==e&&(e&&this.unregisterListeners_(e),t&&(this.initial_=!0,this.updateState_(),this.registerListeners_(t)))}registerListeners_(t){this.listenerKeys_.push((0,a.oL)(t,r.Z.MOVEEND,this.updateUrl_,this),(0,a.oL)(t.getLayerGroup(),s.Z.CHANGE,this.updateUrl_,this),(0,a.oL)(t,"change:layergroup",this.handleChangeLayerGroup_,this)),this.replace_||addEventListener("popstate",this.updateState_)}unregisterListeners_(t){for(let t=0,e=this.listenerKeys_.length;t<e;++t)(0,a.bN)(this.listenerKeys_[t]);this.listenerKeys_.length=0,this.replace_||removeEventListener("popstate",this.updateState_);const e=new URL(window.location.href),i=e.searchParams;this.delete_(i,"x"),this.delete_(i,"y"),this.delete_(i,"z"),this.delete_(i,"r"),this.delete_(i,"l"),window.history.replaceState(null,"",e)}handleChangeLayerGroup_(){const t=this.getMap();t&&(this.unregisterListeners_(t),this.registerListeners_(t),this.initial_=!0,this.updateUrl_())}updateState_(){const t=this.getMap();if(!t)return;const e=t.getView();if(!e)return;const i=new URL(window.location.href).searchParams;let s=!1;const n={},r=h(this.get_(i,"z"));_(r,e.getZoom())&&(s=!0,n.zoom=r);const a=h(this.get_(i,"r"));_(a,e.getRotation())&&(s=!0,n.rotation=a);const o=[h(this.get_(i,"x")),h(this.get_(i,"y"))];var l,c;l=o,c=e.getCenter(),(_(l[0],c[0])||_(l[1],c[1]))&&(s=!0,n.center=o),s&&(!this.initial_&&this.animationOptions_?e.animate(Object.assign(n,this.animationOptions_)):(n.center&&e.setCenter(n.center),"zoom"in n&&e.setZoom(n.zoom),"rotation"in n&&e.setRotation(n.rotation)));const p=t.getAllLayers(),g=this.get_(i,"l");if(g&&g.length===p.length)for(let t=0,e=p.length;t<e;++t){const e=parseInt(g[t]);if(!isNaN(e)){const i=Boolean(e),s=p[t];s.getVisible()!==i&&s.setVisible(i)}}}updateUrl_(){const t=this.getMap();if(!t)return;const e=t.getView();if(!e)return;const i=this.initial_;this.initial_=!1;const s=e.getCenter(),n=e.getZoom(),r=e.getRotation(),a=t.getAllLayers(),o=new Array(a.length);for(let t=0,e=a.length;t<e;++t)o[t]=a[t].getVisible()?"1":"0";const h=new URL(window.location.href),_=h.searchParams;this.set_(_,"x",l(s[0])),this.set_(_,"y",l(s[1])),this.set_(_,"z",l(n)),this.set_(_,"r",l(r)),this.set_(_,"l",o.join("")),h.href!==window.location.href&&(i||this.replace_?window.history.replaceState(null,"",h):window.history.pushState(null,"",h))}}var p=c,g=i(1055),u=i(5117),d=i(2893),m=i(824);new g.Z({layers:[new d.Z({source:new u.Z})],target:"map",view:new m.ZP({center:[0,0],zoom:2})}).addInteraction(new p)}},function(t){var e;e=2091,t(t.s=e)}]);
//# sourceMappingURL=link.js.map