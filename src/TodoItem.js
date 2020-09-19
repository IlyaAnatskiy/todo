import React, { useContext } from 'react';
import { Context } from './context'

export default function TodoItem({ title, id, completed }) {
    const { dispatch } = useContext(Context)

    const cls = ['list-group-item']

    if (completed) {
        cls.push('done')
    }
    return (
        <li className={cls.join(' ')}>
            <input type="checkbox" checked={completed} onChange={() => dispatch({
                type: 'toggle',
                payload: id
            })} />
            <span>{title}</span>
            <button onClick={() => dispatch({
                type: 'remove',
                payload: id
            })} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </li >
    );
}

