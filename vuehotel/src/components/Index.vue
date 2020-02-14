<template>
  <div>
    <loading :active.sync="isLoading" ></loading>
    <div id="carouselExampleIndicators" class="carousel slide desktop" data-ride="carousel">
        <div class="carousel-inner row mx-0">
          <div class="carousel-item active col-12 px-0 carousel__img" :style="{ backgroundImage: 'url(' + 'images/house/photo-1507149833265-60c372daea22.jpeg'+ ')' }" >
          </div>
          <div class="carousel-item col-12 px-0 carousel__img" :style="{ backgroundImage: 'url(' + 'images/house/photo-1523217582562-09d0def993a6.jpeg'+ ')' }" >
          </div>
          <div class="carousel-item col-12 px-0 carousel__img" :style="{ backgroundImage: 'url(' + 'images/house/photo-1549490148-d7304e934d25.jpeg'+ ')' }">
          </div>
          <div class="carousel-item col-12 px-0 carousel__img" :style="{ backgroundImage: 'url(' + 'images/house/photo-1551516594-56cb78394645.jpeg'+ ')' }" >
          </div>
        </div>
    </div>
    <div class="col-lg-10 col-12 desktop row justify-content-center align-items-center home__item">
        <div class="col-xl-2 col-12 info__block desktop">
          <div class="logo">
            <img src="images/icon/logo.3fafe707.svg" alt="" srcset="">
          </div>
          <div class="address">
              <p>好室旅店。HOUSE HOTEL</p>
              <address>
                  花蓮縣花蓮市國聯一路1號<br>
                  03-8321155<br>
                  HOUSE@HOTEL.COM<br>
              </address>
          </div>
          <div class="switch__circle circle__defaultcolor">
            <div class="circle active"  data-target="#carouselExampleIndicators" data-slide-to="0"></div>
            <div class="circle"  data-target="#carouselExampleIndicators" data-slide-to="1"></div>
            <div class="circle"  data-target="#carouselExampleIndicators" data-slide-to="2"></div>
            <div class="circle"  data-target="#carouselExampleIndicators" data-slide-to="3"></div>
          </div>
        </div>
        <div class="col-xl-10 col-12 align-self-center">
          <div class="gallery">
            <div class="relative" v-for="(item,key) in rooms" :key="key">
              <div class="img--active">
                  <img :src="`/images/${room_img[key]}.png`" alt="">
              </div>
              <div @click="toroom(item)" class="img--active__text">{{ item.name }}</div>
            </div>
          </div>
        </div>
    </div>
    <div class="row mobile">
      <div class="col-12">
          <div class="logo">
            <img src="images/icon/logo.3fafe707.svg" alt="" srcset="">
          </div>
          <div class="row ">
            <div class="col-12 align-self-center">
              <div class="row justify-content-center my-5">
                <div class="relative" v-for="(item,key) in rooms" :key="key">
                  <div class="img--active">
                      <img :src="`/images/${room_img[key]}.png`" alt="">
                  </div>
                  <div @click="toroom(item)" class="img--active__text">{{ item.name }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="address">
              <p>好室旅店。HOUSE HOTEL</p>
              <address>
                  花蓮縣花蓮市國聯一路1號<br>
                  03-8321155<br>
                  HOUSE@HOTEL.COM<br>
              </address>
          </div>                 
      </div>
    </div>    

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      roomName:'',
      rooms:[],
      room_img:[
       "photo-1551776235-dde6d482980b",
       "photo-1528908929486-dfaa209c6986",
       "photo-1526913621366-a4583840d736",
       "photo-1519974719765-e6559eac2575",
       "photo-1501876725168-00c445821c9e",
       "photo-1552902019-a6dddd56544a",
      ],
      isLoading:false,     
    }
  },
  methods:{
    getRoom(){
      let vm = this;
      vm.isLoading = true;
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer QefyiDNfXTxW6BdEZQiXzsYwcImYHggJN8YadM98KtzJ6oAjmAl2qfpXW35G'
      }
      this.$http.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', { headers })
      .then(response => {
        vm.isLoading = false;
          // console.log(response.data.items);
          this.rooms = response.data.items;
      })
      .catch(error => {
          console.log(error)
      })
    },
    toroom(room){
      this.$router.push(`/room_style/${room.name}`)
    },
  },
  created(){
    this.getRoom();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
