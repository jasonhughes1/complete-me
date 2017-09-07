
import { expect } from 'chai';
import Trie from '../scripts/Trie'


describe('Class: Trie', () => {
  it('should be an instance of trie', function() {
    let trie = new Trie();

    expect(trie).to.be.instanceof(Trie);
  });

  it('should have a root node with a value of null', () => {
    let trie = new Trie();

    expect(trie.rootNode.data).to.eq(null)
  })

  it('should have a counter that defaults to zero', () => {
    let trie = new Trie();

    expect(trie.count).to.be.eq(0)
  })

  describe('Method: insert()', () => {

    it('should have a method called insert that marks a word as complete and counts the entries', () => {
      let trie = new Trie();

      trie.insert('jason')

      expect(trie.findNode('jason').isWord).to.eq(true)
      expect(trie.count).to.eq(1)
    })

    it('should only insert new nodes where two words differentiate from one another', () => {
      let trie = new Trie();

      trie.insert('art')
      trie.insert('arts')
      trie.insert('arty')

      expect(trie.rootNode.children.a.data).to.eq('a')
      expect(trie.rootNode.children.a.children.r.data).to.eq('r')
      expect(trie.rootNode.children.a.children.r.children.t.data).to.eq('t')
      expect(trie.rootNode.children.a.children.r.children.t.children.s.data).to.eq('s')
      expect(trie.rootNode.children.a.children.r.children.t.children.y.data).to.eq('y')
    })

    it('should mark nodes as word endings even when words overlap one another', () => {
      let trie = new Trie();

      trie.insert('car')
      trie.insert('carts')

      expect(trie.findNode('ca').isWord).to.eq(false)
      expect(trie.findNode('car').isWord).to.eq(true)
      expect(trie.findNode('carts').isWord).to.eq(true)
    })
  })

  describe('Method: findNode()', () => {

    it('should return the last node of a string of text', () => {
      let trie = new Trie();

      trie.insert('phone')
      trie.insert('arts')

      expect(trie.findNode('p').data).to.eq('p')
      expect(trie.findNode('ph').data).to.eq('h')
      expect(trie.findNode('pho').data).to.eq('o')
      expect(trie.findNode('ar').data).to.eq('r')
    })

    it('should return the last node of a string as a structured object', () => {
      let trie = new Trie();

      trie.insert('phone')

      expect(trie.findNode('phon')).to.deep.eq({"children": {"e": {"children": {}, "data": "e", "isWord": true, "timesSelected": 0}}, "data": "n", "isWord": false, "timesSelected": 0})
    })
  })


  describe('Method: count()', () => {

    it('should have a function that returns/counts the number of words in the trie', () => {
      let trie = new Trie();

      trie.insert('pizza')
      trie.insert('pizzas')
      trie.insert('piz')
      trie.insert('pickle')
      trie.insert('pizzeria')
      trie.insert('pitch')

      expect(trie.count).to.eq(6)
    })
  })
})
