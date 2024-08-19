const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { mongoose } = require("mongoose");

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
    const accountBalance = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: accountBalance.balance
    })
});


accountRouter.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession()
    session.startTransaction()
    
    const { to, amount } = req.body;

    const senderAcc = await Account.findOne({
        userId: req.userId
    }).session(session)

    if(!senderAcc || senderAcc.balance < amount) {
        await session.abortTransaction()
        return res.status(403).json({
            message: "Insufficient balance"
        })
    }

    const toAcc = await Account.findOne({
        userId: to
    }).session(session)

    if(!toAcc) {
        await session.abortTransaction()
        res.status(403).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    },{
        $inc: {
            balance: -amount
        }
    })


    await Account.updateOne({
        userId: to
    },{
        $inc: {
            balance: amount
        }
    }).session(session)

    await session.commitTransaction()
    res.json({
        message: "Transfer successfull"
    })
});

module.exports = accountRouter