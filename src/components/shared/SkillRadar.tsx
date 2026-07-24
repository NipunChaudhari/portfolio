"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { skills } from "@/data/skills";

// IMPORTANT: the resume lists skill *categories and items*, never
// proficiency percentages — so this radar plots how many skills are listed
// per category, not a made-up skill level. The caption below says so
// explicitly to avoid implying otherwise.
const chartData = skills.map((group) => ({
  category: group.category,
  count: group.items.length,
}));

export function SkillRadar() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData} outerRadius="72%">
          <PolarGrid stroke="rgba(255,255,255,0.12)" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: "#A1A1AA", fontSize: 10 }}
          />
          <Radar dataKey="count" stroke="#8B5CF6" fill="#6366F1" fillOpacity={0.35} />
        </RadarChart>
      </ResponsiveContainer>
      <p className="mt-2 text-center font-body text-xs text-muted">
        Shape reflects number of listed skills per category, not a proficiency score
      </p>
    </div>
  );
}
