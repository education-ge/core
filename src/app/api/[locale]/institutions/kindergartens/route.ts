import axios from "axios";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filters = Object.fromEntries(searchParams.entries());

  try {
    // Здесь ваш внешний URL API
    const apiUrl = process.env.API_URL || "http://80.90.187.19";
    const locale = filters.locale || "en";

    const response = await axios.get(`${apiUrl}/v1/kindergartens/${locale}`, {
      params: filters,
    });

    return new Response(JSON.stringify(response.data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in API proxy:", error);
    return new Response("Error fetching data", { status: 500 });
  }
}
