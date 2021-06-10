import { SlugifyPipe } from './slugify.pipe';

// The pipe is stateless, so no need for BeforeEach
const pipe = new SlugifyPipe();

fdescribe('SlugifyPipe', () => {
  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "test phrase" to "test-phrase"', () => {
    expect(pipe.transform('test phrase')).toBe('test-phrase');
  });

  it('transforms "a longer  test phrase" to "a-longer-test-phrase"', () => {
    expect(pipe.transform('a longer  test phrase')).toBe('a-longer-test-phrase');
  });

  it('transforms "A strange *semi-useful* phrase" to "a-strange-semi-useful-phrase"', () => {
    expect(pipe.transform('A strange *semi-useful* phrase')).toBe('a-strange-semi-useful-phrase');
  });

  it('trims spaces from the start and end of a phrase', () => {
    expect(pipe.transform(' an untrimmed test phrase ')).toBe('an-untrimmed-test-phrase');
  });

  it('replaces multiple hyphens with one', () => {
    expect(pipe.transform('a strange semi--useful phrasE')).toBe('a-strange-semi-useful-phrase');
  });

});
