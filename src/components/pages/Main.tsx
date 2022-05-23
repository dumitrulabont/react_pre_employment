import React from 'react'
import { CardsContainer } from '../CardsContainer'
import { SearchContainer } from '../SearchContainer'
import { useState } from 'react'

import { useGetSongs } from '../../hooks/useGetSongs'
import { Layout } from '../Layout/Layout'

export function Main() {


    const [url, setUrl] = useState("/getSongs")
    const {isLoaded, songs, error} = useGetSongs(url)

    // const [songToEdit, setSongToEdit] = useState({});
 
    return (
        <Layout>

            <SearchContainer setUrl={setUrl} />
            <CardsContainer isLoaded={isLoaded} songs={songs} error={error}  />

        </Layout>
    )
}
