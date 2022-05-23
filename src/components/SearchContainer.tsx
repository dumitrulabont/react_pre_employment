import React, {  useState } from "react";
import { Order } from "./Order";
import { Filter } from "./Filter";
import { Search } from "./Search";

interface SearchContainerProps {
  setUrl : React.Dispatch<React.SetStateAction<string>>
}
export function SearchContainer({ setUrl } : SearchContainerProps) {

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")
  const [order, setOrder] = useState("artistAZ")



  return (
    <div className=" flex flex-row">
      <form onSubmit={(e) => {
        e.preventDefault()
        const url = `getSongs?search=${search}&filterBy=${filter}&sortBy=${order}`
        setUrl(url)
      }
      }>
        <Search search={search} setSearch={setSearch} />
        <Filter  filter={filter} setFilter={setFilter} />
        <Order order={order} setOrder={setOrder} />
      </form>

    </div>
  );
}
