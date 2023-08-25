/**
 * Developed by hampuiz (Discord Username). Project is free to use, 
 * please don't remove the credit that's present within the embeds, they
 * are there to allow me to release free products like this. 
 * 
 * If you have any errors contact me on discord.
 */

/**
 * Edit the client files, do NOT share your token with anyone.
 */
export const CLIENT = {
    TOKEN: "MTEzNTI4MTU5NDc0ODM5MTQ4NQ.G6IWS9.xH2EWQZK8iMd31bKXNrM8nVoBkqbTEaEC8HUbE",
    CLIENT_ID: "1135281594748391485", 
    CLIENT_SECRET: "XxlzbBdai1ER1BdYQ5TxuyWNjWhFBnXy" 
}

/**
 * Edit the Discord Server values.
 */
export const SERVER = {
    SERVER_ID: "1135281943487983616"
}

/**
 * Enter the Discord Client information needed
 * to make request to the Discord API
 */
export const AUTHENTICATION = {
    REDIRECT: "http://localhost/auth/callback",
    SCOPES: ["identify", "guilds"],
}

/**
 * Permission roles, do NOT edit the name or remove any field. 
 * Change permissions, all permissions are listed in the "High-Command" role.
 */
export const PERMISSION_ROLES = [
    {
        name: "High-Command",
        permissions: ["MANAGE_STRIKES", "MANAGE_RANK", "MANAGE_TRAINING", "MANAGE_RIDE_ALONGS", "MANAGE_SUSPENSION", "MANAGE_REPORTS"],
        role_id: ""
    }, 
    {
        name: "Supervisor", 
        permissions: ["MANAGE_STRIKES", "MANAGE_TRAINING", "MANAGE_RIDE_ALONGS", "MANAGE_SUSPENSION", "MANAGE_REPORTS"],
        role_id: ""
    },
    {
        name: "FTO",
        permissions: ["MANAGE_TRAINING", "MANAGE_RIDE_ALONGS"]
    }
]

/**
 * Department ranks, make sure that there's no
 * duplicate positions. 
 */
export const RANKS = [
    {
        name: "Chief of Police",
        position: 1,
        role_id: "1144679197944594432",
        sub_role: ["High-Command", "Supervisor", "FTO"]
    },
    {
        name: "Commander",
        position: 2,
        role_id: "1144679161345089638",
        sub_role: []
    },
    {
        name: "Sergeant",
        position: 3,
        role_id: "",
        sub_role: []
    },
    {
        name: "Senior Officer",
        position: 4,
        role_id: "",
        sub_role: [] 
    },
    {
        name: "Officer",
        position: 5,
        role_id: "",
        sub_role: []
    },
    {
        name: "Trainee",
        position: 6,
        role_id: "1144679198867333210",
        sub_role: [] 
    }
]

/**
 * Department fields, for main department.
 */
export const DEPARTMENT = {
    DEPARTMENT_ROLE: "1136767795602919525"
}

export const LOG_PREFIX = {
    STANDARD: "[SYSTEM] ",
    WARNING: "[WARNING] ",
    ERROR: "[ERROR] ",
    DEVELOPER: "[DEVELOPER] "
}