import { searchProfileTypes } from "../types/searchProfile";

const URL = "https://api.github.com/search/repositories?q=";

export async function searchProfile({
  nameProfile,
  dateFinal,
  dateInitial,
  repositoriesLanguage,
  repositoriesName,
  order,
  sort,
}: searchProfileTypes) {
  const arr: string[] = [];
  const arrOrder: string[] = [];

  if (nameProfile !== undefined) {
    arr.push(`user:${nameProfile}`);
  }

  if (repositoriesName !== undefined) {
    arr.push(`in:name%20${repositoriesName}`);
  }

  if (repositoriesLanguage !== undefined) {
    arr.push(`language:${repositoriesLanguage}`);
  }

  if (!!dateInitial && !!dateFinal) {
    arr.push(`created:${dateInitial}..${dateFinal}`);
  }

  if (sort !== undefined) {
    arrOrder.push(`sort=${sort}`);
  }

  if (order !== undefined) {
    arrOrder.push(`order=${order}`);
  }

  const output = arr.join("+");
  const outputOrder = arrOrder.join("&");
  const finalUrl = `${URL}+${output}&${outputOrder}`;

  const response = await fetch(finalUrl);
  const data = await response.json();
  return data;
}

export async function limitSearchAPI() {
  const response = await fetch("https://api.github.com/rate_limit");
  const data = await response.json();
  return data;
}
