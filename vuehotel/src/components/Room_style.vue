<template>
  <div>
    <loading :active.sync="isLoading" ></loading>
    <div class="container-fluid text-primary">
      <div class="row justify-content-center ">

        <div id="carouselExampleIndicators" class="col-xl-5 relative carousel  slide d-flex flex-column min-vh-100 px-0" >
            <div class="carousel-inner row mx-0"  data-ride="carousel" data-toggle="modal" data-target="#myModal">
              <div class="carousel-item col-12 px-0 block__left__bg" :class="{active:imgActive === key}" v-for="(item,key) in roomInfo.imageUrl" :key="key" :style="{ backgroundImage: 'url(' + item + ')' }">
              </div>
            </div>
            <div style="position: absolute; top:15%; left:28%;" class="desktop">
                <router-link :to="`/`" class="text-left pl-3" >
                    <img :src="`images/icon/to_left.svg`">
                    <span class="ml-3 sm__font">查看其它房型</span>
                </router-link>
            </div>
              <div class="mt-5 text-center mobile ">
                  <router-link :to="`/`" >
                      <img :src="`images/icon/to_left.svg`">
                      <span class="ml-1 sm__font">查看其它房型</span>
                  </router-link>
              </div>                        
            <div class="send__block desktop">
                <span class="row justify-content-center">
                  <h2 class="xl__font pr-3"><span>$</span> {{roomInfo.normalDayPrice}}</h2>
                  <span class="mt-2 m__font">/ 1晚</span>                
                </span>
                <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModal">Booking now</button>                  
                <div class="switch__circle circle__primarycolor">
                  <div class="circle active" data-target="#carouselExampleIndicators" data-slide-to="0"></div>
                  <div class="circle" data-target="#carouselExampleIndicators" data-slide-to="1"></div>
                  <div class="circle" data-target="#carouselExampleIndicators" data-slide-to="2"></div>
                </div>               
            </div>
            <div class="mobile">
                <span class="row justify-content-center mt-3">
                  <h2 class="xl__font pr-3"><span>$</span> {{roomInfo.normalDayPrice}}</h2>
                  <span class="mt-2 m__font">/ 1晚</span>                
                </span>
                <div class="row justify-content-center my-2">
                   <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">Booking now</button>                  
                </div>
                <div class="switch__circle circle__primarycolor">
                  <div class="circle active" data-target="#carouselExampleIndicators" data-slide-to="0"></div>
                  <div class="circle" data-target="#carouselExampleIndicators" data-slide-to="1"></div>
                  <div class="circle" data-target="#carouselExampleIndicators" data-slide-to="2"></div>
                </div>               
            </div>
        </div>
        <div class="col-xl-7 col-12 block__right ">
          <div class="row justify-content-center">
            <div class="col-11 row justify-content-start my-3">
              <div class="col-11 px-0 row justify-content-between">
                <div class="col-lg-5 font-weight-bold xxl__font align-self-center">{{roomInfo.name}}</div>
                <div class="col-lg-6 font-weight-bold align-self-center">{{roomInfo.descriptionShort.GuestMax}}人・ {{roomInfo.descriptionShort.Bed[0]}}床・ 附早餐・衛浴{{roomInfo.descriptionShort["Private-Bath"]}}間・{{roomInfo.descriptionShort.Footage}}平方公尺</div>
              </div>						
            </div>
            <div class="row mb-5 col-11 px-0">
              <div class="col-11">平日（一～四）價格：{{roomInfo.normalDayPrice}} / 假日（五〜日）價格：{{roomInfo.holidayPrice}} </div>
              <div class="col-11">入住時間：{{roomInfo.checkInAndOut.checkInEarly}}（最早）/ {{roomInfo.checkInAndOut.checkInLate}}（最晚）</div>
              <div class="col-11">退房時間：{{roomInfo.checkInAndOut.checkOut}}</div>	
            </div>

            <ul class="col-11  mb-5 justify-content-start">
              <li>單人間僅供一位客人使用。</li>
              <li>臥室配有單人床和私人浴室。</li>
              <li>您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。</li>
              <li>房間裡有AC，當然還有WiFi。</li>
            </ul>
            <div class="col-11 mb-3">
              <div class="row">
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities.Breakfast}">
                    <span><img class="left__icon" :src="`images/icon/Breakfast.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">早餐</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Mini-Bar']}">
                    <span><img class="left__icon" :src="`images/icon/Mini-Bar.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">Mini Bar</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Room-Service']}">
                    <span><img class="left__icon" :src="`images/icon/Room-Service.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">Room Service</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Wi-Fi']}">
                    <span><img class="left__icon" :src="`images/icon/Wi-Fi.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">Wifi</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Child-Friendly']}">
                    <span><img class="left__icon" :src="`images/icon/Child-Friendly.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">適合兒童</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities.Television}">
                    <span><img class="left__icon" :src="`images/icon/Television.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">電話</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Great-View']}">
                    <span><img class="left__icon" :src="`images/icon/Great-View.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">漂亮的視野</div>
                </div>
              </div>
              <div class="row">
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities.Refrigerator}">
                    <span><img  class="left__icon" :src="`images/icon/Refrigerator.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">冰箱</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities.Sofa}">
                    <span><img  class="left__icon" :src="`images/icon/Sofa.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">沙發</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Pet-Friendly']}">
                    <span><img  class="left__icon" :src="`images/icon/Pet-Friendly.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">攜帶寵物</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block Smoke-Free" :class="{icon__opacity: !roomInfo.amenities['Smoke-Free']}">
                    <span><img  class="left__icon" :src="`images/icon/Smoke-Free.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">全面禁菸</div>
                </div>
                <div class="mx-3 my-2">
                  <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Air-Conditioner']}">
                    <span><img  class="left__icon" :src="`images/icon/Air-Conditioner.svg`" alt=""></span>
                    <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                  </div>
                  <div class="text-center text-wrap" style="width: 4rem; font-size:10px">空調</div>
                </div>

              </div>
            </div>

            <h5 class="col-11 mb-3">空房狀態查詢</h5>
            <div class="row col-11">
              <a href="#" class="btn btn-success" @click.prevent="reSelect()">清除預約</a>
              <a href="#" class="btn btn-primary btn-lg mobile ml-auto" data-toggle="modal" data-target="#exampleModal">Booking now</a> 
            </div>            
            <div class="col-11 mt-3">
              <date-picker v-model="time3" v-on:change="inputdate" valueType="format" :range="range" inline></date-picker>
              <!-- <div class="date">
                <input id="daterangepicker1" type="hidden">
                <div id="daterangepicker1-container" class="embedded-daterangepicker"></div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog" data-backdrop="static">
        <div class="modal-dialog mw-100 w-100">
            <div class="modal-content">
              <div><button type="button" class="close" style="font-size:4rem" data-dismiss="modal">&times;</button></div>
              <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item" v-for="(item,key) in roomInfo.imageUrl" :key="key"  :class="{active:imgActive === key}"   data-interval="10000">
                      <div class="row justify-content-center">
                        <img :src="`${item}`"  class="d-block col-lg-6" alt="...">
                      </div>
                    </div>                    
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
              </div>							
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content ">
          <div class="row">
            <div class="col-xl-4 bg-primary p-4">
              <div class="row justify-content-center">
                  <form class="col-xl-10 sm__font" @submit.prevent="sendOrder">
                      <div class="form-group">
                        <label for="bookingInputname" class="text-white">姓名</label>
                        <input type="text" class="form-control" id="bookingInputname" placeholder="姓名" v-model="orderdata.name" required>                     
                      </div>
                      <div class="form-group">
                        <label for="bookingInputtel" class="text-white">手機號碼</label>
                        <input type="tel" class="form-control" id="bookingInputtel" placeholder="手機號碼" v-model="orderdata.tel" required>                       
                      </div>
                      <div class="form-group">
                        <div class="text-white">入住日期</div>
                        <date-picker v-model="time1" popupVisible="true" valueType="YYYY-MM-DD"  type="range"></date-picker>
                      </div>
                      <div class="form-group">
                        <div class="text-white">退房日期</div>
                        <date-picker v-model="time2" v-on:change="inputdate" popupVisible="true" valueType="YYYY-MM-DD"  type="range"></date-picker>
                      </div>
                      <div class="text-secondary">{{days}}天，1晚平日</div>
                      <div class="text-warning">{{warningtext}}</div>
                      <hr class="bg-secondary">
                      <div class="text-right text-white">總計</div>
                      <div class="text-right text-white l__font"><span>$</span>{{roomInfo.normalDayPrice}}</div>
                      <button type="submit" class="btn btn-outline-light btn-block sm__font ">確認送出</button>
                  </form>				
                  <p class="text-secondary">此預約系統僅預約功能，並不會對您進行收費</p>
              </div>

            </div>
            <div class="col-xl-8 px-4 text-primary pb-3">
              <div class="row p-2">
                <div class="col-12">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="font-size:4rem">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div class="ml__font font-weight-bold">Single Room</div>
              <div class="row">
                <div class="col-12">
                  <p>{{roomInfo.descriptionShort.GuestMax}}人・ {{roomInfo.descriptionShort.Bed[0]}}床・ 附早餐・衛浴{{roomInfo.descriptionShort["Private-Bath"]}}間・{{roomInfo.descriptionShort.Footage}}平方公尺</p>
                  <p>平日（一～四）價格：{{roomInfo.normalDayPrice}} / 假日（五〜日）價格：{{roomInfo.holidayPrice}}</p>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities.Breakfast}">
                        <span><img class="left__icon" :src="`images/icon/Breakfast.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">早餐</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Mini-Bar']}">
                        <span><img class="left__icon" :src="`images/icon/Mini-Bar.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">Mini Bar</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Room-Service']}">
                        <span><img class="left__icon" :src="`images/icon/Room-Service.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">Room Service</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Wi-Fi']}">
                        <span><img class="left__icon" :src="`images/icon/Wi-Fi.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">Wifi</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Child-Friendly']}">
                        <span><img class="left__icon" :src="`images/icon/Child-Friendly.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">適合兒童</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities.Television}">
                        <span><img class="left__icon" :src="`images/icon/Television.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">電話</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Great-View']}">
                        <span><img class="left__icon" :src="`images/icon/Great-View.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">漂亮的視野</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities.Refrigerator}">
                        <span><img  class="left__icon" :src="`images/icon/Refrigerator.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">冰箱</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities.Sofa}">
                        <span><img  class="left__icon" :src="`images/icon/Sofa.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-cancel.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">沙發</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Pet-Friendly']}">
                        <span><img  class="left__icon" :src="`images/icon/Pet-Friendly.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">攜帶寵物</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block Smoke-Free" :class="{icon__opacity: !roomInfo.amenities['Smoke-Free']}">
                        <span><img  class="left__icon" :src="`images/icon/Smoke-Free.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">全面禁菸</div>
                    </div>
                    <div class="mx-3 my-2">
                      <div class="icon__block" :class="{icon__opacity: !roomInfo.amenities['Air-Conditioner']}">
                        <span><img  class="left__icon" :src="`images/icon/Air-Conditioner.svg`" alt=""></span>
                        <span><img class="right__icon" :src="`images/icon/icons8-ok.svg`" alt=""></span>
                      </div>
                      <div class="text-center text-wrap" style="width: 4rem; font-size:10px">空調</div>
                    </div>

                  </div>                  
                </div>
              </div>
              <h4>訂房資訊</h4>
              <ul>
                <li>入住時間：最早{{roomInfo.checkInAndOut.checkInEarly}}，最晚{{roomInfo.checkInAndOut.checkInLate}}；退房時間：{{roomInfo.checkInAndOut.checkOut}}，請自行確認行程安排。</li>
                <li>平日定義週一至週四；假日定義週五至週日及國定假日。</li>
                <li>好室旅店全面禁止吸菸。</li>
                <li>若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。</li>
              </ul>
              <h4>預約流程</h4>
              <div class="row col-10 justify-content-center">
                <div class="block__process">
                  <div class="block__process__title">
                    <img :src="`images/icon/form.svg`" alt="">
                  </div>
                  <div class="block__process__content">送出線上預約單</div>
                </div>
                <div class="col-1">
                  <img :src="`images/icon/to_right.svg`">
                </div>
                <div class="block__process">
                  <div class="block__process__title">
                    <img :src="`images/icon/icons8-search_chat.svg`" alt="">
                  </div>
                  <div class="block__process__content">系統立即回覆是否預訂成功 並以簡訊發送訂房通知 (若未收到簡訊請來電確認)</div>
                </div>
                <div class="col-1">
                  <img :src="`images/icon/to_right.svg`">
                </div>
                <div class="block__process">
                  <div class="block__process__title">
                    <img :src="`images/icon/pay.svg`" alt="">
                  </div>
                  <div class="block__process__content">入住當日憑訂房通知 以現金或刷卡付款即可 (僅接受VISA.JCB.銀聯卡)</div>
                </div>
              </div>

            </div>
          </div>		

        </div>
      </div>
    </div>

    <div class="modal fade" id="sendokModal" tabindex="-1" role="dialog" aria-labelledby="sendokModal" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content ">
            <div class="row bg-primary justify-content-center p-5">
                <div class="col-12">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="h2 text-white">&times;</span>
                  </button>
                </div>
              <div class="col-10">
                <div class="row justify-content-center">
                  <div class="col-lg-2 col-12 row justify-content-center align-items-center" style="background: url(images/icon/paper.svg) center no-repeat;width: 124px;height: 157px;">
                  <img :src="`images/icon/ok.svg`" alt="">
                  </div>
                  <div class="col-12 modal__alert text-white font-weight-bold text-center my-5">預約成功</div>
                  <div class="text-white text-center h4 col-12">請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，</div>
                  <div class="text-white text-center h4 col-12">若未收到簡訊請來電確認，謝謝您</div>
                </div>
              </div>
            </div>		
      
          </div>
        </div>
    </div>

    <div class="modal fade" id="sendfailModal" tabindex="-1" role="dialog" aria-labelledby="sendfailModal" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content ">
            <div class="row bg-primary justify-content-center p-5">
                <div class="col-12">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="h2 text-white">&times;</span>
                  </button>
                </div>
              <div class="col-10">
                <div class="row justify-content-center">
                  <div class="col-lg-2 col-12 row justify-content-center align-items-center" style="background: url(images/icon/paper.svg) center no-repeat;width: 124px;height: 157px;">
                  <img :src="`images/icon/cancel.svg`" class="mt-2" width="37px" height="37px" alt="">
                  </div>
                  <div class="col-12 modal__alert text-white font-weight-bold text-center my-5">預約失敗</div>
                  <div class="text-white text-center h4 col-12">哎呀！晚了一步！您預約的日期已經被預約走了，</div>
                  <div class="text-white text-center h4 col-12">再看看其它房型吧</div>
                </div>
              </div>
            </div>		
      
          </div>
        </div>
    </div>    
  </div>
