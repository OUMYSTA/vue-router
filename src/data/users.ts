export interface User {
  id: string
  username: string
  email: string
  password: string
  role: {
    isAdmin: boolean
  }
}

export const users: User[] = [
  {
    id: 'U001',
    username: 'admin',
    email: 'admin@gmail.com',
    password: '1234',
    role: {
      isAdmin: true
    }
  },
  {
    id: 'U002',
    username: 'user',
    email: 'user@gmail.com',
    password: '2345',
    role: {
      isAdmin: false
    }
  }
]
