var c=Object.create;var s=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var u=e=>s(e,"__esModule",{value:!0});var f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var w=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of b(t))!h.call(e,r)&&r!=="default"&&s(e,r,{get:()=>t[r],enumerable:!(i=d(t,r))||i.enumerable});return e},v=e=>w(u(s(e!=null?c(p(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var y=f((j,a)=>{(function(){"use strict";var e={}.hasOwnProperty;function t(){for(var i=[],r=0;r<arguments.length;r++){var o=arguments[r];if(!!o){var n=typeof o;if(n==="string"||n==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var g=t.apply(null,o);g&&i.push(g)}}else if(n==="object")if(o.toString===Object.prototype.toString)for(var l in o)e.call(o,l)&&o[l]&&i.push(l);else i.push(o.toString())}}return i.join(" ")}typeof a!="undefined"&&a.exports?(t.default=t,a.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});import{css as m}from"atomico";var S=m`@keyframes pulse{50%{opacity:.5}}@keyframes spin{to{transform:rotate(360deg)}}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}::after,::before{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}body{margin:0;line-height:inherit}a,hr{color:inherit}hr{height:0;border-top-width:1px}abbr[title]{text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,menu,ol,ul{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::after,::before{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity));--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.absolute{position:absolute}.relative{position:relative}.left-0{left:0}.right-0{right:0}.ml-2{margin-left:.5rem}.mr-2{margin-right:.5rem}.flex{display:flex}.hidden{display:none}.h-8{height:2rem}.h-6{height:1.5rem}.h-4{height:1rem}.h-full{height:100%}.w-full{width:100%}.w-24{width:6rem}.w-6{width:1.5rem}.w-4{width:1rem}.flex-1{flex:1 1 0%}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-spin{animation:spin 1s linear infinite}.cursor-wait{cursor:wait}.cursor-not-allowed{cursor:not-allowed}.appearance-none{appearance:none}.items-center{align-items:center}.justify-items-center{justify-items:center}.gap-1{gap:.25rem}.rounded{border-radius:.25rem}.border{border-width:1px}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity))}.bg-blue-700,.hover\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity))}.bg-amber-400,.bg-red-500{--tw-bg-opacity:1;background-color:rgb(251 191 36/var(--tw-bg-opacity))}.bg-red-500{background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-gray-300\/30{background-color:rgb(209 213 219/.3)}.bg-gray-100,.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-gray-100{background-color:rgb(243 244 246/var(--tw-bg-opacity))}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.pl-10{padding-left:2.5rem}.pr-2{padding-right:.5rem}.pr-4{padding-right:1rem}.pr-10{padding-right:2.5rem}.pl-2{padding-left:.5rem}.pl-4{padding-left:1rem}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.text-xs{font-size:.75rem;line-height:1rem}.font-light{font-weight:300}.leading-tight{line-height:1.25}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-500,.text-gray-700{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-700{color:rgb(55 65 81/var(--tw-text-opacity))}.text-amber-400,.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216/var(--tw-text-opacity))}.text-amber-400{color:rgb(251 191 36/var(--tw-text-opacity))}.text-gray-300,.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-gray-300{color:rgb(209 213 219/var(--tw-text-opacity))}.hover\:bg-yellow-400:hover{--tw-bg-opacity:1;background-color:rgb(250 204 21/var(--tw-bg-opacity))}.hover\:bg-red-400:hover{--tw-bg-opacity:1;background-color:rgb(248 113 113/var(--tw-bg-opacity))}.hover\:bg-gray-300\/30:hover{background-color:rgb(209 213 219/.3)}.hover\:bg-yellow-400\/30:hover{background-color:rgb(250 204 21/.3)}.hover\:bg-red-400\/30:hover{background-color:rgb(248 113 113/.3)}.hover\:bg-blue-600\/30:hover{background-color:rgb(37 99 235/.3)}.hover\:text-blue-600:hover{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity))}.hover\:text-gray-400:hover{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.hover\:underline:hover{text-decoration-line:underline}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\:ring-blue-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253 / var(--tw-ring-opacity))}.disabled\:bg-transparent:disabled{background-color:transparent}.disabled\:text-gray-300:disabled{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.disabled\:placeholder-gray-300:disabled::placeholder{--tw-placeholder-opacity:1;color:rgb(209 213 219/var(--tw-placeholder-opacity))}`;export{v as a,S as b,y as c};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/