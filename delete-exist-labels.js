const axios = require('axios');

async function deleteExistingLabels(owner, repo, headers) {
  try {
    console.log('Deleting existing labels...');
    const { data: existingLabels } = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/labels`,
      { headers, params: { per_page: 100 } } // 페이지당 항목 수를 늘려 모든 라벨을 가져옴
    );

    if (existingLabels.length === 0) {
      console.log('No existing labels to delete.');
      return;
    }

    for (const label of existingLabels) {
      await axios.delete(
        `https://api.github.com/repos/${owner}/${repo}/labels/${encodeURIComponent(label.name)}`,
        { headers }
      );
      console.log(`🗑️ Deleted label: ${label.name}`);
    }
    console.log('✅ All existing labels have been deleted.');
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('No existing labels to delete.');
      return;
    }
    console.error('❌ Error deleting labels:', error.message);
    throw error; // 호출한 쪽에서 에러를 처리할 수 있도록 다시 던짐
  }
}

module.exports = deleteExistingLabels; 