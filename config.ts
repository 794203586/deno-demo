const env = Deno.env.toObject();
const APP_HOST = env.APP_HOST || "172.18.16.107";
const APP_PORT = env.APP_PORT || 3314;
const DB_PATH = env.DB_PATH || "./db/todos.json";

export
{
    APP_HOST,
    APP_PORT,
    DB_PATH
};