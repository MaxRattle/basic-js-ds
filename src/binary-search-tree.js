const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  add(data) {
    const newNode = new Node(data);

    if (!this.tree) {
      this.tree = newNode;
      return;
    }

    let current = this.tree;

    while (true) {
      if (data === current.data) {
        return;
      }

      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  has(data) {
    if (!this.tree) {
      return false;
    }

    let current = this.tree;

    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  find(data) {
    if (!this.tree) {
      return null;
    }

    let current = this.tree;

    while (current) {
      if (data === current.data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  remove(data) {
    if (!this.tree) {
      return;
    }

    let parent = null;
    let current = this.tree;

    while (current) {
      if (data === current.data) {
        if (!current.left && !current.right) {
          if (parent) {
            if (parent.left === current) {
              parent.left = null;
            } else {
              parent.right = null;
            }
          } else {
            this.tree = null;
          }
        } else if (current.left && current.right) {
          let successor = current.right;
          let successorParent = current;

          while (successor.left) {
            successorParent = successor;
            successor = successor.left;
          }

          current.data = successor.data;

          if (successorParent.left === successor) {
            successorParent.left = successor.right;
          } else {
            successorParent.right = successor.right;
          }
        } else {
          let child = current.left || current.right;

          if (parent) {
            if (parent.left === current) {
              parent.left = child;
            } else {
              parent.right = child;
            }
          } else {
            this.tree = child;
          }
        }
        return;
      }

      if (data < current.data) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  min() {
    if (!this.tree) {
      return null;
    }

    let current = this.tree;

    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  max() {
    if (!this.tree) {
      return null;
    }

    let current = this.tree;

    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
