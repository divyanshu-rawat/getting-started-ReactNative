
import {API_URL} from './constants'

export const getNews = async ()  =>  {
  let result = await fetch(API_URL).then(response => response.json());
  return result.articles;
}
