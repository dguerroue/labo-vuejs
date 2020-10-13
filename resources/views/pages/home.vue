<template>
  <div>
    <h1>{{title}} <i class="icon icon-arrow"></i></h1>
    <img src="img/placeholder-image.jpg" class="img-fluid" alt="">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi numquam magni dolorem corporis nulla est accusamus mollitia repellendus reiciendis eos autem magnam, ex atque itaque illo ad ipsam? Molestiae, fugit!</p>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  title: 'home',
  data: function() {
    return {
      title: 'Home'
    }
  },
}
</script>

<style lang="scss">
  @import '../../scss/variables';


  .tide-info {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    margin: 20px 0px;

    .tide-info--wrapper {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 85px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: hidden;

      span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .switch-data {
    display: flex;
    width: 40%;
    margin-left: auto;
    margin-bottom: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .switch-data--picto {
      width: 25px;
      transition: opacity .3s;
      opacity: 0.5;

      &.active {
        opacity: 1;
      }
    }

    #switch-data--checkbox {
      display: none;
    }
  }
</style>