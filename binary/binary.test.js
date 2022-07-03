const binary = require('./binary');

test('binary(0) is "0"', () => {
    expect(binary(0)).toBe('0');
});
test('binary(1) is "1"', () => {
    expect(binary(1)).toBe('1');
});
test('binary(2) is "10"', () => {
    expect(binary(2)).toBe('10');
});
test('binary(3) is "11"', () => {
    expect(binary(3)).toBe('11');
});
test('binary(37) is "100101"', () => {
    expect(binary(37)).toBe('100101');
});