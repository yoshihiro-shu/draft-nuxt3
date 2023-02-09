import { Article } from "../../types/article"
import { Pager } from "../../types/pager"

export type TopPageResponse = {
  status: number
  data: {
    articles: Article[],
    pager: Pager,
  }
}
