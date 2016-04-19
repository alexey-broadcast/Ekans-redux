import { expect } from 'chai';
import { incrementCounter, decrementCounter, COUNTER_MIN, COUNTER_MAX } from '../../src/redux/reducer';

describe('reducer', () => {
  it('increment', () => {
    expect(incrementCounter(0)).to.equal(1);
    expect(incrementCounter(1)).to.equal(2);
    expect(incrementCounter(COUNTER_MAX - 1)).to.equal(COUNTER_MAX);
    expect(incrementCounter(COUNTER_MAX)).to.equal(COUNTER_MAX);
  });

  it('decrement', () => {
    expect(decrementCounter(5)).to.equal(4);
    expect(decrementCounter(8)).to.equal(7);
    expect(decrementCounter(COUNTER_MIN + 1)).to.equal(COUNTER_MIN);
    expect(decrementCounter(COUNTER_MIN)).to.equal(COUNTER_MIN);
  })
})
