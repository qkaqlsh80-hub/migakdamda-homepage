"use client";

import { useState } from "react";
import type { LiquorInfo } from "../data/traditional-liquors";

type MapRegion = { id: string; label: string; d: string };
type MapData = { viewBox: string; regions: MapRegion[] };

export default function DrinkMap({
  mapData,
  info,
  namesKo,
  hint,
  mapKey,
  unavailableLabel = " (준비중)",
}: {
  mapData: MapData;
  info: Record<string, LiquorInfo | null>;
  namesKo: Record<string, string>;
  hint: string;
  mapKey: string;
  unavailableLabel?: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const current = selected ? info[selected] : null;

  return (
    <div className="koreaMapWrap">
      <div className={`koreaMapStage ${selected ? "showDetail" : ""}`}>
        <div className="koreaMapView">
          <svg viewBox={mapData.viewBox} className="koreaMapSvg">
            {mapData.regions.map((r) => {
              const hasData = Boolean(info[r.id]);
              return (
                <path
                  key={`${mapKey}-${r.id}`}
                  d={r.d}
                  className={`koreaRegion ${hasData ? "hasData" : "noData"} ${
                    selected === r.id ? "active" : ""
                  }`}
                  onClick={() => hasData && setSelected(r.id)}
                >
                  <title>{`${namesKo[r.id] || r.label}${
                    hasData ? "" : unavailableLabel
                  }`}</title>
                </path>
              );
            })}
          </svg>
          <p className="koreaMapHint">{hint}</p>
        </div>

        <div className="koreaDetailView">
          {current && selected && (
            <div className="koreaDetailCard">
              <button className="backBtn" onClick={() => setSelected(null)}>
                ← 지도로 돌아가기
              </button>
              <p className="eyebrow">
                {namesKo[selected]} · {current.type}
              </p>
              <h3>{current.name}</h3>
              <p>{current.desc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
