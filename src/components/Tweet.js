import React, { useState } from 'react';
import { dbService, storageService } from 'fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

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
    <div className="tweet">
      {editing ? (
        <>
          <form className="container tweetEdit" onSubmit={onSubmit}>
            <input
              className="formInput"
              type="text"
              placeholder="Edit your tweet"
              value={editTweet}
              onChange={onChange}
              autoFocus
              required
            />
            <input className="formBtn" type="submit" value="Update tweet" />
          </form>
          <span className="formBtn cancelBtn" onClick={toggleEditing}>
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{tweetObj.text}</h4>
          {tweetObj.uploadURL && (
            <img src={tweetObj.uploadURL} alt="uploadImage" />
          )}
          {isOwner && (
            <div className="tweet_actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Tweet;
