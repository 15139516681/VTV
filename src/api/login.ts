import http from '/@/utils/request';
import * as T from './types';
export const login = (params: T.ILoginParams): Promise<any> => {
    return http.post('./login', params);
};
