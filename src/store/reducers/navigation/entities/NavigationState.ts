export type NavigationState = {
  route: {
    current: string
    previous?: string
  }
  auth: {
    user?: {
      name: string
    }
    token?: string
  }
}
