import type { LiquorInfo } from "./traditional-liquors";

export const sakeInfo: Record<string, LiquorInfo | null> = {
  niigata: {
    name: "니가타",
    type: "Sake",
    desc: "깨끗하고 드라이한 '단려신구(淡麗辛口)' 스타일로 유명한 일본 최고의 사케 산지입니다.",
  },
  hyogo: {
    name: "효고",
    type: "Sake",
    desc: "최고급 사케미(酒米) 야마다니시키의 본고장이자, 나다 지역을 중심으로 한 일본 최대 생산지입니다.",
  },
  kyoto: {
    name: "교토",
    type: "Sake",
    desc: "후시미 지역을 중심으로 부드러운 연수(軟水)로 빚어낸, 부드럽고 우아한 사케로 알려져 있습니다.",
  },
  akita: {
    name: "아키타",
    type: "Sake",
    desc: "좋은 쌀과 깨끗한 물을 바탕으로 정갈한 준마이(純米) 사케를 빚는 도호쿠의 명산지입니다.",
  },
  yamagata: {
    name: "야마가타",
    type: "Sake",
    desc: "긴조·다이긴조 등 고급 사케 품평회에서 꾸준히 좋은 평가를 받는 지역입니다.",
  },
  hiroshima: {
    name: "히로시마",
    type: "Sake",
    desc: "사이조 지역의 부드러운 연수 양조법이 발달해, 향이 풍부한 사케로 유명합니다.",
  },
};

export const sakeNamesKo: Record<string, string> = Object.fromEntries(
  Object.entries(sakeInfo).map(([k, v]) => [k, v ? v.name : k])
);
