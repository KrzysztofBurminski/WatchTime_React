import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
import { showsActions } from './shows-slice';

export const addShowToDB = (userId, show) => {
  return (dispatch) => {
    dispatch(showsActions.addToList(show));
    const db = getDatabase();
    set(ref(db, `users/${userId}/${show.id}`), {
      id: show.id,
      title: show.title,
      image: show.image,
    });
  };
};

export const removeShowFromDB = (userId, show) => {
  return (dispatch) => {
    dispatch(showsActions.removeFromList(show));
    const db = getDatabase();
    remove(ref(db, `users/${userId}/${show.id}`));
  };
};

export const getShowsList = (userId) => {
  return (dispatch) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const convertedData = Object.values(data);
        console.log(convertedData);
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

export const addEpisodeToDB = (userId, show, episode) => {
  const db = getDatabase();
  set(
    ref(
      db,
      `users/${userId}/${show.id}/seasons/${episode.season}/${episode.id}`
      // `users/${userId}/${show.id}/seasons/${episode.season}/${episode.id}`
    ),
    {
      id: episode.id,
      episode: episode.episode,
      // image: episode.image,
    }
  );
  // };
};

// export const getWatchedEpisodes = (userId, show, episode) => {
//   return (dispatch) => {
//     const db = getDatabase();
//     const userRef = ref(
//       db,
//       `users/${userId}/${show.id}/seasons/${episode.season}/`
//     );
//     onValue(userRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const convertedData = Object.values(data);
//         console.log(convertedData);
//         const idList = [];
//         convertedData.forEach((episode) => {
//           idList.push(episode.id);
//         });

//         dispatch(
//           showsActions.updateList({ showList: convertedData, idList: idList })
//         );
//       }
//     });
//   };
// };