</template>
<script>
import $ from 'jquery';
import DatePicker from 'vue2-datepicker';
export default {
  name: 'Room_style',
  components: {
      DatePicker
  },
  data(){
    return {
      rooms:[],
      roomId:'',
      time1: null,
      time2: null,
      time3: null,
      range:true,
      startDate:'',
      endDate:'',
      days:0,
      warningtext:'',
      isLoading:false,
      popupVisible:true,
      roomInfo:{
        id:'',
        name:'',
        imageUrl:'',
        valueType:'',
        normalDayPrice:0,
        holidayPrice:0,
        descriptionShort:{
          GuestMin:0,
          GuestMax:0,
          Bed:[],
          "Private-Bath":0,
          Footage:0,
        },
        description:'',
        checkInAndOut:{
          checkInEarly:'',
          checkInLate:'',
          checkOut:'',
        },
        amenities:{
          "Wi-Fi":true,
          "Breakfast":true,
          "Mini-Bar":true,
          "Room-Service":true,
          "Television":true,
          "Air-Conditioner":true,
          "Refrigerator":true,
          "Sofa":true,
          "Great-View":true,
          "Smoke-Free":true,
          "Child-Friendly":true,
          "Pet-Friendly":true,
        },
      },
      orderdata:{
        name:'',
        tel:'',
        date:[],
      },    
      imgActive:0,
    }
  },
  methods: {
    getRoom(){
      let vm = this;
      vm.isLoading = true;
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G'
      }
      const roomname = this.$route.params.name;
      this.$http.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/rooms`, { headers })
      .then(response => {
          // console.log(response.data.items);
          this.rooms = response.data.items;
          vm.isLoading = false
          this.rooms.forEach((item) => {
            if(roomname === item.name){
              this.roomId = item.id
            }          
          })
          this.RoomData();
      })
    },

    reSelect(){
      this.time3 ='';
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G'
      }
      this.$http.delete(`https://challenge.thef2e.com/api/thef2e2019/stage6/rooms`, { headers })
      .then(response => {
          // console.log(response);
      })      
    },
    RoomData(){
      let vm = this;
      vm.isLoading = true;
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G'
      }      
      this.$http.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomId}`, { headers })
      .then(response => {
          // console.log('room',response.data.room);
          this.roomInfo = response.data.room[0];
          // console.log(this.roomInfo)
          this.amenities = this.roomInfo.amenities;  
          vm.isLoading = false
      })
      .catch(error => {
          // console.log(error)
      })      
    },
    sendOrder(){
      let vm = this;
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G'
      }    
      this.$http.post(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomId}`,
      {name:vm.orderdata.name,
      tel:vm.orderdata.tel,
      date:vm.orderdata.date}, 
      { headers })
      .then(response => {
          // console.log(response);
          $('#exampleModal').modal('hide')
          $('#sendokModal').modal('show')
      })
      .catch(error => {
          // console.log(error.response)
          // console.log(error.response.data.message)
          $('#exampleModal').modal('hide')
          $('#sendfailModal').modal('show')
      })        
    },
    inputdate(){
      let vm = this;
      if(vm.time3 !== null) {
         vm.time1 = vm.time3[0];
         vm.time2 = vm.time3[1];
      }     
      vm.startDate = vm.time1;
      vm.endDate = vm.time2;
      let startTime = new Date(Date.parse(vm.startDate)).getTime();
      let endTime = new Date(Date.parse(vm.endDate)).getTime();       
      if(vm.time1 == vm.time2 || startTime > endTime){
        // console.log(startTime,endTime)
        vm.time2 = '';
        vm.warningtext='請勿選同一天或是選擇入住前日期';
      }else if(vm.time2 !== null){
        // 取得日期之間的天數
        vm.warningtext = '';
        vm.days = 0;
        let diff = Math.abs(startTime - endTime);
        vm.days = parseInt(diff / (1000 * 60 * 60 * 24), 10) + 1;
        // 取得日期期間 range
        let result = []
        let beginDay = vm.startDate.split("-");
        let endDay = vm.endDate.split("-");
        let diffDay = new Date();
        let dateList = new Array;
        let i = 0;
        diffDay.setDate(beginDay[2]);
        diffDay.setMonth(beginDay[1]-1);
        diffDay.setFullYear(beginDay[0]);
        result.push(vm.startDate);
        while(i == 0){
            let countDay = diffDay.getTime() + 24 * 60 * 60 * 1000;
            diffDay.setTime(countDay);
            dateList[2] = diffDay.getDate();
            dateList[1] = diffDay.getMonth() + 1;
            dateList[0] = diffDay.getFullYear();
            if(String(dateList[1]).length == 1){dateList[1] = "0"+dateList[1]};
            if(String(dateList[2]).length == 1){dateList[2] = "0"+dateList[2]};
            result.push(dateList[0]+"-"+dateList[1]+"-"+dateList[2]);
            if(dateList[0] == endDay[0] && dateList[1] == endDay[1] && dateList[2] == endDay[2]){ i = 1;
            }
        };
        // console.log(result);
        vm.orderdata.date = result

      } else {
        vm.warningtext = '';
        vm.days = 0;
      }
    },    
  }, 
  created(){
    this.getRoom();
  }
}
</script>
