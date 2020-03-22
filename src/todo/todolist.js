import React from 'react'
import TodoItem from './todoitem'
const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}
export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, idx) => {
                return <TodoItem todo={todo} key={todo.id} idx={idx} />
            })}
        </ul>
    )
}