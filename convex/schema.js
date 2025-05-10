import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        photoURL: v.string(),
        credits: v.number(),

    })
}); // This is the schema for the Convex app. It defines the tables and their fields in the database.
//  * This function will be allowed to modify your Convex database and will be accessible from the client.  
