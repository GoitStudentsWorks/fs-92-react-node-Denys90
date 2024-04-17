import{n as s,t as a,e as ze,f as ge,g as z,r as k,h as Ee,i as Ne,k as He,p as _e,l as Ae,F as R,j as r,b as re,c as Le,M as oe,s as S,E as fe,m as Re}from"./index-3ddfee24.js";import{h as qe,i as Ie,a as Xe,b as Qe,c as Ve,d as Ge,e as Je}from"./bottle_home_deskx2-e8c35f11.js";const Ue="/fs-92-react-node-Denys90/assets/bottle_home_mobile@1x-0d6054eb.png",Ke="/fs-92-react-node-Denys90/assets/bottle_home_mobile@2x-52eb5066.png",Ze="/fs-92-react-node-Denys90/assets/bottle_home_tablet@1x-c4bedac4.png",et="/fs-92-react-node-Denys90/assets/bottle_home_tablet@2x-867eb443.png",tt="/fs-92-react-node-Denys90/assets/bottle_home_desk-f67b46be.png",nt=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,rt=s.div`
  background-position: left bottom;
  background-image: -webkit-image-set(
    url(${Ue}) 1x,
    url(${Ke}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ze}) 1x,
      url(${et}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${tt}) 1x,
      url(${qe}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,ot=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,at=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 8px 20px;
  padding-top: 20px;
  width: 164px;

  border-radius: 10px;
  border: 1px solid ${a.colors.lightBlue};
  box-shadow: ${a.boxShadowBtn.Btn};

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin: 0;

    color: ${a.colors.blue};
  }
`,it=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,st=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.paleBlue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,ae=e=>e.waters.dailyNorm,ct=e=>e.waters.reps,be=e=>e.filter,dt=e=>e.waters.month,lt=e=>e.waters;ze([ae,be],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const A=()=>{const e=ge(),n=z(ae),t=z(ct),o=z(be),i=k.useCallback(d=>e(Ee(d)),[e]),c=k.useCallback(d=>e(Ne(d)),[e]),l=k.useCallback(d=>e(He(d)),[e]),p=k.useCallback(d=>e(_e(d)),[e]),h=k.useCallback(d=>e(Ae(d)),[e]);return{dailyNorm:n,reps:t,filter:o,addDailyNorma:c,deleteReps:l,patchWater:p,addOneDrink:h,createWater:i}},ut=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`,ht=s.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,ie=s.p`
  font-size: 16px;
`,se=s.span`
  font-size: 18px;
  color: ${a.colors.blue};
`,pt=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,xt=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,mt=s.span`
  color: ${a.colors.blue};
`,gt=s.div`
  margin-bottom: 24px;
`,ft=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,bt=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,ce=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,Z=s.label``,wt=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${a.colors.blue};
    font-weight: bold;
  }
`,ee=s.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${a.colors.black};
`,te=s(R)`
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid ${a.colors.paleBlue};
  padding: 12px 10px;
  color: ${a.colors.blue};
  font-size: 16px;
  width: 100%;
  &::placeholder {
    color: ${a.colors.paleBlue};
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: ${a.colors.blue};
  }
`,yt=s.button`
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  margin-top: 24px;
  height: 36px;

  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: #407bff;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(64, 123, 255, 0.54) 0px 4px 14px;
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    display: flex;
    width: 160px;
    height: 44px;
    padding: 10px 30px;
    font-size: 18px;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 1.3;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    /* width: 384px; */
  }
