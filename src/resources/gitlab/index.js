const axios = require('axios');

module.exports = {
  getIssues: async (url, headers, thresholdDate) => {
    try {
      const res = await axios({
        method: 'get',
        url: `${url}?updated_before=${thresholdDate.toISOString()}&state=opened&per_page=100`,
        headers: headers
      })
      return res.data;
    } catch (error) {
      console.error('Error getting issues', error)
    }
  },
  updateIssue: async (url, headers, issueIid, body) => {
    try {
      const res = await axios({
        method: 'put',
        url: `${url}/${issueIid}`,
        headers: headers,
        data: body
      })
      return res.data
    } catch (error) {
      console.error('Error updating issue', error)
    }
  },
  postCommentOnIssue: async (url, headers, issueIid, message) => {
    try {
      const res = await axios({
        method: 'post',
        url: `${url}/${issueIid}/notes`,
        headers: headers,
        data: {
          body: message
        }
      })
      return res.data
    } catch (error) {
      console.error('Error posting comment on issue', error)
    }
  }
}