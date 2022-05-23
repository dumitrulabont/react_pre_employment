import React from 'react'

interface OrderProps {
  order: string,
  setOrder: React.Dispatch<React.SetStateAction<string>>
}
export function Order({ order, setOrder }: OrderProps) {

  return (
    <>
      <div>
        Order songs by:
        <select className='select select-secondary' name='order' value={order}
          onChange={e => setOrder(e.target.value)}>
          <option value="artistAZ">artistAZ</option>
          <option value="artistZA">artistZA</option>
          <option value="albumAZ">albumAZ</option>
          <option value="albumZA">albumZA</option>
        </select>
      </div>
    </>
  )
}
