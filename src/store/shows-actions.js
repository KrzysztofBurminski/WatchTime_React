import {
  getDatabase,
  ref,
  set,
  remove,
  onValue,
  update,
} from 'firebase/database';
import { showsActions } from './shows-slice';

//
// FAVOURITE SHOW
//
export const addToFavourite = (userId, show) => {
  return (dispatch) => {
    dispatch(showsActions.addToFav(show));
    const db = getDatabase();
    set(ref(db, `users/${userId}/favourite/${show.id}`), {
      id: show.id,
      title: show.title,
      image: show.image,
    });
  };
};

export const removeShowFromFav = (userId, show) => {
  return (dispatch) => {
    dispatch(showsActions.removeFromFavList(show));
    const db = getDatabase();
    remove(ref(db, `users/${userId}/favourite/${show.id}`));
  };
};

export const getFavShowsList = (userId) => {
  return (dispatch) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}/favourite`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const convertedData = Object.values(data);
        const idList = [];
        convertedData.forEach((show) => {
          idList.push(show.id);
        });

        dispatch(
          showsActions.updateFavList({
            showList: convertedData,
            idList: idList,
          })
        );
      }
    });
  };
};

//
// FOLLOWED SHOWS
//

export const addShowToDB = (userId, show) => {
  return (dispatch) => {
    dispatch(showsActions.addToList(show));
    const db = getDatabase();
    set(ref(db, `users/${userId}/followed/${show.id}`), {
      id: show.id,
      title: show.title,
      image: show.image,
      watchedCount: 0,
      runtime: show.averageRuntime,
    });
  };
};

export const removeShowFromDB = (userId, show) => {
  return (dispatch) => {
    dispatch(showsActions.removeFromList(show));
    const db = getDatabase();
    remove(ref(db, `users/${userId}/followed/${show.id}`));
    dispatch(removeShowFromFav(userId, show));
  };
};

export const getShowsList = (userId) => {
  return (dispatch) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}/followed`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const convertedData = Object.values(data);
        const idList = [];
        convertedData.forEach((show) => {
          idList.push(show.id);
        });

        dispatch(
          showsActions.updateList({ showList: convertedData, idList: idList })
        );
      }
    });
  };
};

//
///////////// EPISODES ////////////
//

const updateWatchedCount = (userId, show, add) => {
  const db = getDatabase();
  let watchedCount = 0;

  const watchedCountRef = ref(db, `users/${userId}/followed/${show.id}`);
  onValue(watchedCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      watchedCount = parseInt(data.watchedCount);
      add ? watchedCount++ : watchedCount--;
    } else {
      if (add) {
        watchedCount = 1;
      }
    }
  });

  update(ref(db, `users/${userId}/followed/${show.id}`), {
    watchedCount: watchedCount,
  });
};

export const addEpisodeToDB = (userId, show, episode) => {
  const db = getDatabase();

  set(
    ref(
      db,
      `users/${userId}/followed/${show.id}/seasons/${episode.season}/${episode.id}`
    ),
    {
      id: episode.id,
      episode: episode.episode,
    }
  );
  updateWatchedCount(userId, show, true);
};

export const removeEpisodeFromDB = (userId, show, episode) => {
  const db = getDatabase();
  set(
    ref(
      db,
      `users/${userId}/followed/${show.id}/seasons/${episode.season}/${episode.id}`
    ),
    {}
  );
  updateWatchedCount(userId, show, false);
};

export const addSeasonToDB = (userId, show, season) => {
  const db = getDatabase();

  season.forEach((episode) => {
    set(
      ref(
        db,
        `users/${userId}/followed/${show.id}/seasons/${episode.season}/${episode.id}`
      ),
      {
        id: episode.id,
        episode: episode.episode,
      }
    );
    updateWatchedCount(userId, show, true);
  });
};
