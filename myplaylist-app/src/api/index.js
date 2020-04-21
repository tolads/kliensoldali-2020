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

class MyPlaylistAppStorage extends NeDBStorage {
  constructor(name) {
    const dbInstance = new Nedb({ filename: `${name}.nedb`, autoload: true });
    super(dbInstance);
  }
  async fill(list) {
    await this.remove();
    list.map(swapIdField).forEach(async (obj) => {
      await this.insert(obj);
    });
    console.log(await this.find());
  }
  async getAll() {
    const list = await this.find();
    return list.map(swapIdField);
  }
  async create(obj) {
    const response = await this.insert(obj);
    return swapIdField(response);
  }
  async update(obj) {
    const { id, ...rest } = obj;
    return super.update(id, rest);
  }
  delete(id) {
    return this.remove(id);
  }
}

export const playlists = new MyPlaylistAppStorage("playlists");
export const tracks = new MyPlaylistAppStorage("tracks");

// playlists.fill(examplePlaylists);
// api.tracks.update;
