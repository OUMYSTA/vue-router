import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { users, type User } from '@/data/users'
import { useRouter } from 'vue-router'

interface AuthState {
  isLoading: boolean
  data: Partial<User>
  error: string
}
interface LoginForm {
  username: string
  password: string
}

export const authStore = defineStore('auth-store', () => {
  const router = useRouter()
  const authState = reactive<AuthState>({
    isLoading: false,
    data: {},
    error: ''
  })

  function login(form: LoginForm) {
    authState.isLoading = true
    const user = users.find(
      (user) => user.username === form.username && user.password === form.password
    )

    if (!user) {
      authState.error = 'Invalid Information!'
      return
    }
    localStorage.setItem(
      'user',
      JSON.stringify({
        sub: user.id,
        username: user.username,
        isAdmin: user.role.isAdmin
      })
    )
    authState.data = user

    authState.isLoading = false

    router.push({ name: 'dashboard' })
  }

  function getAuth(): void {
    const token = localStorage.getItem('user')
    if (!token) {
      authState.error = 'not found token'
      return
    }

    const payload = JSON.parse(token)

    const user = users.find((item) => item.id === payload.sub)
    if (!user) {
      authState.error = 'not found user'
      return
    }
    authState.data = user
  }
  return { authState, login, getAuth }
})
