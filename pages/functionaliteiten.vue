<template>
  <Head>
    <Title>MediationPlatform-FUNCTIONALITEITEN</Title>
  </Head>
  <main v-for="article in articles.data" :key="article.id">
    <section
      class="titleSubheading"
      v-html="renderMarkdown(extractImageUrl(article.attributes.mainContent))"
    ></section>
    <section class="Contaner_function">
      <section
        class="image-section"
        v-html="renderMarkdown(extractImageUrl(article.attributes.SubPicture))"
      ></section>
      <section class="guide">
        <h2>{{ article.attributes.Subtitle }}</h2>
        <section class="subguide-section">
          <article
            class="MediatorClient-section"
            v-html="
              renderMarkdown(
                extractImageUrl(article.attributes.MediatorPractitioner)
              )
            "
          ></article>
          <article
            class="MediatorClient-section"
            v-html="
              renderMarkdown(
                extractImageUrl(article.attributes.KlantPractitioner)
              )
            "
          ></article>
        </section>
      </section>
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
    `https://prd-website-mp-strapi.synflows.net/api/funtionaliteitens`,
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
console.log(articles.data);
</script>

<style>
main {
  margin: auto;
  width: 90vw;
  margin-top: 4em;
  overflow: hidden;
}
.titleSubheading {
  position: relative;
  height: 55vh;
}
.titleSubheading::before {
  content: "";
  display: none;
}

.Contaner_function {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: unset;
  gap: 1em;
}
.image-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
}
.image-section p {
  width: 100%;
  padding: 1em;
}
.image-section p img {
  width: 100%;
}
.guide {
  display: grid;
  place-items: center;
  background-color: #f7cfb9;
  padding: 1em;
}
.guide > h2 {
  font-size: 22px;
  color: #000;
  font-weight: bold;
  text-align: center;
}
.subguide-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin: 2em 0.5em 2em 0.5em;
}
.MediatorClient-section,
.client-section {
  border-radius: 1em;
  width: 100%;
  background-color: #de6a9c;
  padding: 2em;
}
.MediatorClient-section p {
  width: 100%;
  text-align: center;
}
.MediatorClient-section p > strong {
  color: #000;
}
.MediatorClient-section > ul {
  list-style: unset;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1em;
}
.MediatorClient-section ul > li {
  color: #000;
  position: relative;
}
.MediatorClient-section ul > li::marker {
  position: absolute;
}

/* PC versie */
@media (min-width: 60em) {
  .titleSubheading {
    height: 70vh;
    margin-bottom: 3em;
  }
  .titleSubheading::before {
    content: "";
    display: block;
    width: 101%;
    height: 20%;
    background-color: #ffffff;
    position: absolute;
    bottom: 6%;
    left: -0.2%;
    mask-repeat: no-repeat;
    mask-position: bottom;
    mask-size: 100% auto;
    mask-image: url(../public/icons/download.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: bottom;
    -webkit-mask-size: 100% auto;
    -webkit-mask-image: url(../public/icons/download.svg);
  }
  .Contaner_function {
    margin-top: -2em;
  }

  .image-section {
    display: flex;
    flex-direction: row;
    margin-bottom: 2em;
  }
  .image-section p {
    width: 100%;
    padding: 0;
  }
  .image-section p img {
    width: 100%;
  }
  .guide > h2 {
    font-size: 25px;
  }
  .guide {
    display: grid;
    place-items: center;
    background-color: #f7cfb9;
    padding: 2em;
    margin-top: 3em;
  }
  .subguide-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 4em;
    width: 100%;
    margin: 3em 4em 3em 4em;
  }
  .MediatorClient-section,
  .client-section {
    border-radius: 1em;
    width: 39%;
    min-height: 25em;
    height: 100%;
    background-color: #de6a9c;
    padding: 3em;
  }
  .MediatorClient-section p {
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
  }
  .MediatorClient-section > ul {
    list-style: unset;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 1em;
  }
  .MediatorClient-section ul > li:before {
    border-radius: 50%;
    content: "";
    display: flex;
    position: absolute;
    top: 24%;
    left: -21.5px;
    transform: 0;
    width: 14px;
    height: 14px;
    background: #fff;
    opacity: 0.6;
  }
}
</style>
