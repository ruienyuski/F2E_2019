(function(t){function s(s){for(var i,c,n=s[0],r=s[1],l=s[2],m=0,v=[];m<n.length;m++)c=n[m],Object.prototype.hasOwnProperty.call(e,c)&&e[c]&&v.push(e[c][0]),e[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(s);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,s=0;s<o.length;s++){for(var a=o[s],i=!0,n=1;n<a.length;n++){var r=a[n];0!==e[r]&&(i=!1)}i&&(o.splice(s--,1),t=c(c.s=a[0]))}return t}var i={},e={app:0},o=[];function c(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,s,a){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)c.d(a,i,function(s){return t[s]}.bind(null,i));return a},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=s,n=n.slice();for(var l=0;l<n.length;l++)s(n[l]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"458f":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),e=a("bc3a"),o=a.n(e),c=a("a7fe"),n=a.n(c),r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],d=(a("5c0b"),a("2877")),m={},v=Object(d["a"])(m,r,l,!1,null,null,null),_=v.exports,g=a("8c4f"),p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("Index")],1)},f=[],u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"carousel slide desktop",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner row mx-0"},[a("div",{staticClass:"carousel-item active col-12 px-0 carousel__img",style:{backgroundImage:"url(images/house/photo-1507149833265-60c372daea22.jpeg)"}}),a("div",{staticClass:"carousel-item col-12 px-0 carousel__img",style:{backgroundImage:"url(images/house/photo-1523217582562-09d0def993a6.jpeg)"}}),a("div",{staticClass:"carousel-item col-12 px-0 carousel__img",style:{backgroundImage:"url(images/house/photo-1549490148-d7304e934d25.jpeg)"}}),a("div",{staticClass:"carousel-item col-12 px-0 carousel__img",style:{backgroundImage:"url(images/house/photo-1551516594-56cb78394645.jpeg)"}})])]),a("div",{staticClass:"col-lg-10 col-12 desktop row justify-content-center align-items-center home__item"},[t._m(0),a("div",{staticClass:"col-xl-10 col-12 align-self-center"},[a("div",{staticClass:"gallery"},t._l(t.rooms,(function(s,i){return a("div",{key:i,staticClass:"relative"},[a("div",{staticClass:"img--active"},[a("img",{attrs:{src:"/images/"+t.room_img[i]+".png",alt:""}})]),a("div",{staticClass:"img--active__text",on:{click:function(a){return t.toroom(s)}}},[t._v(t._s(s.name))])])})),0)])]),a("div",{staticClass:"row mobile__index"},[a("div",{staticClass:"col-12"},[t._m(1),a("div",{staticClass:"row "},[a("div",{staticClass:"col-12 align-self-center"},[a("div",{staticClass:"row justify-content-center my-5"},t._l(t.rooms,(function(s,i){return a("div",{key:i,staticClass:"relative"},[a("div",{staticClass:"img--active"},[a("img",{attrs:{src:"/images/"+t.room_img[i]+".png",alt:""}})]),a("div",{staticClass:"img--active__text",on:{click:function(a){return t.toroom(s)}}},[t._v(t._s(s.name))])])})),0)])]),t._m(2)])])],1)},C=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-xl-2 col-12 info__block desktop"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:"images/icon/logo.3fafe707.svg",alt:"",srcset:""}})]),a("div",{staticClass:"address"},[a("p",[t._v("好室旅店。HOUSE HOTEL")]),a("address",[t._v(" 花蓮縣花蓮市國聯一路1號"),a("br"),t._v(" 03-8321155"),a("br"),t._v(" HOUSE@HOTEL.COM"),a("br")])]),a("div",{staticClass:"switch__circle circle__defaultcolor"},[a("div",{staticClass:"circle active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),a("div",{staticClass:"circle",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),a("div",{staticClass:"circle",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}}),a("div",{staticClass:"circle",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"3"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:"images/icon/logo.3fafe707.svg",alt:"",srcset:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"address"},[a("p",[t._v("好室旅店。HOUSE HOTEL")]),a("address",[t._v(" 花蓮縣花蓮市國聯一路1號"),a("br"),t._v(" 03-8321155"),a("br"),t._v(" HOUSE@HOTEL.COM"),a("br")])])}],h=(a("b0c0"),{name:"Index",data:function(){return{roomName:"",rooms:[],room_img:["photo-1551776235-dde6d482980b","photo-1528908929486-dfaa209c6986","photo-1526913621366-a4583840d736","photo-1519974719765-e6559eac2575","photo-1501876725168-00c445821c9e","photo-1552902019-a6dddd56544a"],isLoading:!1}},methods:{getRoom:function(){var t=this,s=this;s.isLoading=!0;var a={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G"};this.$http.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:a}).then((function(a){s.isLoading=!1,t.rooms=a.data.items})).catch((function(t){console.log(t)}))},toroom:function(t){this.$router.push("/room_style/".concat(t.name))}},created:function(){this.getRoom()}}),x=h,y=Object(d["a"])(x,u,C,!1,null,"47df935b",null),b=y.exports,w={name:"home",components:{Index:b}},k=w,I=Object(d["a"])(k,p,f,!1,null,null,null),S=I.exports,j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"container-fluid text-primary"},[a("div",{staticClass:"row justify-content-center "},[a("div",{staticClass:"col-xl-5 relative carousel  slide d-flex flex-column min-vh-100 px-0",attrs:{id:"carouselExampleIndicators"}},[a("div",{staticClass:"carousel-inner row mx-0",attrs:{"data-ride":"carousel","data-toggle":"modal","data-target":"#myModal"}},t._l(t.roomInfo.imageUrl,(function(s,i){return a("div",{key:i,staticClass:"carousel-item col-12 px-0 block__left__bg",class:{active:t.imgActive===i},style:{backgroundImage:"url("+s+")"}})})),0),a("div",{staticClass:"desktop",staticStyle:{position:"absolute",top:"15%",left:"28%"}},[a("router-link",{staticClass:"text-left pl-3",attrs:{to:"/"}},[a("img",{attrs:{src:"/images/icon/to_left.svg"}}),a("span",{staticClass:"sm__font"},[t._v("查看其它房型")])])],1),a("div",{staticClass:"mt-5 text-center mobile "},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"/images/icon/to_left.svg"}}),a("span",{staticClass:"sm__font"},[t._v("查看其它房型")])])],1),a("div",{staticClass:"send__block"},[a("span",{staticClass:"row justify-content-center"},[a("h2",{staticClass:"xl__font pr-3"},[a("span",[t._v("$")]),t._v(" "+t._s(t.roomInfo.normalDayPrice))]),a("span",{staticClass:"mt-2 m__font"},[t._v("/ 1晚")])]),a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Booking now")]),t._m(0)])]),a("div",{staticClass:"col-xl-7 col-12 block__right "},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-11 row justify-content-start my-3"},[a("div",{staticClass:"col-11 px-0 row justify-content-between"},[a("div",{staticClass:"col-lg-5 font-weight-bold xxl__font align-self-center"},[t._v(t._s(t.roomInfo.name))]),a("div",{staticClass:"col-lg-6 font-weight-bold align-self-center"},[t._v(t._s(t.roomInfo.descriptionShort.GuestMax)+"人・ "+t._s(t.roomInfo.descriptionShort.Bed[0])+"床・ 附早餐・衛浴"+t._s(t.roomInfo.descriptionShort["Private-Bath"])+"間・"+t._s(t.roomInfo.descriptionShort.Footage)+"平方公尺")])])]),a("div",{staticClass:"row mb-5 col-11 px-0"},[a("div",{staticClass:"col-11"},[t._v("平日（一～四）價格："+t._s(t.roomInfo.normalDayPrice)+" / 假日（五〜日）價格："+t._s(t.roomInfo.holidayPrice)+" ")]),a("div",{staticClass:"col-11"},[t._v("入住時間："+t._s(t.roomInfo.checkInAndOut.checkInEarly)+"（最早）/ "+t._s(t.roomInfo.checkInAndOut.checkInLate)+"（最晚）")]),a("div",{staticClass:"col-11"},[t._v("退房時間："+t._s(t.roomInfo.checkInAndOut.checkOut))])]),t._m(1),a("div",{staticClass:"col-11 mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities.Breakfast}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Breakfast.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("早餐")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Mini-Bar"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Mini-Bar.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("Mini Bar")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Room-Service"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Room-Service.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("Room Service")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Wi-Fi"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Wi-Fi.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("Wifi")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Child-Friendly"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Child-Friendly.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("適合兒童")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities.Television}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Television.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("電話")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Great-View"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Great-View.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("漂亮的視野")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities.Refrigerator}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Refrigerator.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("冰箱")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities.Sofa}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Sofa.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("沙發")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Pet-Friendly"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Pet-Friendly.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("攜帶寵物")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block Smoke-Free",class:{icon__opacity:!t.roomInfo.amenities["Smoke-Free"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Smoke-Free.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("全面禁菸")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Air-Conditioner"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Air-Conditioner.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("空調")])])])]),a("h5",{staticClass:"col-11 mb-3"},[t._v("空房狀態查詢")]),a("div",{staticClass:"col-11 mb-3"},[a("div",{staticClass:"date"},[a("date-picker",{attrs:{valueType:"format",range:t.range,inline:""},on:{change:t.inputdate},model:{value:t.time3,callback:function(s){t.time3=s},expression:"time3"}})],1)]),a("div",{staticClass:"col-11"},[a("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.reSelect()}}},[t._v("清除預約")])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"myModal",role:"dialog","data-backdrop":"static"}},[a("div",{staticClass:"modal-dialog mw-100 w-100"},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleInterval","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},t._l(t.roomInfo.imageUrl,(function(s,i){return a("div",{key:i,staticClass:"carousel-item",class:{active:t.imgActive===i},attrs:{"data-interval":"10000"}},[a("div",{staticClass:"row justify-content-center"},[a("img",{staticClass:"d-block col-lg-6",attrs:{src:""+s,alt:"..."}})])])})),0),t._m(3),t._m(4)])])])]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content "},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-4 bg-primary p-4"},[a("div",{staticClass:"row justify-content-center"},[a("form",{staticClass:"col-xl-10 sm__font",on:{submit:function(s){return s.preventDefault(),t.sendOrder(s)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-white",attrs:{for:"bookingInputname"}},[t._v("姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.orderdata.name,expression:"orderdata.name"}],staticClass:"form-control",attrs:{type:"text",id:"bookingInputname",placeholder:"姓名",required:""},domProps:{value:t.orderdata.name},on:{input:function(s){s.target.composing||t.$set(t.orderdata,"name",s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-white",attrs:{for:"bookingInputtel"}},[t._v("手機號碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.orderdata.tel,expression:"orderdata.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"bookingInputtel",placeholder:"手機號碼",required:""},domProps:{value:t.orderdata.tel},on:{input:function(s){s.target.composing||t.$set(t.orderdata,"tel",s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"text-white"},[t._v("入住日期")]),a("date-picker",{attrs:{popupVisible:"true",valueType:"YYYY-MM-DD",type:"range"},model:{value:t.time1,callback:function(s){t.time1=s},expression:"time1"}})],1),a("div",{staticClass:"form-group"},[a("div",{staticClass:"text-white"},[t._v("退房日期")]),a("date-picker",{attrs:{popupVisible:"true",valueType:"YYYY-MM-DD",type:"range"},on:{change:t.inputdate},model:{value:t.time2,callback:function(s){t.time2=s},expression:"time2"}})],1),a("div",{staticClass:"text-secondary"},[t._v(t._s(t.days)+"天，1晚平日")]),a("div",{staticClass:"text-warning"},[t._v(t._s(t.warningtext))]),a("hr",{staticClass:"bg-secondary"}),a("div",{staticClass:"text-right text-white"},[t._v("總計")]),a("div",{staticClass:"text-right text-white l__font"},[t._v(t._s(t.roomInfo.normalDayPrice))]),a("button",{staticClass:"btn btn-outline-light btn-block sm__font ",attrs:{type:"submit"}},[t._v("確認送出")])]),a("p",{staticClass:"text-secondary"},[t._v("此預約系統僅預約功能，並不會對您進行收費")])])]),a("div",{staticClass:"col-xl-8 px-4 text-primary pb-3"},[t._m(5),a("div",{staticClass:"ml__font font-weight-bold"},[t._v("Single Room")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("p",[t._v(t._s(t.roomInfo.descriptionShort.GuestMax)+"人・ "+t._s(t.roomInfo.descriptionShort.Bed[0])+"床・ 附早餐・衛浴"+t._s(t.roomInfo.descriptionShort["Private-Bath"])+"間・"+t._s(t.roomInfo.descriptionShort.Footage)+"平方公尺")]),a("p",[t._v("平日（一～四）價格："+t._s(t.roomInfo.normalDayPrice)+" / 假日（五〜日）價格："+t._s(t.roomInfo.holidayPrice))])]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities.Breakfast}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Breakfast.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("早餐")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Mini-Bar"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Mini-Bar.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("Mini Bar")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Room-Service"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Room-Service.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("Room Service")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Wi-Fi"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Wi-Fi.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("Wifi")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Child-Friendly"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Child-Friendly.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("適合兒童")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities.Television}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Television.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("電話")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Great-View"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Great-View.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("漂亮的視野")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities.Refrigerator}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Refrigerator.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("冰箱")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities.Sofa}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Sofa.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-cancel.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("沙發")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Pet-Friendly"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Pet-Friendly.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("攜帶寵物")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block Smoke-Free",class:{icon__opacity:!t.roomInfo.amenities["Smoke-Free"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Smoke-Free.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("全面禁菸")])]),a("div",{staticClass:"mx-3 my-2"},[a("div",{staticClass:"icon__block",class:{icon__opacity:!t.roomInfo.amenities["Air-Conditioner"]}},[a("span",[a("img",{staticClass:"left__icon",attrs:{src:"/images/icon/Air-Conditioner.svg",alt:""}})]),a("span",[a("img",{staticClass:"right__icon",attrs:{src:"/images/icon/icons8-ok.svg",alt:""}})])]),a("div",{staticClass:"text-center text-wrap",staticStyle:{width:"4rem","font-size":"10px"}},[t._v("空調")])])])])]),a("h4",[t._v("訂房資訊")]),a("ul",[a("li",[t._v("入住時間：最早"+t._s(t.roomInfo.checkInAndOut.checkInEarly)+"，最晚"+t._s(t.roomInfo.checkInAndOut.checkInLate)+"；退房時間："+t._s(t.roomInfo.checkInAndOut.checkOut)+"，請自行確認行程安排。")]),a("li",[t._v("平日定義週一至週四；假日定義週五至週日及國定假日。")]),a("li",[t._v("好室旅店全面禁止吸菸。")]),a("li",[t._v("若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。")])]),a("h4",[t._v("預約流程")]),a("div",{staticClass:"row col-10 justify-content-center"},[a("div",{staticClass:"block__process"},[a("div",{staticClass:"block__process__title"},[a("img",{attrs:{src:"/images/icon/form.svg",alt:""}})]),a("div",{staticClass:"block__process__content"},[t._v("送出線上預約單")])]),a("div",{staticClass:"col-1"},[a("img",{attrs:{src:"/images/icon/to_right.svg"}})]),a("div",{staticClass:"block__process"},[a("div",{staticClass:"block__process__title"},[a("img",{attrs:{src:"/images/icon/icons8-search_chat.svg",alt:""}})]),a("div",{staticClass:"block__process__content"},[t._v("系統立即回覆是否預訂成功 並以簡訊發送訂房通知 (若未收到簡訊請來電確認)")])]),a("div",{staticClass:"col-1"},[a("img",{attrs:{src:"/images/icon/to_right.svg"}})]),a("div",{staticClass:"block__process"},[a("div",{staticClass:"block__process__title"},[a("img",{attrs:{src:"/images/icon/pay.svg",alt:""}})]),a("div",{staticClass:"block__process__content"},[t._v("入住當日憑訂房通知 以現金或刷卡付款即可 (僅接受VISA.JCB.銀聯卡)")])])])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"sendokModal",tabindex:"-1",role:"dialog","aria-labelledby":"sendokModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content "},[a("div",{staticClass:"row bg-primary justify-content-center p-5"},[t._m(6),a("div",{staticClass:"col-10"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-2 row justify-content-center align-items-center",staticStyle:{background:"url(@/assets/static/icon/paper.svg) center no-repeat",width:"124px",height:"157px"}},[a("img",{attrs:{src:"/images/icon/ok.svg",alt:""}})]),a("div",{staticClass:"col-12 modal__alert text-white font-weight-bold text-center my-5"},[t._v("預約成功")]),a("div",{staticClass:"text-white text-center h4 col-12"},[t._v("請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，")]),a("div",{staticClass:"text-white text-center h4 col-12"},[t._v("若未收到簡訊請來電確認，謝謝您")])])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"sendfailModal",tabindex:"-1",role:"dialog","aria-labelledby":"sendfailModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content "},[a("div",{staticClass:"row bg-primary justify-content-center p-5"},[t._m(7),a("div",{staticClass:"col-10"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-2 row justify-content-center align-items-center",staticStyle:{background:"url(@/assets/static/icon/paper.svg) center no-repeat",width:"124px",height:"157px"}},[a("img",{staticClass:"mt-2",attrs:{src:"/images/icon/cancel.svg",width:"37px",height:"37px",alt:""}})]),a("div",{staticClass:"col-12 modal__alert text-white font-weight-bold text-center my-5"},[t._v("預約失敗")]),a("div",{staticClass:"text-white text-center h4 col-12"},[t._v("哎呀！晚了一步！您預約的日期已經被預約走了，")]),a("div",{staticClass:"text-white text-center h4 col-12"},[t._v("再看看其它房型吧")])])])])])])])],1)},E=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"switch__circle circle__primarycolor"},[a("div",{staticClass:"circle active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),a("div",{staticClass:"circle",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),a("div",{staticClass:"circle",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"col-11  mb-5 justify-content-start"},[a("li",[t._v("單人間僅供一位客人使用。")]),a("li",[t._v("臥室配有單人床和私人浴室。")]),a("li",[t._v("您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。")]),a("li",[t._v("房間裡有AC，當然還有WiFi。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("button",{staticClass:"close",staticStyle:{"font-size":"4rem"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleInterval",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleInterval",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticClass:"h2 text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticClass:"h2 text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],M=(a("e25e"),a("ac1f"),a("1276"),a("159b"),a("1157")),z=a.n(M),A=a("ec45"),O={name:"Room_style",components:{DatePicker:A["a"]},data:function(){return{rooms:[],roomId:"",time1:null,time2:null,time3:null,range:!0,startDate:"",endDate:"",days:0,warningtext:"",isLoading:!1,popupVisible:!0,roomInfo:{id:"",name:"",imageUrl:"",valueType:"",normalDayPrice:0,holidayPrice:0,descriptionShort:{GuestMin:0,GuestMax:0,Bed:[],"Private-Bath":0,Footage:0},description:"",checkInAndOut:{checkInEarly:"",checkInLate:"",checkOut:""},amenities:{"Wi-Fi":!0,Breakfast:!0,"Mini-Bar":!0,"Room-Service":!0,Television:!0,"Air-Conditioner":!0,Refrigerator:!0,Sofa:!0,"Great-View":!0,"Smoke-Free":!0,"Child-Friendly":!0,"Pet-Friendly":!0}},orderdata:{name:"",tel:"",date:[]},imgActive:0}},methods:{getRoom:function(){var t=this,s=this;s.isLoading=!0;var a={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G"},i=this.$route.params.name;this.$http.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:a}).then((function(a){t.rooms=a.data.items,s.isLoading=!1,t.rooms.forEach((function(s){i===s.name&&(t.roomId=s.id)})),t.RoomData()}))},reSelect:function(){this.time3="";var t={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G"};this.$http.delete("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:t}).then((function(t){}))},RoomData:function(){var t=this,s=this;s.isLoading=!0;var a={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G"};this.$http.get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(s.roomId),{headers:a}).then((function(a){t.roomInfo=a.data.room[0],t.amenities=t.roomInfo.amenities,s.isLoading=!1})).catch((function(t){}))},sendOrder:function(){var t=this,s={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G"};this.$http.post("https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(t.roomId),{name:t.orderdata.name,tel:t.orderdata.tel,date:t.orderdata.date},{headers:s}).then((function(t){z()("#exampleModal").modal("hide"),z()("#sendokModal").modal("show")})).catch((function(t){z()("#exampleModal").modal("hide"),z()("#sendfailModal").modal("show")}))},inputdate:function(){var t=this;null!==t.time3&&(t.time1=t.time3[0],t.time2=t.time3[1]),t.startDate=t.time1,t.endDate=t.time2;var s=new Date(Date.parse(t.startDate)).getTime(),a=new Date(Date.parse(t.endDate)).getTime();if(t.time1==t.time2||s>a)t.time2="",t.warningtext="請勿選同一天或是選擇入住前日期";else if(null!==t.time2){t.warningtext="",t.days=0;var i=Math.abs(s-a);t.days=parseInt(i/864e5,10)+1;var e=[],o=t.startDate.split("-"),c=t.endDate.split("-"),n=new Date,r=new Array,l=0;n.setDate(o[2]),n.setMonth(o[1]-1),n.setFullYear(o[0]),e.push(t.startDate);while(0==l){var d=n.getTime()+864e5;n.setTime(d),r[2]=n.getDate(),r[1]=n.getMonth()+1,r[0]=n.getFullYear(),1==String(r[1]).length&&(r[1]="0"+r[1]),1==String(r[2]).length&&(r[2]="0"+r[2]),e.push(r[0]+"-"+r[1]+"-"+r[2]),r[0]==c[0]&&r[1]==c[1]&&r[2]==c[2]&&(l=1)}t.orderdata.date=e}else t.warningtext="",t.days=0}},created:function(){this.getRoom()}},D=O,B=Object(d["a"])(D,j,E,!1,null,null,null),T=B.exports;i["a"].use(g["a"]);var F=[{path:"/",name:"home",component:S},{path:"/room_style/:name",name:"room_style",component:T}],P=new g["a"]({routes:F}),$=P,Y=a("9062"),L=a.n(Y);a("e40d"),a("4989");i["a"].use(n.a,o.a),i["a"].config.productionTip=!1,i["a"].component("Loading",L.a),new i["a"]({router:$,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,s,a){"use strict";var i=a("458f"),e=a.n(i);e.a}});
//# sourceMappingURL=app.1a542d07.js.map