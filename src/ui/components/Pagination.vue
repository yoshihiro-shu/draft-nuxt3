<template>
  <!-- Pagination -->
  <div class="flex items-center py-8">
    <a v-show="IsExistPrevPage()" to="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
      Prev <i class="fas fa-arrow-right ml-2" />
    </a>
    <a to="#" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">
      {{ pager.currentPage }}
    </a>
    <a to="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">
      {{ nextPage }}
    </a>
    <a v-if="IsExistNextPage()" to="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
      Next <i class="fas fa-arrow-right ml-2" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Pager } from 'src/server/api/TopPage/pager_type'

const props = defineProps<{
  pager: Pager
}>()

const prevPage = props.pager.currentPage - 1
const nextPage = props.pager.currentPage + 1

const IsExistPrevPage = () => prevPage > 0
const IsExistNextPage = () => nextPage <= props.pager.lastPage
</script>