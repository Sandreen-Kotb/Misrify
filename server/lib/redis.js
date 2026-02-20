// Redis temporarily disabled for Vercel deployment
// import Redis from "ioredis"
// import dotenv from 'dotenv'

// dotenv.config()

// const redis = new Redis(process.env.REDIS_URL);

// Mock redis object for when Redis is disabled
const redis = {
    set: async () => { console.log('Redis disabled - set operation skipped'); },
    get: async () => { console.log('Redis disabled - get operation skipped'); return null; },
    del: async () => { console.log('Redis disabled - del operation skipped'); }
};

export default redis;