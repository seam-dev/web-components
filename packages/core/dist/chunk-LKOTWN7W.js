var at=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function ze(e){return at.get(e)}function Oe(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}function Pe(e,t){var r=/^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(e);return r?r[1]?/^sti/i.test(t)?1:0:r[2]?/^pat/i.test(t)?1:0:r[3]?/^image-/i.test(t)?1:0:r[4]?t[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(t)?4:0:0}var m=(e,t)=>!!~e.indexOf(t),f=(e,t="-")=>e.join(t),be=(e,t)=>f(e.filter(Boolean),t),g=(e,t=1)=>e.slice(t),st=e=>e,je=()=>{},W=e=>e[0].toUpperCase()+g(e),he=e=>e.replace(/[A-Z]/g,"-$&").toLowerCase(),G=(e,t)=>{for(;typeof e=="function";)e=e(t);return e},De=(e,t)=>{e.size>t&&e.delete(e.keys().next().value)},Re=(e,t)=>!m("@:&",e[0])&&(m("rg",(typeof t)[5])||Array.isArray(t)),me=(e,t,r)=>t?Object.keys(t).reduce((i,a)=>{let n=G(t[a],r);return Re(a,n)?i[he(a)]=n:i[a]=a[0]=="@"&&m("figa",a[1])?(i[a]||[]).concat(n):me(i[a]||{},n,r),i},e):e,We=typeof CSS!="undefined"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& ")),ae=e=>(Array.isArray(e)||(e=[e]),"@media "+f(e.map(t=>(typeof t=="string"&&(t={min:t}),t.raw||f(Object.keys(t).map(r=>`(${r}-width:${t[r]})`)," and "))),",")),we=e=>{for(var t=9,r=e.length;r--;)t=Math.imul(t^e.charCodeAt(r),1597334677);return"tw-"+((t^t>>>9)>>>0).toString(36)},lt=(e,t)=>{for(var r=0,i=e.length;r<i;){let a=i+r>>1;e[a]<=t?r=a+1:i=a}return i},_,K,I=(e="")=>(_.push(e),""),xe=e=>{_.length=Math.max(_.lastIndexOf("")+~~e,0)},ct=e=>e&&!m("!:",e[0]),dt=e=>e[0]==":",_e=(e,t)=>{K.push({v:_.filter(dt),d:e,n:t,i:m(_,"!"),$:""})},Le=e=>{let t=e[0]=="-";t&&(e=g(e));let r=f(_.filter(ct));return _e(e=="&"?r:(r&&r+"-")+e,t),""},ee=(e,t)=>{let r="";for(let i,a=!1,n=0;i=e[n++];){if(a||i=="["){r+=i,a=i!="]";continue}switch(i){case":":r=r&&I(":"+(e[n]==i?e[n++]:"")+r);break;case"(":r=r&&I(r),I();break;case"!":I(i);break;case")":case" ":case"	":case`
`:case"\r":r=r&&Le(r),xe(i!==")");break;default:r+=i}}r&&(t?I(":"+r):r.slice(-1)=="-"?I(r.slice(0,-1)):Le(r))},Ne=e=>{I(),se(e),xe()},ft=(e,t)=>{if(t){I();let r=m("tbu",(typeof t)[1]);ee(e,r),r&&Ne(t),xe()}},se=e=>{switch(typeof e){case"string":ee(e);break;case"function":_e(e);break;case"object":Array.isArray(e)?e.forEach(Ne):e&&Object.keys(e).forEach(t=>{ft(t,e[t])})}},Ue=new WeakMap,gt=e=>{let t=Ue.get(e);if(!t){let r=NaN,i="";t=e.map((a,n)=>{if(r!==r&&(a.slice(-1)=="["||m(":-(",(e[n+1]||"")[0]))&&(r=n),n>=r)return c=>{n==r&&(i=""),i+=a,m("rg",(typeof c)[5])?i+=c:c&&(ee(i),i="",se(c)),n==e.length-1&&ee(i)};let s=K=[];ee(a);let d=[..._];return K=[],c=>{K.push(...s),_=[...d],c&&se(c)}}),Ue.set(e,t)}return t},ve=e=>(_=[],K=[],Array.isArray(e[0])&&Array.isArray(e[0].raw)?gt(e[0]).forEach((t,r)=>t(e[r+1])):se(e),K),ye,ut=(e,t)=>(typeof t=="function"&&(ye=!1),t),pt=e=>{ye=!0;let t=JSON.stringify(e,ut);return ye&&t},Me=new WeakMap,bt=(e,t)=>{let r=pt(t),i;if(r){var a=Me.get(e);a||Me.set(e,a=new Map),i=a.get(r)}return i||(i=Object.defineProperty((n,s)=>(s=Array.isArray(n)?s:n,G(e(t,s),s)),"toJSON",{value:()=>r||t}),a&&(a.set(r,i),De(a,1e4))),i},ht=(e,{css:t})=>t(ve(e)),mt=(...e)=>bt(ht,e),Ie=e=>(t,r,i,a)=>{if(t){let n=r&&e(r);if(n&&n.length>0)return n.reduce((s,d)=>(s[be([i,d,a])]=t,s),{})}},wt=Ie(e=>({t:["top-left","top-right"],r:["top-right","bottom-right"],b:["bottom-left","bottom-right"],l:["bottom-left","top-left"],tl:["top-left"],tr:["top-right"],bl:["bottom-left"],br:["bottom-right"]})[e]),le=e=>{let t=({x:"lr",y:"tb"}[e]||e||"").split("").sort();for(let r=t.length;r--;)if(!(t[r]={t:"top",r:"right",b:"bottom",l:"left"}[t[r]]))return;if(t.length)return t},$e=Ie(le),o,Y,b,ce=e=>e=="cols"?"columns":"rows",te=e=>(t,r,i)=>({[e]:i+((o=f(t))&&"-"+o)}),x=(e,t)=>(r,i,a)=>(o=f(r,t))&&{[e||a]:o},S=e=>(t,{theme:r},i)=>(o=r(e||i,t))&&{[e||i]:o},de=(e,t)=>(r,{theme:i},a)=>(o=i(e||a,r,f(r,t)))&&{[e||a]:o},j=(e,t)=>(r,i)=>e(r,i,t),L=te("display"),re=te("position"),Q=te("textTransform"),Z=te("textDecoration"),fe=te("fontStyle"),B=e=>(t,r,i)=>({["--tw-"+e]:i,fontVariantNumeric:"var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"}),ge=(e,{theme:t},r)=>(o=t("inset",e))&&{[r]:o},ie=(e,t,r,i=r)=>(o=t(i+"Opacity",g(e)))&&{[`--tw-${r}-opacity`]:o},ke=(e,t)=>Math.round(parseInt(e,16)*t),ue=(e,t,r)=>e&&e[0]=="#"&&(o=(e.length-1)/3)&&(b=[17,1,.062272][o-1])?`rgba(${ke(e.substr(1,o),b)},${ke(e.substr(1+o,o),b)},${ke(e.substr(1+2*o,o),b)},${t?`var(--tw-${t}${r?","+r:""})`:r||1})`:e,pe=(e,t,r)=>r&&typeof r=="string"?(o=ue(r,t+"-opacity"))&&o!==r?{[`--tw-${t}-opacity`]:"1",[e]:[r,o]}:{[e]:r}:void 0,Be=e=>(b=ue(e,"","0"))==o?"transparent":b,Ve=(e,{theme:t},r,i,a,n)=>(o={x:["right","left"],y:["bottom","top"]}[e[0]])&&(b=`--tw-${r}-${e[0]}-reverse`)?e[1]=="reverse"?{[b]:"1"}:{[b]:"0",[be([a,o[0],n])]:(Y=t(i,g(e)))&&`calc(${Y} * var(${b}))`,[be([a,o[1],n])]:Y&&[Y,`calc(${Y} * calc(1 - var(${b})))`]}:void 0,He=(e,t)=>t[0]&&{[e]:(m("wun",(t[0]||"")[3])?"space-":"")+t[0]},Se=e=>t=>m(["start","end"],t[0])?{[e]:"flex-"+t[0]}:He(e,t),Ge=e=>(t,{theme:r})=>{if(o=r("grid"+W(e),t,""))return{["grid-"+e]:o};switch(t[0]){case"span":return t[1]&&{["grid-"+e]:`span ${t[1]} / span ${t[1]}`};case"start":case"end":return(o=r("grid"+W(e)+W(t[0]),g(t),f(g(t))))&&{[`grid-${e}-${t[0]}`]:o}}},Ye=(e,{theme:t},r)=>{switch(e[0]){case"solid":case"dashed":case"dotted":case"double":case"none":return x("borderStyle")(e);case"collapse":case"separate":return x("borderCollapse")(e);case"opacity":return ie(e,t,r)}return(o=t(r+"Width",e,""))?{borderWidth:o}:pe("borderColor",r,t(r+"Color",e))},Ae=e=>(e?"translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)":"translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))")+" rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))",Ce=(e,t,r)=>e[0]&&(o=t.theme(r,e[1]||e[0]))&&{[`--tw-${r}-x`]:e[0]!=="y"&&o,[`--tw-${r}-y`]:e[0]!=="x"&&o,transform:[`${r}${e[1]?e[0].toUpperCase():""}(${o})`,Ae()]},Je=e=>(t,r,i)=>i[1]?$e(r.theme(e,t),i[1],e):S(e)(t,r,i),J=Je("padding"),X=Je("margin"),Xe=(e,{theme:t},r)=>(o={w:"width",h:"height"}[e[0]])&&{[o=`${r}${W(o)}`]:t(o,g(e))},P=(e,{theme:t},r)=>{let i=r.split("-"),a=i[0]=="backdrop"?i[0]+"-":"";if(a||e.unshift(...i),e[0]=="filter"){let n=["blur","brightness","contrast","grayscale","hue-rotate","invert",a&&"opacity","saturate","sepia",!a&&"drop-shadow"].filter(Boolean);return e[1]=="none"?{[a+"filter"]:"none"}:n.reduce((s,d)=>(s["--tw-"+a+d]="var(--tw-empty,/*!*/ /*!*/)",s),{[a+"filter"]:n.map(s=>`var(--tw-${a}${s})`).join(" ")})}return b=e.shift(),m(["hue","drop"],b)&&(b+=W(e.shift())),(o=t(a?"backdrop"+W(b):b,e))&&{["--tw-"+a+b]:(Array.isArray(o)?o:[o]).map(n=>`${he(b)}(${n})`).join(" ")}},xt={group:(e,{tag:t},r)=>t(f([r,...e])),hidden:j(L,"none"),inline:L,block:L,contents:L,flow:L,table:(e,t,r)=>m(["auto","fixed"],e[0])?{tableLayout:e[0]}:L(e,t,r),flex(e,t,r){switch(e[0]){case"row":case"col":return{flexDirection:f(e[0]=="col"?["column",...g(e)]:e)};case"nowrap":case"wrap":return{flexWrap:f(e)};case"grow":case"shrink":return o=t.theme("flex"+W(e[0]),g(e),e[1]||1),o!=null&&{["flex-"+e[0]]:""+o}}return(o=t.theme("flex",e,""))?{flex:o}:L(e,t,r)},grid(e,t,r){switch(e[0]){case"cols":case"rows":return(o=t.theme("gridTemplate"+W(ce(e[0])),g(e),e.length==2&&Number(e[1])?`repeat(${e[1]},minmax(0,1fr))`:f(g(e))))&&{["gridTemplate-"+ce(e[0])]:o};case"flow":return e.length>1&&{gridAutoFlow:f(e[1]=="col"?["column",...g(e,2)]:g(e)," ")}}return L(e,t,r)},auto:(e,{theme:t})=>m(["cols","rows"],e[0])&&(o=t("gridAuto"+W(ce(e[0])),g(e),f(g(e))))&&{["gridAuto-"+ce(e[0])]:o},static:re,fixed:re,absolute:re,relative:re,sticky:re,visible:{visibility:"visible"},invisible:{visibility:"hidden"},antialiased:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"subpixel-antialiased":{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"},truncate:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"sr-only":{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"},"not-sr-only":{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"},resize:e=>({resize:{x:"horizontal",y:"vertical"}[e[0]]||e[0]||"both"}),box:e=>e[0]&&{boxSizing:e[0]+"-box"},appearance:x(),cursor:de(),float:x(),clear:x(),decoration:x("boxDecorationBreak"),isolate:{isolation:"isolate"},isolation:x(),"mix-blend":x("mixBlendMode"),top:ge,right:ge,bottom:ge,left:ge,inset:(e,{theme:t})=>(o=le(e[0]))?$e(t("inset",g(e)),e[0]):(o=t("inset",e))&&{top:o,right:o,bottom:o,left:o},underline:Z,"line-through":Z,"no-underline":j(Z,"none"),"text-underline":j(Z,"underline"),"text-no-underline":j(Z,"none"),"text-line-through":j(Z,"line-through"),uppercase:Q,lowercase:Q,capitalize:Q,"normal-case":j(Q,"none"),"text-normal-case":j(Q,"none"),italic:fe,"not-italic":j(fe,"normal"),"font-italic":j(fe,"italic"),"font-not-italic":j(fe,"normal"),font:(e,t,r)=>(o=t.theme("fontFamily",e,""))?{fontFamily:o}:S("fontWeight")(e,t,r),items:e=>e[0]&&{alignItems:m(["start","end"],e[0])?"flex-"+e[0]:f(e)},"justify-self":x(),"justify-items":x(),justify:Se("justifyContent"),content:Se("alignContent"),self:Se("alignSelf"),place:e=>e[0]&&He("place-"+e[0],g(e)),overscroll:e=>e[0]&&{["overscrollBehavior"+(e[1]?"-"+e[0]:"")]:e[1]||e[0]},col:Ge("column"),row:Ge("row"),duration:S("transitionDuration"),delay:S("transitionDelay"),tracking:S("letterSpacing"),leading:S("lineHeight"),z:S("zIndex"),opacity:S(),ease:S("transitionTimingFunction"),p:J,py:J,px:J,pt:J,pr:J,pb:J,pl:J,m:X,my:X,mx:X,mt:X,mr:X,mb:X,ml:X,w:S("width"),h:S("height"),min:Xe,max:Xe,fill:S(),order:S(),origin:de("transformOrigin"," "),select:x("userSelect"),"pointer-events":x(),align:x("verticalAlign"),whitespace:x("whiteSpace"),"normal-nums":{fontVariantNumeric:"normal"},ordinal:B("ordinal"),"slashed-zero":B("slashed-zero"),"lining-nums":B("numeric-figure"),"oldstyle-nums":B("numeric-figure"),"proportional-nums":B("numeric-spacing"),"tabular-nums":B("numeric-spacing"),"diagonal-fractions":B("numeric-fraction"),"stacked-fractions":B("numeric-fraction"),overflow:(e,t,r)=>m(["ellipsis","clip"],e[0])?x("textOverflow")(e):e[1]?{["overflow-"+e[0]]:e[1]}:x()(e,t,r),transform:e=>e[0]=="none"?{transform:"none"}:{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:Ae(e[0]=="gpu")},rotate:(e,{theme:t})=>(o=t("rotate",e))&&{"--tw-rotate":o,transform:[`rotate(${o})`,Ae()]},scale:Ce,translate:Ce,skew:Ce,gap:(e,t,r)=>(o={x:"column",y:"row"}[e[0]])?{[o+"Gap"]:t.theme("gap",g(e))}:S("gap")(e,t,r),stroke:(e,t,r)=>(o=t.theme("stroke",e,""))?{stroke:o}:S("strokeWidth")(e,t,r),outline:(e,{theme:t})=>(o=t("outline",e))&&{outline:o[0],outlineOffset:o[1]},"break-normal":{wordBreak:"normal",overflowWrap:"normal"},"break-words":{overflowWrap:"break-word"},"break-all":{wordBreak:"break-all"},text(e,{theme:t},r){switch(e[0]){case"left":case"center":case"right":case"justify":return{textAlign:e[0]};case"uppercase":case"lowercase":case"capitalize":return Q([],o,e[0]);case"opacity":return ie(e,t,r)}let i=t("fontSize",e,"");return i?typeof i=="string"?{fontSize:i}:{fontSize:i[0],...typeof i[1]=="string"?{lineHeight:i[1]}:i[1]}:pe("color","text",t("textColor",e))},bg(e,{theme:t},r){switch(e[0]){case"fixed":case"local":case"scroll":return x("backgroundAttachment",",")(e);case"bottom":case"center":case"left":case"right":case"top":return x("backgroundPosition"," ")(e);case"no":return e[1]=="repeat"&&x("backgroundRepeat")(e);case"repeat":return m("xy",e[1])?x("backgroundRepeat")(e):{backgroundRepeat:e[1]||e[0]};case"opacity":return ie(e,t,r,"background");case"clip":case"origin":return e[1]&&{["background-"+e[0]]:e[1]+(e[1]=="text"?"":"-box")};case"blend":return x("background-blend-mode")(g(e));case"gradient":if(e[1]=="to"&&(o=le(e[2])))return{backgroundImage:`linear-gradient(to ${f(o," ")},var(--tw-gradient-stops))`}}return(o=t("backgroundPosition",e,""))?{backgroundPosition:o}:(o=t("backgroundSize",e,""))?{backgroundSize:o}:(o=t("backgroundImage",e,""))?{backgroundImage:o}:pe("backgroundColor","bg",t("backgroundColor",e))},from:(e,{theme:t})=>(o=t("gradientColorStops",e))&&{"--tw-gradient-from":o,"--tw-gradient-stops":`var(--tw-gradient-from),var(--tw-gradient-to,${Be(o)})`},via:(e,{theme:t})=>(o=t("gradientColorStops",e))&&{"--tw-gradient-stops":`var(--tw-gradient-from),${o},var(--tw-gradient-to,${Be(o)})`},to:(e,{theme:t})=>(o=t("gradientColorStops",e))&&{"--tw-gradient-to":o},border:(e,t,r)=>le(e[0])?$e(t.theme("borderWidth",g(e)),e[0],"border","width"):Ye(e,t,r),divide:(e,t,r)=>(o=Ve(e,t,r,"divideWidth","border","width")||Ye(e,t,r))&&{"&>:not([hidden])~:not([hidden])":o},space:(e,t,r)=>(o=Ve(e,t,r,"space","margin"))&&{"&>:not([hidden])~:not([hidden])":o},placeholder:(e,{theme:t},r)=>(o=e[0]=="opacity"?ie(e,t,r):pe("color","placeholder",t("placeholderColor",e)))&&{"&::placeholder":o},shadow:(e,{theme:t})=>(o=t("boxShadow",e))&&{":global":{"*":{"--tw-shadow":"0 0 transparent"}},"--tw-shadow":o=="none"?"0 0 transparent":o,boxShadow:[o,"var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"]},animate:(e,{theme:t,tag:r})=>{if(b=t("animation",e)){let i=b.split(" ");return(o=t("keyframes",i[0],Y={}))!==Y?(b=r(i[0]))&&{animation:b+" "+f(g(i)," "),["@keyframes "+b]:o}:{animation:b}}},ring(e,{theme:t},r){switch(e[0]){case"inset":return{"--tw-ring-inset":"inset"};case"opacity":return ie(e,t,r);case"offset":return(o=t("ringOffsetWidth",g(e),""))?{"--tw-ring-offset-width":o}:{"--tw-ring-offset-color":t("ringOffsetColor",g(e))}}return(o=t("ringWidth",e,""))?{"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${o} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",":global":{"*":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":t("ringOffsetColor","","#fff"),"--tw-ring-color":ue(t("ringColor","","#93c5fd"),"ring-opacity",t("ringOpacity","","0.5")),"--tw-ring-offset-shadow":"0 0 transparent","--tw-ring-shadow":"0 0 transparent"}}}:{"--tw-ring-opacity":"1","--tw-ring-color":ue(t("ringColor",e),"ring-opacity")}},object:(e,t,r)=>m(["contain","cover","fill","none","scale-down"],f(e))?{objectFit:f(e)}:de("objectPosition"," ")(e,t,r),list:(e,t,r)=>f(e)=="item"?L(e,t,r):m(["inside","outside"],f(e))?{listStylePosition:e[0]}:de("listStyleType")(e,t,r),rounded:(e,t,r)=>wt(t.theme("borderRadius",g(e),""),e[0],"border","radius")||S("borderRadius")(e,t,r),"transition-none":{transitionProperty:"none"},transition:(e,{theme:t})=>({transitionProperty:t("transitionProperty",e),transitionTimingFunction:t("transitionTimingFunction",""),transitionDuration:t("transitionDuration","")}),container:(e,{theme:t})=>{let{screens:r=t("screens"),center:i,padding:a}=t("container"),n=s=>(o=a&&(typeof a=="string"?a:a[s]||a.DEFAULT))?{paddingRight:o,paddingLeft:o}:{};return Object.keys(r).reduce((s,d)=>((b=r[d])&&typeof b=="string"&&(s[ae(b)]={"&":{"max-width":b,...n(d)}}),s),{width:"100%",...i?{marginRight:"auto",marginLeft:"auto"}:{},...n("xs")})},filter:P,blur:P,brightness:P,contrast:P,grayscale:P,"hue-rotate":P,invert:P,saturate:P,sepia:P,"drop-shadow":P,backdrop:P},vt=e=>({":root":{tabSize:4},"body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul":{margin:"0"},button:{backgroundColor:"transparent",backgroundImage:"none"},'button,[type="button"],[type="reset"],[type="submit"]':{WebkitAppearance:"button"},"button:focus":{outline:["1px dotted","5px auto -webkit-focus-ring-color"]},"fieldset,ol,ul,legend":{padding:"0"},"ol,ul":{listStyle:"none"},html:{lineHeight:"1.5",WebkitTextSizeAdjust:"100%",fontFamily:e("fontFamily.sans","ui-sans-serif,system-ui,sans-serif")},body:{fontFamily:"inherit",lineHeight:"inherit"},"*,::before,::after":{boxSizing:"border-box",border:`0 solid ${e("borderColor.DEFAULT","currentColor")}`},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},img:{borderStyle:"solid"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:"1",color:e("placeholderColor.DEFAULT",e("colors.gray.400","#a1a1aa"))},'button,[role="button"]':{cursor:"pointer"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",margin:"0",padding:"0",lineHeight:"inherit",color:"inherit"},"button,select":{textTransform:"none"},"::-moz-focus-inner":{borderStyle:"none",padding:"0"},":-moz-focusring":{outline:"1px dotted ButtonText"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},'[type="search"]':{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"abbr[title]":{textDecoration:"underline dotted"},"b,strong":{fontWeight:"bolder"},"pre,code,kbd,samp":{fontFamily:e("fontFamily","mono","ui-monospace,monospace"),fontSize:"1em"},"sub,sup":{fontSize:"75%",lineHeight:"0",position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"}}),yt={dark:"@media (prefers-color-scheme:dark)",sticky:"@supports ((position: -webkit-sticky) or (position:sticky))","motion-reduce":"@media (prefers-reduced-motion:reduce)","motion-safe":"@media (prefers-reduced-motion:no-preference)",first:"&:first-child",last:"&:last-child",even:"&:nth-child(2n)",odd:"&:nth-child(odd)",children:"&>*",siblings:"&~*",sibling:"&+*",override:"&&"},qe="__twind",$t=e=>{let t=self[qe];return t||(t=document.head.appendChild(document.createElement("style")),t.id=qe,e&&(t.nonce=e),t.appendChild(document.createTextNode(""))),t},kt=({nonce:e,target:t=$t(e).sheet}={})=>{let r=t.cssRules.length;return{target:t,insert:(i,a)=>t.insertRule(i,r+a)}},St=()=>({target:null,insert:je}),Fe=e=>({unknown(t,r=[],i,a){i||this.report({id:"UNKNOWN_THEME_VALUE",key:t+"."+f(r)},a)},report({id:t,...r}){return e(`[${t}] ${JSON.stringify(r)}`)}}),Ke=Fe(e=>console.warn(e)),At=Fe(e=>{throw new Error(e)}),Ct=Fe(je),N=(e,t,r)=>`${e}:${t}${r?" !important":""}`,Ft=(e,t,r)=>{let i="",a=ze(e);a&&(i+=`${N(a,t,r)};`);let n=Oe(e);return n&1&&(i+=`-webkit-${N(e,t,r)};`),n&2&&(i+=`-moz-${N(e,t,r)};`),n&4&&(i+=`-ms-${N(e,t,r)};`),n=Pe(e,t),n&1&&(i+=`${N(e,`-webkit-${t}`,r)};`),n&2&&(i+=`${N(e,`-moz-${t}`,r)};`),n&4&&(i+=`${N(e,`-ms-${t}`,r)};`),i+=N(e,t,r),i},oe=(e,t)=>{let r={};do for(let i=1;i<e;i++)r[`${i}/${e}`]=Number((i/e*100).toFixed(6))+"%";while(++e<=t);return r},V=(e,t,r=0)=>{let i={};for(;r<=e;r=r*2||1)i[r]=r+t;return i},T=(e,t="",r=1,i=0,a=1,n={})=>{for(;i<=e;i+=a)n[i]=i/r+t;return n},h=e=>t=>t(e);var Et={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:{transparent:"transparent",current:"currentColor",black:"#000",white:"#fff",gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},yellow:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},green:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},purple:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"}},spacing:{px:"1px",0:"0px",...T(4,"rem",4,.5,.5),...T(12,"rem",4,5),14:"3.5rem",...T(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},backdropBlur:h("blur"),backdropBrightness:h("brightness"),backdropContrast:h("contrast"),backdropGrayscale:h("grayscale"),backdropHueRotate:h("hueRotate"),backdropInvert:h("invert"),backdropOpacity:h("opacity"),backdropSaturate:h("saturate"),backdropSepia:h("sepia"),backgroundColor:h("colors"),backgroundImage:{none:"none"},backgroundOpacity:h("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...T(200,"",100,0,50),...T(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:e=>({...e("colors"),DEFAULT:e("colors.gray.200","currentColor")}),borderOpacity:h("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderWidth:{DEFAULT:"1px",...V(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",none:"none"},contrast:{...T(200,"",100,0,50),75:"0.75",125:"1.25"},divideColor:h("borderColor"),divideOpacity:h("borderOpacity"),divideWidth:h("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0, 0, 0, 0.1)","0 1px 1px rgba(0, 0, 0, 0.06)"],md:["0 4px 3px rgba(0, 0, 0, 0.07)","0 2px 2px rgba(0, 0, 0, 0.06)"],lg:["0 10px 8px rgba(0, 0, 0, 0.04)","0 4px 3px rgba(0, 0, 0, 0.1)"],xl:["0 20px 13px rgba(0, 0, 0, 0.03)","0 8px 5px rgba(0, 0, 0, 0.08)"],"2xl":"0 25px 25px rgba(0, 0, 0, 0.15)",none:"0 0 #0000"},fill:{current:"currentColor"},grayscale:{0:"0",DEFAULT:"100%"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{0:"0",DEFAULT:"100%"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gridTemplateColumns:{},gridTemplateRows:{},gridAutoColumns:{min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gap:h("spacing"),gradientColorStops:h("colors"),height:e=>({auto:"auto",...e("spacing"),...oe(2,6),full:"100%",screen:"100vh"}),inset:e=>({auto:"auto",...e("spacing"),...oe(2,4),full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2",...T(10,"rem",4,3)},margin:e=>({auto:"auto",...e("spacing")}),maxHeight:e=>({...e("spacing"),full:"100%",screen:"100vh"}),maxWidth:(e,{breakpoints:t})=>({none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",prose:"65ch",...t(e("screens"))}),minHeight:{0:"0px",full:"100%",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content"},opacity:{...T(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0",...T(12,"",1,1)},outline:{none:["2px solid transparent","2px"],white:["2px dotted white","2px"],black:["2px dotted black","2px"]},padding:h("spacing"),placeholderColor:h("colors"),placeholderOpacity:h("opacity"),ringColor:e=>({DEFAULT:e("colors.blue.500","#3b82f6"),...e("colors")}),ringOffsetColor:h("colors"),ringOffsetWidth:V(8,"px"),ringOpacity:e=>({DEFAULT:"0.5",...e("opacity")}),ringWidth:{DEFAULT:"3px",...V(8,"px")},rotate:{...V(2,"deg"),...V(12,"deg",3),...V(180,"deg",45)},saturate:T(200,"",100,0,50),scale:{...T(150,"",100,0,50),...T(110,"",100,90,5),75:"0.75",125:"1.25"},sepia:{0:"0",DEFAULT:"100%"},skew:{...V(2,"deg"),...V(12,"deg",3)},space:h("spacing"),stroke:{current:"currentColor"},strokeWidth:T(2),textColor:h("colors"),textOpacity:h("opacity"),transitionDuration:e=>({DEFAULT:"150ms",...e("durations")}),transitionDelay:h("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"background-color,border-color,color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:e=>({...e("spacing"),...oe(2,4),full:"100%"}),width:e=>({auto:"auto",...e("spacing"),...oe(2,6),...oe(12,12),screen:"100vw",full:"100%",min:"min-content",max:"max-content"}),zIndex:{auto:"auto",...T(50,"",1,0,10)}},Qe=(e,t={},r=[])=>(Object.keys(e).forEach(i=>{let a=e[i];i=="DEFAULT"&&(t[f(r)]=a,t[f(r,".")]=a);let n=[...r,i];t[f(n)]=a,t[f(n,".")]=a,a&&typeof a=="object"&&Qe(a,t,n)},t),t),Tt={negative:()=>({}),breakpoints:e=>Object.keys(e).filter(t=>typeof e[t]=="string").reduce((t,r)=>(t["screen-"+r]=e[r],t),{})},zt=(e,t)=>(t=t[0]=="["&&t.slice(-1)=="]"&&t.slice(1,-1))&&m(e,"olor")==/^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(t)&&(m(t,"calc(")?t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "):t),Ot=e=>{let t=new Map,r={...Et,...e},i=(n,s)=>{let d=n&&n[s],c=typeof d=="function"?d(a,Tt):d;return c&&s=="colors"?Qe(c):c},a=(n,s,d)=>{let c=n.split(".");n=c[0],c.length>1&&(d=s,s=f(g(c),"."));let v=t.get(n);if(v||(t.set(n,v={...i(r,n)}),Object.assign(v,i(r.extend,n))),s!=null){s=(Array.isArray(s)?f(s):s)||"DEFAULT";let U=zt(n,s)||v[s];return U==null?d:Array.isArray(U)&&!m(["fontSize","outline","dropShadow"],n)?f(U,","):U}return v};return a},Pt=(e,t)=>(r,i)=>{if(typeof r.d=="function")return r.d(t);let a=r.d.split(/-(?![^[]*])/g);if(!i&&a[0]=="tw"&&r.$==r.d)return r.$;for(let n=a.length;n;n--){let s=f(a.slice(0,n)),d=e[s];if(d)return typeof d=="function"?d(g(a,n),t,s):typeof d=="string"?t[i?"css":"tw"](d):d}},ne,Ze=/^:(group(?:(?!-focus).+?)*)-(.+)$/,et=/^(:not)-(.+)/,tt=e=>e[1]=="["?g(e):e,jt=(e,t,{theme:r,tag:i})=>{let a=(n,s)=>(ne=r("screens",g(s),""))?{[ae(ne)]:n}:s==":dark"&&e=="class"?{".dark &":n}:(ne=Ze.exec(s))?{[`.${We(i(ne[1]))}:${ne[2]} &`]:n}:{[t[g(s)]||"&"+s.replace(et,(d,c,v)=>c+"("+tt(":"+v)+")")]:n};return(n,s)=>s.v.reduceRight(a,n)},E,rt=e=>(((E=/(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(e))?+E[1]/(E[2]?15:1)/10:0)&31)<<22,it=e=>{E=0;for(let t=e.length;t--;)E+=m("-:,",e[t]);return E},ot=e=>(it(e)&15)<<18,Dt=["rst","st","en","d","nk","sited","pty","ecked","cus-w","ver","cus","cus-v","tive","sable","ad-on","tiona","quire"],Rt=e=>1<<(~(E=Dt.indexOf(e.replace(Ze,":$2").slice(3,8)))?E:17),Wt=(e,t)=>(r,i)=>r|((E=e("screens",g(i),""))?1<<27|rt(ae(E)):i==":dark"?1<<30:(E=t[i]||i.replace(et,":$2"))[0]=="@"?ot(E):Rt(i)),_t=e=>e[0]=="-"?0:it(e)+((E=/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(e))?+!!E[1]||-!!E[2]:0)+1,Ee=(e,t)=>t+"{"+e+"}",Lt=(e,t,r)=>{let{theme:i,tag:a}=r,n=(y,k)=>"--"+a(k),s=y=>`${y}`.replace(/--(tw-[\w-]+)\b/g,n),d=(y,k,A)=>(y=s(y),Array.isArray(k)?f(k.filter(Boolean).map($=>e(y,s($),A)),";"):e(y,s(k),A)),c,v=(y,k,A,$,z)=>{if(Array.isArray($)){$.forEach(p=>p&&v(y,k,A,p,z));return}let H="",M=0,q=0;$["@apply"]&&($=me(G(mt($["@apply"]),r),{...$,"@apply":void 0},r)),Object.keys($).forEach(p=>{let C=G($[p],r);if(Re(p,C)){if(C!==""&&p.length>1){let F=he(p);q+=1,M=Math.max(M,_t(F)),H=(H&&H+";")+d(F,C,z)}}else if(C)if(p==":global"&&(p="@global"),p[0]=="@")if(p[1]=="g")v([],"",0,C,z);else if(p[1]=="f")v([],p,0,C,z);else if(p[1]=="k"){let F=c.length;v([],"",0,C,z);let O=c.splice(F,c.length-F);c.push({r:Ee(f(O.map(l=>l.r),""),p),p:O.reduce((l,u)=>l+u.p,0)})}else p[1]=="i"?(Array.isArray(C)?C:[C]).forEach(F=>F&&c.push({p:0,r:`${p} ${F};`})):(p[2]=="c"&&(p=ae(r.theme("screens",g(p,8).trim()))),v([...y,p],k,A|rt(p)|ot(p),C,z));else v(y,k?f(k.split(/,(?![^[]*])/g).map(F=>f(p.split(/,(?![^[]*])/g).map(O=>m(O,"&")?O.replace(/&/g,F):(F&&F+" ")+O),",")),","):p,A,C,z)}),q&&c.push({r:y.reduceRight(Ee,Ee(H,k)),p:A*(1<<8)+((Math.max(0,15-q)&15)<<4|(M||15)&15)})},U=Wt(i,t);return(y,k,A,$=0)=>($<<=28,c=[],v([],k?"."+We(k):"",A?A.v.reduceRight(U,$):$,y,A&&A.i),c)},Nt=(e,t,r,i)=>{let a;r((s=[])=>a=s);let n;return r((s=new Set)=>n=s),({r:s,p:d})=>{if(!n.has(s)){n.add(s);let c=lt(a,d);try{e.insert(s,c),a.splice(c,0,d)}catch(v){/:-[mwo]/.test(s)||t.report({id:"INJECT_CSS_ERROR",css:s,error:v},i)}}}},Te=(e,t,r,i=t)=>e===!1?r:e===!0?i:e||t,Ut=e=>(typeof e=="string"?{t:At,a:Ke,i:Ct}[e[1]]:e)||Ke,Mt=(e,t)=>e+(t[1]==":"?g(t,2)+":":g(t))+":",nt=(e,t=e.d)=>typeof t=="function"?"":e.v.reduce(Mt,"")+(e.i?"!":"")+(e.n?"-":"")+t,It={_:{value:"",writable:!0}},Bt=(e={})=>{let t=Ot(e.theme),r=Ut(e.mode),i=Te(e.hash,!1,!1,we),a=e.important,n={v:[]},s=0,d=[],c={tw:(...l)=>F(l),theme:(l,u,w)=>{var D;let R=(D=t(l,u,w))!=null?D:r.unknown(l,u==null||Array.isArray(u)?u:u.split("."),w!=null,c);return n.n&&R&&m("rg",(typeof R)[5])?`calc(${R} * -1)`:R},tag:l=>i?i(l):l,css:l=>{s++;let u=d.length;try{(typeof l=="string"?ve([l]):l).forEach(C);let w=Object.create(null,It);for(let D=u;D<d.length;D++){let R=d[D];if(R)switch(typeof R){case"object":me(w,R,c);break;case"string":w._+=(w._&&" ")+R}}return w}finally{d.length=u,s--}}},v=Pt({...xt,...e.plugins},c),U=l=>{let u=n;n=l;try{return G(v(l),c)}finally{n=u}},y={...yt,...e.variants},k=jt(e.darkMode||"media",y,c),A=Lt(Te(e.prefix,Ft,N),y,c),$=e.sheet||(typeof window=="undefined"?St():kt(e)),{init:z=l=>l()}=$,H=Nt($,r,z,c),M;z((l=new Map)=>M=l);let q=new WeakMap,p=(l,u)=>l=="_"?void 0:typeof u=="function"?JSON.stringify(G(u,c),p):u,C=l=>{!s&&n.v.length&&(l={...l,v:[...n.v,...l.v],$:""}),l.$||(l.$=nt(l,q.get(l.d)));let u=s?null:M.get(l.$);if(u==null){let w=U(l);if(l.$||(l.$=we(JSON.stringify(w,p)),q.set(l.d,l.$),l.$=nt(l,l.$)),w&&typeof w=="object")if(l.v=l.v.map(tt),a&&(l.i=a),w=k(w,l),s)d.push(w);else{let D=typeof l.d=="function"?typeof w._=="string"?1:3:2;u=i||typeof l.d=="function"?(i||we)(D+l.$):l.$,A(w,u,l,D).forEach(H),w._&&(u+=" "+w._)}else typeof w=="string"?u=w:(u=l.$,r.report({id:"UNKNOWN_DIRECTIVE",rule:u},c)),s&&typeof l.d!="function"&&d.push(u);s||(M.set(l.$,u),De(M,3e4))}return u},F=l=>f(ve(l).map(C).filter(Boolean)," "),O=Te(e.preflight,st,!1);if(O){let l=vt(t),u=A(typeof O=="function"?G(O(l,c),c)||l:{...l,...O});z((w=(u.forEach(H),!0))=>w)}return{init:()=>r.report({id:"LATE_SETUP_CALL"},c),process:F}},Vt=e=>{let t=n=>(r(),t(n)),r=n=>{({process:t,init:r}=Bt(n))};e&&r(e);let i;return{tw:Object.defineProperties((...n)=>t(n),{theme:{get:(n=>()=>(i||t([s=>(i=s,"")]),i[n]))("theme")}}),setup:n=>r(n)}},{tw:Yt,setup:Jt}=Vt();export{Yt as a};