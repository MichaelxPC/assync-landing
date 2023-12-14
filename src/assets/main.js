const API = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCTgSq-ni2E3GbHPxY1EVh0A';
const content = null || document.getElementById('content');


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
    const lista_video = await fetchData(API);
    console.log(lista_video.videos);
    let view = `
    ${lista_video.videos.map(video => `
      <div class="group relative">
      <a href="https://www.youtube.com/watch?v=${video.video_id}">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.thumbnails[0].url}" alt="${video.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.title}
          </h3>
          </a>
        </div>
      </div>
    `).slice(0,8).join('')}

    `;
    content.innerHTML = view;
  } catch (error) {
    alert(error)
  }
})();


