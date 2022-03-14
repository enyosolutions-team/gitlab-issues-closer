const gitlab = require('../../resources/gitlab')
const config = require('../../config')

const thresholdDate = new Date();
thresholdDate.setDate(thresholdDate.getDate() - config.threshold)
const baseUrl = `${config.apiUrl}/${config.projectId}`;
const issuesUrl = `${baseUrl}/issues`;
const headers = {
  Authorization: `Bearer ${config.personalToken}`
};

module.exports = async () => {
  const issues = await gitlab.getIssues(issuesUrl, headers, thresholdDate);
  let totalIssuesClosed = 0;

  for (const issue of issues) {
    try {
      const body = { state_event: 'close' }
      await gitlab.postCommentOnIssue(issuesUrl, headers, issue.iid, config.message)
      await gitlab.updateIssue(issuesUrl, headers, issue.iid, body)
      totalIssuesClosed++;
    } catch (eror) {
      console.error(`Error closing issue ${issue.iid}`)
    }
  }

  console.log(`${totalIssuesClosed} issues closed from ${issues.length} issues older than ${config.threshold} days found.`);
}