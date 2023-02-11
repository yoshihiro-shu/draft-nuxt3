import { Article } from "../../types/article"
import { Pager } from "../../types/pager"

export type LatestArticlesResponse = {
  status: number
  data: {
    articles: Article[],
    pager: Pager,
  }
}