import{c as t}from"./chunk-3QPE7LRM.js";import{h as o}from"atomico";import{c as a}from"atomico";function s({hideTitle:l}){return o("host",{shadowDom:!0},o("div",{class:"border border-gray-300 rounded shadow-md dark:shadow-gray-700 shadow-gray-400 flex flex-col max-w-full w-fit gap-4 md:gap-2 bg-white"},l?null:o("div",{class:"px-8 md:px-6 pt-4 flex flex-col gap-2"},o("slot",{name:"title"})),o("slot",{name:"media"}),o("div",{class:"px-8 md:px-6 pt-2 flex flex-col gap-2"},o("slot",null)),o("div",{class:"flex items-center px-8 md:px-6 pb-4"},o("slot",{name:"actions-left",class:"flex justify-start flex-1 grow shrink gap-1"}),o("slot",{name:"actions-right",class:"flex justify-end flex-1 grow shrink gap-1"}))))}s.props={hideTitle:{type:Boolean,value:!1}};s.styles=[t];var e=a(s);customElements.define("seam-card",e);export{e as a};
