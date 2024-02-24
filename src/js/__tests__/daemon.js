import Daemon from '../daemon';

test('decrease attack with range = 2', () => {

  const mag = new Daemon("Daemon", "Daemon");
  mag.range = 2;
  expect(mag.attack).toBe(90);
});

test('decrease attack with range = 2 and stoned', () => {

  const mag = new Daemon("Daemon", "Daemon");
  mag.range = 2;
  mag.stoned = true;
  expect(mag.attack).toBe(86);
});
