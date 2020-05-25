describe('Content', () => {
  it('Logs text', async () => {
    console.log = jest.fn();
    await require('../index');
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});