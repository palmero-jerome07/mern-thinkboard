import ratelimit from '../configs/upstash.js'


const ratelimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key") // Use a unique key for each user or route if needed
        if(!success) {
            return res.status(429).json({
                message:"too many requests, please try again later"
            })
        }
        next()
    } catch (error) {
        console.error("Rate limiter error:", error);
        next(error) // Pass the error to the next middleware
    }
}

export default ratelimiter;