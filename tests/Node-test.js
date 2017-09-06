import { expect } from 'chai';
import Node from '../scripts/Node'

describe('Class: Node', () => {
  it('should have data as a default', function() {
    let node = new Node(0);

    expect(node.data).to.eq(0);
  });

  it('should have a children object', function() {
    let node = new Node(0);

    expect(node.children).to.deep.eq({});
  });

  it('should default to not being a word', () => {
    let node = new Node(0);

    expect(node.isWord).to.eq(false);
  })

  it('should default to having been selected zero times', () => {
    let node = new Node(0);

    expect(node.timesSelected).to.eq(0);
  })
})
