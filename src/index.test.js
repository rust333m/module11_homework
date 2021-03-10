import { getPercents } from './index.js'

describe('test for getPercents function', () => {
  it('Testcase if both numbers are positive', () => {
    const result = getPercents(30, 200)
    expect(result).toBe(60);
  }),
    it('Testcase if Number is less or equal to zero and Percent is positive', () => {
      const result = getPercents(30, -10)
      expect(result).toBe('Number must be greater than zero');
    }),
    it('Testcase if Percent is negative and Number is positive', () => {
      const result = getPercents(-30, 200)
      expect(result).toBe('Percent must be greater or equat to zero');
    }),
    it('Testcase if Percent and Number are both negative', () => {
      const result = getPercents(-30, -200)
      expect(result).toBe('You\'ve entered incorrect values');
    })
})