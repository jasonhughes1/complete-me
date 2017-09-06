import { expect, assert } from 'chai';
import Trie from '../scripts/Trie.js';
let completeMe;

describe('Trie functionality', () => {

  beforeEach( () => {
    completeMe = new Trie;
  });


  it('should be an object', () => {
    expect(completeMe).to.be.an('object')
  });


  it('should have function to insert a new word as a string', () => {
    expect(completeMe.insert).to.be.a('function')
    completeMe.insert('word');
    expect(completeMe.words.length).to.equal(1);
    expect(completeMe.words[0]).to.equal('word');
  });
  

  it('should have function to count each word added', () => {
    expect(completeMe.count).to.be.a('function')
    completeMe.insert('Joe');
    completeMe.insert('Mac');
    completeMe.insert('Ron');
    expect(completeMe.wordCount).to.equal(3);
  });
})
