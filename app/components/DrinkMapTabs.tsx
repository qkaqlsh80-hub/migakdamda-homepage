"use client";

import { useState } from "react";
import DrinkMap from "./DrinkMap";
import koreaMap from "../data/korea-map.json";
import japanMap from "../data/japan-map.json";
import worldMap from "../data/world-map.json";
import { traditionalLiquors, regionNamesKo } from "../data/traditional-liquors";
import { wineInfo, wineNamesKo } from "../data/wine";
import { sakeInfo, sakeNamesKo } from "../data/sake";

const tabs = [
  { id: "liquor", label: "전통주" },
  { id: "wine", label: "와인" },
  { id: "sake", label: "사케" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function DrinkMapTabs() {
  const [tab, setTab] = useState<TabId>("liquor");

  return (
    <div>
      <div className="mapTabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`mapTabBtn ${tab === t.id ? "active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "liquor" && (
        <DrinkMap
          key="liquor"
          mapKey="liquor"
          mapData={koreaMap}
          info={traditionalLiquors}
          namesKo={regionNamesKo}
          hint="브라스색 지역을 클릭하면 그 고장의 대표 전통주를 볼 수 있어요"
        />
      )}
      {tab === "wine" && (
        <DrinkMap
          key="wine"
          mapKey="wine"
          mapData={worldMap}
          info={wineInfo}
          namesKo={wineNamesKo}
          hint="브라스색 국가를 클릭하면 대표 와인 산지를 볼 수 있어요"
        />
      )}
      {tab === "sake" && (
        <DrinkMap
          key="sake"
          mapKey="sake"
          mapData={japanMap}
          info={sakeInfo}
          namesKo={sakeNamesKo}
          hint="브라스색 지역을 클릭하면 대표 사케 산지를 볼 수 있어요"
        />
      )}
    </div>
  );
}
