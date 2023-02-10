<script setup lang="ts">
import { TopPageResponse } from '../../server/api/TopPage/response'

const topPageApiUrl = 'top'

const runtimeConfig = useRuntimeConfig()
const fuga = ref<string>()
fuga.value = runtimeConfig.hugahuga

const { data: resTopPage, pending, error, refresh  } = await useFetch<TopPageResponse>(() => topPageApiUrl, {
  baseURL: runtimeConfig.baseURL,
  method: 'GET',
})

</script>

<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <HogeHoge
      :text="fuga"
    />
    <ArticleBox
      v-for="(article) in resTopPage.data.articles"
      :article="article"
      :key="article.id"
    />
    <Pagination :pager="resTopPage.data.pager"/>
  </section>
</template>
