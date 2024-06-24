import { client } from "../index";

interface Todo {
    id: number;
    user_id: number;
    title: string;
    description: string;
    done: boolean;
}

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string): Promise<Todo> {
    const res = await client.query(`
            INSERT INTO todos (user_id, title, description)
            VALUES ($1, $2, $3) RETURNING *
            `, [userId, title, description]);
    return res.rows[0] ;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number): Promise<Todo > {
    const res = await client.query(`
    UPDATE todos
    SET done=true
    WHERE id=$1 
    RETURNING *`, [todoId])
    return res.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number): Promise<Todo[]> {
        const res = await client.query(`
         SELECT * FROM todos
         WHERE user_id=$1 `, [userId])
         return res.rows ;
}