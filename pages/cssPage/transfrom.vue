<template>
  <div class="wrapper">
    <div class="links">
      <NuxtLink class="button--green" to="/">返回</NuxtLink>
    </div>
    <div class="css-box">
      <!-- translate -->
      <div class="transfrom-list">
        <div class="css-left">
          <div class="translate-box">
            1
          </div>
        </div>
        <div class="css-right">
          1. transfrom: translateX(100%) 相对于<span class="red">自身</span
          >的百分比去移动
        </div>
      </div>
      <!-- roate -->
      <div class="transfrom-list">
        <div class="css-left">
          <div class="roate-box">
            2
          </div>
        </div>
        <div class="css-right">
          2.  transform: rotate(90deg) <br>旋转点<span class="red">transform-origin: center</span>;
        </div>
      </div>
      <!-- skew -->
       <div class="transfrom-list">
        <div class="css-left">
          <div class="skew-box">
            3
            <div class="skew-progress">
              <div class="skew-bar"></div>
            </div> 
          </div>
        </div>
        <div class="css-right">
          3.  transform: skew(20deg)
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  .css-box {
    margin-top: 20px;
    .transfrom-list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      .css-left {
        background: #ccc;
        width: 400px;
        .translate-box {
          width: 50px;
          height: 50px;
          background: pink;
          transform: translateX(100%);
          text-align: center;
          line-height: 50px;
        }
        .roate-box {
          width: 40px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          background: red;
          transform: rotate(90deg);
          // transform-origin: top left;
        }
        .skew-box {
          width: 100px;
          height: 50px;
          display: flex;
          align-items: center;
          .skew-progress {
            width: 100%;
            height: 20px;
            border-radius: 10px;
            background: yellow;
            position: relative;
            overflow: hidden;
            .skew-bar {
              position: absolute;
              left: -10px;
              top: 0;
              height: 100%;
              width: 40%;
              background: yellowgreen;
              transform: skew(-20deg, 0);
            }
          }
        }
      }
      .css-right {
        width: 420px;
        margin-left: 20px;
      }
    }
  }
}
</style>
