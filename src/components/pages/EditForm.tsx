import React, {  useState } from "react";
import { useParams } from "react-router-dom";
import { useSongById } from "../../hooks/useSongById";
import { editSong } from '../../service/songService'
import { useNavigate } from 'react-router-dom'
import { Layout } from "../Layout/Layout";
// interface SongToEditProps {
//     songToEdit: ISong,
//     setSongToEdit: React.Dispatch<React.SetStateAction<{}>>
// }
export function EditForm() {
    const { id } = useParams<{ id: string }>()
    const { song, isLoaded, error, setSong } = useSongById(id || "");
    const navigate = useNavigate()
    const [editError,setEditError] = useState(false)

    //=====> FOLOSESTE setSong
    // console.log(song);


    const handleEdit = async (e: any)=> {
        e.preventDefault()
        // console.log("handler");
        const res = await editSong(song)

        if(res !== 200){
            setEditError(true)
        }
        navigate('/')
    }

    if (error) {
        return (
            <Layout>
                There was an error
            </Layout>
        )
    }
    if (!isLoaded) {
        return (
            <Layout>
                The page is loading
            </Layout>
        )

    }
    if(isLoaded && !song){
        //if data is loaded but there is no song with specified id
        //return an error
        return(
            <Layout>
                No song found
            </Layout>
        )
    }
    if(editError){
        return(
            <Layout>
                Could not update
            </Layout>
        )
    }
    return (

        <Layout>
            <form className='form-control'>
                <h3>Edit a song</h3>
                <div>
                    <label className="input-group">
                        Title:
                        <input
                            className="input input-bordered"
                            name="name"
                            type="text"
                            onChange={e => setSong(prevState => {
                                return {
                                    ...prevState,
                                    name: e.target.value
                                }
                            })}
                            value={song.name}
                        ></input>
                    </label>
                </div>
                <div>
                    <label className="input-group">
                        Album:
                        <input
                            className="input input-bordered"
                            name="album"
                            type="text"
                            value={song.album}
                            onChange={e => setSong({
                                ...song,
                                album: e.target.value
                            })}></input>
                    </label>
                </div>
                <div>
                    <label className="input-group">
                        Artist:
                        <input
                            className="input input-bordered"
                            name="artist"
                            type="text"
                            value={song.artist}
                            onChange={e => setSong({
                                ...song,
                                artist: e.target.value
                            })}></input>
                    </label>
                </div>
                <div>
                    <label className="input-group">
                        Genre
                        <select
                            className="input input-bordered"
                            name="genre"
                            value={song.genre}
                            onChange={e => setSong({
                                ...song,
                                genre: e.target.value
                            })}>
                            <option value="pop">Pop</option>
                            <option value="rock">Rock</option>
                            <option value="rap">Rap</option>
                            <option value="classic">Classic</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button className="btn" onClick={handleEdit}>Edit</button>
                </div>
            </form>
        </Layout>
    );
}
