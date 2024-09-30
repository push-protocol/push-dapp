import{cA as i,cD as Y,cv as t,cE as le,cx as q,cy as G,gn as Q,gd as p,gi as J,cq as pe,cM as xe,cs as l,gP as ce,gC as he,hD as ge,gQ as me,gZ as fe,iv as w,cH as h,cI as K,is as X,iw as ue,gN as we,__tla as je}from"./index-DYUgkmoC.js";import{c as Ce,__tla as ye}from"./PushTokenContractHelper-PdBhPHrn.js";import{E as be,__tla as ve}from"./EmptyNotificationSettings-Cq3kQ71T.js";import{T as j,__tla as ke}from"./Tag-DJUk7Dj5.js";let ee,te,ie,ne,se,Le=Promise.all([(()=>{try{return je}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let C,y,b,v,k,L,M,_,g,H,m,T,S,$;ie=({text:e,onClick:o,isLoading:n,topMargin:s,loaderTitle:r})=>{const a=Y();return t.jsx(le,{theme:a,children:t.jsx(C,{style:{marginTop:s||"55px"},children:n?t.jsx(y,{children:t.jsx(q,{type:G.SEAMLESS,spinnerSize:26,spinnerColor:"#FFF",title:r??"",titleColor:"#fff"})}):t.jsx(Q,{onClick:o,variant:"primary",size:"large",children:e})})})},C=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 55px;
`,y=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  color: #fff;
  box-sizing: border-box;
  background-color: #cf1c84;
  border-radius: 15px;
  // padding: 3% 8%;
  padding: 8px 16px;
`,b="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.8312%2012.3465L12.8975%208.28027L0.99987%208.28027'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.06626%201.00014L1%205.06641L12.8976%205.06641'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",te=({onMintPushToken:e,noOfPushTokensToCheck:o,containerProps:n})=>{const{account:s,provider:r}=pe(),a=xe.appEnv==="prod",[d,x]=l.useState(!1),c=async()=>{const de=await Ce({address:s,provider:r,noOfPushTokensToCheck:o});x(!de)},{isModalOpen:u,showModal:Me,ModalComponent:ae}=ce();return l.useEffect(()=>{(async()=>await c())()},[o]),t.jsxs(t.Fragment,{children:[t.jsx(v,{children:d?t.jsxs(k,{style:n,children:[t.jsx(L,{children:a?"You do not have sufficient PUSH Tokens. Swap to add more PUSH.":"Follow these steps to ensure you have enough Testnet Push to proceed."}),a?t.jsx(Q,{leadingIcon:t.jsx(he,{width:"12px",height:"12px",margin:"0 0.5rem 0 0",src:b}),size:"extraSmall",children:"Swap Tokens for PUSH"}):t.jsxs(M,{children:[t.jsxs(_,{href:"https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",target:"_blank",children:[t.jsx(g,{children:"1"}),t.jsx(m,{children:"Sepolia ETH Faucet"})]}),t.jsxs(H,{onClick:async()=>{await e(1e3),await c()},children:[t.jsx(g,{children:"2"}),t.jsx(m,{children:"Get Testnet PUSH"})]})]})]}):""}),u&&t.jsx(ae,{InnerComponent:ge,InnerComponentProps:{defaultPushTokenAmount:o},modalPadding:"0px",modalPosition:me.ON_ROOT})]})},v=i.div`
  width: 100%;
  transform: translateY(-40px);
`,k=i.div`
  box-sizing: border-box;
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: #f4dcea;
  border-radius: 0px 0px 28px 28px;
  padding: 32px 32px 20px 32px;
  margin-top: 24px;
  margin-bottom: -40px;

  @media ${p.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 24px 16px 24px;
  }
`,L=i(J)`
    color:#D53A94;
    font-size:15px
    font-weight:400;
    line-height:21px;
    text-align: left;
    margin:0 2rem 0 0;
    max-width: 45%;
    @media ${p.laptop} {
        max-width: 55%;
    }
    @media ${p.tablet} {
        max-width: 100%;
        margin: 0;
        margin-bottom: 0.8rem;
    }
`,M=i.div`
  display: flex;
  flex-direction: row;
`,_=i.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;
  margin: 0 1rem;
  @media ${p.laptop} {
    margin: 0 1.5rem 0 0;
  }
`,g=i(J)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 10px;
  border: 1.5px solid #d53a94;
  color: #cf1c84;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  max-width: 18px;
  max-height: 18px;
  margin-right: 0.6rem;
`,H=i.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  @media ${p.laptop} {
    margin: 0;
  }
`,m=i.label`
  color: #fff;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
`,ne=e=>l.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1209 6.84638 16.2635 4.78216 14.7407 3.25932C13.2178 1.73648 11.1536 0.87913 9 0.875ZM12.8672 7.57812L8.28907 11.9531C8.17071 12.0645 8.01406 12.126 7.85157 12.125C7.77214 12.1261 7.69328 12.1115 7.61953 12.082C7.54578 12.0525 7.47861 12.0087 7.42188 11.9531L5.13282 9.76562C5.06933 9.71023 5.01769 9.64257 4.98102 9.56672C4.94434 9.49086 4.92338 9.40837 4.9194 9.32421C4.91542 9.24004 4.92849 9.15594 4.95784 9.07696C4.98719 8.99798 5.03221 8.92575 5.09019 8.86461C5.14816 8.80347 5.2179 8.75469 5.29522 8.72119C5.37253 8.68769 5.45582 8.67017 5.54007 8.66968C5.62433 8.66919 5.70781 8.68574 5.78551 8.71834C5.86321 8.75094 5.93351 8.79891 5.99219 8.85938L7.85157 10.6328L12.0078 6.67188C12.1293 6.56585 12.2871 6.51091 12.4482 6.51853C12.6093 6.52615 12.7612 6.59575 12.8722 6.71277C12.9832 6.8298 13.0446 6.98519 13.0437 7.14646C13.0428 7.30773 12.9795 7.4624 12.8672 7.57812Z",fill:"#D53893"})),ee=({title:e,description:o,Button:n,style:s})=>{const r=Y(),a=w(700);return t.jsxs($,{style:s,children:[t.jsxs(h,{align:"flex-start",children:[t.jsx(T,{style:{color:r.color},children:e}),!a&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:"4px"}}),t.jsx(S,{children:o})]})]}),n]})},T=i.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${e=>e.theme.color};
`,S=i.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${e=>e.theme.default.secondaryColor};
`,$=i(fe)`
  flex-direction: row;
  align-items: center;
  padding: 24px 24px 20px 24px;

  @media ${p.tablet} {
    padding: 20px 12px;
    flex: 0;
  }
`;function oe(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function re(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}let z,A,P,E,V,F,f,O,D,Z,B,I,R,U,W,N;z=({delegateAddress:e,maxWidth:o})=>{const[n,s]=l.useState(e),[r,a]=l.useState(!1),d=w(1200);return l.useEffect(()=>{if(!d)s(e);else{const x=X(e,5);s(x)}},[d]),t.jsx(V,{onMouseLeave:()=>a(!1),minWidth:d?"120px":"350px",children:t.jsx(A,{addressText:n,isCopied:r,setIsCopied:a,delegateAddress:e})})},A=({addressText:e,isCopied:o,setIsCopied:n,delegateAddress:s})=>{const r=w(1e3),[a,d]=l.useState(!1),x=u=>{d(!1)},c=u=>{d(!0)};return t.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},onMouseEnter:c,onMouseLeave:x,children:[t.jsx(F,{children:X(e,7,7)}),a&&t.jsx(P,{isMobile:r?"10px":"50px",onClick:()=>{navigator.clipboard.writeText(s),n(!0)},children:o?t.jsx(oe,{size:18,color:"white",style:{paddingTop:6}}):t.jsx(re,{size:18,color:"white",style:{paddingTop:6}})})]})},P=i.div`
  cursor: pointer;
  margin-left: ${e=>e.isMobile||""};
`,E=i.span`
  flex: 3;
  // margin-right: 30px;
  // margin-left: 10px;
  padding: 0px 15px;
  max-height: 30px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: ${e=>e.maxWidth||"fit-content"};

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 164%;
  border-radius: 13px;

  &:active {
    opacity: 0.75;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 4px 8px;
  }
`,V=i(E)`
  color: ${e=>e.theme.color};

  &:hover {
    background: rgb(226, 8, 128);
    background: linear-gradient(
      107deg,
      rgba(226, 8, 128, 1) 30%,
      rgba(103, 76, 159, 1) 70%,
      rgba(53, 197, 243, 1) 100%
    );
    opacity: 0.9;
    color: #fff;
    cursor: pointer;
    pointer: hand;
  }
`,F=i.div`
  padding-top: 3px;
  font-size: 15px;
  font-weight: 400;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`,f=({options:e,item:o})=>{const[n,s]=l.useState(!1),r=l.useRef();return we(r,()=>s(!1)),t.jsxs("div",{children:[t.jsx(O,{onClick:()=>s(!0)}),n&&t.jsx(D,{onMouseLeave:()=>s(!1),ref:r,children:e.map(({icon:a,onClick:d,text:x},c)=>t.jsxs(Z,{onClick:()=>d(o),index:c,children:[a,t.jsx(B,{children:x})]},c))})]})},O=i(ue)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${e=>e.theme.default.color};
`,D=i.div`
  padding: 10px 6px;
  width: 119px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.default.border};
  position: absolute;
  top: 3px;
  right: 0px;
  background-color: ${e=>e.theme.default.bg};
  z-index: 2;
`,Z=i.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-top: ${e=>e.index===0?"0px":"16px"};
`,B=i.span`
  margin-left: 8px;
`,se=e=>{const o=(n,s)=>n.toLowerCase()===s.toLowerCase();return t.jsx(I,{style:e.style,isLoading:e.isLoading,children:t.jsx(h,{flex:"5",justify:"flex-start",align:"stretch",children:e.isLoading?t.jsx(W,{children:t.jsx(q,{type:G.SEAMLESS})}):t.jsxs(t.Fragment,{children:[e.items&&e.items.length>0&&e.items.map(n=>{var s,r;return t.jsxs("div",{children:[t.jsx(U,{}),t.jsxs(h,{direction:"row",justify:"space-between",padding:"9.5px 0px",children:[t.jsxs(h,{direction:"row",justify:"flex-start",margin:"0px 0px 0px -15px",children:[e.isAddress?t.jsx(N,{children:t.jsx(z,{delegateAddress:n,maxWidth:"200px"})}):t.jsxs(t.Fragment,{children:[t.jsx(R,{children:n.description}),n.type===2&&t.jsx(j,{children:"Range"}),n.type===3&&t.jsx(j,{children:"Multi-Range"})]}),e.isAddress&&o(e.account,n)&&t.jsx(j,{children:"Creator"})]}),e.isAddress===!0&&((s=e.addressDropdownOptions)==null?void 0:s.length)>0&&!o(e.account,n)&&t.jsx(f,{options:e.addressDropdownOptions,item:n}),e.isAddress===!1&&((r=e.settingsDropdownOptions)==null?void 0:r.length)>0&&t.jsx(f,{options:e.settingsDropdownOptions,item:n})]})]},e.isAddress?n:n.description||n.index)}),e.items&&e.items.length===0&&e.isAddress===!1&&t.jsx(be,{title:"No settings added",description:"Add settings for users to customize their notification preferences.",onClick:e.onClickEmptyListButton,buttonTitle:e.emptyListButtonTitle})]})})})},I=i.div`
  padding: ${e=>e.isLoading?"0px":"0px 24px 16px"};
  flex: 1;

  @media ${p.tablet} {
    flex: 0;
    padding: ${e=>e.isLoading?"0px":"0px 0px 10px"};
  }
`,R=i.span`
  margin-left: 15px;
  color: ${e=>e.theme.scheme==="light"?e.theme.default.color:e.theme.default.secondaryColor};
`,U=i.div`
  background-color: ${e=>e.theme.default.border};
  height: 1px;
`,W=i.div`
  height: 100px;
`,N=i.div`
  @media ${p.tablet} {
    margin: 0px 0px 0px 5px;
  }
`});export{ee as C,te as F,ie as M,ne as S,Le as __tla,se as a};
