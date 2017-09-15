const query = require('micro-query');
const { text } = require('micro');

module.exports = async (req, res) => {
    const txt = await text(req);
    const s = query(req).s || (txt.startsWith('s=') ? txt.slice('2') : '');
    const json = new Buffer(s, 'base64').toString('utf8');
    return JSON.parse(json || {});
};
