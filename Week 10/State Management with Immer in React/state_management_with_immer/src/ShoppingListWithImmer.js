import React from 'react';
import { useImmer } from "use-immer";

function ShoppingListWithImmer() {
    // State initialization with useImmer, followed by shopping list array
    const [shoppingList, updateShoppingList] = useImmer([
        { id: 1, name: 'Apples', quantity: 5, details: { category: 'Fruit', notes: 'Organic' } },
        { id: 2, name: 'Milk', quantity: 2, details: { category: 'Dairy', notes: 'Whole' } },
        { id: 3, name: 'Bread', quantity: 1, details: { category: 'Bakery', notes: 'Whole Wheat' } },
        { id: 4, name: 'Eggs', quantity: 12, details: { category: 'Dairy', notes: 'Free Range' } },
        { id: 5, name: 'Chicken', quantity: 2, details: { category: 'Meat', notes: 'Boneless' } }
    ]);

    // Add a new item according to useImmer
    const addItem = () => {
        updateShoppingList(draft => {
            draft.push({
                id: Math.floor(Math.random() * 1000), // Generates unique id
                name: 'New Item',
                quantity: 1,
                details: { category: 'Misc', notes: '' },
            });
        });
    };

    // Update an existing item
    const updateItem = (id, updatedItem) => {
        updateShoppingList(draft => {
            const index = draft.findIndex(item => item.id === id);
            if (index !== -1) {
                draft[index] = { ...draft[index], ...updatedItem };
            }
        });
    };

    // Remove an item
    const removeItem = id => {
        updateShoppingList(draft => {
            const index = draft.findIndex(item => item.id === id);
            if (index !== -1) {
                draft.splice(index, 1);
            }
        });
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {shoppingList.map(item => (
                    <li key={item.id}>
                        <div>
                            <strong>{item.name}</strong> - Quantity: {item.quantity}
                        </div>
                        <div>Category: {item.details.category}</div>
                        <div>Notes: {item.details.notes}</div>
                        <div>
                            <button onClick={() => updateItem(item.id, { quantity: item.quantity + 1 })}>Increase Quantity</button>
                            <button onClick={() => updateItem(item.id, { quantity: item.quantity - 1 })}>Decrease Quantity</button>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingListWithImmer;
