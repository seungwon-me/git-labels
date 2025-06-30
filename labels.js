const labels = [
  { name: 'feature', color: '6a5acd', description: '새로운 기능을 추가합니다.' },
  { name: 'bug fix', color: 'dc143c', description: '발견된 버그를 수정합니다.' },
  { name: 'refactor', color: 'ff8c00', description: '동작은 동일하지만 코드를 개선합니다.' },
  { name: 'documentation', color: '20b2aa', description: '문서를 추가하거나 수정합니다.' },
  { name: 'test code', color: '9932cc', description: '테스트 코드를 작성하거나 수정합니다.' },
  { name: 'chore', color: '708090', description: '빌드, 설정 등 자잘한 작업입니다.' },
  { name: 'code style', color: 'ff1493', description: '코드 포맷, 스타일을 수정합니다.' },

  { name: 'in progress', color: '00bfff', description: '현재 진행 중인 작업입니다.' },
  { name: 'blocked', color: '8b0000', description: '외부 요인으로 인해 작업이 중단되었습니다.' },
  { name: 'completed', color: '7fff00', description: '작업이 완료된 상태입니다.' },
  { name: 'duplicate issue', color: 'ffa07a', description: '중복된 이슈입니다.' },
  { name: 'will not fix', color: 'a52a2a', description: '해결하지 않기로 결정된 이슈입니다.' },

  { name: 'priority: high', color: 'ff4500', description: '가장 높은 우선순위의 작업입니다.' },
  { name: 'priority: medium', color: 'daa520', description: '보통 수준의 우선순위입니다.' },
  { name: 'priority: low', color: '00fa9a', description: '낮은 우선순위의 작업입니다.' },

  { name: 'environment: development', color: '5f9ea0', description: '개발 환경과 관련된 작업입니다.' },
  { name: 'environment: production', color: 'db7093', description: '운영 환경과 관련된 작업입니다.' },
  { name: 'configuration', color: '191970', description: '설정 파일 및 환경 설정 관련 작업입니다.' },
];

module.exports = labels; 