export async function doApiRequest<ResponseType>(
  slug: string,
  params: object = {},
  apiRoot = process.env.GAME_API_ROOT!,
  key = process.env.GAME_API_KEY!,
): Promise<ResponseType> {
  const urlParams = new URLSearchParams({ ...{ key }, ...params }).toString();
  const requestUrl = `${apiRoot}/${slug}?${urlParams}`;

  return await fetch(requestUrl)
    .then((data: Response): Promise<ResponseType> => data.json())
    .catch((err) => err.message);
}
