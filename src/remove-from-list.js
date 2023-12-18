const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let current = l; // устанавливаем текущий элемент в начало списка
  let previous = null; // устанавливаем предыдущий элемент в null, так как пока что нет предыдущего элемента

  while (current !== null) {
    // пока не достигнут конец списка
    if (current.value === k) {
      // если текущий элемент равен k
      if (previous === null) {
        // если предыдущего элемента нет, то текущий элемент - начало списка
        l = current.next; // устанавливаем l в следующий элемент после текущего
      } else {
        // если есть предыдущий элемент
        previous.next = current.next; // устанавливаем ссылку предыдущего элемента на следующий элемент после текущего
      }
    } else {
      // если текущий элемент не равен k
      previous = current; // текущий элемент становится предыдущим
    }

    current = current.next; // переходим к следующему элементу
  }

  return l; // возвращаем измененный список
}

module.exports = {
  removeKFromList
};
