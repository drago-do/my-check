import { NextResponse } from "next/server";
import { getJson } from "serpapi";

const apiKeySearch = process.env.SERPAPI;


//Get images from google
export async function POST(request: Request) {
  const { imageQuery } = await request.json();
  try {
    if (!imageQuery) {
      return NextResponse.json({
        success: false,
        message: "Please provide a search query",
      });
    }

    const response = await (async function () {
      return await getJson(
        {
          api_key: apiKeySearch,
          engine: "google_images",
          google_domain: "google.com",
          q: imageQuery,
          hl: "en",
          gl: "us",
          safe: "active",
        },
        function (json) {
          const images = json.images_results.map((item: any) => {
            return {
              url: item.thumbnail,
              height: item.original_height,
              width: item.original_width,
            };
          });
          return images;
        }
      );
    })();
    return NextResponse.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error getting images",
      error: error,
    });
  }
}
