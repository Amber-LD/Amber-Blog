import { onMounted, onUnmounted, ref } from 'vue'

const extractList = [
    { content: '君不见 东流水，来时无踪迹，一去无穷已；君不见 城上日，今暝没山去，明朝复更出。', from: '何须问', author: '银临' },
    { content: '问世间安得两全法，不负如来不负卿。', from: '百年身', author: '樱九' },
    { content: '笔锋至此怎能平淡而终，故事开始便不承认普通；用过度燃烧的每一分钟，认定情节该何去何。', from: '步戏', author: '五音Jw' },
    { content: '临安初雨 一夜落红，春水凝碧 断雁越澄空；挥袖抚琴 七弦玲珑，芦苇客舟 雨朦胧。', from: '临安初雨', author: '心然' },
    { content: '只道是 那些无关风花雪月的相思，说来几人能知。', from: '眉间雪', author: '晴愔' },
    { content: '彼时南面隔春风，一刀裁入断玲珑；寥落晨时须臾问，长游不归莫相送。', from: '红昭愿', author: '流芒菌' },
    { content: '别留我一人，孑然一身，凋零在梦境里面。', from: '锦鲤抄', author: '银临' },
    { content: '愿此间 山有木兮卿有意，昨夜星辰恰似你，身无双翼 却心有一点灵犀。', from: '山有木兮', author: '伦桑' },
    { content: '今生凡尘几度，错踏光阴一刹那；只待，思念浊成酒酿，尽数饮下。', from: '咫尺相思', author: '古剑' },
    { content: '自认惊叹的桥段终沦为老生常谈，给予你全部如病入膏肓一般。', from: '石楠小札', author: '贰婶' },
]

export function useExtract() {
    const extract = ref<{ content: string; from: string; author: string } | null>(null);
    extract.value = extractList[Math.floor(Math.random() * extractList.length)];

    const updateExtract = () => {
        extract.value = extractList[Math.floor(Math.random() * extractList.length)];
    }

    let interval: ReturnType<typeof setInterval> | null = null

    onMounted(() => {
        updateExtract()
        interval = setInterval(updateExtract, 15000)
    })

    onUnmounted(() => {
        interval && clearInterval(interval)
    })

    return {
        extract,
        updateExtract
    };
}