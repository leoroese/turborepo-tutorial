import add from './add'

describe('testing add', () => {
  it('should be 5', () => {
    expect(add(1, 4)).toBe(5)
  })
})
