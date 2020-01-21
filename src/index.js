import _ from 'lodash';
// import { NAME, NiJou } from './utilities';書き方いろいろ
// import * as utilities from './utilities';
// import { NAME as NAME_OF_HAM } from './utilities';
import Lion from './utilities';

"use strict";

{
  // console.log(utilities.NiJou(3));
  // console.log(utilities.NAME);
  // console.log(NAME_OF_HAM);
  console.log(Lion.say());

  let component = () => {
    const element = document.createElement('div');
    const array = ["Hello", "webpack", "!!"];
    element.innerHTML = _.join(array, ' ');
    return element;
  }

  document.body.appendChild(component());
}

