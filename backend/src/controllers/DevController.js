module.exports = {
    store(req, resp) {
        console.log(req.body.username);

        const { username } = req.body;

        return resp.json({ ok: true});
    }
};