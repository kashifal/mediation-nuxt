<template>
  <main v-for="article in articles.data" :key="article.id">
    <section class="Page_AandeSlag">
      <section
        class="Content_AanDeslag"
        v-html="
          renderMarkdown(extractImageUrl(article.attributes.SubIntroductie))
        "
      ></section>
      <section
        class="Steps_AanDeSlag"
        v-html="renderMarkdown(extractImageUrl(article.attributes.Steps))"
      ></section>
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
    `https://prd-website-mp-strapi.synflows.net/api/aan-de-slags`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

const articles = await fetchArticles();
</script>

<!-- Styling -->
<style>
main {
  margin: auto;
  width: 90vw;
  margin-top: 4em;
  overflow: hidden;
}
/* aan de slag page */
.Page_AandeSlag {
  background-color: #ccd9e5;
  margin-bottom: 3em;
}

.Content_AanDeslag {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  padding: 1em;
}
.Content_AanDeslag p > img {
  width: 95vw;
  height: auto;
  border-radius: 1.3em;
}
.Content_AanDeslag ul > li > h1 {
  font-weight: 500;
  margin-bottom: 1em;
  color: #000;
}
.Content_AanDeslag ul li:last-child {
  font-weight: normal;
}
.Steps_AanDeSlag {
  background-image: url(../public/icons/Arow.png);
  background-repeat: no-repeat;
  background-size: 35%;
  background-position: center bottom;
  padding-bottom: 3em;
}
.Steps_AanDeSlag > ul {
  list-style: unset;
  padding: 2em;
  color: #000;
}
.Steps_AanDeSlag > ul > li {
  position: relative;
}
.Steps_AanDeSlag > ul > li::marker {
  color: #d95a00;
  font-size: 1.5em;
}

/* PC versie */
@media (min-width: 60em) {
  .Content_AanDeslag {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 7em;
    padding: 3em;
  }
  .Steps_AanDeSlag {
    background-size: 30%;
    background-position: right bottom;
    padding-bottom: 5em;
  }
  .Content_AanDeslag p > img {
    width: 110vw;
    height: auto;
  }
  .Content_AanDeslag ul > li > h1 {
    font-size: 2em;
    font-weight: 800;
    margin-bottom: 1em;
  }
  .Content_AanDeslag ul li:last-child {
    font-weight: bold;
    width: 70%;
  }
  .Steps_AanDeSlag > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.7em;
    padding: 0 4em;
  }
  .Steps_AanDeSlag > ul > li {
    width: 95%;
  }
}
</style>
