import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteSong } from '../../service/songService'
import { Layout } from '../Layout/Layout'


export function Delete() {
    const { id } = useParams<{ id: string }>()
    const { name } = useParams<{ name: string }>()
    const [deleteError, setDeleteError] = useState(false)
    // console.log(id);

    const navigate = useNavigate()
    const negativeHandler = () => {
        navigate('/')
    }
    const positiveHandler = async () => {
        if (!id) {
            console.log("Cannot delete element without id");
            return
        }
        const status = await deleteSong({ id })
        if(status == 200){
            navigate('/')
        }
        else{
            setDeleteError(true)
        }

    }

    return (
        <Layout>
            {deleteError && <div>There was an error deleting the song</div>}
            <div className="alert shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Are you sure you want to delete the song {name}</span>
                </div>
                <div className="flex-none">
                    <button onClick={negativeHandler} className="btn btn-sm btn-ghost">Deny</button>
                    <button onClick={positiveHandler} className="btn btn-sm btn-primary">Accept</button>
                </div>
            </div>
        </Layout>
    )
}
