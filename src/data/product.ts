export interface Category {
  id: string
  name: string
  products: Partial<product>[]
}

export interface Tag {
  id: string
  name: string
  products: Partial<product>[]
}

export type ProductStatus = 'draft' | 'published' | 'private'

export interface product {
  id: string
  images?: []
  name: string
  category: Partial<Category>
  status: ProductStatus
  tags?: Partial<Tag>[]
  inventory: Partial<Inventory>
  price: number
  discount?: number
}

export interface Inventory {
  id: string
  product: Partial<product>
  qty: number
}

export const inventories: Inventory[] = [
  {
    id: 'I001',
    product: { id: 'P001' },
    qty: 10
  },
  {
    id: 'I002',
    product: { id: 'P002' },
    qty: 50
  },
  {
    id: 'I003',
    product: { id: 'P003' },
    qty: 15
  }
]

export const categories: Category[] = [
  { id: 'C001', name: 'eye', products: [{ id: 'P001' }] },
  { id: 'C002', name: 'lip', products: [{ id: 'P002' }] },
  { id: 'C003', name: 'nose', products: [{ id: 'P003' }] }
]

export const tags: Tag[] = [
  { id: 'T001', name: 'sport', products: [{ id: 'P001' }] },
  { id: 'T002', name: 'street', products: [{ id: 'P001' }] },
  { id: 'T003', name: 'supharb', products: [{ id: 'P001' }] }
]

export const products: product[] = [
  {
    id: 'P001',
    images: [],
    name: 'T-Shirt',
    category: { id: 'C001' },
    status: 'published',
    tags: [{ id: 'T001' }],
    inventory: { id: 'I001' },
    price: 75000
  },
  {
    id: 'P002',
    images: [],
    name: 'crop',
    category: { id: 'C002' },
    status: 'published',
    tags: [{ id: 'T002' }],
    inventory: { id: 'I002' },
    price: 75000
  },
  {
    id: 'P003',
    images: [],
    name: 'pants',
    category: { id: 'C003' },
    status: 'private',
    tags: [{ id: 'T003' }],
    inventory: { id: 'I003' },
    price: 75000
  }
]

export function getProduct(search?: string): product[] {
  const data = search
    ? products.filter((product) => product.name.toLowerCase().includes(search?.toLowerCase()))
    : products

  return data
}
