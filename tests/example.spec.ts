import { greeting, greetingFunc } from '../src/index'

describe('first example test', () => {
  it('should return first', () => {
    expect(greetingFunc(greeting)).toBe('hello Mike')
  })
})
