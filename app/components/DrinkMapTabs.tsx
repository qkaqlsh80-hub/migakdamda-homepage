"use client";

import { useEffect, useState } from "react";
import DrinkMap from "./DrinkMap";
import koreaMap from "../data/korea-map.json";
import { traditionalLiquors, regionNamesKo } from "../data/traditional-liquors";
import { wineInfo, wineNamesKo } from "../data/wine";
import { sakeInfo, sakeNamesKo } from "../data/sake";

type MapData = { viewBox: string; regions: { id: string; label: string; d: string }[] };

const tabs = [
  { id: "liquor", label: "전통주" },
  { id: "wine", label: "와인" },
  { id: "sake", label: "사케" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function DrinkMapTabs() {
  const [tab, setTab] = useState<TabId>("liquor");
  const [japanMap, setJapanMap] = useState<MapData | null>(null);
  const [worldMap, setWorldMap] = useState<MapData | null>(null);

  useEffect(() => {
    if (tab === "sake" && !japanMap) {
      import("../data/japan-map.json").then((m) => setJapanMap(m.default as MapData));
    }
    if (tab === "wine" && !worldMap) {
      import("../data/world-map-full.json").then((m) =>
        setWorldMap(m.default as MapData)
      );
    }
  }, [tab, japanMap, worldMap]);

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
      {tab === "wine" &&
        (worldMap ? (
          <DrinkMap
            key="wine"
            mapKey="wine"
            mapData={worldMap}
            info={wineInfo}
            namesKo={wineNamesKo}
            hint="브라스색 국가를 클릭하면 대표 와인 산지를 볼 수 있어요"
            unavailableLabel=""
          />
        ) : (
          <p className="mapLoading">지도를 불러오는 중...</p>
        ))}
      {tab === "sake" &&
        (japanMap ? (
          <DrinkMap
            key="sake"
            mapKey="sake"
            mapData={japanMap}
            info={sakeInfo}
            namesKo={sakeNamesKo}
            hint="브라스색 지역을 클릭하면 대표 사케 산지를 볼 수 있어요"
          />
        ) : (
          <p className="mapLoading">지도를 불러오는 중...</p>
        ))}
    </div>
  );
}
