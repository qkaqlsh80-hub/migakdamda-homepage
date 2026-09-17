import type { LiquorInfo } from "./traditional-liquors";

export const wineNamesKo: Record<string, string> = {
  fr: "프랑스",
  it: "이탈리아",
  es: "스페인",
  pt: "포르투갈",
  de: "독일",
  at: "오스트리아",
  us: "미국",
  cl: "칠레",
  ar: "아르헨티나",
  au: "호주",
  nz: "뉴질랜드",
  za: "남아프리카공화국",
  gr: "그리스",
  hu: "헝가리",
  ge: "조지아",
};

export const wineInfo: Record<string, LiquorInfo | null> = {
  fr: {
    name: "보르도 · 부르고뉴",
    type: "Wine",
    desc: "보르도, 부르고뉴, 샴파뉴, 론, 루아르 등 세계 와인 산지의 기준이 되는 나라입니다.",
  },
  it: {
    name: "피에몬테 · 토스카나",
    type: "Wine",
    desc: "피에몬테, 토스카나, 베네토 등 지역마다 개성이 뚜렷한 품종과 스타일을 자랑합니다.",
  },
  es: {
    name: "리오하 · 리베라 델 두에로",
    type: "Wine",
    desc: "리오하, 리베라 델 두에로, 프리오랏 등 템프라니요 중심의 묵직한 레드가 유명합니다.",
  },
  pt: {
    name: "도우루",
    type: "Wine",
    desc: "도우루, 비뉴 베르데 등에서 포트와인을 비롯한 개성 있는 와인이 만들어집니다.",
  },
  de: {
    name: "모젤 · 라인가우",
    type: "Wine",
    desc: "모젤, 라인가우를 중심으로 리슬링 화이트 와인의 정수를 보여주는 산지입니다.",
  },
  at: {
    name: "바하우 · 캄프탈",
    type: "Wine",
    desc: "바하우, 캄프탈 지역의 그뤼너 벨트리너 품종으로 잘 알려져 있습니다.",
  },
  us: {
    name: "나파 밸리 · 소노마",
    type: "Wine",
    desc: "나파 밸리, 소노마, 오리건, 워싱턴을 중심으로 한 캘리포니아 스타일의 와인 강국입니다.",
  },
  cl: {
    name: "마이포 · 콜차구아",
    type: "Wine",
    desc: "마이포, 콜차구아 밸리를 중심으로 가성비 좋은 와인을 만드는 남미의 대표 산지입니다.",
  },
  ar: {
    name: "멘도사",
    type: "Wine",
    desc: "멘도사를 중심으로 말벡 품종이 특히 유명한 안데스 고산지대 와인 산지입니다.",
  },
  au: {
    name: "바로사 밸리 · 마가렛 리버",
    type: "Wine",
    desc: "바로사 밸리, 마가렛 리버 등에서 쉬라즈를 비롯한 다양한 스타일을 선보입니다.",
  },
  nz: {
    name: "말버러",
    type: "Wine",
    desc: "말버러 지역의 상큼한 소비뇽 블랑으로 세계적인 명성을 얻은 산지입니다.",
  },
  za: {
    name: "스텔렌보스",
    type: "Wine",
    desc: "스텔렌보스, 콘스탄시아 등 구대륙과 신대륙 스타일이 공존하는 산지입니다.",
  },
  gr: {
    name: "산토리니",
    type: "Wine",
    desc: "산토리니의 아시르티코 품종 등 지중해의 오랜 와인 역사를 간직한 나라입니다.",
  },
  hu: {
    name: "토카이",
    type: "Wine",
    desc: "토카이 지역의 귀부와인(토카이 아수)으로 유명한 디저트 와인의 명산지입니다.",
  },
  ge: {
    name: "카헤티",
    type: "Wine",
    desc: "크베브리(암포라) 발효 방식으로 와인의 발상지라 불리는 8000년 역사의 산지입니다.",
  },
};
