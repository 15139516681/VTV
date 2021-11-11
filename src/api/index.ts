import service from '/@/utils/request';

export const getTopics = (params: any) =>
    service.get(
        'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg',
        params,
    );
