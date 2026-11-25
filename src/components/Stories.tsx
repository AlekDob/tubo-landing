import pipDesk from "@/assets/pip-desk.webp";
import mediaKeys from "@/assets/media-keys.webp";
import livingRoom from "@/assets/living-room.webp";
import { FeatureStory, type Story } from "./FeatureStory";

// Only features that ship today (see Tubo/CLAUDE.md roadmap). Photos are generated with Higgsfield.
const STORIES: Story[] = [
  {
    label: "Picture-in-Picture",
    title: "Keep watching while you work.",
    body: "Pop any video into the native macOS Picture-in-Picture window. Or keep the player floating above everything else, so the tutorial stays right next to your code.",
    image: pipDesk,
    alt: "A developer at night with a code editor open and a small floating video in the corner of the screen",
  },
  {
    label: "Media keys",
    title: "The play key just works.",
    body: "Play and pause from your keyboard, your AirPods or Control Center. Tubo shows up in Now Playing like any other Mac music app.",
    image: mediaKeys,
    alt: "A finger pressing the play and pause key on a laptop keyboard",
  },
  {
    label: "Tabs",
    title: "Music in one tab, videos in the next.",
    body: "Open YouTube and YouTube Music side by side in browser-style tabs. Tubo remembers them, so they are still there the next time you open it.",
    image: livingRoom,
    alt: "A laptop playing a concert on a coffee table in a cozy living room at night",
  },
];

export function Stories() {
  return (
    <section className="px-4 pb-28 sm:px-6 md:pb-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 md:gap-36">
        {STORIES.map((story, i) => (
          <FeatureStory key={story.label} story={story} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
