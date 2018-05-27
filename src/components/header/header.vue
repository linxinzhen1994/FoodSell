<template>
  <div class="headerContent">
      <div class="sellerAvatar">
          <img :src="seller.avatar" width="64px" height="64px" alt="">
      </div>
      <div class="sellerInfor">
          <div class="sellerTitle">
              <span class="sellerBrand"></span>
              <span class="sellerName">{{seller.name}}</span>
          </div>
          <div class="description">{{seller.description}} / {{seller.deliveryTime}}分钟到达</div>
          <div v-if="seller.supports" class="support">
              <span class="icon"></span>
              <span class="text">{{seller.supports[0].description}}</span>
          </div>
      </div>
  </div>


</template>

<script>

export default {
    data(){
        return{
            seller:{} //seller是一个对象(单个数据为对象h)
        }
    },
    created(){
        this._getSeller()
    },
    methods:{
        _getSeller(){
            this.$http.get('/api/seller').then( res => {
                this.seller = res.data.data;
                console.log(this.seller)
            })
        }
    }
}

</script>

<style lang="stylus">
@import  '../../common/stylus/mixin.styl'
.headerContent{
    background-color: rgba(7,17,27,0.5);
    padding: 24px 12px 18px 24px;
    font-size:0; //减去图片和内容本来有的间距
    .sellerAvatar{
        display:inline-block;
        margin-right :16px;
    }
    .sellerInfor{
        display:inline-block;
        color: rgb(255,255,255);
        vertical-align:top;
        .sellerTitle{
            .sellerBrand{
                bg-image('brand');
                width: 30px;
                height: 18px;
                display: inline-block;
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
            .sellerName{
                font-size :16px;
                margin-left: 6px;
                line-height: 18px;
                font-weight: bold;
                vertical-align: top; //文字与顶线对其
            }
        }
        .description{
            margin-top: 8px;
            font-size: 12px;
            line-height: 12px;
            font-weight: 200;
        }
        .support{
            margin-top: 10px;
            .icon{
                bg-image('decrease_2');
                width: 12px;
                height: 12px;
                display: inline-block;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                margin-right :4px;
            }
            .text{
                font-size: 12px;
                line-height: 12px;
                font-weight: 200;
                vertical-align: top;
            }
        }
    }
}
</style>

