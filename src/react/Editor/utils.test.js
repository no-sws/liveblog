import { isContentEmpty } from './utils';

test('Default editor content should be empty', () => {
  const content = '<p></p>';
  const isEmpty = isContentEmpty(content);
  expect(isEmpty).toBe(true);
});

test('Content only containing space entities should be empty', () => {
  const content = '<p>&nbsp; </p>'; // Added extra space on purpose
  const isEmpty = isContentEmpty(content);
  expect(isEmpty).toBe(true);
});

test('Content containing image should not be empty', () => {
  const content = '<p><img src="abc.png"></p>';
  const isEmpty = isContentEmpty(content);
  expect(isEmpty).toBe(false);
});

test('Content containing iframe should not be empty', () => {
  const content = '<p><iframe src="//eg.com/abc.html"></iframe></p>';
  const isEmpty = isContentEmpty(content);
  expect(isEmpty).toBe(false);
});
