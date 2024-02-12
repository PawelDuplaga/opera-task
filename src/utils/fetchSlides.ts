import { RequestInit } from 'next/dist/server/web/spec-extension/request';

export const fetchSlidesClient = async (
  endpoint: string,
  params?: RequestInit,
) => {
  return await fetch(
    `${process.env.SERVER_URL}/${endpoint}`,
    { ...params },
  );
};
