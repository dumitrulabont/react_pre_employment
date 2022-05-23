import React, { useState } from "react";
import { useCreateSong } from "../../hooks/useCreateSong";
import { useNavigate } from "react-router-dom";
import { Layout } from "../Layout/Layout";
export function AddForm() {
  
  const [name, setName] = useState('');
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('other');
  const { isLoaded, createSong, error } = useCreateSong()
  const navigate = useNavigate()

  
  //if data has been sent to the server and there were no errors redirect to home page
  if(isLoaded && !error){
    navigate('/');
  }
  
  
  const addHandler = async () => {
    await createSong({
      name,
      album,
      artist,
      genre
    })

  }

  return (
    <Layout>
      
      <form onSubmit={(e) => e.preventDefault()} className='form-control'>
        {error && <div>There has been an error</div>}
          
        <h3>Add a new song</h3>
        <div>
          <label className="input-group">
            <span>Title:</span>
            <input
            className="input input-bordered"
              name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label  className="input-group">
            <span>Album:</span>
            <input
            className="input input-bordered"
              name="album"
              type="text"
              value={album}
              onChange={e => setAlbum(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span>Artist:</span>
            <input
            className="input input-bordered"
              name="artist"
              type="text"
              value={artist}
              onChange={e => setArtist(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span>Genre</span>
            <select
             className="input input-bordered"
              name="genre"
              value={genre}
              onChange={e => setGenre(e.target.value)}
            >
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="rap">Rap</option>
              <option value="classic">Classic</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
        <button className="btn" onClick={addHandler}>Add</button>

        </div>
      </form>
    </Layout>
  );
}
