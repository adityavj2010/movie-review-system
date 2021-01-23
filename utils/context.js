function createCtx(req) {
    const mId = Number(req.params['mId'])
    const cId = Number(req.params['cId'])
    const uId = req.user.id
    const reqBody = req.body
    const queryParams = req.query
    return {
        mId, cId, uId, reqBody, queryParams
    }
}

module.exports = {createCtx}
