import{u as p,o as r,c as n,a as s,w as l,v as i,b as t,t as d,d as m,e as _,f,g as w,L as h,h as v}from"./app.039d49ba.js";/* empty css            */const b=["onSubmit"],y={class:"w-1/2 mx-auto"},x=s("label",{for:"name",class:"label"},"Your Name",-1),V={key:0,class:"input-error"},k={class:"mt-4"},C=s("label",{for:"email",class:"label"},"E-mail",-1),g={key:0,class:"input-error"},N={class:"mt-4"},U=s("label",{for:"password",class:"label"},"Password",-1),B={key:0,class:"input-error"},S={class:"mt-4"},A=s("label",{for:"password_confirmation",class:"label"},"Confirm Password",-1),D={class:"mt-4"},E=s("button",{class:"btn-primary w-full",type:"submit"}," Create Account ",-1),L={class:"mt-2 text-center"},M=v(" Already have an account? Click here "),Y={__name:"Create",setup(P){const e=p({name:null,email:null,password:null,password_confirmation:null}),u=()=>e.post(route("user-account.store"));return(c,o)=>(r(),n("form",{onSubmit:w(u,["prevent"])},[s("div",y,[s("div",null,[x,l(s("input",{id:"name","onUpdate:modelValue":o[0]||(o[0]=a=>t(e).name=a),type:"text",class:"input"},null,512),[[i,t(e).name]]),t(e).errors.name?(r(),n("div",V,d(t(e).errors.name),1)):m("",!0)]),s("div",k,[C,l(s("input",{id:"email","onUpdate:modelValue":o[1]||(o[1]=a=>t(e).email=a),type:"text",class:"input"},null,512),[[i,t(e).email]]),t(e).errors.email?(r(),n("div",g,d(t(e).errors.email),1)):m("",!0)]),s("div",N,[U,l(s("input",{id:"password","onUpdate:modelValue":o[2]||(o[2]=a=>t(e).password=a),type:"password",class:"input"},null,512),[[i,t(e).password]]),t(e).errors.password?(r(),n("div",B,d(t(e).errors.password),1)):m("",!0)]),s("div",S,[A,l(s("input",{id:"password_confirmation","onUpdate:modelValue":o[3]||(o[3]=a=>t(e).password_confirmation=a),type:"password",class:"input"},null,512),[[i,t(e).password_confirmation]])]),s("div",D,[E,s("div",L,[_(t(h),{href:c.route("login"),class:"text-sm text-gray-500"},{default:f(()=>[M]),_:1},8,["href"])])])])],40,b))}};export{Y as default};
