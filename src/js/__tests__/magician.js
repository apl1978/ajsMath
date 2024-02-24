import Magician from '../magician';

test('decrease attack with range = 2', () => {

  const mag = new Magician("Mag", "Magician");
  mag.range = 2;
  expect(mag.attack).toBe(90);
});

test('decrease attack with range = 2 and stoned', () => {

  const mag = new Magician("Mag", "Magician");
  mag.range = 2;
  mag.stoned = true;
  expect(mag.attack).toBe(86);
});
