"use client";

import { useState } from "react";
import { journalReviews, conferenceReviews, type ReviewVenue } from "@/data/service";
import { useT } from "@/lib/i18n";

const W = 760;
const H = 560;
const PAD = { l: 60, r: 28, t: 28, b: 56 };
const PW = W - PAD.l - PAD.r;
const PH = H - PAD.t - PAD.b;

const xOf = (clinical: number) => PAD.l + (clinical / 10) * PW;
const yOf = (ml: number) => PAD.t + PH - (ml / 10) * PH;
const rOf = (count: number) => 9 + 4.3 * Math.sqrt(count);

const BLUE = "#0265dc";
const BLUE_DEEP = "#003d80";
const ORANGE = "#e8590c";
const ORANGE_DEEP = "#9a3a06";

type Point = ReviewVenue & { kind: "journal" | "conference" };
const points: Point[] = [
  ...journalReviews.map((v) => ({ ...v, kind: "journal" as const })),
  ...conferenceReviews.map((v) => ({ ...v, kind: "conference" as const })),
];

/** Equilateral-ish triangle centred on (cx,cy), sized so its area ≈ a circle of radius r. */
function trianglePath(cx: number, cy: number, r: number): string {
  const s = r * 1.35; // half-width scale
  const p1 = `${cx},${(cy - s).toFixed(1)}`;
  const p2 = `${(cx - s * 0.92).toFixed(1)},${(cy + s * 0.72).toFixed(1)}`;
  const p3 = `${(cx + s * 0.92).toFixed(1)},${(cy + s * 0.72).toFixed(1)}`;
  return `M${p1}L${p2}L${p3}Z`;
}

export default function ReviewMap() {
  const t = useT();
  const [hover, setHover] = useState<number | null>(null);
  const ticks = [0, 2, 4, 6, 8, 10];
  const legendCounts = [1, 6, 18];

  return (
    <figure className="review-map">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={t.contributions.reviewMapTitle}
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {ticks.map((v) => (
          <g key={`g${v}`} stroke="#e3e8ef" strokeWidth={1}>
            <line x1={xOf(v)} y1={PAD.t} x2={xOf(v)} y2={PAD.t + PH} />
            <line x1={PAD.l} y1={yOf(v)} x2={PAD.l + PW} y2={yOf(v)} />
          </g>
        ))}

        <line x1={PAD.l} y1={PAD.t + PH} x2={PAD.l + PW} y2={PAD.t + PH} stroke="#5a6b7e" strokeWidth={1.5} />
        <line x1={PAD.l} y1={PAD.t} x2={PAD.l} y2={PAD.t + PH} stroke="#5a6b7e" strokeWidth={1.5} />

        <text x={PAD.l + PW} y={PAD.t + PH + 36} textAnchor="end" fontSize={14} fontWeight={600} fill="#5a6b7e">
          {t.contributions.axisClinical}
        </text>
        <text
          x={-PAD.t}
          y={18}
          transform="rotate(-90)"
          textAnchor="end"
          fontSize={14}
          fontWeight={600}
          fill="#5a6b7e"
        >
          {t.contributions.axisML}
        </text>

        {points.map((p, i) => {
          const cx = xOf(p.clinical);
          const cy = yOf(p.ml);
          const r = rOf(p.count);
          const active = hover === i;
          const isConf = p.kind === "conference";
          const fill = isConf ? ORANGE : BLUE;
          const stroke = isConf ? ORANGE_DEEP : BLUE_DEEP;
          return (
            <g
              key={p.name}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover((h) => (h === i ? null : h))}
              style={{ cursor: "pointer" }}
            >
              <circle cx={cx} cy={cy} r={r + 7} fill="transparent" />
              {isConf ? (
                <>
                  <path d={trianglePath(cx, cy, r)} fill="none" stroke="#fff" strokeWidth={3} />
                  <path
                    d={trianglePath(cx, cy, r)}
                    fill={fill}
                    fillOpacity={active ? 0.8 : 0.5}
                    stroke={stroke}
                    strokeWidth={active ? 2 : 1.3}
                  />
                </>
              ) : (
                <>
                  <circle cx={cx} cy={cy} r={r} fill="none" stroke="#fff" strokeWidth={3} />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={fill}
                    fillOpacity={active ? 0.75 : 0.5}
                    stroke={stroke}
                    strokeWidth={active ? 2 : 1.3}
                  />
                </>
              )}
              <text
                x={cx}
                y={cy + r + (isConf ? 13 : 12)}
                textAnchor="middle"
                fontSize={10.5}
                fontWeight={active ? 700 : 500}
                fill={active ? (isConf ? ORANGE_DEEP : BLUE_DEEP) : "#5a6b7e"}
              >
                {p.short}
              </text>
            </g>
          );
        })}

        {hover !== null &&
          (() => {
            const p = points[hover];
            const cx = xOf(p.clinical);
            const cy = yOf(p.ml);
            const r = rOf(p.count);
            const line1 = p.name;
            const kindWord =
              p.kind === "conference" ? t.contributions.conferenceShape : t.contributions.journalShape;
            const line2 = `${p.count} ${t.contributions.reviewsUnit} · ${kindWord}`;
            const boxW = Math.max(line1.length, line2.length) * 7.1 + 24;
            const boxH = 46;
            let bx = cx + r + 10;
            let by = cy - boxH - 8;
            if (bx + boxW > W) bx = cx - r - 10 - boxW;
            if (by < PAD.t) by = cy + r + 10;
            return (
              <g pointerEvents="none">
                <rect x={bx} y={by} width={boxW} height={boxH} rx={8} fill={BLUE_DEEP} opacity={0.96} />
                <text x={bx + 12} y={by + 20} fontSize={13} fontWeight={700} fill="#fff">
                  {line1}
                </text>
                <text x={bx + 12} y={by + 37} fontSize={12} fill="#cfe0f7">
                  {line2}
                </text>
              </g>
            );
          })()}
      </svg>

      <div className="review-map-legend">
        <div className="rml-group">
          <span className="rml-item">
            <span className="rml-dot" style={{ background: `${BLUE}80`, border: `1.3px solid ${BLUE_DEEP}` }} />
            {t.contributions.journalShape}
          </span>
          <span className="rml-item">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
              <path d={trianglePath(9, 9.5, 6.5)} fill={`${ORANGE}cc`} stroke={ORANGE_DEEP} strokeWidth={1} />
            </svg>
            {t.contributions.conferenceShape}
          </span>
        </div>
        <div className="rml-group rml-sizes" aria-hidden>
          <span className="rml-size-label">{t.contributions.sizeLegendLabel}</span>
          {legendCounts.map((c) => (
            <span key={c} className="rml-item">
              <svg width={rOf(c) * 2 + 4} height={rOf(c) * 2 + 4} viewBox={`0 0 ${rOf(c) * 2 + 4} ${rOf(c) * 2 + 4}`}>
                <circle
                  cx={rOf(c) + 2}
                  cy={rOf(c) + 2}
                  r={rOf(c)}
                  fill={`${BLUE}80`}
                  stroke={BLUE_DEEP}
                  strokeWidth={1.3}
                />
              </svg>
              {c}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}
