export type CMSHackathon = {
  slug: string;
  name: string;
  prize: number;

  from_date: string;
  due_date: string;
  level: string;
  // duration: string;
  type: string;

  conditions: string;
};

export type CMSTool = {
  name: string;
  purpose: string;
  use_case: string;
  features: string;
  link: string;
};

export type DisplayHackathonsPage = {
  hackathons: CMSHackathon[];
  tools: CMSTool[];
  twitter_link: string;
  github_link: string;
  discord_link: string;
};
