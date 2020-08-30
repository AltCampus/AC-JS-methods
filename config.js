// To run on the root of a topic content repo starting with AC-
// will generate a seed-${topicName}-${uniqueCode}.js file for that topic in root itself.

const {
  readdirSync,
  readFileSync,
  appendFileSync,
  writeFileSync,
  renameSync,
} = require('fs');

const getDirectories = (source) =>
  readdirSync(source, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isDirectory())
    .filter(
      (dirent) => !['.git', 'old', 'assets', '.vscode'].includes(dirent.name)
    )
    .map((dirent) => dirent.name);

const lastCodeFinder = (name, splitter = '-') => {
  var name = name.split(splitter);
  var code = name[name.length - 1];
  return code;
};

const currentGithubRepoDir = lastCodeFinder(__dirname, '/');

// if it exists then write it to blank first.
writeFileSync(`seed-${currentGithubRepoDir}.js`, '');
writeFileSync(
  `seed.js`,
  `var Topic = require('../../models/topic'); \nvar Exercise = require('../../models/exercise'); \nvar Block = require('../../models/block');\n\nvar seeder = async () => {\n try {\n console.log('start running'); \n`
);

const exerciseFolders = getDirectories('./');

var topicConfig = readFileSync('topicConfig.json');

var topic = {
  ...JSON.parse(topicConfig),
};

if (topic.githubAssignmentRepo) {
  topic.githubRepo =
    'AltCampus/' + topic.githubAssignmentRepo.split('/').reverse()[0];
}
topic.slug = (
  topic['name'].split(' ').join('-') +
  '-' +
  lastCodeFinder(currentGithubRepoDir, '-')
).toLowerCase();
topic.isPublished = true;
delete topic.exercises;

var topicStr = `var topic = await Topic.create(${JSON.stringify(topic)}); \n\n`;

appendFileSync('./seed.js', topicStr);

var exercises = [];

for (var exerciseKey in exerciseFolders) {
  var exerciseName = exerciseFolders[exerciseKey];
  var exerciseConfig = readFileSync(`${exerciseName}/exerciseConfig.json`);
  var exercise = {
    ...JSON.parse(exerciseConfig),
  };
  exercise.displayName = exercise.name;
  exercise.topicId = 'topic._id';
  exercise.slug =
    exerciseName.toLowerCase() + '-' + lastCodeFinder(exerciseName);
  exercise.isPublished = true;
  exercise.displayName = exercise.name;
  delete exercise.blocks;
  var exerciseStr = `var exercise${exerciseKey} = await Exercise.create(${JSON.stringify(
    exercise
  )}); \n`;
  appendFileSync('./seed.js', exerciseStr);
  exercises.push(`exercise${exerciseKey}._id`);

  const blockFolders = getDirectories(exerciseName);

  var blocks = [];

  for (var blockKey in blockFolders) {
    var blockConfig = readFileSync(
      `${exerciseName}/${blockFolders[blockKey]}/blockConfig.json`
    );
    var block = {
      ...JSON.parse(blockConfig),
    };
    block.exerciseId = `exercise${exerciseKey}._id`;
    block.topicId = 'topic._id';
    block.slug =
      blockFolders[blockKey].toLowerCase() +
      '-' +
      lastCodeFinder(blockFolders[blockKey]);
    block.isPublished = true;
    block.displayName = block.displayName || block.name;
    block.description = readFileSync(
      `${exerciseName}/${blockFolders[blockKey]}/index.md`,
      'utf-8'
    );
    var blockStr = `var block${exerciseKey}${blockKey} = await Block.create(${JSON.stringify(
      block
    )}); \n`;
    appendFileSync('./seed.js', blockStr);
    blocks.push(`block${exerciseKey}${blockKey}._id`);
  }

  var exerciseUpdateStr = `exercise${exerciseKey}.blocks=${JSON.stringify(
    blocks
  )}; \nexercise${exerciseKey}.save(); \n\n\n`;
  appendFileSync('./seed.js', exerciseUpdateStr);

  var seedFileContent = readFileSync('./seed.js', 'utf-8');

  blocks.forEach((b, i) => {
    var stringToReplace = `"block${exerciseKey}${i}._id"`;
    const replacer = new RegExp(stringToReplace, 'g');
    seedFileContent = seedFileContent.replace(
      replacer,
      `block${exerciseKey}${i}._id`
    );
  });

  writeFileSync('./seed.js', seedFileContent);
}

var topicUpdateStr = `topic.exercises=${JSON.stringify(
  exercises
)}; \ntopic.save(); \n\n console.log('stop running');\n\n} catch(err) { \n console.log('err', err); \n} \n\n\n`;
appendFileSync('./seed.js', topicUpdateStr);

var seedFileContent = readFileSync('./seed.js', 'utf-8');
seedFileContent = seedFileContent.replace(/"topic._id"/g, `topic._id`);

exercises.forEach((e, i) => {
  var stringToReplace = `"exercise${i}._id"`;
  const replacer = new RegExp(stringToReplace, 'g');
  seedFileContent = seedFileContent.replace(replacer, `exercise${i}._id`);
});

writeFileSync('./seed.js', seedFileContent);

appendFileSync('./seed.js', `}\n\nmodule.exports = seeder;`);

renameSync('seed.js', `seed-${currentGithubRepoDir}.js`);
