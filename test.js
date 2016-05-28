import test from 'tape';
import { isPalindrome } from './dist/index.js'

test('isPalindrome()', t => {
  t.notOk(isPalindrome('Ikke et palindrom'));
  t.ok(isPalindrome('yay'));
  t.ok(isPalindrome('Den laks skal ned'));
  t.ok(isPalindrome('Du, Ted, rør det ud'));
  t.ok(isPalindrome('Edi, kroner eller ej, lade mit salg med Viggo i marts ebbe ud. Skibsrederen: Var det synd om de nok skal låse døren, Erik-Olfert. Sy denne dag, Lone, som i god iver degne-pels ud af eget snit. Te dem, den livreder vil ned med et tin-stegefad. Usle penge, drev i dog i mosen. Olga, denne dystre flok i rene, røde sål-laksko. Ned mod Nysted, ravnereders biks. Du, ebbe, stram i og giv dem glas, ti medaljer eller en orkide.'));

  t.end();
});
