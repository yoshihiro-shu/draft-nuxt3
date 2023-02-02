import { Article } from "./type"

type data = {
  articles: Article[],
  // TODO add pager
}

export type TopPageResponse = {
  status: number
  data: data
}
