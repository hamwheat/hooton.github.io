import{d,_ as m,o as r,c as i,a as e,u as l,b as u,e as g,F as p}from"./index-CdT4cA-7.js";const _="/hooton.github.io/assets/logo-wBRdNW-7.jpg",h=d("theme",{state:()=>({isDarkTheme:!1}),actions:{toggleTheme(){this.isDarkTheme=!this.isDarkTheme,document.documentElement.setAttribute("data-theme",this.isDarkTheme?"dark":"light"),localStorage.setItem("theme",this.isDarkTheme?"dark":"light")},setTheme(o){this.isDarkTheme=o,document.documentElement.setAttribute("data-theme",o?"dark":"light"),localStorage.setItem("theme",o?"dark":"light")}},persist:{storage:localStorage,key:"theme",paths:["isDarkTheme"]}}),T=["checked"],k={__name:"ThemeToggle",setup(o){const a=h(),{isDarkTheme:n,toggleTheme:t}=a;return(D,s)=>(r(),i("label",{for:"switch",class:"switch",onClick:s[0]||(s[0]=(...c)=>l(t)&&l(t)(...c))},[e("input",{id:"switch",type:"checkbox",checked:l(n)},null,8,T),s[1]||(s[1]=e("span",{class:"slider"},null,-1)),s[2]||(s[2]=e("span",{class:"decoration"},null,-1))]))}},f=m(k,[["__scopeId","data-v-e773f1f7"]]),S={class:"header"},b={__name:"Home",setup(o){const a=h();return u(()=>{localStorage.getItem("theme")==="dark"?a.setTheme(!0):a.setTheme(!1)}),(n,t)=>(r(),i(p,null,[e("header",S,[t[0]||(t[0]=e("img",{alt:"Logo",class:"logo animate__animated animate__flip",src:_,width:"55",height:"55"},null,-1)),g(f)]),t[1]||(t[1]=e("main",{class:"main-content"},[e("section",{class:"content about"},[e("h1",null,"关于我"),e("p",null," 大家好！ ")]),e("section",{class:"content projects"},[e("h1",null,"项目"),e("p",null," 这里是 ")])],-1))],64))}},x=m(b,[["__scopeId","data-v-ed662789"]]);export{x as default};