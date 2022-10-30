interface Category {
  id: number
  name: string
  description: string
  parentId: number
  createdAt: Date
}

interface Tag {
  id: number
  name: string
  description: string
  createdAt: Date
}

export interface Article {
  id: number
  userId: number
  thumbnailUrl: string
  title: string
  content: string
  status: number
  createdAt: Date
  updatedAt: Date
  categoryId: number
  Category: Category
  Tags: Tag[]
}