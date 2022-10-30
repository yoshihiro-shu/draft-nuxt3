<script setup lang="ts">
import { UseFetchOptions } from '#app';
import { Text } from 'vue';
// import { Article } from '../../server/api/TopPage/type'
import { Article } from '../../server/api/TopPage/definition'

interface Response {
  status: number
  data: Article[]
}

const runtimeConfig = useRuntimeConfig()
const fuga = ref<string>()
const articles = ref<Article[]>()
fuga.value = runtimeConfig.hugahuga

const { data: data, pending, refresh, error } = await useFetch('top', {
  baseURL: runtimeConfig.baseURL,
  method: 'GET',
})
const res: Response = JSON.parse(data.value)

console.log("res:", res)
articles.value = res.data

</script>

<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <!-- <Article
      v-for="(article, index) in articles"
      :article="article"
      :index="index"
      :key="article.id"
    /> -->
    <div v-for="article in articles" :key="article.id">
      <article class="flex flex-col shadow my-4">
        <a to="#" class="hover:opacity-75">
          <img :src="article.thumbnailUrl">
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
          <a to="#" class="text-blue-700 text-sm font-bold uppercase pb-4">{{ article.Category.name }}</a>
          <a to="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{ article.title }}</a>
          <p to="#" class="text-sm pb-3">
            By <a to="#" class="font-semibold hover:text-gray-800">{{ article.userId }}</a>, Published on {{ article.createdAt }}
          </p>
          <a to="#" class="pb-6">{{ article.content }}</a>
          <a to="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right" /></a>
        </div>
      </article>
    </div>
    this is runtimeConfig: {{ fuga }}
    <Pagination />
  </section>
</template>
