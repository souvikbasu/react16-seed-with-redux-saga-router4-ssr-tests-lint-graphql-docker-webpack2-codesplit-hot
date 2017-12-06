export function fetchContributors(userId) {
    return fetch('https://api.github.com/repos/facebook/react/contributors')
    .then(res => res.json());
  };