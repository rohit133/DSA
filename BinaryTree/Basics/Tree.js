class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  /**
   *
   * @param { Node } data
   * @description insert the node into the tree. 
   */
  insert(data) {
    let newNode = new Node(data);
    // If the root is null make the new node the root
    if (this.root == null) this.root = newNode;
    // Else just add insterNode in a balance mannger.
    else this.insertNode(this.root, newNode);
  }

  /**
   *
   * @param { Node } node
   * @param { Node } newNode
   * @description insert the node the as the childern of the root node in balanced manner.
   */
  insertNode(node, newNode) {
    // If the new node val is smaller then the node val then it should be on the left side of the tree.
    if (newNode.val < node.val) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }

    // If the new node val is greater then the node val then it should be on the right side of the tree.
    else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  /**
   *
   * @param { Node } data
   * @description Remove the node form the tree in a balanced manner.
   */
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  /**
   *
   * @param { Node } node
   * @param { Node } data
   * @returns { Node } node
   */
  removeNode(node, data) {
    if (node == null) return null;
    // checking the left nodes of the Root
    else if (data < node.val) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    // checking the right nodes of the Root
    else if (data > node.val) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // Removing the leaf node.
      if (node.left === null && node.right == null) {
        node = null;
        return node;
      }

      // Removing the left leaf node.
      if (node.left == null) {
        node = node.right;
        return node;
      }

      // Removing the right leaf node.
      else if (node.right == null) {
        node = node.left;
        return node;
      }

      // TODO : Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      let aux = this.findMinNode(node.right);
      node.val = aux.val;

      node.right = this.removeNode(node.right, aux.val);
      return node;
    }
  }

  // Helper function

  /**
   *
   * @param { Node } node
   * @descriptions Performs inorder traversal of a tree { left -> Node -> right }
   */
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.val);
      this.inorder(node.right);
    }
  }

  /**
   *
   * @param { Node } node
   * @descriptions Performs preorder traversal of a tree { root -> left -> right }
   */
  preorder(node) {
    if (node !== null) {
      console.log(node.val);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  /**
   *
   * @param { Node } node
   * @descriptions Performs postorder traversal of a tree { left -> right -> root }
   */
  postorder(node) {
    if (node !== null) {
      this.preorder(node.left);
      this.preorder(node.right);
      console.log(node.val);
    }
  }

  /**
   *
   * @param { Node } node
   * @returns { Node }
   * @description return the min node in the tree
   */
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  /**
   *
   * @returns { Node } retruns the root of the tree
   */
  getRootNode() {
    return this.root;
  }

  /**
   *
   * @param { Node } node
   * @param { Number } data
   */
  search(node, data) {
    // If the tree is empty return null;
    if (node == null) return null;
    // Searching the left sub tree.
    else if (data < node.val) {
      return this.search(node.left, data);
    }
    // Searching the right sub tree.
    else if (data > node.val) {
      return this.search(node.right, data);
    }

    // Return the node.
    else return node;
  }


  /**
   * 
   * @param { Node } node 
   * @returns { Number } Height of the Tree.
   */
    height(node){
      if(node == null) return -1;
      let lheight = this.height(node.left);
      let rheight = this.height(node.right);
      return Math.max(lheight, rheight)
    }
}

let newTree = new BTS();

newTree.insert(15);
newTree.insert(12);
newTree.insert(5);
newTree.insert(25);
newTree.insert(14);
newTree.insert(35);
newTree.insert(2);
newTree.insert(45);
newTree.insert(10);
newTree.insert(55);
newTree.insert(65);
newTree.insert(75);

let root = newTree.getRootNode();
newTree.inorder(root);
