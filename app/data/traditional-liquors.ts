export type LiquorInfo = {
  name: string;
  type: string;
  desc: string;
};

// 확실한 출처(국가/지자체 무형문화재 지정 등)가 있는 지역만 채웠습니다.
// 나머지 지역은 null로 두어 지도에서 "준비중"으로 표시됩니다.
export const traditionalLiquors: Record<string, LiquorInfo | null> = {
  seoul: {
    name: "삼해주",
    type: "약주",
    desc: "정월 첫 돼지날에 시작해 세 번의 해일(亥日)마다 덧술을 빚어 완성하는 서울의 전통 약주입니다.",
  },
  gyeonggi: {
    name: "가평 잣막걸리",
    type: "막걸리",
    desc: "잣의 고장 가평에서 빚는 막걸리로, 고소한 잣의 풍미가 은은하게 감도는 것이 특징입니다.",
  },
  "north-chungcheong": {
    name: "청명주",
    type: "약주",
    desc: "충주 지역에 전해 내려오는 술로, 청명(淸明) 무렵 빚어 마신다 하여 이름 붙여진 맑은 약주입니다.",
  },
  "south-chungcheong": {
    name: "한산소곡주",
    type: "약주",
    desc: "서천 한산 지역의 명주로, 은은한 단맛과 높은 도수에도 부드럽게 넘어가 '앉은뱅이술'이라 불립니다.",
  },
  "north-jeolla": {
    name: "이강주",
    type: "증류주",
    desc: "전주 지역의 증류주로, 배·생강·계피·울금이 어우러진 향과 단맛이 특징인 전통 명주입니다.",
  },
  "south-jeolla": {
    name: "진도 홍주",
    type: "증류주",
    desc: "진도의 붉은빛 도는 소주로, 지초(芝草) 뿌리를 통과시켜 만드는 독특한 색과 향의 증류주입니다.",
  },
  "north-gyeongsang": {
    name: "안동소주",
    type: "증류주",
    desc: "안동 지역의 대표 증류식 소주로, 맑고 깊은 곡물 향과 깔끔한 목넘김으로 널리 알려져 있습니다.",
  },
  "south-gyeongsang": {
    name: "함양 솔송주",
    type: "약주",
    desc: "지리산 자락 함양에서 솔잎과 송순을 더해 빚는 약주로, 은은한 솔향이 감도는 것이 특징입니다.",
  },
  busan: {
    name: "금정산성막걸리",
    type: "막걸리",
    desc: "금정산성 마을에서 전통 누룩으로 빚어온 막걸리로, 국내에서 가장 오래된 막걸리 제조 면허를 지니고 있습니다.",
  },
  jeju: {
    name: "오메기술",
    type: "약주",
    desc: "제주의 잡곡인 좁쌀로 만든 오메기떡을 발효시켜 빚는 술로, 제주 전통 가양주의 대표격입니다.",
  },
  gangwon: null,
  daegu: null,
  gwangju: null,
  daejeon: null,
  sejong: null,
  ulsan: null,
  incheon: null,
};

export const regionNamesKo: Record<string, string> = {
  seoul: "서울",
  incheon: "인천",
  gyeonggi: "경기",
  gangwon: "강원",
  "north-chungcheong": "충북",
  "south-chungcheong": "충남",
  sejong: "세종",
  daejeon: "대전",
  "north-jeolla": "전북",
  "south-jeolla": "전남",
  gwangju: "광주",
  daegu: "대구",
  "north-gyeongsang": "경북",
  "south-gyeongsang": "경남",
  ulsan: "울산",
  busan: "부산",
  jeju: "제주",
};
