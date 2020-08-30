// ro be run in the root of the content repo - AC-reponame
// generates exerciseConfig, topicConfig and blockConfig.
// expects each block and exercise name to have uniqueCode
// and each block must have index.md

let globalBlockConfig = {
  name: '',
  displayName: '',
  descriptionURL: '',
  uniqueCode: '',
  type: '',
  level: 1,
  contentType: '',
  automatedFeedback: '',
  githubBranchName: '',
  openFile: '',
  isTestable: false,
  estimatedTimeToComplete: 0,
  isPotentialInterviewQuestion: false,
  quizOptions: {
    a: '',
    b: '',
    c: '',
    d: '',
  },
  quizCorrectAnswerOptions: [],
  correctAnswerExplanation: '',
  todo: {
    isReviewed: false,
    isAssignmentDone: true,
    shouldSplitBlock: false,
    actionsRequired: [
      {
        videoId: '',
        scrimbaId: '',
        type: 'toVideo',
        topic: '',
      },
    ],
  },
};

let globalExerciseConfig = {
  name: '',
  uniqueCode: '',
  type: '',
  githubBranchName: '',
  description: '',
  blocks: [],
};

let topicConfig = {
  name: '',
  uniqueCode: '',
  githubAssignmentRepo: '',
  exercises: [],
};

/***
 *
 * START
 *
 ****/

const { readdirSync, readFileSync, mkdirSync, appendFileSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .filter((dirent) => !['.git', 'old', 'assets'].includes(dirent.name))
    .map((dirent) => dirent.name);

const lastCodeFinder = (name, splitter = '-') => {
  var name = name.split(splitter);
  var code = name[name.length - 1];
  return code;
};

const currentGithubRepoDir = lastCodeFinder(__dirname, '/');

console.log(currentGithubRepoDir, 'current');

const exerciseFolders = getDirectories('./');

var exerciseConfigURLs = [];

for (var exerciseKey in exerciseFolders) {
  const exerciseName = exerciseFolders[exerciseKey];
  const blockFolders = getDirectories(exerciseName);
  var exerciseUniqueCode = lastCodeFinder(exerciseName);

  var blockConfigURLs = [];

  for (var blockKey in blockFolders) {
    var blockConfig = { ...globalBlockConfig };
    const blockName = blockFolders[blockKey];

    var blockUniqueCode = lastCodeFinder(blockName);
    blockConfig.uniqueCode = blockUniqueCode;

    var fileContent = readFileSync(`${exerciseName}/${blockName}/index.md`);

    if (fileContent.includes('writeCode')) {
      blockConfig.type = 'writeCode';
      blockConfig.githubBranchName = `block-${blockUniqueCode}`;
      blockConfig.openFile = `./block-${blockUniqueCode}`;
      blockConfig.contentType = 'csb';
    }

    blockConfig.descriptionURL = `https://github.com/AltCampus/${currentGithubRepoDir}/tree/master/${exerciseName}/${blockName}/index.md`;

    // put this blockConfig.json in the block
    console.log(blockName, 'start');
    appendFileSync(
      `${exerciseName}/${blockName}/blockConfig.json`,
      JSON.stringify(blockConfig)
    );
    blockConfigURLs.push(
      `https://github.com/AltCampus/${currentGithubRepoDir}/tree/master/${exerciseName}/${blockName}/blockConfig.json`
    );
    console.log(blockName, 'done');
  }

  var exerciseConfig = { ...globalExerciseConfig };
  exerciseConfig.blocks = blockConfigURLs;
  exerciseConfig.uniqueCode = exerciseUniqueCode;
  exerciseConfig.githubBranchName =
    exerciseName.split('-')[0].toLowerCase() + '-' + exerciseUniqueCode;
  exerciseConfig.type = 'content';
  exerciseConfigURLs.push(
    `https://github.com/AltCampus/${currentGithubRepoDir}/tree/master/${exerciseName}/exerciseConfig.json`
  );
  appendFileSync(
    `${exerciseName}/exerciseConfig.json`,
    JSON.stringify(exerciseConfig)
  );
}

topicConfig.uniqueCode = lastCodeFinder(currentGithubRepoDir);
topicConfig.exercises = exerciseConfigURLs;
appendFileSync(`topicConfig.json`, JSON.stringify(topicConfig));
