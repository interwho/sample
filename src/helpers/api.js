import { create } from 'apisauce';

const api = create({
  baseURL: 'https://justinpaulin.com/apps/scratchpad/test?raw=true',
});

export default api;
