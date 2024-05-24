<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
/* .navbar-brand > a {
  margin-bottom: -2em;
} */
/* .navbar-end {
  margin-top: -2.5em;
} */
.list-items > ul {
  list-style: unset;
  padding-left: 1em;
}
.list-items > ul > li {
  color: #000;
}
.list-items > ul > li::marker {
  color: #d95a00;
  font-size: 1.5em;
}
.list-items_Privacy ul {
  list-style: unset;
  padding-left: 1.5em;
}
.list-items_Privacy h1 {
  font-weight: 500;
  font-size: 1.5em;
}
.list-items p > strong {
  display: block;
  text-align: center;
  margin: 0.5em;
}
.list-items p > img {
  height: 100px;
  margin-bottom: 1.9em;
}
.listDescription_intro > ul {
  list-style: unset;
}
.listDescription_intro p:last-child {
  width: 35%;
  margin-bottom: 3em;
}
.listDescription_intro p:first-child {
  line-height: 1.5em;
  font-size: larger;
}
.listDescription_intro p:first-child br {
  margin-bottom: 15px;
  display: block;
  content: "";
}
/* contactinformaie */
.Google_Map > p > a {
  position: absolute;
  font-size: 1rem !important;
  background-color: #ffff;
  color: #000;
  padding: 0.6em;
  max-width: 170px;
  width: 100%;
  text-align: center;
  border-radius: 0.5em;
}
.Google_Map > p > a:hover {
  background-color: #f2ebe5;
}
.Google_Map > p > img {
  height: 27vh;
  width: 100%;
  margin-top: -1.5em;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5em;
}

/* Home page first section */
.subheading > h1 {
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  font-size: 35px;
  font-weight: 500;
  line-height: 125%;
  padding: 0.5em;
}
.subheading > p {
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  font-size: 30px;
  font-weight: 300;
  line-height: 100%;
  padding: 0.5em;
}
.subheading p > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: -1;
  height: 55vh;
  width: 100%;
}

/* function page first section */
.titleSubheading > h1 {
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  font-size: 35px;
  font-weight: 500;
  line-height: 125%;
  padding: 0.5em;
}
.titleSubheading > p {
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  font-size: 30px;
  font-weight: 300;
  line-height: 100%;
  padding: 0.5em;
}
.titleSubheading p > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: -1;
  height: 55vh;
  width: 100%;
}
@media (min-width: 60em) {
  .Google_Map > p > img {
    height: 27vh;
    width: 100%;
    margin-top: -1.5em;
  }
  /* Home page first section  */
  .subheading > h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 125%;
    padding: 1em;
    width: 15em;
  }
  .subheading > p {
    width: 60%;
    padding-left: 1em;
  }
  .subheading p > img {
    position: absolute;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    object-position: center;
    z-index: -1;
    height: 60vh;
    width: 100%;
    margin-bottom: 3em;
  }

  /* function page first section  */
  .titleSubheading > h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 125%;
    padding: 1em;
    width: 15em;
  }
  .titleSubheading > p {
    width: 60%;
    padding-left: 1em;
  }
  .titleSubheading p > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    object-position: center;
    z-index: -1;
    height: 60vh;
    width: 100%;
    margin-bottom: 3em;
  }
}
@media (min-width: 100em) {
  /* contactinformaie */
  .Google_Map > p > img {
    height: 21vh;
    width: 100%;
    margin-top: -1.5em;
  }
}

@media (max-width: 1000px) {
 
  .listDescription_intro p:last-child {
    width: 60%;
  }
  .listDescription_intro p:first-child {
    line-height: unset;
    font-size: unset;
  }
}
</style>
