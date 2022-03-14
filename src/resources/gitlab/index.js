const axios = require('axios');

module.exports = {
  getIssues: async (url, headers, thresholdDate) => {
    const res = await axios({
      method: 'get',
      url: `${url}?updated_before=${thresholdDate.toISOString()}&state=opened`,
      headers: headers
    })
    return res.data;
  },
  updateIssue: async (url, headers, issueIid, body) => {
    const res = await axios({
      method: 'put',
      url: `${url}/${issueIid}`,
      headers: headers,
      data: body
    })
    return res.data
  },
  postCommentOnIssue: async (url, headers, issueIid, message) => {
    const res = await axios({
      method: 'post',
      url: `${url}/${issueIid}/notes`,
      headers: headers,
      data: {
        body: message
      }
    })
    return res.data
  }
}