<script setup lang="ts">
import { TopPageArticle } from '../../server/api/TopPage/type'

interface Response {
  status: number
  data: TopPageArticle[]
}

const runtimeConfig = useRuntimeConfig()
const fuga = ref<string>()
const topPageArticles = ref<TopPageArticle[]>()
fuga.value = runtimeConfig.hugahuga

const { data: data, pending, refresh, error } = await useFetch('top', {
  baseURL: runtimeConfig.baseURL,
  method: 'GET',
})

const res: Response = JSON.parse(data.value)
topPageArticles.value = res.data

</script>

<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <HogeHoge
      :text="fuga"
    />
    <Article
      v-for="(article) in topPageArticles"
      :article="article"
      :key="article.id"
    />
    this is runtimeConfig: {{ fuga }}
    <Pagination />
  </section>
</template>
