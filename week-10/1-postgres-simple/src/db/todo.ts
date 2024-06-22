import { Client } from "..";
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
export async function createTodo(userId: number, title: string, description: string) {
    try{
        await Client.connect();
        const res=await Client.query(`
            INSERT INTO todos (userId, title, description)
            VALUES ($1, $2, $3) RETURNING *
            `,[userId, title, description]);
        console.log(`Data added successfully: ${res}`)
    }
    catch(err)
    {
     console.error(`Error inserting user data: ${err}`)
    }finally{
        await Client.end()
    }
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
export async function updateTodo(todoId: number) {
 try{
   await Client.connect();
   const res=await Client.query(`
    UPDATE todos
    SET done=true
    WHERE todoId=$1 
    RETURNING *`, [todoId])
    console.log("todo updated successfully",JSON.stringify(res.rows[0], null, 2));
 }
 catch(err)
 {
    console.error(`Error inserting user data: ${err}`)
 }finally{
    await Client.end();
 }
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
export async function getTodos(userId: number) {
    try{
        await Client.connect();
        const res=await Client.query(`
         SELECT * FROM todos
         WHERE userId=$1 `, [userId])
         console.log("todo fetched successfully",JSON.stringify(res.rows[0], null, 2));
      }
      catch(err)
      {
         console.error(`Error gettings user Todos: ${err}`)
      }finally{
         await Client.end();
      }
}