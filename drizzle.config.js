export default{
    dialect:'postgresql',
    schema:'./utils/db/schema.ts',
    out:'./drizzle',
    
    dbCredentials:{
        url:'postgresql://threadcraft_ai_owner:m8PzXHsEBiT7@ep-flat-wave-a8voqo79.eastus2.azure.neon.tech/threadcraft_ai?sslmode=require',
        connectionString:'postgresql://threadcraft_ai_owner:m8PzXHsEBiT7@ep-flat-wave-a8voqo79.eastus2.azure.neon.tech/threadcraft_ai?sslmode=require'
    }
}