`,kt=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function vt({toggleModal:e}){const{addDailyNorma:n}=A(),t=d=>{const{gender:m,weight:w,activityHours:y}=d;if(m&&w&&y){if(m==="man")return parseFloat(w)*.04+parseFloat(y)*.6;if(m==="woman")return parseFloat(w)*.03+parseFloat(y)*.4}return null},o={gender:"man",weight:"",activityHours:"",dailyNorma:""},i=new Date,c=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getFullYear()),h=`${c}.${l}.${p}`;return r.jsxs(kt,{children:[r.jsx(ut,{children:"My daily norma"}),r.jsx(re,{initialValues:o,onSubmit:d=>{const w={daily_limit:d.dailyNorma*1e3,date:h};n(w),e()},children:({errors:d,touched:m,values:w,setFieldValue:y})=>r.jsxs(Le,{children:[r.jsxs(ht,{children:[r.jsxs(ie,{children:["For girl:"," ",r.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),r.jsxs(ie,{children:["For man:"," ",r.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),r.jsx(pt,{children:r.jsxs(xt,{children:[r.jsx(mt,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),r.jsxs(gt,{children:[r.jsx(ft,{children:"Calculate your rate:"}),r.jsxs(bt,{children:[r.jsxs("label",{children:[r.jsx(R,{type:"radio",name:"gender",value:"man",onChange:()=>y("gender","man")}),"For man"]}),r.jsxs("label",{children:[r.jsx(R,{type:"radio",name:"gender",value:"woman",onChange:()=>y("gender","woman")}),"For woman"]})]}),d.gender&&m.gender&&r.jsx("div",{children:m.gender})]}),r.jsx(ce,{children:r.jsxs(Z,{children:[r.jsx(ee,{children:"Your weight in kilograms:"}),r.jsx(te,{type:"number",name:"weight",placeholder:"0"}),d.weight&&m.weight&&r.jsx("div",{children:d.weight})]})}),r.jsxs(ce,{children:[r.jsxs(ee,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),r.jsxs(Z,{children:[r.jsx(te,{type:"number",name:"activityHours",placeholder:"0"}),d.activityHours&&m.activityHours&&r.jsx("div",{children:d.activityHours})]})]}),r.jsxs(wt,{children:["Your recommended water intake per day is:",r.jsxs("span",{children:[t(w)?parseFloat(t(w)).toFixed(2):0,"L"]})]}),r.jsx(ee,{children:"Write down how much water you will drink:"}),r.jsx(Z,{children:r.jsx(te,{type:"number",name:"dailyNorma",placeholder:"0"})}),r.jsx(yt,{type:"submit",children:"Save"})]})})]})}const $t=()=>{const[e,n]=k.useState(!1),t=()=>{n(!e)},i=(z(ae)/1e3).toFixed(1)+" L";return r.jsxs(nt,{children:[r.jsxs(at,{children:[r.jsx(ot,{children:"My daily norma"}),r.jsxs(it,{children:[r.jsx("p",{children:i}),r.jsx(st,{type:"button",onClick:t,children:"Edit"})]})]}),r.jsx(rt,{}),e&&r.jsx(oe,{onClose:t,children:r.jsx(vt,{toggleModal:t})})]})},jt=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    gap: 23px;
  }
`,Mt=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,Dt=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,St=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,Ot=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,Pt=s.span`
  /* width: 50%; */
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.skyBlue};
  transition: width 0.5s ease-out;
  position: relative;

  ::before {
    position: absolute;
    display: block;
    top: 0;
    right: -7px;
    content: '';
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${a.colors.white};
    border: solid 1px ${a.colors.blue};

    margin-top: -3px;
  }
`,Wt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,Ct=s.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${a.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${a.colors.paleBlue};
  }
`,Tt=s.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${a.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${a.colors.paleBlue};
  }
`,Bt=s.span`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;
  margin-left: -2px;
  color: ${a.colors.blue};
  left: ${e=>e.left};

  transition: all 0.5s ease-out;

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${a.colors.paleBlue};
    font-size: 12px;
  }
`,Ft=s.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${a.colors.blue};
  color: ${a.colors.white};
  border: none;

  width: 256px;
  margin-left: 14px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${a.colors.blue};
    stroke: ${a.colors.white};
  }

  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    max-width: 336px;
    height: 43px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`,we=s.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${a.colors.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`,q=s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${a.colors.black};
  margin-bottom: 12px;
`,ye=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,ke=s.h2`
  margin-bottom: 24px;
  color: ${a.colors.black};
  font-size: 26px;
  line-height: 123%;
  font-weight: 600;
