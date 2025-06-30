const axios = require('axios');
const readline = require('readline');
const deleteExistingLabels = require('./delete-exist-labels.js');
const labels = require('./labels.js');

// 사용자 입력 받기
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter GitHub repository URL: ', (repoUrl) => {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) {
    console.error('❌ Invalid URL format.');
    rl.close();
    return;
  }

  rl.question('Enter GitHub Token: ', (token) => {
    rl.question('Do you want to delete all existing labels? (y/n): ', async (answer) => {
      try {
        const OWNER = match[1];
        const REPO = match[2];

        const headers = {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        };

        if (answer.toLowerCase() === 'y') {
          await deleteExistingLabels(OWNER, REPO, headers);
        }

        console.log('Creating new labels...');
        for (const label of labels) {
          await createLabel(label, OWNER, REPO, headers);
        }
        console.log('✅ New labels have been created successfully.');

      } catch (error) {
        console.error('❌ An error occurred:', error.message);
      } finally {
        rl.close();
      }
    });
  });
});

async function createLabel(label, owner, repo, headers) {
  try {
    await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/labels`,
      label,
      { headers }
    );
    console.log(`✅ Created label: ${label.name}`);
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.log(`⚠️ Label already exists: ${label.name}`);
    } else {
      console.error(`❌ Error creating label ${label.name}:`, error.message);
    }
  }
}
