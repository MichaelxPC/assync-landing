import fetch from "node-fetch";

const url = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCTgSq-ni2E3GbHPxY1EVh0A';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b91c36c98mshe65ee90bab94a10p12ef81jsn8dc5e18888ed',
    'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
    try {
      const lista_video = await fetchData(url);
      console.log(lista_video.videos);
    } catch (error) {
        console.error(error);
    }
  })();


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }