import React from 'react'

interface SearchProps {
  search :string,
  setSearch : React.Dispatch<React.SetStateAction<string>>
}
export function Search({ search, setSearch } : SearchProps) {
  return (
    <>
      <div>
        Search :<input className='input input-bordered' name='search' type="text" value={search} 
        onChange={e => setSearch(e.target.value)}></input>
        <button className='btn btn-square' >Search</button>
      </div>
    </>
  )
}
