<template>
  <main>
    <div class="bg-[#F3F6F9]">
      <div
        class="max-w-7xl mx-auto justify-between lg:px-4 px-6 py-6 flex items-center"
      >
        <NuxtLink
          to="/"
          class="sm:flex hidden items-center whitespace-nowrap font-lato font-semibold text-[16px] leading-[16px] gap-3 text-[#D95A00]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M20 12H4m0 0l6-6m-6 6l6 6"
            />
          </svg>
          Ga terug
        </NuxtLink>
        <div class="w-full justify-center flex">
          <img src="/assets/images/Contactuslogo.png" alt="" class="" />
        </div>
      </div>
    </div>
    <div class="bg-cover relative py-32 lg:px-4 px-2">
      <div class="absolute z-20 top-0 right-0">
        <img
          src="/assets/images/contactfir.png"
          alt=""
          class="w-[1000px] h-auto"
        />
      </div>
      <div class="absolute z-0 top-0 right-0">
        <img
          src="/assets/images/contacthero.png"
          alt=""
          class="w-full h-auto"
        />
      </div>
      <div
        class="max-w-4xl z-50 relative mx-auto text-[#030D1D] flex flex-col justify-center items-center text-center"
      >
        <h1
          class="font-lato font-[400] text-[35px] sm:text-[56px] sm:leading-[66px]"
        >
          Ga voor een
          <span class="font-[700]">overzichtelijk en gestructureerd</span>
          mediation proces
        </h1>
        <p class="font-lato font-[400] text-[24px] py-10 leading-[28px]">
          Lorem Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
          cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
          mollit ullamco exercitation tempor.
        </p>
        <a href="#" class="pt-10 relative z-50">
          <button
            class="text-[16px] md:px-[20px] px-[10px] hover:bg-[#D96A00] justify-center text-center whitespace-nowrap rounded-[2px] py-[14px] flex gap-2 items-center md:py-[16px] font-semibold leading-[16px] font-lato bg-[#D95A00] text-white"
          >
            Vraag jouw demo aan
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v14m6-6l-6 6m-6-6l6 6"
              />
            </svg>
          </button>
        </a>
      </div>
      <div
        class="flex lg:flex-row flex-col z-50 relative 2xl:max-w-7xl 2xl:mx-auto items-center gap-16 lg:gap-10 pt-40"
      >
        <div class="lg:w-1/2 w-1/1">
          <img src="/assets/images/contactimg.png" alt="" class="w-[100%]" />
        </div>
        <div class="lg:w-1/2 w-1/1 relative lg:pb-0 pb-20 lg:pr-28">
          <p
            class="text-[#030D1D] font-lato text-[24px] leading-[28px] font-[400]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam
            vehicula gravida ipsum a bibendum
          </p>
          <form action="post" target="_blank" class="pt-10 text-[#030D1D]">
            <div class="grid lg:grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="flex flex-col gap-4">
                <label
                  for="name"
                  class="font-lato font-semibold text-[16px] leading-[19px]"
                  >Voornaam</label
                >
                <input
                  type="text"
                  placeholder="Voornaam"
                  class="shadow lg:w-full placeholder:font-[400] text-[16px] placeholder:text-[16px] placeholder:leading-[19px] px-6 py-2 rounded-[2px] bg-white"
                />
              </div>
              <div class="flex flex-col gap-4">
                <label
                  for="name"
                  class="font-lato font-semibold text-[16px] leading-[19px]"
                  >Achternaam</label
                >
                <input
                  type="text"
                  placeholder="Achternaam"
                  class="shadow lg:w-full placeholder:font-[400] text-[16px] placeholder:text-[16px] placeholder:leading-[19px] px-6 py-2 rounded-[2px] bg-white"
                />
              </div>
              <div class="flex flex-col gap-4">
                <label
                  for="name"
                  class="font-lato font-semibold text-[16px] leading-[19px]"
                  >Organisatie</label
                >
                <input
                  type="text"
                  placeholder="Organisatie"
                  class="shadow placeholder:font-[400] text-[16px] placeholder:text-[16px] placeholder:leading-[19px] px-6 py-2 rounded-[2px] bg-white"
                />
              </div>
              <div class="flex flex-col gap-4">
                <label
                  for="name"
                  class="font-lato font-semibold text-[16px] leading-[19px]"
                  >Email</label
                >
                <input
                  type="text"
                  placeholder="E-mail"
                  class="shadow placeholder:font-[400] text-[16px] placeholder:text-[16px] placeholder:leading-[19px] px-6 py-2 rounded-[2px] bg-white"
                />
              </div>
            </div>
            <div class="pt-10">
              <a href="#" target="_blank" class="mt-20">
                <button
                  class="text-[16px] md:px-[20px] px-[10px] hover:bg-[#D96A00] justify-center text-center whitespace-nowrap rounded-[2px] py-[14px] flex gap-2 items-center md:py-[16px] font-semibold leading-[16px] font-lato bg-[#D95A00] text-white"
                >
                  Verstuur jouw aanvraag
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto py-40 lg:px-4 px-6">
      <div class="text-[#030D1D] gap-5 grid lg:grid-cols-4 grid-cols-1">
        <p class="font-lato font-[400] text-[32px] leading-[34px]">
          Met deze demo ontvang jij
        </p>
        <p class="font-lato font-[500] text-[16px] leading-[24px]">
          Fusce pharetra lorem vitae lacus sodales sodales. Praesent consequat,
          elit nec blandit gravida, tortor sem malesuada felis, non placerat
          risus sapien sed ante.
        </p>
        <p class="font-lato font-[500] text-[16px] leading-[24px]">
          Fusce pharetra lorem vitae lacus sodales sodales. Praesent consequat,
          elit nec blandit gravida.
        </p>
        <p class="font-lato font-[500] text-[16px] leading-[24px]">
          Fusce pharetra lorem vitae lacus sodales sodales. Praesent consequat,
          elit nec blandit gravida, tortor sem malesuad.
        </p>
      </div>
    </div>
    <div class="bg-[#FDF7F2] py-40">
      <div class="max-w-7xl mx-auto lg:px-4 px-6">
        <div
          class="max-w-5xl mx-auto text-center flex flex-col items-center justify-center"
        >
          <img src="/assets/images/Symbols.png" alt="" class="" />
          <p class="text-[#030D1D] font-[400] text-[24px] leading-[34px] py-8">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </p>
          <a
            href="#"
            class="font-Figtree text-[16px] text-black flex items-center justify-center gap-2 font-semibold leading-[19px]"
          >
            Niké Schuurmans <span class="font-[400]">• Kíen</span>
          </a>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-4 py-28">
        <div class="flex flex-col-reverse items-center lg:flex-row gap-20">
          <div class="lg:w-1/2 w-full">
            <img src="/assets/images/contact end.png" alt="" class="w-full" />
          </div>
          <div class="text-[#030D1D] lg:w-1/2">
            <p class="font-lato text-[32px] leading-[38px] font-[400]">
              “Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco
              consectetur ipsum elit consequat. Elit sunt proident ea nulla ad
              nulla dolore ad pariatur tempor non. Sint veniam minim et ea.”
            </p>
            <div class="pt-16 flex flex-col gap-1">
              <h3
                class="text-[#2C2C2C] font-Figtree font-[400] text-[20px] leading-[30px]"
              >
                Grace Inklaar
              </h3>
              <p
                class="text-[#646363] font-Figtree font-[400] text-[16px] leading-[19px]"
              >
                Co-Founder / CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-[#4469A6] lg:px-4 mt-60 px-6">
      <div
        class="max-w-6xl mx-auto rounded-[8px] relative -top-32 text-white bg-[#154490] gap-20 px-20 py-20 md:flex-row flex-col flex justify-between items-center"
      >
        <h1 class="font-[400] font-lato text-[32px] leading-[38px]">
          Benieuwd hoe het platform jou kan ondersteunen bij het faciliteren van
          de communicatie?
        </h1>
        <button
          class="bg-white border border-white px-[20px] py-[16px] font-[600] whitespace-nowrap font-lato text-[16px] leading-[16px] text-[#154490]"
        >
          Vraag je demo aan
        </button>
      </div>

      <div
        class="max-w-7xl mx-auto text-white items-start gap-20 pt-28 pb-28 flex lg:flex-row flex-col justify-between"
      >
        <div class="w-1/2">
          <h1
            class="font-[700] font-lato text-[35px] sm:text-[40px] sm:leading-[48px]"
          >
            Voor een overzichtelijk en gestructureerd mediation proces
          </h1>
        </div>
        <div
          class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-14 gap-14 w-full items-start"
        >
          <div class="">
            <h3 class="font-[700] font-lato text-[16px] leading-[16px]">
              De oplossing
            </h3>
            <div class="flex flex-col pt-5 items-start gap-3">
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Compliancy</a
              >
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Klantbinding</a
              >
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Efficiency</a
              >
              <a
                href="#"
                class="font-[400] font-lato text-[16px] whitespace-nowrap leading-[16px]"
                >Alles over de oplossing</a
              >
            </div>
          </div>
          <div class="">
            <h3 class="font-[700] font-lato text-[16px] leading-[16px]">
              Aan de slag
            </h3>
            <div class="flex flex-col pt-5 items-start gap-3">
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Zo werkt het</a
              >
            </div>
          </div>
          <div class="">
            <h3 class="font-[700] font-lato text-[16px] leading-[16px]">
              Over
            </h3>
            <div class="flex flex-col pt-5 items-start gap-3">
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Dit is Synflows</a
              >
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Blog</a
              >
            </div>
          </div>
          <div class="">
            <h3 class="font-[700] font-lato text-[16px] leading-[16px]">
              Contact
            </h3>
            <div class="flex flex-col pt-5 items-start gap-3">
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Vraag demo aan</a
              >
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Neem contact op</a
              >
              <a
                href="#"
                class="font-[400] font-lato text-[16px] leading-[16px]"
                >Veelgestelde vragen</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-t max-w-7xl mx-auto py-4 border-white flex sm:flex-row flex-col-reverse gap-6 sm:gap-0 justify-between items-center"
      >
        <div class="flex items-center gap-3">
          <div
            class="h-10 w-10 rounded-full flex items-center justify-center text-[#4469A6] bg-[#D0DAE9]"
          >
            <a href="#" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                />
              </svg>
            </a>
          </div>
          <div
            class="h-10 w-10 rounded-full flex items-center justify-center text-[#4469A6] bg-[#D0DAE9]"
          >
            <a href="#" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008"
                />
              </svg>
            </a>
          </div>
          <div class="md:flex hidden items-start gap-3 text-white pl-6">
            <a href="#" class="font-[400] font-lato text-[14px] leading-[18px]"
              >Privacy statement</a
            >
            <a href="#" class="font-[400] font-lato text-[14px] leading-[18px]"
              >Terms of Service</a
            >
            <a href="#" class="font-[400] font-lato text-[14px] leading-[18px]"
              >Cookies</a
            >
          </div>
        </div>
        <p
          class="font-lato text-white text-[16px] text-center leading-[19px] font-[400]"
        >
          & copy 2024. All rights reserved.
          <span class="font-[600]">Mediation</span>
        </p>
      </div>
    </footer>
  </main>
</template>
