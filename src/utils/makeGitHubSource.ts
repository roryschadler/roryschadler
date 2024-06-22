const makeGitHubSource = (filePath: string) => {
  return `https://raw.githubusercontent.com/roryschadler/roryschadler/main${filePath}`;
};

export default makeGitHubSource;
