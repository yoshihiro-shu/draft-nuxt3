
<script setup lang="ts">
import { Pager } from 'src/server/types/pager'

const numOfDisplayPage = 3
const pageCSS: string = "h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
const currentPageCss: string = "h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"

const props = defineProps<{
pager: Pager
}>()

const currentPage: number = props.pager.currentPage
const prevPage: number = currentPage - 1
const nextPage: number = currentPage + 1

const IsExistPrevPage = (): boolean => prevPage > 0
const IsExistNextPage = (): boolean => nextPage < props.pager.lastPage

const numPages: number[] = Array.from({length: numOfDisplayPage}, (_, n) => 1+n)

const onclick = (pageNumber: number) => {
  const router = useRouter();
  router.push({params: {"page": pageNumber} })
}
</script>
<template>
  <!-- Pagination -->
  <div class="flex items-center py-8">
    <a
    v-if="IsExistPrevPage()"
    :key="prevPage"
    v-on:click="onclick(prevPage)"
    class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
      Prev <i class="fas fa-arrow-right ml-2" />
    </a>
    <a
    v-for="numPage in numPages"
    :key="numPage"
    :class="(numPage===currentPage) ? currentPageCss : pageCSS"
    v-on:click="onclick(numPage)"
    >
    {{ numPage }}
    </a>
    <a
    v-if="IsExistNextPage()"
    v-on:click="onclick(nextPage)"
    class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
      Next <i class="fas fa-arrow-right ml-2" />
    </a>
  </div>
</template>
