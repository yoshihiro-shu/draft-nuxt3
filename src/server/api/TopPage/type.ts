type Category = {
  id: number
  name: string
  description: string
  parentId: number
  createdAt: Date
}

type Tag = {
  id: number
  name: string
  description: string
  createdAt: Date
}

type User = {
  id: number
  name: string
  password: string
  email: string
  createdAt: Date
}

export type Article = {
  id: number
  userId: number
  thumbnailUrl: string
  title: string
  content: string
  status: number
  createdAt: Date
  updatedAt: Date
  categoryId: number
  User: User
  Category: Category
  Tags: Tag[]
}
