'use server'
import { users } from "@/db/schema";
import {db} from "@/db/db";
export async function action() {
    console.log('bob\'s world');
 
}
export async function back() {
    const data = ['apple', 'mango', 'banana', 'orange'];
    const random = Math.floor(Math.random() * data.length);
    console.log(data[random]);
    // const username = formData.get('username') as string;  // Retrieving form data by its field name
 

   
    await db.insert(users).values({
        bob:data[random],
      
        
        
    });
}
