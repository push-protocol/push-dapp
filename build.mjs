import chalk from 'chalk';
import { parse } from 'envfile';
import fs from 'fs';
import readline from 'readline';
import { getPreviewBasePath } from './basePath.js';

const envPresets = {
  alpha: {
    VITE_APP_DEPLOY_ENV: 'ALPHA',
    VITE_APP_PUBLIC_URL: 'https://alpha.push.org/',
  },
  w2w: {
    VITE_APP_DEPLOY_ENV: 'W2W',
    VITE_APP_PUBLIC_URL: 'https://w2w.push.org/',
  },
  dev: {
    VITE_APP_DEPLOY_ENV: 'DEV',
    VITE_APP_PUBLIC_URL: 'https://dev.push.org/',
  },
  staging: {
    VITE_APP_DEPLOY_ENV: 'STAGING',
    VITE_APP_PUBLIC_URL: 'https://staging.push.org/',
  },
  prod: {
    VITE_APP_DEPLOY_ENV: 'PROD',
    VITE_APP_PUBLIC_URL: 'https://app.push.org/',
  },
  preview: {
    VITE_APP_DEPLOY_ENV: 'PREVIEW',
    VITE_APP_PUBLIC_URL: `https://push-protocol.github.io${getPreviewBasePath()}`,
  },
  // alpha: {
  //   VITE_APP_DEPLOY_ENV: 'ALPHA',
  //   VITE_APP_PUBLIC_URL: 'https://alpha.epns.io/',
  // },
  // w2w: {
  //   VITE_APP_DEPLOY_ENV: 'W2W',
  //   VITE_APP_PUBLIC_URL: 'https://w2w.epns.io/',
  // },
  // dev: {
  //   VITE_APP_DEPLOY_ENV: 'DEV',
  //   VITE_APP_PUBLIC_URL: 'https://dev.epns.io/',
  // },
  // staging: {
  //   VITE_APP_DEPLOY_ENV: 'STAGING',
  //   VITE_APP_PUBLIC_URL: 'https://staging.epns.io/',
  // },
  // prod: {
  //   VITE_APP_DEPLOY_ENV: 'PROD',
  //   VITE_APP_PUBLIC_URL: 'https://app.epns.io/',
  // },
};

// Prep for deployment starts everything
const prepForDeployment = async (appEnv) => {
  console.log(chalk.green('Starting Custom Deployment Prebuild...'));

  // Test if app dev is passed, else fail
  let indexAppEnv = appEnv;
  if (
    appEnv !== 'dev' &&
    appEnv !== 'staging' &&
    appEnv !== 'prod' &&
    appEnv !== 'w2w' &&
    appEnv !== 'alpha' &&
    appEnv !== 'preview'
  ) {
    console.log(
      chalk.red(
        'App Environment not set correctly... can only be dev, staging, prod, alpha or w2w. Please check and retry'
      )
    );
    process.exit(1);
  }

  if (appEnv === 'w2w_push') {
    indexAppEnv = 'w2w';
  }

  if (appEnv === 'alpha_push') {
    indexAppEnv = 'alpha';
  }

  if (appEnv === 'dev_push') {
    indexAppEnv = 'dev';
  }

  if (appEnv === 'staging_push') {
    indexAppEnv = 'staging';
  }

  if (appEnv === 'prod_push') {
    indexAppEnv = 'prod';
  }

  if (appEnv === 'preview_push') {
    indexAppEnv = 'preview';
  }

  await changeIndexHTML(indexAppEnv);
  await changeENV(appEnv);
};

const changeIndexHTML = async (appEnv) => {
  // Load index.html files
  const indexpath = `./index.html`;
  const indexreplacepath = `./public/index-${appEnv}.html`;

  const indexhtmlcontent = fs.readFileSync(indexreplacepath, 'utf8');
  fs.writeFileSync(indexpath, indexhtmlcontent, { flag: 'w' });

  // Load robot.txt files
  const robotspath = `./public/robots.txt`;
  const robotsreplacepath = `./public/robots-${appEnv}.txt`;

  const robotstxtcontent = fs.readFileSync(robotsreplacepath, 'utf8');
  fs.writeFileSync(robotspath, robotstxtcontent, { flag: 'w' });

  // Load sitemap.txt files
  const sitemappath = `./public/sitemap.txt`;
  const sitemapreplacepath = `./public/sitemap-${appEnv}.txt`;

  const sitemaptxtcontent = fs.readFileSync(sitemapreplacepath, 'utf8');
  fs.writeFileSync(sitemappath, sitemaptxtcontent, { flag: 'w' });
};

