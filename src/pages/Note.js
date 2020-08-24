import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import globalContext from '../context/global/globalContext';

const Note = ({ match, history }) => {
  const { notes, deleteNote } = useContext(globalContext);

  const id = match.params.id;
  const note = notes.find((note) => note._id === id);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }

    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h4 className="center teal-text text-darken-1">{title}</h4>
      </div>
      <div className="row">
        <p>{content}</p>
      </div>
      <div className="row">
        <div className="row center">
          <button
            onClick={() => {
              history.push(`/edit/${note._id}`);
            }}
            className="waves-effect waves-light btn-large"
          >
            Edit note
          </button>
        </div>
        <div className="row center">
          <button
            onClick={() => {
              deleteNote(id);
              history.push(`/`);
            }}
            className="waves-effect waves-light red darken-2 btn-large"
          >
            Delete note
          </button>
        </div>
        <div className="row center">
          <Link
            to="/notes"
            className="waves-effect waves-light btn-large grey-text text-darken-4 grey lighten-3"
          >
            Back to Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Note);
