import React, { useState } from 'react';
import { dbService, storageService } from 'fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

function Tweet({ tweetObj, isOwner }) {
  const [editing, setEditing] = useState(false);
  const [editTweet, setEditTweet] = useState(tweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm('Are you sure you want to delete this tweet?');
    if (ok) {
      await deleteDoc(doc(dbService, `tweets/${tweetObj.id}`));
      await deleteObject(ref(storageService, tweetObj.uploadURL));
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(tweetObj, editTweet);
    await updateDoc(doc(dbService, `tweets/${tweetObj.id}`), {
      text: editTweet,
    });
    setEditing(false);
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEditTweet(value);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your tweet"
              value={editTweet}
              onChange={onChange}
              required
            />
            <input type="submit" value="Update tweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{tweetObj.text}</h4>
          {tweetObj.uploadURL && (
            <img
              src={tweetObj.uploadURL}
              alt="uploadImage"
              width="50px"
              height="50px"
            />
          )}
          {isOwner && (
            <>
              <button onClick={toggleEditing}>Edit</button>
              <button onClick={onDeleteClick}>Delete</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Tweet;
