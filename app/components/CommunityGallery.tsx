import Link from "next/link";
import { communityPhotos, communityPhotoSrc, type CommunityPhoto } from "../community-photos";
import SiteImage from "./SiteImage";
import { ArrowUpRight } from "./SiteChrome";

export function PhotoGrid({ photos, preview = false }: { photos: CommunityPhoto[]; preview?: boolean }) {
  return <div className={`community-photo-grid${preview ? " community-photo-preview" : ""}`}>
    {photos.map((photo) => <figure className="community-photo" key={photo.name}>
      <SiteImage src={communityPhotoSrc(photo)} alt={photo.alt} />
      <figcaption>{photo.caption}</figcaption>
    </figure>)}
  </div>;
}

const chapters = [
  { group: "local", number: "01", title: "Around Nova Scotia", copy: "Local visits, shared conversations and familiar faces." },
  { group: "community", number: "02", title: "Showing up for people", copy: "Moments with community members and local organizations." },
  { group: "voice", number: "03", title: "A voice in the community", copy: "Sharing ideas, experiences and a personal perspective." },
] as const;

export default function CommunityGallery({ speakingOnly = false }: { speakingOnly?: boolean }) {
  return <div className="community-photo-chapters">
    {chapters.filter((chapter) => !speakingOnly || chapter.group === "voice").map((chapter) => <div className={`community-photo-chapter community-photo-chapter-${chapter.group}`} key={chapter.group}>
      <div className="community-chapter-heading">
        <span className="community-chapter-number">{speakingOnly ? "01" : chapter.number}</span>
        <div><h3>{chapter.title}</h3><p>{chapter.copy}</p></div>
      </div>
      <PhotoGrid photos={communityPhotos.filter((photo) => photo.group === chapter.group)} />
    </div>)}
  </div>;
}

export function CommunityHighlights() {
  const highlights = ["pavneet-community-conversations", "pavneet-sharing-perspectives", "pavneet-nova-noble-cause-society"];
  return <section className="community-highlights soft-section section-space" aria-labelledby="community-highlights-title">
    <div className="shell">
      <div className="property-section-heading">
        <div><p className="eyebrow">Beyond the property</p><h2 id="community-highlights-title">Part of the <em>community.</em></h2></div>
        <p>Local relationships and shared conversations are part of Pavneet’s life across Nova Scotia.</p>
      </div>
      <PhotoGrid photos={highlights.map((name) => communityPhotos.find((photo) => photo.name === name)!)} preview />
      <Link className="line-link community-gallery-link" href="/about-pavneet-singh#community-life">Explore Pavneet’s community life <ArrowUpRight /></Link>
    </div>
  </section>;
}
