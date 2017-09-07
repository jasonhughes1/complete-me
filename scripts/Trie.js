
import Node from '../scripts/node'
import fs from 'fs'
const text = "/usr/share/dict/words"


export default class Trie {
  constructor() {
    this.rootNode = new Node(null)
    this.count = 0;
  }


  insert(word) {
    let node = this.rootNode
    let splitArray = word.split('')

    splitArray.forEach((letter) => {

      if (node.children[letter]) {
        return node = node.children[letter]
      }
      node.children[letter] = new Node(letter);
      node = node.children[letter];
    })
    node.isWord = true
    this.count++
  }


  findNode(text) {
    let node = this.rootNode
    let splitArray = text.split('')

    splitArray.forEach((letter) => {
      if (node.children[letter]) {
        return node = node.children[letter]
      }
    })

    return node
  }


  count() {
    return this.count
  }
}
