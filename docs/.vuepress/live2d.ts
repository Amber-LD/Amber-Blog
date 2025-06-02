import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export const live2dPlugin = oml2dPlugin({
    models: [
        {
            path: 'https://carolld.com/api/models/kailuo/kailuo.model3.json',
            // path: '../models/kailuo/kailuo.model3.json',
            scale: 0.12,
            position: [-80, 126],
            stageStyle: {
                width: 355,
                height: 500,
            }
        },
        {
            path: 'https://carolld.com/api/models/youling/youling.model3.json',
            // path: '../models/youling/youling.model3.json',
            scale: 0.1,
            position: [-60, 120],
            stageStyle: {
                width: 355,
                height: 500,
            }
        }
    ],
    menus: {
        disable: false
    },
    tips: {
        idleTips: {
            wordTheDay: true,
            interval: 60000
        }
    }
})