`,ve=s.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  margin-bottom: 16px;
`,$e=s.p`
  color: ${a.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  width: 92px;
  height: 36px;
  margin: 0 auto;
`,je=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
  padding: 6px 10px;
  width: 92px;
  height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,I=s.button`
  background-color: ${a.colors.white};
  color: ${a.colors.blue};
  border-radius: 30px;
  border: 1px solid ${a.colors.skyBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;

  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }
`,X=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,Me=s.div`
  margin-bottom: 24px;
`,De=s.select`
  color: ${a.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${a.colors.paleBlue};
  background-color: ${a.colors.white};

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 97%;
  }
  &:hover {
    border-color: ${a.colors.blue};
  }
`,Se=s(R)`
  color: ${a.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${a.colors.paleBlue};
  background-color: ${a.colors.white};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${a.colors.skyBlue};
  }

  &:hover {
    color: ${a.colors.blue};
    border: 1px solid ${a.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${a.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${a.colors.blue};
  }
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 97%;
  }
`,Oe=s.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${a.colors.blue};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`,Pe=s.button`
  box-sizing: border-box;
  display: inline-block;
  width: 280px;
  gap: 10px;
  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: ${a.colors.blue};
  box-shadow: ${a.boxShadowBtn.Btn};
  color: ${a.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }

  &:active {
    box-shadow: ${a.boxShadowBtn.activeBtn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }
`;s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;const We=({onClose:e})=>{const[n,t]=k.useState(""),[o,i]=k.useState([]),{addOneDrink:c,createWater:l}=A(),[p,h]=k.useState(0);k.useEffect(()=>{const g=new Date,x=g.getHours(),v=g.getMinutes(),E=[];for(let B=x;B<24;B++)for(let P=0;P<60;P+=5){if(B===x&&P<v)continue;const F=String(B).padStart(2,"0"),U=String(P).padStart(2,"0"),K=`${F}:${U}`;E.push(K)}const L=String(x).padStart(2,"0"),G=String(v).padStart(2,"0"),J=`${L}:${G}`;t(J),i(E)},[]);const d=new Date,m=String(d.getDate()).padStart(2,"0"),w=String(d.getMonth()+1).padStart(2,"0"),y=String(d.getFullYear()),j=`${m}.${w}.${y}`,D=g=>{let x="";return g>5e3&&(x="The value cannot exceed 5000ml"),x},u=async()=>{await c({time:n,amount:p,date:j}),l({date:j}),h(0),t(""),e()},b=()=>{h(g=>Math.max(g-50,0))},M=()=>{const g=p+50,x=5e3;h(g<=x?g:x)},$=g=>{const x=parseInt(g.target.value);h(x)};return r.jsx(re,{initialValues:{amount:0,time:n},onSubmit:u,children:g=>r.jsxs(we,{children:[r.jsxs(ye,{children:[r.jsx(ke,{children:"Add Water"}),r.jsx(ve,{children:"Choose a value:"}),r.jsx(q,{children:"Amount of water:"}),r.jsxs("div",{children:[r.jsx(I,{type:"button",onClick:b,children:r.jsx(X,{children:r.jsx("use",{href:`${S}#icon-minus`})})}),r.jsx(je,{children:r.jsxs($e,{children:[p||0," ml"]})}),r.jsx(I,{type:"button",onClick:M,children:r.jsx(X,{children:r.jsx("use",{href:`${S}#icon-plus`})})})]})]}),r.jsxs(Me,{children:[r.jsx(q,{children:"Recording time:"}),r.jsxs(De,{name:"time",style:{width:"100%"},onChange:x=>t(x.target.value),children:[r.jsx("option",{value:n,children:n},"current-time"),o.map(x=>r.jsx("option",{value:x,children:x},x))]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Enter the value of the water used:"}),r.jsx(Se,{type:"number",name:"amount",validate:D,max:5e3,value:g.amount||p,onChange:$}),r.jsx(fe,{name:"amount",component:"div"})]}),r.jsxs(Oe,{children:[r.jsxs("span",{children:[p||0,"ml"]}),r.jsxs(Pe,{type:"submit",onClick:u,children:["Save"," "]})]})]})})},Yt=()=>{const[e,n]=k.useState(!1),t=z(lt),o=()=>{n(!e)},i=Math.round(t.percent);return r.jsxs(jt,{children:[r.jsxs(Dt,{children:[r.jsx(Mt,{children:"Today"}),r.jsxs(St,{children:[r.jsx(Ot,{children:r.jsx(Pt,{style:{width:`${Math.min(i,100)}%`}})}),r.jsxs(Wt,{children:[r.jsx(Ct,{children:"0%"}),i<100&&i>0&&r.jsxs(Bt,{left:`${i}%`,children:[i,"%"]}),r.jsx(Tt,{children:"100%"})]})]})]}),r.jsxs(Ft,{onClick:o,children:[r.jsx("svg",{children:r.jsx("use",{href:`${S}#icon-outline`})}),"Add water"]}),e&&r.jsx(oe,{onClose:o,children:r.jsx(We,{onClose:o})})]})},zt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Et=(e=21)=>{let n="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;)n+=zt[t[e]&63];return n};const Nt=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Ht=s.div`
  height: 212px;
  overflow: auto;
  margin-bottom: 12px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${a.colors.paleBlue};
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 100px;
    border-radius: 3px;
    background-color: ${a.colors.skyBlue};
  }
`,_t=s.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 12px;
  ::after {
    content: '';
    height: 1px;
    width: 98%;
    position: absolute;
    bottom: 5px;
    left: 0;
    display: block;
    background-color: ${a.colors.paleBlue};
  }
`,At=s.h3`
  font-size: 24px;
  font-weight: 500;
  /* font-family: 'Roboto'; */
  color: ${a.colors.black};
  text-align: left;
  line-height: 1.25;
  margin-bottom: 15px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,Lt=s.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${a.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color: ${a.colors.black};
    span {
      text-transform: uppercase;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`,Rt=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,qt=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,It=s.svg`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,Xt=s.svg`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,Qt=s.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${a.colors.blue};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${a.colors.blue};
  max-width: 155px;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${a.colors.blue};
    stroke: transparent;
    padding-bottom: 2px;
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: ${a.colors.orange};
      & svg {
        fill: ${a.colors.orange};
      }
    }
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 256px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 656px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 544px;
  }
`;s.h2`
  color: ${a.colors.black};
  width: 200px;
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 384px;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 544px;
  }
`;const Vt=s.div`
  display: flex;
  align-items: center;
  width: 208px;
  height: 52px;
  border-radius: 10px;
  padding: 8px 24px;
  gap: 12px;
  background-color: ${a.colors.lightBlue};
  margin-bottom: 24px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin: 0;
    color: ${a.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    color: ${a.colors.black};
    margin: 0;
  }
`,Gt=s.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  div {
    display: flex;
    align-items: center;
  }
`;s.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  margin: 0;
  color: ${a.colors.black};
`;s.p`
  font-size: 16px;
  line-height: 111%;
  color: ${a.colors.black};
  margin: 0;
`;s.div`
  gap: 7px;
  width: 194px;
  height: 44px;
`;s.button`
  background-color: ${a.colors.white};
  color: ${a.colors.blue};
  border-radius: 30px;
  border: 1px solid ${a.colors.skyBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;

  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }
`;s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`;s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
  width: 92px;
  height: 36px;
