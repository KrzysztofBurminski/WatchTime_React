export async function getMovieImage(requestData) {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${requestData}/images`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not get products.');
  }

  const loadedImages = data.map((show) => {
    return {
      showId: requestData,
      imgId: show.id,
      type: show.type,
      url: show.resolutions.original.url,
      height: show.resolutions.original.height,
      width: show.resolutions.original.width,
    };
  });

  const backgroundImg = loadedImages.filter((show) => {
    return show.type === 'background';
  });

  return backgroundImg[0];
}

export async function getSingleShow(requestData) {
  const response = await fetch(`https://api.tvmaze.com/shows/${requestData}`);
  // const response = await fetch(`https://api.tvmaze.com/shows/330`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not get products.');
  }

  const loadedShow = {
    id: data.id,
    title: data.name,
    description: data.summary,
    image: data.image.medium,
    language: data.language,
    status: data.status,
    averageRuntime: data.averageRuntime,
    premiered: data.premiered,
    ended: data.ended,
    rating: data.rating.average,
    popularity: data.weight,
    genres: data.genres,
  };

  return loadedShow;
}

export async function getAllShows() {
  const response = await fetch('https://api.tvmaze.com/shows?page=0');

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not get products.');
  }

  const loadedShows = data.map((show) => {
    return {
      id: show.id,
      title: show.name,
      image: show.image.medium,
      rating: show.rating.average,
      popularity: show.weight,
      genres: show.genres,
    };
  });

  return loadedShows;
}

export async function getSeasons(requestData) {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${requestData}/episodes`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not get products.');
  }

  const loadedEpisodes = data.map((show) => {
    return {
      id: show.id,
      season: show.season,
      episode: show.number,
      title: show.name,
      runtime: show.runtime,
      // desc: show.summary,
      desc: show.summary
        ? document
            .createRange()
            .createContextualFragment(show.summary)
            .firstChild.innerText.slice(0, 250)
        : '',
      premiered: show.airdate,
      images: show.image,
      rating: show.rating.average,
    };
  });

  const seasonsCount = loadedEpisodes[loadedEpisodes.length - 1].season;
  let allSeasons = [];

  for (let i = 1; i < seasonsCount + 1; i++) {
    const season = loadedEpisodes.filter((show) => {
      return show.season === i;
    });
    allSeasons.push(season);
  }

  // console.log(allSeasons);
  return allSeasons;
}
