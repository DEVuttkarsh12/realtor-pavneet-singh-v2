export type CommunityPhoto = {
  name: string;
  original: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
  group: "local" | "community" | "voice";
};

export const communityPhotos: CommunityPhoto[] = [
  { name: "pavneet-outdoor-conversation", original: "IMG-20260816-WA0052.jpg", width: 2048, height: 1536, caption: "Connecting locally", alt: "Pavneet Singh in a green turban with another attendee at an outdoor gathering", group: "local" },
  { name: "pavneet-town-hall", original: "IMG-20260816-WA0049.jpg", width: 1500, height: 1904, caption: "A visit to town hall", alt: "Pavneet Singh and two other attendees in a council chamber with Canadian and Nova Scotia flags", group: "local" },
  { name: "pavneet-community-meeting", original: "IMG-20260816-WA0054.jpg", width: 2048, height: 1365, caption: "Meeting in the community", alt: "Pavneet Singh in a green turban with three other attendees at an indoor gathering", group: "local" },
  { name: "pavneet-local-gathering", original: "IMG-20260816-WA0053.jpg", width: 1437, height: 1709, caption: "An outdoor gathering", alt: "Pavneet Singh in a mustard turban standing with two other attendees on a patio", group: "local" },
  { name: "pavneet-community-conversations", original: "IMG-20260822-WA0092.jpg", width: 2048, height: 1365, caption: "Time for a conversation", alt: "Pavneet Singh in a red turban sharing a conversation with three other attendees", group: "local" },
  { name: "pavneet-amherst-visit", original: "IMG-20260823-WA0004.jpg", width: 2048, height: 1712, caption: "A visit to Amherst", alt: "Pavneet Singh with four other attendees in front of a Town of Amherst sign", group: "local" },
  { name: "pavneet-community-connections", original: "IMG-20260822-WA0038.jpg", width: 966, height: 726, caption: "Community connections", alt: "Pavneet Singh in a mustard turban with other community members at an indoor gathering", group: "community" },
  { name: "pavneet-nova-scotia-works-visit", original: "IMG-20260822-WA0086.jpg", width: 1080, height: 1362, caption: "A visit to Nova Scotia Works", alt: "Pavneet Singh with two other visitors beside a Nova Scotia Works banner", group: "community" },
  { name: "pavneet-nova-noble-cause-society", original: "IMG-20260822-WA0097.jpg", width: 1024, height: 768, caption: "With Nova Noble Cause Society", alt: "Pavneet Singh with community members holding a Nova Noble Cause Society sign", group: "community" },
  { name: "pavneet-community-event", original: "IMG-20260822-WA0098.jpg", width: 1080, height: 810, caption: "Showing up together", alt: "Pavneet Singh with other attendees at a community information table", group: "community" },
  { name: "pavneet-sharing-perspectives", original: "IMG-20260822-WA0034.jpg", width: 1600, height: 1066, caption: "Sharing a perspective", alt: "Pavneet Singh in a red turban and checked jacket speaking into a microphone at a lectern", group: "voice" },
  { name: "pavneet-speaking-at-lectern", original: "IMG-20260822-WA0033.jpg", width: 1080, height: 720, caption: "Speaking with the community", alt: "Pavneet Singh in a red turban speaking at a lectern and gesturing to the audience", group: "voice" },
  { name: "pavneet-mindset-message", original: "IMG-20260822-WA0053.jpg", width: 916, height: 1136, caption: "A personal perspective", alt: "A portrait graphic of Pavneet Singh with his message about determination and mindset", group: "voice" },
];

export function communityPhotoSrc(photo: CommunityPhoto) {
  return `/images/community/${photo.name}.webp`;
}
