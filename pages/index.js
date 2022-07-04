import Head from "next/head";

//add storyblok hook, storyblok client
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default function Home(props) {
  const story = props.story;

  return (
    <div>
      <Head>
        <title>Pet Store Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const storyblokApi = getStoryblokApi();
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  // load the published content outside of the preview mode
  let sbParams = {
    version: "draft", // or 'published'
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}
