<template>
  <Head>
    <Title>MediationPlatform-AAN MELDENING</Title>
  </Head>
  <main class="Registertion_MainContaner">
    <section class="SendCOntent">
      <RegistrationForm />
    </section>
    <section
      class="introduction_Container"
      v-for="article in articles.data"
      :key="article.id"
    >
      <article
        class="intro_Content"
        v-html="
          renderMarkdown(extractImageUrl(article.attributes.introduction))
        "
      ></article>
    </section>
  </main>
</template>

<script setup>
import markdownIt from "markdown-it";

const renderMarkdown = (markdownText) => {
  const md = markdownIt({ breaks: true });

  return md.render(markdownText);
};
const extractImageUrl = (markdownText) => {
  const regex = /!\[.*\]\((.*?)\)/g;
  let modifiedMarkdown = markdownText;
  let match;

  while ((match = regex.exec(markdownText)) !== null) {
    const imageUrl = match[1];
    const completeUrl = `https://prd-website-mp-strapi.synflows.net/${imageUrl}`;
    modifiedMarkdown = modifiedMarkdown.replace(imageUrl, completeUrl);
  }

  return modifiedMarkdown;
};

async function fetchArticles() {
  const token = useRuntimeConfig().public.apiToken;
  const response = await fetch(
    `https://prd-website-mp-strapi.synflows.net/api/registrationform-contents`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

const articles = await fetchArticles();
// console.log(articles.data);
</script>

<style>
.Registertion_MainContaner {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  width: 90vw;
  padding: 1em;
  padding-top: 5em;
  overflow: hidden;
  background-color: #4980a9;
  margin-bottom: 2em;
}
.SendCOntent {
  z-index: unset;
}
.introduction_Container {
  position: unset;
  margin: auto;
  width: 100%;
  height: 100%;
  padding-top: 5em;
  padding: 1em;
}
.intro_Content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.intro_Content > p {
  color: #ffff;
  font-weight: normal;
  font-size: 20px;
  width: 100%;
  margin-right: unset;
  /* background-color: blue; */
}
.intro_Content > p strong {
  display: block;
  color: #ffff;
  font-weight: normal;
  font-size: 20px;
  width: 100%;
  text-align: center;
}

.intro_Content p img {
  display: none;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
}
.intro_Content p::after {
  display: none;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 8, 236, 0.4);
  z-index: -1;
}

/* PC versie */
@media (min-width: 60em) {
  .Registertion_MainContaner {
    position: relative;
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    margin: auto;
    width: 90vw;
    padding: 1em;
    padding-top: 5em;
    overflow: hidden;
    background-color: unset;
    z-index: 3;
    margin-bottom: unset;
  }
  .SendCOntent {
    z-index: 999999;
    overflow: hidden;
  }
  .introduction_Container {
    position: absolute;
    margin: auto;
    width: 100%;
    height: 100%;
    padding-top: 5em;
    padding: unset;
  }
  .intro_Content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }
  .intro_Content > p {
    color: #ffff;
    font-weight: bold;
    font-size: 25px;
    width: 40%;
    margin-right: 2.5em;
  }
  .intro_Content > p strong {
    display: block;
    color: #ffff;
    font-weight: bold;
    font-size: 25px;
    width: 80%;
    text-align: center;
  }

  .intro_Content p img {
    display: unset;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    z-index: -1;
  }
  .intro_Content p::after {
    display: unset;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(16, 126, 211, 0.3);
    /* background-color: rgba(8, 8, 236, 0.3);  */
    z-index: -1;
  }
}
</style>
