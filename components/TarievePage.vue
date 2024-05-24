<template>
  <main v-for="article in articles.data" :key="article.id">
    <section
      class="Page_TarievenPage"
      v-html="renderMarkdown(extractImageUrl(article.attributes.Content))"
    ></section>
  </main>
</template>
<style>
.Page_TarievenPage {
  display: grid;
  place-items: center;
  position: relative;
  gap: 1em;
  margin-bottom: 4em;
}
.Page_TarievenPage > h1 {
  font-size: 1.2em;
  font-weight: 500;
  color: #000;
}
.Page_TarievenPage > p {
  width: unset;
}
.Page_TarievenPage > p > strong {
  color: #d95a00;
}
.Page_TarievenPage > ol {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2em;
  padding: 1em;
}
.Page_TarievenPage > ol > li {
  width: 95%;
  border-radius: 0.5em;
  padding: 1em;
  background-color: #ffd4d4;
  color: #000;
}

.Page_TarievenPage > ol > li::marker {
  position: absolute;
  top: 20%;
  color: #d95a00;
  font-size: 1.5em;
}
.Page_TarievenPage > blockquote p {
  padding: 1em;
  width: 90%;
  margin: 0 auto;
}
.Page_TarievenPage > blockquote p > em {
  font-weight: bolder;
  color: #d95a00;
}
/* PC versie */
@media (min-width: 60em) {
  .Page_TarievenPage {
    display: grid;
    place-items: center;
    position: relative;
    gap: 3em;
  }
  .Page_TarievenPage > h1 {
    font-size: 1.5em;
    font-weight: 600;
  }
  .Page_TarievenPage > p {
    width: 70%;
  }
  .Page_TarievenPage > ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    padding: 1em;
  }
  .Page_TarievenPage > ol > li {
    width: 650px;
    height: 120px;
    border-radius: 0.5em;
    padding: 1em;
    background-color: #ffd4d4;
    color: #000;
  }
  .Page_TarievenPage > blockquote p > em {
    font-size: 1.5em;
  }
}
</style>

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
    `https://prd-website-mp-strapi.synflows.net/api/tarieven-pages`,
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
