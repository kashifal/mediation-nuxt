<template>
  <a class="btn_demo" href="/contact">
    Demo aanvraag
  </a>
</template>
<style>
.btn_demo {
  position: absolute;
  top: 100px;
  right: 10px;
  z-index: 200;
  border: solid 10px #ffffff;
  border-radius: 80px;
  padding: 0.2em;
  background-color: #d95a00;
  color: #ffffff;
  animation: throbbing 6s ease 3s infinite;
  /* width: 140px;
    height: 140px; */
  width: 100px;
  height: 100px;
  text-align: center;
  font-weight: 450;
  vertical-align: middle;
  box-shadow: 5px 5px 20px #00000020;
  display: flex;
  align-items: center;
}
.btn_demo:hover::after {
  content: "";
  position: absolute;
  width: 170px;
  height: 170px;
  top: -35px;
  right: -35px;
  opacity: 0;
  border: solid 2px #98b2cb;
  border-radius: 50%;
  animation: pulse-ring 2s;
}
@keyframes pulse-ring {
  0% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  80%,
  100% {
    opacity: 0;
  }
  100% {
    transform: scale(0.5);
  }
}

@keyframes throbbing {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(0.8);
  }
}

/* PC versie */
@media (min-width: 60em) {
  .btn_demo {
    position: absolute;
    top: 30px;
    right: 10px;
    z-index: 200;
    border: solid 10px #ffffff;
    border-radius: 80px;
    padding: 0.2em;
    background-color: #d95a00;
    color: #ffffff;
    animation: throbbing 6s ease 3s infinite;
    width: 140px;
    height: 140px;
    text-align: center;
    font-weight: 490;
    vertical-align: middle;
    box-shadow: 5px 5px 20px #00000020;
    display: flex;
    align-items: center;
  }
  .btn_demo:hover::after {
    content: "";
    position: absolute;
    width: 190px;
    height: 190px;
    top: -35px;
    right: -35px;
    opacity: 0;
    border: solid 2px #98b2cb;
    border-radius: 50%;
    animation: pulse-ring 2s;
  }
  @keyframes pulse-ring {
    0% {
      transform: scale(1.2);
      opacity: 0.5;
    }
    80%,
    100% {
      opacity: 0;
    }
    100% {
      transform: scale(0.5);
    }
  }

  @keyframes throbbing {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(0.8);
    }
  }
}
</style>