const changeENV = async (appEnv) => {
  console.log(chalk.green.dim('  -- Generating custom .env file...'));

  // set up file modified flag
  let fileModified = false;

  // Load environment files
  const envpath = `./.env`;
  const envsamplepath = `./.env.sample`;

  if (!fs.existsSync(envpath)) {
    console.log(chalk.red('  -- Checking for ENV File... Not Found, creating'));
    fs.writeFileSync(envpath, fs.readFileSync(envsamplepath, 'utf8'));
  } else {
    console.log(chalk.green.dim('  -- Checking for ENV File... Found'));
  }

  // Now Load the environment
  const envData = fs.readFileSync(envpath, 'utf8');
  const envObject = parse(envData);

  const envSampleData = fs.readFileSync(envsamplepath, 'utf8');
  const envSampleObject = parse(envSampleData);

  const readIntSampleENV = readline.createInterface({
    input: fs.createReadStream(envsamplepath),
    output: false,
  });
  let realENVContents = '';

  console.log(chalk.green.dim('  -- Verifying and building ENV File...'));

  // load custom env preset
  const customENVPreset = envPresets[appEnv];
  let envParamOverridden = false;

  // check to see if env param should be overwritten and / or are empty
  for await (const line of readIntSampleENV) {
    let moddedLine = line;

    // Check if line is comment or environment variable
    if (moddedLine.startsWith('#') || moddedLine.startsWith('\n') || moddedLine.trim().length == 0) {
      // do nothing, just include it in the line
      // console.log("----");
    } else {
      // This is an environtment variable, first segregate the comment if any and the variable info
      const delimiter = '#';

      const index = moddedLine.indexOf('#');
      const splits =
        index == -1
          ? [moddedLine.slice(0, index), '']
          : [moddedLine.slice(0, index), ' ' + delimiter + moddedLine.slice(index + 1)];

      const envVar = splits[0].split('=')[0]; //  Get environment variable by splitting the sample and then taking first seperation
      const comment = splits[1];

      // Check if envVar exists in real env, if not ask for val
      // console.log(envObject[`${envVar}`]);

      // check if envVar is in preset, if so override those values
      envParamOverridden = false;
      for (const [key, value] of Object.entries(customENVPreset)) {
        if (!envParamOverridden && key === envVar) {
          moddedLine = `${envVar}=${value}${comment}`;
          console.log(chalk.dim(`   -- ENV MODIFIED: ${moddedLine}`));
          fileModified = true;
          envParamOverridden = true;
        }
      }

      // Check and replace envVar value if it doesn't match
      if (!envParamOverridden && (!envObject[`${envVar}`] || envObject[`${envVar}`].trim() == '')) {
        // env key doesn't exist, ask for input
        console.log(chalk.bgBlack.white(`  Enter ENV Variable Value --> ${envVar}`));

        var value = '';

        while (value.trim().length == 0) {
          const rl = readline.createInterface({
            input: process.stdin,
            output: null,
          });
          value = await doSyncPrompt(rl, `${envSampleObject[envVar]} >`);

          if (value.trim().length == 0) {
            console.log(chalk.bgRed.black("  Incorrect Entry, Field can't be empty"));
          }
        }

        console.log(chalk.bgBlack.white(`  [Saved] ${envVar}=${value}`));
        moddedLine = `${envVar}=${value}${comment}`;

        fileModified = true;
      } else if (!envParamOverridden) {
        // Value exists so just replicate
        moddedLine = `${envVar}=${envObject[envVar]}${comment}`;
      }
    }

    // if (envParamOverridden) {
    //   console.log(chalk.blue(moddedLine));
    // }

    // finally append the line
    realENVContents = `${realENVContents}\n${moddedLine}`;
  }

  if (fileModified) {
    console.log(chalk.green.dim('  -- Modified ENV file generated, saving'));
    fs.writeFileSync(envpath, realENVContents, { flag: 'w' });
    console.log(chalk.green.bold(' -- -- -- --  -- -- -- --  -- -- -- --'));
    console.log(chalk.green.bold(' CONTENT OF .ENV FILE CHANGED '));
    console.log(chalk.green.bold(' DONT FORGET TO CHANGE .ENV FILE BACK '));
    console.log(chalk.green.bold(' -- -- -- --  -- -- -- --  -- -- -- --'));
    console.log(chalk.green.dim('👍 ENV modified for build deployment'));
  } else {
    console.log(chalk.green.dim('  -- ENV file verified!'));
  }
};

// Leverages Node.js' awesome async/await functionality
async function doSyncPrompt(rl, message) {
  var promptInput = await readLineAsync(rl, message);
  rl.close();

  return promptInput;
}

function readLineAsync(rl, message) {
  return new Promise((resolve, reject) => {
    rl.question(message, (answer) => {
      resolve(answer.trim());
    });
  });
}

var args = process.argv.slice(2);
await prepForDeployment(args[0]);
