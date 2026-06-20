import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { RoadmapTimeline } from "@/components/sections/RoadmapTimeline";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Where KAIRO has been and where it's going — from protocol genesis to an intent settlement layer.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roadmap"
        title={
          <>
            From a single agent to
            <br />
            an intent network.
          </>
        }
        description="What we've shipped, what's live now, and what comes next. Scroll to trace the path."
      />

      <section className="shell pb-10 pt-12 sm:pt-16">
        <RoadmapTimeline />
      </section>

      <CtaBand />
    </>
  );
}
