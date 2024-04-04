import{_ as x,a as g}from"./ListingSpace.0e260407.js";import{_ as b}from"./Price.c1a8149c.js";import{B as k}from"./Box.001ad75b.js";import{_ as p}from"./EmptyState.4c32560c.js";import{_ as y}from"./Pagination.5dc7e991.js";import w from"./RealtorFilters.eccb6354.js";import{o as s,c as n,a as t,e as o,F as m,r as v,i as f,f as l,d as u,n as _,b as d,L as c,h as i,t as h}from"./app.039d49ba.js";import"./lodash.21d14061.js";/* empty css            */const B=t("h1",{class:"text-3xl mb-4"},"Your Listings",-1),$={key:0,class:"grid grid-cols-1 lg:grid-cols-2 gap-2"},N={class:"flex flex-col md:flex-row gap-2 md:items-center justify-between"},j={key:0,class:"text-xs font-bold uppercase border border-dashed p-1 border-green-300 text-green-500 dark:border-green-600 dark:text-green-600 inline-block rounded-md mb-2"},L={class:"xl:flex items-center gap-2"},V={class:"flex items-center gap-1 text-gray-600 dark:text-gray-300"},C=["href"],O=i(" Edit "),D=i(" Delete "),E=i(" Restore "),F={class:"mt-2"},I={class:"mt-2"},z=i("No listings yet"),P={key:2,class:"w-full flex justify-center mt-4 mb-4"},M={__name:"Index",props:{listings:Object,filters:Object},setup(a){return(r,R)=>(s(),n(m,null,[B,t("section",null,[o(w,{filters:a.filters},null,8,["filters"])]),a.listings.data.length?(s(),n("section",$,[(s(!0),n(m,null,v(a.listings.data,e=>(s(),f(k,{key:e.id,class:_({"border-dashed":e.deleted_at})},{default:l(()=>[t("div",N,[t("div",{class:_({"opacity-25":e.deleted_at})},[e.sold_at!=null?(s(),n("div",j," sold ")):u("",!0),t("div",L,[o(b,{price:e.price,class:"text-2xl font-medium"},null,8,["price"]),o(x,{listing:e},null,8,["listing"])]),o(g,{listing:e},null,8,["listing"])],2),t("section",null,[t("div",V,[t("a",{class:"btn-outline text-xs font-medium",href:r.route("listing.show",{listing:e.id}),target:"_blank"},"Preview",8,C),o(d(c),{class:"btn-outline text-xs font-medium",href:r.route("realtor.listing.edit",{listing:e.id})},{default:l(()=>[O]),_:2},1032,["href"]),e.deleted_at?(s(),f(d(c),{key:1,class:"btn-outline text-xs font-medium",href:r.route("realtor.listing.restore",{listing:e.id}),as:"button",method:"put"},{default:l(()=>[E]),_:2},1032,["href"])):(s(),f(d(c),{key:0,class:"btn-outline text-xs font-medium",href:r.route("realtor.listing.destroy",{listing:e.id}),as:"button",method:"delete"},{default:l(()=>[D]),_:2},1032,["href"]))]),t("div",F,[o(d(c),{href:r.route("realtor.listing.image.create",{listing:e.id}),class:"block w-full btn-outline text-xs font-medium text-center"},{default:l(()=>[i(" Images ("+h(e.images_count)+") ",1)]),_:2},1032,["href"])]),t("div",I,[o(d(c),{href:r.route("realtor.listing.show",{listing:e.id}),class:"block w-full btn-outline text-xs font-medium text-center"},{default:l(()=>[i(" Offers ("+h(e.offers_count)+") ",1)]),_:2},1032,["href"])])])])]),_:2},1032,["class"]))),128))])):(s(),f(p,{key:1},{default:l(()=>[z]),_:1})),a.listings.data.length?(s(),n("section",P,[o(y,{links:a.listings.links},null,8,["links"])])):u("",!0)],64))}};export{M as default};
