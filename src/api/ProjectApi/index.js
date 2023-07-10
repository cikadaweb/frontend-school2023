import { DefaultAPIInstance } from '@/api/index'

export const ProjectsApi = {
  getProjects (name, code) {
    const url = '/projects'
    const data = { name, code }
    return DefaultAPIInstance.post(url, data)
  }
}
