import axios from 'axios';
import { WEB_API_ROUTES } from '@/api/api-routes';

export default {
  setUsers() {
    return axios.get(`${WEB_API_ROUTES.users.users}`);
  },
};
