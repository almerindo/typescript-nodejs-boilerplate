import s from '../error/teste';

it('s', () => {
  const warn = jest.spyOn(global.console, 'warn');

  expect.hasAssertions();
  s('Almerindo');
  expect(warn).toBeCalled();
});
