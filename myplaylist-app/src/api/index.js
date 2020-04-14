import Nedb from "nedb/browser-version/out/nedb.min";

import { examplePlaylists } from "../domain/playlist";

const promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const swapIdField = (obj) => {
  const { _id, id, ...rest } = obj;
  return id === undefined ? { ...rest, id: _id } : { ...rest, _id: id };
};

class NeDBStorage {
  constructor(db) {
    this.db = {};
    const methods = ["find", "findOne", "insert", "update", "remove"];
    methods.forEach((method) => (this.db[method] = promisify(db[method].bind(db))));
  }
  async find(filter = {}) {
    return await this.db.find(filter);
  }
  async insert(obj) {
    return await this.db.insert(obj);
  }
  async update(id, obj) {
    return await this.db.update({ _id: id }, obj, { returnUpdatedDocs: true });
  }
  async remove(id) {
    if (id === undefined) {
      return await this.db.remove({}, { multi: true });
    }
    return await this.db.remove({ _id: id });
  }
}

const playlistsInstance = new Nedb({ filename: "playlists.nedb", autoload: true });
export const playlists = new NeDBStorage(playlistsInstance);

const fill = async () => {
  await playlists.remove();
  examplePlaylists.map(swapIdField).forEach(async (playlist) => {
    await playlists.insert(playlist);
  });
  console.log(await playlists.find());
};
fill();
