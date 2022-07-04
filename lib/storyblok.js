import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import { Page, Heading, Subheading, Pet, Pets } from "../components";

export function initializeStoryblok() {
  storyblokInit({
    accessToken: "6NnwZmFv6Unn6vlN7I9tsAtt", //Initialize client with preview token from dashboard
    apiOptions: {
      cache: {
        //define cache provider
        clear: "auto",
        type: "memory",
      },
    },
    use: [apiPlugin],
    components: {
      page: Page,
      heading: Heading,
      subheading: Subheading,
      pet: Pet,
      pets: Pets,
    },
  });
}

export const storyblokApi = getStoryblokApi();
