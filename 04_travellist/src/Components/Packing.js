import { useState } from "react";
import Item from "./Items";

export default function PackingList({ items, onDeleteItems, onToggleitem, deleteAll }) {
    const [sortby, setsortby] = useState("input")
    let sortedItems;
    if (sortby === "input") sortedItems = items;
    if (sortby === "description") sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    if (sortby === "packed") sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (<div className="list">
        <ul>{
            sortedItems?.map(item => <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleitem={onToggleitem} />)
        }</ul>
        <div className="actions">
            <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
                <option value="input">Sort by input  order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
            {items.length > 0 ? <button onClick={deleteAll}>Clear List</button> : ''}
        </div>
    </div>

    );
}