const express = require("express");
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const {authMiddleware} = require("../middleware")

const userRouter = express.Router();

const userDetailsSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

userRouter.post("/signup", async (req, res) => {
    const { success } = userDetailsSchema.safeParse(req.body);

    if(!success) {
        return res.status(403).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({username: req.body.username});
    if(user) {
        return res.status(411).json({
            message: "User already exists "
        })
    }

    const dbUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    
    await Account.create({
        userId: dbUser._id,
        balance: (Math.random() * 10000 ) + 1
    })

    const token = jwt.sign({userId: dbUser._id}, JWT_SECRET)
    res.json({
        message: "User created successfully",
        token
    })
});

const siginBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
userRouter.post("/signin", async (req, res) => {

    const { success }  = siginBody.safeParse(req.body)
    if(!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    } 
    const existingUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })  

    if(!existingUser) {
        return res.status(403).json({
            message: "Error while logging in"
        })
    }

    const token = jwt.sign({userId: existingUser._id},JWT_SECRET);
    res.json({
        token
    })
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

userRouter.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Error while updating information"
        })
    }

		await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
});

userRouter.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }],
        _id: { "$ne": req.userId }
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

        
module.exports = userRouter 