import React from 'react'

interface FilterProps {
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
export function Filter({ filter, setFilter }: FilterProps) {
  return (
    <>
      <div>
        <span className='text-black text-xl'>Filter songs by genre: </span>
        <select className='select select-secondary' name='filter' value={filter}
          onChange={e => setFilter(e.target.value)}>
          <option value="">Any</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="rap">Rap</option>
          <option value="classic">Classic</option>
          <option value="other">OTHER</option>
        </select>
      </div>
    </>
  )
}
