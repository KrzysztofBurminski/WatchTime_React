import imageNotFound from '../assets/imgageNotFound.png';

export async function getMovieImages(requestData) {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${requestData}/images`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not get images.');
  }

  const loadedImages = data.map((show) => {
    return {
      showId: requestData,
      imgId: show.id,
      type: show.type,
      url: show.resolutions.original.url,
    };
  });

  const backgroundImg = loadedImages.filter((show) => {
    return show.type === 'background';
  });

  return {
    backgroundImg:
      backgroundImg.length === 0 ? { url: imageNotFound } : backgroundImg[0],
    allImages: loadedImages,
  };
}

export async function getSingleShow(requestData) {
  const response = await fetch(`https://api.tvmaze.com/shows/${requestData}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not get products.');
  }

  const loadedShow = {
    id: data.id,
    title: data.name,
    description: data.summary,
    image: data.image?.medium ?? imageNotFound,
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
      image: show.image?.medium ?? imageNotFound,
      rating: show.rating.average,
      popularity: show.weight,
      genres: show.genres,
      averageRuntime: show.averageRuntime,
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
      desc: show.summary
        ? document
            .createRange()
            .createContextualFragment(show.summary)
            .firstChild.innerText.slice(0, 250)
        : '',
      premiered: show.airdate,
      images: show.image ?? { original: imageNotFound },
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

  return allSeasons;
}

export async function getCast(requestData) {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${requestData}/cast`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not get products.');
  }

  const loadedCast = data
    .map((result) => {
      return {
        id: result.person.id,
        actorName: result.person.name,
        actorImage: result.person.image?.original ?? imageNotFound,
        actorBirthday: result.person.birthday,
        characterName: result.character.name,
        characterImage: result.character.image?.original ?? imageNotFound,
      };
    })
    .filter((p) => p.actorImage !== '' && p.characterImage !== '');

  let convertedCast = [];
  loadedCast.forEach((element) => {
    let repeated = false;
    convertedCast.forEach((comparison) => {
      repeated = false;
      if (comparison.characterName === element.characterName) {
        repeated = true;
      }
    });

    if (!repeated) {
      convertedCast.push(element);
    }
  });

  return convertedCast;
}

export async function getSearchResult(requestData) {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows${requestData}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not get products.');
  }

  const loadedShows = data.map((result) => {
    return {
      id: result.show.id,
      title: result.show.name,
      image: result.show.image?.medium ?? imageNotFound,
    };
  });

  return loadedShows;
}
