import json from './parser';
import read from './reader';

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