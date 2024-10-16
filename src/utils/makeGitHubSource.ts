const makeGitHubSource = (filePath: string) => {
  return `https://raw.githubusercontent.com/roryschadler/roryschadler/main/src${filePath}`;
};

export default makeGitHubSource;
