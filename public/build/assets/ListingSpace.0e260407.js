import{o as a,c as i,t,a as e,h as n}from"./app.039d49ba.js";const u={__name:"ListingAddress",props:{listing:Object},setup(s){return(c,o)=>(a(),i("span",null,t(s.listing.street)+" "+t(s.listing.street_nr)+", "+t(s.listing.city),1))}},l={class:"font-bold"},_=n(" bds "),r=e("span",{class:"text-gray-400"},"| ",-1),d={class:"font-bold"},g=n(" ba "),h=e("span",{class:"text-gray-400"},"| ",-1),b={class:"font-bold"},p=n(" m\xB2 "),f={__name:"ListingSpace",props:{listing:Object},setup(s){return(c,o)=>(a(),i("div",null,[e("span",l,t(s.listing.beds),1),_,r,e("span",d,t(s.listing.baths),1),g,h,e("span",b,t(s.listing.area),1),p]))}};export{f as _,u as a};
