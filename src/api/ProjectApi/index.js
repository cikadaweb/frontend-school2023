import { DefaultAPIInstance } from '@/api/index';

export const ProjectsApi = {
  getProjects(objData) {
    const url = '/projects/search';
    const data = objData;
    return DefaultAPIInstance.post(url, data);
  },
  createProject(name, code) {
    const url = '/projects';
    const data = { name, code };
    return DefaultAPIInstance.post(url, data);
  },
  editProject(_id, name, code) {
    const url = '/projects';
    const data = { _id, name, code };
    return DefaultAPIInstance.put(url, data);
  },
  deleteProject(_id) {
    const url = `/projects/${_id}`;
    return DefaultAPIInstance.delete(url, {});
  }
};
