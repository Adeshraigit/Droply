import { pgTable, text, uuid, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";


export const files = pgTable("files",{
    id: uuid("id").defaultRandom().primaryKey(),

    // basic file/folder info
    name: text("name").notNull(),
    path: text("path").notNull(), // /document/projeect/resume
    type: text("type").notNull(),
    size: integer("size").notNull(), // "folder"

    // storage info
    fileUrl : text("file_url").notNull(), // url to access file
    thumbnailUrl : text("thumbnail_url"), // url to access thumbnail  
    
    // ownership info
    userId: text("user_id").notNull(),
    parentId: uuid("parent_id"), // parent folder id   (null for root items)

    // file/folder flags
    isFolder: boolean("is_folder").default(false).notNull(),
    isStarred: boolean("is_starred").default(false).notNull(),
    isTrashed: boolean("is_trashed").default(false).notNull(),  

    // timestamps   
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
})

/*

parent : Each file/folder can have one parent folder

children: Each folder can have many child files/folder

 */

export const filesRelations = relations(files, ({ one, many }) => ({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id]
    }),
    // relationship to child file/folder
    children: many(files)
}))

// Type definations

export const File = files.$inferSelect;
export const NewFile = files.$inferInsert;
