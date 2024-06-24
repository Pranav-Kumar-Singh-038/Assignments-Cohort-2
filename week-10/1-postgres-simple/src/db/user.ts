import { client } from "..";


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string){
        const res=await client.query(`
            INSERT INTO users (username, password, name)
            VALUES ($1, $2, $3) RETURNING *
            `,[username, password, name]);
            return res.rows[0] ;
    
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number){
        const res=await client.query(`
         SELECT * FROM users
         WHERE id=$1 `, [userId])
         console.log("User fetched successfully",JSON.stringify(res.rows[0], null, 2));
         return res.rows[0] ;

}
