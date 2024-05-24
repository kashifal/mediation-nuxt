<template>
  <main
    v-for="article in articles.data"
    :key="article.id"
    class="Privacy_Container"
  >
    <div
      class="Privacy-content list-items_Privacy "
      v-html="renderMarkdown(extractImageUrl(article.attributes.privcyContent))"
    ></div>
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
    `https://prd-website-mp-strapi.synflows.net/api/privcy-contents`,
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

<style scoped>
.Privacy_Container {
  margin: auto;
  width: 90vw;
  margin-top: 7em;
  overflow: hidden;
}
</style>
