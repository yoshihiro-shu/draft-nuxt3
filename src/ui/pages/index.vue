<script setup lang="ts">
import { TopPage } from '../../server/api/TopPage/response'

const topPageApiUrl = 'top'

const runtimeConfig = useRuntimeConfig()
const fuga = ref<string>()
fuga.value = runtimeConfig.hugahuga

type TopPageResponse = {
  status: number
  data: TopPage
}

const { data:resTopPage, pending, error, refresh  } = await useFetch<TopPageResponse>(() => topPageApiUrl, {
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
      v-for="(article) in resTopPage.data.article"
      :article="article"
      :key="article.id"
    />
    this is runtimeConfig: {{ fuga }}
    <Pagination :pager="resTopPage.data.pager"/>
  </section>
</template>
