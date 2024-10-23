import{integer, varchar,pgTable,serial,text,timestamp,boolean} from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id:serial('id').primaryKey(),
    stripeCustomerId:text('stripe_customer_id').unique( ),
    email:text('email').notNull().unique(),
    name:text('name'),
    points:integer('points').default(50),
    createAt:timestamp('create_at').defaultNow(),
    
}) 

export const Subscriptions=pgTable('subscriptions',{
    id:serial('id').primaryKey(),
    userId:integer('user_id').references(()=>Users.id).notNull(),
    stripeSubscriptionId:varchar("stripe_subscription_id",{length:255}).notNull(),
    plan:varchar('plan ', {length:50}).notNull(),
    status:varchar('status',{length:50}).notNull(),
    currentPeriodStart:timestamp('current_period_start').notNull(),
    currentPeriodEndt:timestamp('current_period_End').notNull(),
    cancelAtperiodEnd:boolean('cancel_at_period_end').notNull().default(false)
})

export const GeneratedContent=pgTable('generated_content',{
    id:serial('id').primaryKey(),
    userId:integer('user_id').references(()=>Users.id).notNull(),
    content:text('content').notNull(),
    prompt:text('prompt' ).notNull(),
    contentType:varchar('content_type',{length:50}).notNull(),
    createAt:timestamp('create_at').defaultNow(),

})