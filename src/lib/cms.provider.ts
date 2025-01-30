import { CMSHackathon, DisplayHackathonsPage } from "./cms.types";

// const client = axios.create({
//   baseURL: process.env.CMS_API_URL,
//   headers: {
//     Authorization: `Bearer ${process.env.CMS_API_KEY}`,
//   },
// });

const headers = {
  Authorization: `Bearer ${process.env.CMS_API_KEY}`,
};

const client = {
  get: async <T>(path: string): Promise<{ data: T }> => {
    const res = await fetch(`${process.env.CMS_API_URL}${path}`, {
      cache: "no-store",
      headers,
    });
    const data = await res.json();
    return { data };
  },
  // post: async <T>(path: string): Promise<T> => {},
};

export const cmsApi = {
  getDisplayHackathons: async (): Promise<DisplayHackathonsPage> => {
    try {
      const res = await client.get<{ data: DisplayHackathonsPage }>(
        "/display?populate=*",
      );
      console.log({
        baseURL: process.env.CMS_API_URL,
        headers: {
          Authorization: `Bearer ${process.env.CMS_API_KEY}`,
        },
      });

      return res.data.data;
    } catch (error) {
      console.error(error);
      return {
        discord_link: "",
        github_link: "",
        twitter_link: "",
        hackathons: [],
        tools: [],
      };
    }
  },
  getHackathonList: async (): Promise<CMSHackathon[]> => {
    try {
      const res = await client.get<{ data: CMSHackathon[] }>("/hackathons");
      return res.data.data;
    } catch (error) {
      console.error(error);
      return [
        {
          name: "Orb | 48 hrs | Begginner",
          due_date: new Date().toLocaleDateString(),
          // duration: "42h",
          from_date: new Date().toLocaleDateString(),
          level: "Beginner",
          prize: 100,
          slug: "orb-beginner",
          type: "virtual",
          conditions: "Must meet minimum requirements",
        },
      ];
    }
  },
  getToolsList: async () => {
    try {
      const res = await client.get("/tools");
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getHackathonBySlug: async (slug: string) => {
    try {
      const res = await client.get<[CMSHackathon] | []>(
        `/hackathons?filter[slug][$eq]=${slug}`,
      );
      return res.data[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
