import service from '../utils/request';

export const getTopics = (params: any) => service.get('/topics', params, { needCancel: true });
