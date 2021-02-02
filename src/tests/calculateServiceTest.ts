import calculateService from '../services/calculateService';

test('add 1 + 2 = 3', () => {
    const a = 1;
    const b = 2;
    const expected = 3;
    const act: number = calculateService.sum(a, b);
    expect(act).toBe(expected);
});
