const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

// it really is this much trouble
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter some text: ', function (response) {
  console.log(
    chalk.red(
      figlet.textSync(response, {
        font: 'Epic',
        verticalLayout: 'default',
        horizontalLayout: 'default'
      })
    )
  );

  // change the font
  // output

  rl.close();
});

// _________   _        _______           _______    _        _______  ______   _______    _________ _______
// \__   __/  ( \      (  ___  )|\     /|(  ____ \  ( (    /|(  ___  )(  __  \ (  ____ \   \__    _/(  ____ \
//    ) (     | (      | (   ) || )   ( || (    \/  |  \  ( || (   ) || (  \  )| (    \/      )  (  | (    \/
//    | |     | |      | |   | || |   | || (__      |   \ | || |   | || |   ) || (__          |  |  | (_____
//    | |     | |      | |   | |( (   ) )|  __)     | (\ \) || |   | || |   | ||  __)         |  |  (_____  )
//    | |     | |      | |   | | \ \_/ / | (        | | \   || |   | || |   ) || (            |  |        ) |
// ___) (___  | (____/\| (___) |  \   /  | (____/\  | )  \  || (___) || (__/  )| (____/\ _ |\_)  )  /\____) |
// \_______/  (_______/(_______)   \_/   (_______/  |/    )_)(_______)(______/ (_______/(_)(____/   \_______)
