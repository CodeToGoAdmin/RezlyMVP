import{j as s}from"./index-Dd9ipcKZ.js";const x=({tabs:n,activeTab:t,onTabChange:i,className:r=""})=>s.jsx("div",{className:`flex items-center ${r}`,style:{gap:"12px"},children:n.map(e=>s.jsxs("button",{onClick:()=>i(e),className:`
                        flex items-center justify-center
                        h-[36px] 
                        rounded-[8px]
                        px-[16px] py-[8px]
                        font-Cairo font-normal text-[14px] leading-[150%]
                        transition-all duration-200 cursor-pointer
                        ${t===e.id?"bg-[#6A0EAD] text-white":"bg-white text-[#000000]"}
                    `,style:{gap:"4px"},children:[e.icon&&s.jsx("span",{className:"flex items-center w-4 h-4",style:{filter:t===e.id?"brightness(0) invert(1)":"none"},children:e.icon}),s.jsx("span",{className:`align-middle ${t===e.id?"text-white":"text-[#000000]"}`,children:e.label})]},e.id))});export{x as T};
