var c=Object.defineProperty;var i=(n,r)=>c(n,"name",{value:r,configurable:!0});import{a as t,j as e}from"./jsx-runtime.3dedcd23.js";function d({tokens:n,hasRemValue:r}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),r&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([s,o])=>{const a=parseFloat(o);return t("tr",{children:[e("td",{children:s}),e("td",{children:o}),r&&t("td",{children:[a*16,"px"]})]},s)})})]})}i(d,"TokensGrid");try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:null,description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:d.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{d as T};
//# sourceMappingURL=TokensGrid.b5fdb6af.js.map