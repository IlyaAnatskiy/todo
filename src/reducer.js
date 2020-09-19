export default function (state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]
        case 'toggle':
            console.log(state)
            return state.map(todo => {
                console.log(todo)
                if (todo.id === action.payload) {
                    console.log(todo.id)
                    console.log(todo.completed)
                    console.log(!todo.completed)
                    todo.completed = !todo.completed

                }
                return todo
            })
        case 'remove':
            console.log(state)
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}