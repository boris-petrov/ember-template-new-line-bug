import Helper from '@ember/component/helper';

export default class StringReplace extends Helper {
  compute([str, searchValue, replaceValue]) {
    console.log(str, searchValue, replaceValue, '\n', '\\n');
    return str?.replaceAll(searchValue === '\\n' ? '\n' : searchValue, replaceValue);
  }
}
