import Image, { type StaticImageData } from "next/image";
import { SectionLabel } from "./SectionLabel";

export interface Story {
  label: string;
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
}

// One image + text row. `flip` alternates the image side on desktop for rhythm.
export function FeatureStory({ story, flip }: { story: Story; flip: boolean }) {
  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
      <div className={`reveal md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <div className="overflow-hidden rounded-2xl ring-1 ring-line">
          <Image
            src={story.image}
            alt={story.alt}
            placeholder="blur"
            sizes="(min-width: 768px) 60vw, 100vw"
            className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
      <div className="reveal md:col-span-5">
        <SectionLabel>{story.label}</SectionLabel>
        <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.025em] md:text-4xl">{story.title}</h3>
        <p className="mt-5 text-lg leading-relaxed text-muted">{story.body}</p>
      </div>
    </article>
  );
}
