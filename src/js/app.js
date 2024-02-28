import json from './parser';
import read from './reader';

class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}

export class GameSavingLoader {
  static load() {
    return read()
      .then((res) => json(res))
      .then((result) => JSON.parse(result))
      .then(({id, created, userInfo}) => new GameSaving(id, created, userInfo));
  }
}

(async () => {
  const data = await GameSavingLoader.load();
  return console.log(data);
})();

/*
export default class GameSavingLoader {
  constructor(saving) {
    this.saving = saving;
  }

  static load() {
    (async () => {
      try {
        const data = await read();
        const saving = await json(data);
        const result = new GameSavingLoader(saving);
        return console.log(result);
      } catch {
        (error) => {
          console.log(error);
        };
      }
    })();
  }
}

GameSavingLoader.load();
*/