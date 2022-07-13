<template>
  <div class="absolute inset-0 h-screen w-screen bg-slate-700 z-50 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <div class="trinity-rings-spinner">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <h2 class="text-center font-semibold mt-7 text-white text-loading">Preparing ...</h2>
    </div>
  </div>
</template>

<style scoped>
.text-loading {
  letter-spacing: 3px;
}
.trinity-rings-spinner, .trinity-rings-spinner * {
      box-sizing: border-box;
    }

    .trinity-rings-spinner {
      height: 106px;
      width: 106px;
      padding: 3px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      overflow: hidden;
      box-sizing: border-box;
    }
    .trinity-rings-spinner .circle {
      position:absolute;
      display:block;
      border-radius:50%;
      border: 3px solid #ff1d5e;
      opacity: 1;
    }

    .trinity-rings-spinner .circle:nth-child(1) {
      height: 100px;
      width: 100px;
      animation : trinity-rings-spinner-circle1-animation 1.5s infinite linear;
      border-width: 3px;
    }
    .trinity-rings-spinner .circle:nth-child(2) {
      height: calc(100px * 0.65);
      width: calc(100px * 0.65);
      animation : trinity-rings-spinner-circle2-animation 1.5s infinite linear;
      border-width: 4px;
    }
    .trinity-rings-spinner .circle:nth-child(3) {
      height: calc(100px * 0.1);
      width: calc(100px * 0.1);
      animation:trinity-rings-spinner-circle3-animation 1.5s infinite linear;
      border-width: 2px;
    }

    @keyframes trinity-rings-spinner-circle1-animation{
      0% {
        transform: rotateZ(20deg) rotateY(0deg);
      }
      100% {
        transform: rotateZ(100deg) rotateY(360deg);
      }
    }
    @keyframes trinity-rings-spinner-circle2-animation{
      0% {
        transform: rotateZ(100deg) rotateX(0deg);
      }
      100% {
        transform: rotateZ(0deg) rotateX(360deg);
      }
    }
    @keyframes trinity-rings-spinner-circle3-animation{
      0% {
        transform: rotateZ(100deg) rotateX(-360deg);
      }
      100% {
        transform: rotateZ(-360deg) rotateX(360deg);
      }
    }
</style>