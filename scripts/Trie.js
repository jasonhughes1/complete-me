import Node from '../scripts/Node'


export default class Trie {

  constructor() {
    this.words = [];
  }

  insert(word) {
    this.words.push(word);
    this.count();
  }

  count() {
    this.wordCount = this.words.length
  }
}
