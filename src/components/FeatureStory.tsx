import Image, { type StaticImageData } from "next/image";
import { SectionLabel } from "./SectionLabel";

export interface Story {
  label: string;
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  /** Optional decorative layer drawn over the photo (e.g. the floating PiP window). */
  overlay?: React.ReactNode;
}

// Delay for each text line, so label, title and body arrive one after another.
const stagger = (step: number) => ({ "--stagger": `${step * 6}%` }) as React.CSSProperties;

// One image + text row. `flip` alternates the image side on desktop for rhythm, and the
// photo slides in from its own side (.slide-from-left / -right in motion.css).
export function FeatureStory({ story, flip }: { story: Story; flip: boolean }) {
  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
      <div className={`relative md:col-span-7 ${flip ? "md:order-2 slide-from-right" : "slide-from-left"}`}>
        <div className="overflow-hidden rounded-2xl ring-1 ring-line">
          <Image
            src={story.image}
            alt={story.alt}
            placeholder="blur"
            sizes="(min-width: 768px) 60vw, 100vw"
            className="photo-settle h-auto w-full"
          />
        </div>
        {story.overlay}
      </div>
      <div className="md:col-span-5">
        <div className="reveal" style={stagger(0)}><SectionLabel>{story.label}</SectionLabel></div>
        <h3 className="reveal mt-5 text-3xl font-medium leading-tight tracking-[-0.025em] md:text-4xl" style={stagger(1)}>{story.title}</h3>
        <p className="reveal mt-5 text-lg leading-relaxed text-muted" style={stagger(2)}>{story.body}</p>
      </div>
    </article>
  );
}
