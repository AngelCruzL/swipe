type footerLocationType = {
  icon: string;
  link: string;
  title: string;
};
type footerLinkType = {
  title: string;
  links: string[];
};

export const footerLocationData: footerLocationType[] = [
  {
    icon: "/assets/location-icon.png",
    link: "#",
    title: "United States",
  },
  {
    icon: "/assets/comment-icon.png",
    link: "#",
    title: "English (United States)",
  },
];

export const footerLinksData: footerLinkType[] = [
  {
    title: "Products",
    links: [
      "Atlas",
      "Billing",
      "Invoicing",
      "Payments",
      "Checkout",
      "Identity",
    ],
  },
  {
    title: "Use Cases",
    links: [
      "eCommerce",
      "SaaS",
      "Marketplace",
      "Embedded Finance",
      "Crypto",
      "Creator Economy",
    ],
  },
  {
    title: "Resources",
    links: [
      "Support Center",
      "Guides",
      "Blog",
      "Licenses",
      "Privacy & Terms",
      "Cookie Settings",
    ],
  },
];
