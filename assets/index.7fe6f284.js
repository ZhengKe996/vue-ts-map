import{_ as h,d as v,o as m,c as g,u as a,r as c,g as _,a as s,e as o,T as B,w as n,F as D,t as d}from"./index.1c17f496.js";import{D as T,i as p,M as k,a as C,b as I}from"./index.052c1349.js";const F=["src","width","height"],M=v({name:"i-down-button",props:{width:null,height:null},setup(l){const t=l;return(i,u)=>(m(),g("img",{class:"rightan",src:a(T),width:t.width,height:t.height},null,8,F))}});var N=h(M,[["__scopeId","data-v-a24de082"]]);const V=["src"],$={class:"add-box"},j={class:"content"},E=["src"],G={class:"m-title"},L=v({name:"game",setup(l){const t=c(!1),i=()=>{t.value=!0},u=c(),e=c(0),f=()=>{if(e.value++,e.value>=p.length){e.value=0;return}i()};return(P,r)=>{const w=_("van-col"),x=_("van-row"),y=_("van-popup");return m(),g(D,null,[s("div",{class:"box",ref_key:"menu",ref:u},[o(B,{name:"bounce"},{default:n(()=>[s("img",{class:"img",src:a(p)[e.value],alt:""},null,8,V)]),_:1}),s("div",$,[o(a(N),{class:"add",width:"100",height:"100",onClick:f})])],512),o(y,{show:t.value,"onUpdate:show":r[0]||(r[0]=b=>t.value=b),position:"top",style:{height:"60%"}},{default:n(()=>[o(x,{justify:"space-around"},{default:n(()=>[o(w,{span:"18",class:"cont-box"},{default:n(()=>[s("div",j,d(a(k)[e.value]),1),s("img",{src:a(C)[e.value],class:"t-img"},null,8,E),s("div",G,d(a(I)[e.value]),1)]),_:1})]),_:1})]),_:1},8,["show"])],64)}}});var q=h(L,[["__scopeId","data-v-f66c2af2"]]);export{q as default};