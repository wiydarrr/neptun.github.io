(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{1463:function(t,e,n){let r=n(6411);t.exports=function(t){if("string"!=typeof t)return;let e=t.toUpperCase();if(Object.prototype.hasOwnProperty.call(r,e))return r[e]},t.exports.currencySymbolMap=r},6411:function(t){t.exports={AED:"د.إ",AFN:"؋",ALL:"L",AMD:"֏",ANG:"ƒ",AOA:"Kz",ARS:"$",AUD:"$",AWG:"ƒ",AZN:"₼",BAM:"KM",BBD:"$",BDT:"৳",BGN:"лв",BHD:".د.ب",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BOV:"BOV",BRL:"R$",BSD:"$",BTC:"₿",BTN:"Nu.",BWP:"P",BYN:"Br",BYR:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHE:"CHE",CHF:"CHF",CHW:"CHW",CLF:"CLF",CLP:"$",CNH:"\xa5",CNY:"\xa5",COP:"$",COU:"COU",CRC:"₡",CUC:"$",CUP:"₱",CVE:"$",CZK:"Kč",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"دج",EEK:"kr",EGP:"\xa3",ERN:"Nfk",ETB:"Br",ETH:"Ξ",EUR:"€",FJD:"$",FKP:"\xa3",GBP:"\xa3",GEL:"₾",GGP:"\xa3",GHC:"₵",GHS:"GH₵",GIP:"\xa3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"₪",IMP:"\xa3",INR:"₹",IQD:"ع.د",IRR:"﷼",ISK:"kr",JEP:"\xa3",JMD:"J$",JOD:"JD",JPY:"\xa5",KES:"KSh",KGS:"лв",KHR:"៛",KMF:"CF",KPW:"₩",KRW:"₩",KWD:"KD",KYD:"$",KZT:"₸",LAK:"₭",LBP:"\xa3",LKR:"₨",LRD:"$",LSL:"M",LTC:"Ł",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"ден",MMK:"K",MNT:"₮",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"₨",MVR:"Rf",MWK:"MK",MXN:"$",MXV:"MXV",MYR:"RM",MZN:"MT",NAD:"$",NGN:"₦",NIO:"C$",NOK:"kr",NPR:"₨",NZD:"$",OMR:"﷼",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"₱",PKR:"₨",PLN:"zł",PYG:"Gs",QAR:"﷼",RMB:"￥",RON:"lei",RSD:"Дин.",RUB:"₽",RWF:"R₣",SAR:"﷼",SBD:"$",SCR:"₨",SDG:"ج.س.",SEK:"kr",SGD:"S$",SHP:"\xa3",SLL:"Le",SOS:"S",SRD:"$",SSP:"\xa3",STD:"Db",STN:"Db",SVC:"$",SYP:"\xa3",SZL:"E",THB:"฿",TJS:"SM",TMT:"T",TND:"د.ت",TOP:"T$",TRL:"₤",TRY:"₺",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"₴",UGX:"USh",USD:"$",UYI:"UYI",UYU:"$U",UYW:"UYW",UZS:"лв",VEF:"Bs",VES:"Bs.S",VND:"₫",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"Ƀ",XCD:"$",XOF:"CFA",XPF:"₣",XSU:"Sucre",XUA:"XUA",YER:"﷼",ZAR:"R",ZMW:"ZK",ZWD:"Z$",ZWL:"$"}},4918:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return n(720)}])},1766:function(t,e,n){"use strict";var r=n(5893);n(7294);var i=n(6870),s=n.n(i),u=function(t){var e=t.value,n=t.setValue,i=t.placeholder,u=t.type,a=t.pattern,o=t.required;return(0,r.jsx)("input",{className:s().input,placeholder:i,value:e,type:u,onChange:function(t){return n(t.target.value)},pattern:a,required:o})};e.Z=u},720:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r,i=n(7568),s=n(6042),u=n(9396),a=n(655),o=n(5893),c=n(7294),l=n(6512),d=n.n(l),f=n(1766),D=n(6870),S=n.n(D),p=function(t){var e=t.children,n=t.setValue,r=t.value,i=function(t){n(t.target.value)};return(0,o.jsx)("select",{className:S().select,value:r,onChange:i,children:e})},P=n(918),C=n(2268),R=n(8501),N=n(2754),T=n(7236),L=n(3098),B=n(2724),M=n(8885),h=n(165),$=n(1163),g=function(t){var e,n=t.host,r=(0,c.useContext)(P.Z),l=r.pageInfo,D=r.setPageInfo,S=(0,c.useState)([]),g=S[0],x=S[1],Z=(0,c.useState)(""),_=Z[0],K=Z[1],G=(0,c.useState)("all"),F=G[0],U=G[1],v=(0,c.useState)(l.listings),E=v[0],A=v[1],m=(0,c.useState)(!1),O=m[0],H=m[1],I=(0,c.useRef)(null),V=(0,$.useRouter)(),j=function(t){return!!t.group||(t.product?!l.mainDetails.design.hideOutOfStockProducts||t.product.isInStock:void 0)},W=(e=(0,i.Z)(function(){var t,e,n;return(0,a.__generator)(this,function(r){switch(r.label){case 0:return H(!0),t=sessionStorage.getItem("shopPassword"),[4,N.Z.PageInfo(l.mainDetails.id,"listings",t).finally(function(){H(!1)}).catch(function(t){401===t.response.status&&V.push("/auth")})];case 1:return(e=r.sent())&&(D((0,u.Z)((0,s.Z)({},l,e.data.data),{pageName:"listings"})),n=e.data.data.listings.filter(j),A(n),x(e.data.data.categories.map(function(t){return(0,u.Z)((0,s.Z)({},t),{listings:n.filter(function(e){return t.listingIds.includes(e.id)})})}))),[2]}})}),function(){return e.apply(this,arguments)});return((0,c.useEffect)(function(){A(l.listings?l.listings.filter(j).filter(function(t){var e,n;switch(t.type){case R.G.PRODUCT:return null===(e=t.product)||void 0===e?void 0:e.title.toLowerCase().includes(_.toLowerCase());case R.G.GROUP:return null===(n=t.group)||void 0===n?void 0:n.title.toLowerCase().includes(_.toLowerCase())}}):[])},[_]),(0,c.useEffect)(function(){if(g.find(function(t){return t.id===+F})){var t;A(null===(t=g.find(function(t){return t.id===+F}))||void 0===t?void 0:t.listings)}},[F]),(0,c.useEffect)(function(){"listings"!==l.pageName&&W(),l.categories&&x(l.categories.map(function(t){return(0,u.Z)((0,s.Z)({},t),{listings:l.listings.filter(function(e){return t.listingIds.includes(e.id)})})}))},[]),(0,c.useEffect)(function(){(0,B.t)(I,O),setTimeout(function(){!O&&I.current&&(I.current.style.all="unset")},300)},[O]),l.mainDetails.onHold)?(0,o.jsx)(h.Z,{}):O?(0,o.jsx)(L.Z,{}):(0,o.jsxs)("div",{className:"page",ref:I,children:[(0,o.jsx)(M.Z,{host:n}),(0,o.jsx)(C.Z,{children:(0,o.jsxs)("div",{className:"".concat(d().ProductsSection," ").concat(l.mainDetails.design.centerProductTitle&&d().centerTitle),children:[(0,o.jsx)("h1",{children:"Products"}),!l.mainDetails.design.disableSearchBar&&(0,o.jsxs)("div",{className:d().filterSection,children:[(0,o.jsx)(f.Z,{value:_,setValue:K,placeholder:"Search for a product..."}),(0,o.jsx)(p,{value:F,setValue:U,children:g.map(function(t){return(0,o.jsxs)("option",{value:t.id,children:["Category: ",t.name]})})})]}),O?(0,o.jsx)(L.Z,{}):(0,o.jsx)("div",{className:d().productsList,children:(0,o.jsx)(T.Z,{items:E})})]})})]})};g.getInitialProps=(r=(0,i.Z)(function(t){return(0,a.__generator)(this,function(t){return[2,{}]})}),function(t){return r.apply(this,arguments)});var x=g},6870:function(t){t.exports={input:"FormComponents_input__4Vrfz",select:"FormComponents_select__l4ZMC",textarea:"FormComponents_textarea__DZXSL"}},6512:function(t){t.exports={ProductsSection:"Products_ProductsSection__jBQ9G",centerTitle:"Products_centerTitle__y1ad9",filterSection:"Products_filterSection__LWhFr",productsList:"Products_productsList__YrBmE"}}},function(t){t.O(0,[395,774,888,179],function(){return t(t.s=4918)}),_N_E=t.O()}]);