import{a as n,b as i,c as l}from"./chunk-IDQQHNYW.js";var m=n(l());import{h as s}from"atomico";import{c as r,useRef as c}from"atomico";function e({dataPopperPlacement:o}){let p=c(),t=o?o.split("-")[0]:"";return s("host",{shadowDom:!0},s("div",{id:"tooltip",ref:p,class:(0,m.default)("inline-block","bg-blue-200","rounded","p-2","shadow-md","min-w-fit","text-xs",{"ml-2":t=="right"||t=="top"||t=="bottom","mt-2":t=="bottom","mb-2":t=="top","mr-2":t=="left"||t=="top"||t=="bottom"}),"data-popper-placement":o},s("slot",null)))}e.props={dataPopperPlacement:{type:String,value:""}};e.styles=[i];var a=r(e);customElements.define("seam-tooltip-content",a);export{a};