`;s.p`
  color: ${a.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  margin: 0 auto;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${a.colors.blue};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`;s.button`
  box-sizing: border-box;
  display: inline-block;
  width: 256px;
  gap: 10px;
  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: ${a.colors.blue};
  box-shadow: ${a.boxShadowBtn.Btn};
  color: ${a.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }

  &:active {
    box-shadow: ${a.boxShadowBtn.activeBtn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }
`;s.input`
  color: ${a.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${a.colors.paleBlue};
  background-color: ${a.colors.white};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${a.colors.skyBlue};
  }

  &:hover {
    color: ${a.colors.blue};
    border: 1px solid ${a.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${a.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${a.colors.blue};
  }
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 97%;
  }
`;const Jt=({onClose:e,id:n})=>{const[t,o]=k.useState(""),[i,c]=k.useState([]),{patchWater:l,createWater:p}=A(),[h,d]=k.useState(0);k.useEffect(()=>{const x=new Date,v=x.getHours(),E=x.getMinutes(),L=[];for(let P=v;P<24;P++)for(let F=0;F<60;F+=5){if(P===v&&F<E)continue;const U=String(P).padStart(2,"0"),K=String(F).padStart(2,"0"),Ye=`${U}:${K}`;L.push(Ye)}const G=String(v).padStart(2,"0"),J=String(E).padStart(2,"0"),B=`${G}:${J}`;o(B),c(L)},[]);const m=new Date,w=String(m.getDate()).padStart(2,"0"),y=String(m.getMonth()+1).padStart(2,"0"),j=String(m.getFullYear()),D=`${w}.${y}.${j}`,u=x=>{let v="";return x>5e3&&(v="The value cannot exceed 5000ml"),v},b=x=>{const v={time:t,amount:x,date:D};l({waterData:v,id:n}),l({id:n,waterData:v}),p({date:D}),d(0),o(""),e()},M=()=>{d(x=>Math.max(x-50,0))},$=()=>{const x=h+50,v=5e3;d(x<=v?x:v)},g=x=>{const v=parseInt(x.target.value);d(v)};return r.jsx(re,{initialValues:{amount:0,time:t},onSubmit:b,children:x=>r.jsxs(we,{children:[r.jsxs(ye,{children:[r.jsx(ke,{children:"Edit the entered amount of water"}),r.jsxs(Vt,{children:[r.jsx(Gt,{children:r.jsx("use",{href:`${S}#icon-glass`})}),r.jsxs("h4",{children:[h," ml"]}),r.jsxs("p",{children:[t," AM"]})]}),r.jsx(ve,{children:"Choose a value:"}),r.jsx(q,{children:"Amount of water:"}),r.jsxs("div",{children:[r.jsx(I,{type:"button",onClick:M,children:r.jsx(X,{children:r.jsx("use",{href:`${S}#icon-minus`})})}),r.jsx(je,{children:r.jsxs($e,{children:[h," ml"]})}),r.jsx(I,{type:"button",onClick:$,children:r.jsx(X,{children:r.jsx("use",{href:`${S}#icon-plus`})})})]})]}),r.jsxs(Me,{children:[r.jsx(q,{children:"Recording time:"}),r.jsxs(De,{name:"time",style:{width:"100%"},onChange:v=>o(v.target.value),children:[r.jsx("option",{value:t,children:t},"current-time"),i.map(v=>r.jsx("option",{value:v,children:v},v))]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Enter the value of the water used:"}),r.jsx(Se,{type:"number",name:"amount",validate:u,max:5e3,value:x.amount||h,onChange:g}),r.jsx(fe,{name:"amount",component:"div"})]}),r.jsxs(Oe,{children:[r.jsxs("span",{children:[h,"ml"]}),r.jsxs(Pe,{type:"submit",onClick:()=>{b(h)},children:["Save"," "]})]})]})})},Ut=s.div`
  display: flex;
  flex-direction: column;
  margin: 8px 12px;
  gap: 24px;
  width: 232px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 544px;
    margin: 0;
  }
`,Kt=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    color: ${a.colors.black};
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    margin: 0;
  }

  p {
    color: ${a.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin: 0;
  }
`,Zt=s.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 24px;
  }
`,en=s.button`
  width: 232px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 30px 8px 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${a.colors.paleBlue};
  border: none;
  height: 44px;
  padding: 10px 30px 10px 30px;

  color: ${a.colors.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  &:hover {
    box-shadow: ${a.boxShadowBtn.Btn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 160px;
  }
`,tn=s.button`
  width: 232px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 30px 8px 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${a.colors.brightRed};
  border: none;
  height: 44px;
  padding: 10px 30px 10px 30px;

  color: ${a.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  &:hover {
    box-shadow: ${a.boxShadowBtn.Btn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 160px;
  }
`,nn=({id:e,date:n,onClose:t})=>{const{deleteReps:o,createWater:i}=A(),c=()=>{o({id:e,date:n}),i(n),t()};return r.jsx(r.Fragment,{children:r.jsxs(Ut,{children:[r.jsxs(Kt,{children:[r.jsx("h2",{children:"Delete entry"}),r.jsx("p",{children:"Are you sure you want to delete the entry?"})]}),r.jsxs(Zt,{children:[r.jsx(en,{type:"button",onClick:t,children:"Cancel"}),r.jsx(tn,{type:"button",onClick:c,children:"Delete"})]})]})})},rn=()=>{const[e,n]=k.useState(!1),[t,o]=k.useState(null),{createWater:i,reps:c}=A(),l=Date.now(),h=new Date(l).toLocaleDateString();k.useEffect(()=>{i({date:h})},[h,i]);const d=(y,j)=>{o(y),n(!j),n(!0)},m=()=>{n(!1)},w=()=>{n(!e)};return r.jsxs(r.Fragment,{children:[r.jsxs(Nt,{children:[r.jsx(At,{children:"Today"}),r.jsx(Ht,{children:c.map(y=>{const[j,D]=y.time.split(":").map(Number),u=j>=12?j-12:j,b=j>=12?"PM":"AM",M=u===0?12:u;return r.jsxs(_t,{children:[r.jsxs(Lt,{children:[r.jsx(Rt,{children:r.jsx("use",{href:`${S}#icon-glass`})}),r.jsxs("h4",{children:[y.amount," ml"]}),r.jsxs("p",{children:[M,":",D<10?"0"+D:D," ",b]})]}),r.jsxs(qt,{children:[r.jsx(It,{onClick:()=>d(r.jsx(Jt,{id:y._id,onClose:m})),children:r.jsx("use",{href:`${S}#icon-note`})}),r.jsx(Xt,{onClick:()=>d(r.jsx(nn,{id:y._id,date:{date:h},onClose:m})),children:r.jsx("use",{href:`${S}#icon-trash`})})]})]},Et())})}),r.jsxs(Qt,{onClick:()=>d(r.jsx(We,{onClose:m})),children:[r.jsx("svg",{children:r.jsx("use",{href:`${S}#icon-increment`})}),"Add water"]})]}),e&&r.jsx(oe,{onClose:w,children:t})]})};const on=s.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${a.colors.black};
    margin-bottom: 6px;
  }
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`,an=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,sn=s.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: ${a.colors.blue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    width: 126px;
    text-align: center;
  }
`,de=s.div`
  width: 15px;
  height: 15px;
  display: flex;
  flex-direction: center;
  align-items: center;

  svg {
    width: 6px;
    height: 10px;
    background: transparent;
    fill: ${a.colors.blue};
    cursor: pointer;

    &:hover {
      fill: ${a.colors.orange};
    }
  }
`,cn=s.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`,dn=s.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${a.colors.black};

  background-color: ${a.colors.white};
  border: 1px solid ${a.colors.white};

  &.today {
    border: 1px solid ${a.colors.blue};
    color: ${a.colors.white};
    background-color: ${a.colors.blue};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  ${({percent:e})=>e>=100?`
      border: 1px solid  ${a.colors.blue};
        
      `:e>0?`
      border: 1px solid ${a.colors.orange};
        
      `:`
      border: 1px solid ${a.colors.white};
      `}

  &:hover {
    box-shadow: 0px 4px 8px ${a.colors.skyBlue};
    border: 1px solid ${a.colors.orange};
  }
`,ln=s.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  text-align: center;
  padding-left: 10px;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${a.colors.skyBlue};

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 12px;
  }
`,un=s.div`
  margin: 0 auto;
  position: absolute;
  z-index: 20;
  top: 830px;
  background-color: ${a.colors.white};
  border-radius: 10px;
  max-width: 280px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  border-radius: 10px;
  padding: 24px 16px;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    top: 280px;
  }

  p {
    font-size: 14px;
    color: ${a.colors.black};
    font-weight: 400;
    padding-bottom: 3px;
    @media screen and (min-width: ${a.breakpoint.tablet}) {
      font-size: 16px;
    }
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${a.colors.blue};
    @media screen and (min-width: ${a.breakpoint.tablet}) {
      font-size: 16px;
    }
  }
  button {
    margin-top: 10px;
  }
`;function O(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function T(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const Ce=6048e5,hn=864e5;let pn={};function V(){return pn}function _(e,n){var p,h,d,m;const t=V(),o=(n==null?void 0:n.weekStartsOn)??((h=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((m=(d=t.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,i=O(e),c=i.getDay(),l=(c<o?7:0)+c-o;return i.setDate(i.getDate()-l),i.setHours(0,0,0,0),i}function Q(e){return _(e,{weekStartsOn:1})}function Te(e){const n=O(e),t=n.getFullYear(),o=T(e,0);o.setFullYear(t+1,0,4),o.setHours(0,0,0,0);const i=Q(o),c=T(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const l=Q(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=l.getTime()?t:t-1}function le(e){const n=O(e);return n.setHours(0,0,0,0),n}function ue(e){const n=O(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function xn(e,n){const t=le(e),o=le(n),i=+t-ue(t),c=+o-ue(o);return Math.round((i-c)/hn)}function mn(e){const n=Te(e),t=T(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),Q(t)}function gn(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function fn(e){if(!gn(e)&&typeof e!="number")return!1;const n=O(e);return!isNaN(Number(n))}function bn(e){const n=O(e),t=T(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const wn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},yn=(e,n,t)=>{let o;const i=wn[e];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+o:o+" ago":o};function ne(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const kn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},vn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$n={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},jn={date:ne({formats:kn,defaultWidth:"full"}),time:ne({formats:vn,defaultWidth:"full"}),dateTime:ne({formats:$n,defaultWidth:"full"})},Mn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Dn=(e,n,t,o)=>Mn[e];function N(e){return(n,t)=>{const o=t!=null&&t.context?String(t.context):"standalone";let i;if(o==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,p=t!=null&&t.width?String(t.width):l;i=e.formattingValues[p]||e.formattingValues[l]}else{const l=e.defaultWidth,p=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[p]||e.values[l]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const Sn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},On={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Pn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Wn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Cn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Tn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Bn=(e,n)=>{const t=Number(e),o=t%100;if(o>20||o<10)switch(o%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Fn={ordinalNumber:Bn,era:N({values:Sn,defaultWidth:"wide"}),quarter:N({values:On,defaultWidth:"wide",argumentCallback:e=>e-1}),month:N({values:Pn,defaultWidth:"wide"}),day:N({values:Wn,defaultWidth:"wide"}),dayPeriod:N({values:Cn,defaultWidth:"wide",formattingValues:Tn,defaultFormattingWidth:"wide"})};function H(e){return(n,t={})=>{const o=t.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const l=c[0],p=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(p)?zn(p,w=>w.test(l)):Yn(p,w=>w.test(l));let d;d=e.valueCallback?e.valueCallback(h):h,d=t.valueCallback?t.valueCallback(d):d;const m=n.slice(l.length);return{value:d,rest:m}}}function Yn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function zn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function En(e){return(n,t={})=>{const o=n.match(e.matchPattern);if(!o)return null;const i=o[0],c=n.match(e.parsePattern);if(!c)return null;let l=e.valueCallback?e.valueCallback(c[0]):c[0];l=t.valueCallback?t.valueCallback(l):l;const p=n.slice(i.length);return{value:l,rest:p}}}const Nn=/^(\d+)(th|st|nd|rd)?/i,Hn=/\d+/i,_n={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},An={any:[/^b/i,/^(a|c)/i]},Ln={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Rn={any:[/1/i,/2/i,/3/i,/4/i]},qn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},In={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Vn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Gn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Jn={ordinalNumber:En({matchPattern:Nn,parsePattern:Hn,valueCallback:e=>parseInt(e,10)}),era:H({matchPatterns:_n,defaultMatchWidth:"wide",parsePatterns:An,defaultParseWidth:"any"}),quarter:H({matchPatterns:Ln,defaultMatchWidth:"wide",parsePatterns:Rn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:H({matchPatterns:qn,defaultMatchWidth:"wide",parsePatterns:In,defaultParseWidth:"any"}),day:H({matchPatterns:Xn,defaultMatchWidth:"wide",parsePatterns:Qn,defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:Vn,defaultMatchWidth:"any",parsePatterns:Gn,defaultParseWidth:"any"})},Un={code:"en-US",formatDistance:yn,formatLong:jn,formatRelative:Dn,localize:Fn,match:Jn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Kn(e){const n=O(e);return xn(n,bn(n))+1}function Zn(e){const n=O(e),t=+Q(n)-+mn(n);return Math.round(t/Ce)+1}function Be(e,n){var m,w,y,j;const t=O(e),o=t.getFullYear(),i=V(),c=(n==null?void 0:n.firstWeekContainsDate)??((w=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:w.firstWeekContainsDate)??i.firstWeekContainsDate??((j=(y=i.locale)==null?void 0:y.options)==null?void 0:j.firstWeekContainsDate)??1,l=T(e,0);l.setFullYear(o+1,0,c),l.setHours(0,0,0,0);const p=_(l,n),h=T(e,0);h.setFullYear(o,0,c),h.setHours(0,0,0,0);const d=_(h,n);return t.getTime()>=p.getTime()?o+1:t.getTime()>=d.getTime()?o:o-1}function er(e,n){var p,h,d,m;const t=V(),o=(n==null?void 0:n.firstWeekContainsDate)??((h=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:h.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(d=t.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,i=Be(e,n),c=T(e,0);return c.setFullYear(i,0,o),c.setHours(0,0,0,0),_(c,n)}function tr(e,n){const t=O(e),o=+_(t,n)-+er(t,n);return Math.round(o/Ce)+1}function f(e,n){const t=e<0?"-":"",o=Math.abs(e).toString().padStart(n,"0");return t+o}const W={y(e,n){const t=e.getFullYear(),o=t>0?t:1-t;return f(n==="yy"?o%100:o,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):f(t+1,2)},d(e,n){return f(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return f(e.getHours()%12||12,n.length)},H(e,n){return f(e.getHours(),n.length)},m(e,n){return f(e.getMinutes(),n.length)},s(e,n){return f(e.getSeconds(),n.length)},S(e,n){const t=n.length,o=e.getMilliseconds(),i=Math.trunc(o*Math.pow(10,t-3));return f(i,n.length)}},Y={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},he={G:function(e,n,t){const o=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(o,{width:"abbreviated"});case"GGGGG":return t.era(o,{width:"narrow"});case"GGGG":default:return t.era(o,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const o=e.getFullYear(),i=o>0?o:1-o;return t.ordinalNumber(i,{unit:"year"})}return W.y(e,n)},Y:function(e,n,t,o){const i=Be(e,o),c=i>0?i:1-i;if(n==="YY"){const l=c%100;return f(l,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):f(c,n.length)},R:function(e,n){const t=Te(e);return f(t,n.length)},u:function(e,n){const t=e.getFullYear();return f(t,n.length)},Q:function(e,n,t){const o=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(o);case"QQ":return f(o,2);case"Qo":return t.ordinalNumber(o,{unit:"quarter"});case"QQQ":return t.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,n,t){const o=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(o);case"qq":return f(o,2);case"qo":return t.ordinalNumber(o,{unit:"quarter"});case"qqq":return t.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,n,t){const o=e.getMonth();switch(n){case"M":case"MM":return W.M(e,n);case"Mo":return t.ordinalNumber(o+1,{unit:"month"});case"MMM":return t.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(o,{width:"wide",context:"formatting"})}},L:function(e,n,t){const o=e.getMonth();switch(n){case"L":return String(o+1);case"LL":return f(o+1,2);case"Lo":return t.ordinalNumber(o+1,{unit:"month"});case"LLL":return t.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(o,{width:"wide",context:"standalone"})}},w:function(e,n,t,o){const i=tr(e,o);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):f(i,n.length)},I:function(e,n,t){const o=Zn(e);return n==="Io"?t.ordinalNumber(o,{unit:"week"}):f(o,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):W.d(e,n)},D:function(e,n,t){const o=Kn(e);return n==="Do"?t.ordinalNumber(o,{unit:"dayOfYear"}):f(o,n.length)},E:function(e,n,t){const o=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(o,{width:"short",context:"formatting"});case"EEEE":default:return t.day(o,{width:"wide",context:"formatting"})}},e:function(e,n,t,o){const i=e.getDay(),c=(i-o.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return f(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,o){const i=e.getDay(),c=(i-o.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return f(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const o=e.getDay(),i=o===0?7:o;switch(n){case"i":return String(i);case"ii":return f(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(o,{width:"short",context:"formatting"});case"iiii":default:return t.day(o,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const o=e.getHours();let i;switch(o===12?i=Y.noon:o===0?i=Y.midnight:i=o/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const o=e.getHours();let i;switch(o>=17?i=Y.evening:o>=12?i=Y.afternoon:o>=4?i=Y.morning:i=Y.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let o=e.getHours()%12;return o===0&&(o=12),t.ordinalNumber(o,{unit:"hour"})}return W.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):W.H(e,n)},K:function(e,n,t){const o=e.getHours()%12;return n==="Ko"?t.ordinalNumber(o,{unit:"hour"}):f(o,n.length)},k:function(e,n,t){let o=e.getHours();return o===0&&(o=24),n==="ko"?t.ordinalNumber(o,{unit:"hour"}):f(o,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):W.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):W.s(e,n)},S:function(e,n){return W.S(e,n)},X:function(e,n,t){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return xe(o);case"XXXX":case"XX":return C(o);case"XXXXX":case"XXX":default:return C(o,":")}},x:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"x":return xe(o);case"xxxx":case"xx":return C(o);case"xxxxx":case"xxx":default:return C(o,":")}},O:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+pe(o,":");case"OOOO":default:return"GMT"+C(o,":")}},z:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+pe(o,":");case"zzzz":default:return"GMT"+C(o,":")}},t:function(e,n,t){const o=Math.trunc(e.getTime()/1e3);return f(o,n.length)},T:function(e,n,t){const o=e.getTime();return f(o,n.length)}};function pe(e,n=""){const t=e>0?"-":"+",o=Math.abs(e),i=Math.trunc(o/60),c=o%60;return c===0?t+String(i):t+String(i)+n+f(c,2)}function xe(e,n){return e%60===0?(e>0?"-":"+")+f(Math.abs(e)/60,2):C(e,n)}function C(e,n=""){const t=e>0?"-":"+",o=Math.abs(e),i=f(Math.trunc(o/60),2),c=f(o%60,2);return t+i+n+c}const me=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Fe=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},nr=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],o=t[1],i=t[2];if(!i)return me(e,n);let c;switch(o){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",me(o,n)).replace("{{time}}",Fe(i,n))},rr={p:Fe,P:nr},or=/^D+$/,ar=/^Y+$/,ir=["D","DD","YY","YYYY"];function sr(e){return or.test(e)}function cr(e){return ar.test(e)}function dr(e,n,t){const o=lr(e,n,t);if(console.warn(o),ir.includes(e))throw new RangeError(o)}function lr(e,n,t){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${o} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ur=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,hr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pr=/^'([^]*?)'?$/,xr=/''/g,mr=/[a-zA-Z]/;function gr(e,n,t){var m,w,y,j,D,u,b,M;const o=V(),i=(t==null?void 0:t.locale)??o.locale??Un,c=(t==null?void 0:t.firstWeekContainsDate)??((w=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:w.firstWeekContainsDate)??o.firstWeekContainsDate??((j=(y=o.locale)==null?void 0:y.options)==null?void 0:j.firstWeekContainsDate)??1,l=(t==null?void 0:t.weekStartsOn)??((u=(D=t==null?void 0:t.locale)==null?void 0:D.options)==null?void 0:u.weekStartsOn)??o.weekStartsOn??((M=(b=o.locale)==null?void 0:b.options)==null?void 0:M.weekStartsOn)??0,p=O(e);if(!fn(p))throw new RangeError("Invalid time value");let h=n.match(hr).map($=>{const g=$[0];if(g==="p"||g==="P"){const x=rr[g];return x($,i.formatLong)}return $}).join("").match(ur).map($=>{if($==="''")return{isToken:!1,value:"'"};const g=$[0];if(g==="'")return{isToken:!1,value:fr($)};if(he[g])return{isToken:!0,value:$};if(g.match(mr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:$}});i.localize.preprocessor&&(h=i.localize.preprocessor(p,h));const d={firstWeekContainsDate:c,weekStartsOn:l,locale:i};return h.map($=>{if(!$.isToken)return $.value;const g=$.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&cr(g)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&sr(g))&&dr(g,n,String(e));const x=he[g[0]];return x(p,g,i.localize,d)}).join("")}function fr(e){const n=e.match(pr);return n?n[1].replace(xr,"'"):e}const br=()=>{const e=ge(),n=z(dt),[t,o]=k.useState(new Date),[i,c]=k.useState(null),[l,p]=k.useState(!1),h=new Date,d=k.useRef(null);k.useEffect(()=>{const u=(t.getMonth()+1).toString().padStart(2,"0"),b=t.getFullYear().toString();e(Re({date:`${u}.${b}`}))},[e,t]);const m=u=>{o(b=>{const M=new Date(b);return M.setMonth(M.getMonth()+u),M})},w=()=>{const b=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),M=[];for(let $=1;$<=b;$++)M.push($);return M},y=u=>{c(parseInt(u)),p(!0)},j=u=>{d.current&&!d.current.contains(u.target)&&p(!1)};k.useEffect(()=>(document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}),[]);const D=w().map(u=>{const b=n.find(M=>parseInt(M.date.split(".")[0],10)===u);return{day:u.toString(),daily_limit:b?b.daily_limit:2e3,count:b?b.count:0,percent:b?b.percent:0,id:b?b._id:""}});return r.jsxs("div",{children:[r.jsxs(on,{children:[r.jsxs(an,{children:[r.jsx("h3",{children:"Month"}),r.jsxs(sn,{children:[r.jsx(de,{onClick:()=>m(-1),children:r.jsx("svg",{children:r.jsx("use",{href:`${S}#icon-left`})})}),r.jsx("span",{children:t.toLocaleDateString("en",{month:"long",year:"numeric"})}),r.jsx(de,{onClick:()=>m(1),children:r.jsx("svg",{children:r.jsx("use",{href:`${S}#icon-right`})})})]})]}),r.jsx(cn,{children:D.map(u=>{const b=new Date(t.getFullYear(),t.getMonth(),parseInt(u.day)),M=h.toDateString()===b.toDateString();return r.jsxs("div",{children:[r.jsx(dn,{percent:u.percent,onClick:()=>y(u.day),className:i===parseInt(u.day)||M?"today":"",children:u.day}),r.jsx(ln,{children:`${u.percent}%`})]},u.day)})})]}),i&&l&&r.jsxs(un,{ref:d,children:[r.jsx("p",{children:r.jsx("span",{children:gr(new Date(t.getFullYear(),t.getMonth(),i),"d, MMMM")})}),n.map(u=>parseInt(u.date.split(".")[0],10)===i?r.jsxs("div",{children:[r.jsxs("p",{children:["Daily limit: ",r.jsxs("span",{children:[u.daily_limit/1e3," L"]})]}),r.jsxs("p",{children:["Fulfillment of the daily limit:"," ",r.jsxs("span",{children:[u.percent,"%"]})]}),r.jsxs("p",{children:["Number of water servings: ",r.jsx("span",{children:u.count})]})]},u._id):null),!n.some(u=>parseInt(u.date.split(".")[0],10)===i&&u.percent>0)&&r.jsx("div",{children:r.jsx("p",{children:"You did not drink on this day."})}),new Date<new Date(t.getFullYear(),t.getMonth(),i)&&r.jsx("div",{children:r.jsx("p",{children:"This day has not yet arrived."})})]})]})},wr=s.div`
  background-position: center center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: -webkit-image-set(
    url(${Ie}) 1x,
    url(${Xe}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Qe}) 1x,
      url(${Ve}) 2x
    );
  }
  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ge}) 1x,
      url(${Je}) 2x
    );
  }
`,yr=s.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  margin: 0 auto;
  max-width: 704px;
  padding-bottom: 22px;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
    max-width: 1176px;
  }
`,kr=s.div`
  display: flex;
  flex-direction: column;
  background-color: ${a.colors.lightBlue};
  padding: 20px 24px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${a.boxShadowBtn.Btn};
  gap: 24px;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 590px;
  }
`,vr=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,$r=s.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`,Dr=()=>r.jsx(r.Fragment,{children:r.jsx(wr,{children:r.jsx($r,{children:r.jsxs(yr,{children:[r.jsxs(vr,{children:[r.jsx($t,{}),r.jsx(Yt,{})]}),r.jsxs(kr,{children:[r.jsx(rn,{}),r.jsx(br,{})]})]})})})});export{Dr as default};
