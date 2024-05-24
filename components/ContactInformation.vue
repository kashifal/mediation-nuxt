<template>
  <main
    v-for="article in articles.data"
    :key="article.id"
    class="ContactInfomatie"
  >
    <h1 class="has-text-light is-size-3 has-text-weight-semibold">
      {{ article.attributes.title }}
    </h1>
    <section class="Contact-details">
      <p>
        <span class="icon ">
          <i class="fas fa-phone fas fa-lg"></i>
        </span>
        <a
          class="has-text-light is-size-4"
          href="tel:{{ article.attributes.PhoneNumbers }}"
          >{{ article.attributes.PhoneNumbers }}</a
        >
      </p>
      <p>
        <span class="icon">
          <i class="fas fa-envelope fas fa-lg"></i>
        </span>
        <a
          class="has-text-light is-size-4"
          :href="
            'mailto:' +
              article.attributes.email +
              '?subject=welkom%20in%20Synflows!&body=Just%20popped%20in%20to%20say%20hello'
          "
          >{{ article.attributes.email }}</a
        >
      </p>

      <address>
        <span class="icon">
          <i class="fas fa-map-marker fas fa-lg"></i>
        </span>
        <a class="has-text-light is-size-5" href="/">
          {{ article.attributes.address }}
        </a>
      </address>
    </section>
    <!--  textar-->
    <figure
      class="Google_Map textar "
      v-html="
        renderMarkdown(extractImageUrl(article.attributes.locationSynflows))
      "
    ></figure>
    <section class="privacy">
      <a href="/privacy" class="checkbox-link">
        Click om te Lees ons privacy statement</a
      >
      <a href="/conditions" class="checkbox-link"
        >Click om te Lees onze algemene voorwaarden</a
      >
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
    `https://prd-website-mp-strapi.synflows.net/api/contactinformations`,
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
.ContactInfomatie {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: unset;
  gap: 2.5em;
  width: 100%;
  padding: 1em;
  padding-top: 2em;
  overflow: hidden;
  height: 100%;
  margin: unset;
  margin-top: 1.5em;
}
.Contact-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5em;
  margin-top: 2em;
}
figure {
  position: relative;
  margin-top: 2.8em;
}
/* lik demo */
.privacy {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.checkbox-link {
  position: relative;
  cursor: pointer;
  color: #f0e0e0;
  margin-left: 2.5em;
}
.checkbox-link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -5%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background-color: #f0e0e0;
}
.icon {
  margin-right: 1em;
}
</style>
