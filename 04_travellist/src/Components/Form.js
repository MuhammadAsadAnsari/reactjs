import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setdescription] = useState("")
    const [quantity, setQuantity] = useState(1)

    function handlesubmit(e) {

        e.preventDefault()
        if (!description) return;
        const newItems = { description, quantity, packed: false, id: Date.now() }
        console.log(newItems)
        onAddItems(newItems)
        setdescription("")
        setQuantity(1);

    }
    return (
        <form className="add-form" onSubmit={handlesubmit}>
            <h3>What do you want for your 😍 trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(
                    (num) =>
                        <option value={num} key={num} >
                            {num}
                        </option>)}
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(e) => setdescription(e.target.value)} />
            <button>Add</button>

        </form>
    )
}