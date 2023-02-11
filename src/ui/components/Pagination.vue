
<script setup lang="ts">
import { Pager, OnClick } from 'src/server/types/pager'

const numOfDisplayPage = 3
const pageCSS: string = "h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
const currentPageCss: string = "h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"

interface Props {
  pager: Pager
}

interface Emits {
  (e: "click", next?: number): void;
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const currentPage: number = props.pager.currentPage
const prevPage: number = currentPage - 1
const nextPage: number = currentPage + 1

const IsExistPrevPage = (): boolean => prevPage > 0
const IsExistNextPage = (): boolean => nextPage < props.pager.lastPage

const numPages: number[] = Array.from({length: numOfDisplayPage}, (_, n) => 1+n)

const onClick = (next: number): void => { emits('click', next) };
// :to="{name: route.name, params: {'page': prevPage}, force: true}"
</script>
<template>
  <!-- Pagination -->
  <div class="flex items-center py-8">
    <a
      v-if="IsExistPrevPage()"
      @click="onClick(prevPage)"
      class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
    >
      Prev <i class="fas fa-arrow-right ml-2" />
    </a>
    <a
      v-for="numPage in numPages"
      :key="numPage"
      :class="(numPage===currentPage) ? currentPageCss : pageCSS"
      @click="onClick(numPage)"
    >
      {{ numPage }}
    </a>
    <a
      v-if="IsExistNextPage()"
      @click="onClick(nextPage)"
      class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
    >
      Next <i class="fas fa-arrow-right ml-2" />
    </a>
  </div>
</template>
