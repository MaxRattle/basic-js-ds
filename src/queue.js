const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = null; // инициализация пустого списка
  }

  getUnderlyingList() {
    return this.list; // возвращает список
  }

  enqueue(value) {
    const newNode = { value, next: null }; // создание нового узла с заданным значением и пустым указателем на следующий узел

    if (!this.list) {
      // если список пуст
      this.list = newNode; // новый узел становится первым элементом списка
      return;
    }

    let current = this.list; // начинаем обход списка с первого элемента
    while (current.next) {
      // пока текущий элемент имеет следующий элемент
      current = current.next; // переходим к следующему элементу
    }
    current.next = newNode; // присоединяем новый узел к концу списка
  }

  dequeue() {
    if (!this.list) {
      //если список пуст
      return null; // возвращаем null
    }

    const value = this.list.value; // запоминаем значение первого элемента списка
    this.list = this.list.next; // удаляем первый элемент, переназначая указатель на следующий элемент
    return value; // возвращаем значение удаленного элемента
  }
}

module.exports = {
  Queue
};
