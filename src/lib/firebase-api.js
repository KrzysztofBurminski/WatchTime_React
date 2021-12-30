const FIREBASE_DOMAIN =
  'https://watchtime-50dc6-default-rtdb.europe-west1.firebasedatabase.app/';

export async function addShowToDB(showData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/users/user2.json`, //${showData.id}.json`,
    {
      method: 'POST',
      body: JSON.stringify(showData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function removeShowFromDB(showData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/users/user2/-Ms5-BnGjvE1iCmdfKkB.json`, //${showData.id}.json`,
    {
      method: 'DELETE',
      body: JSON.stringify(showData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}
