class Leaf {
    constructor(value) {
        this.value = value;
    }
}

class Node extends Leaf {
    constructor(value) {
        super(value)
        this.esquerda = null;
        this.direita = null;
    }
}

class Root {
    constructor() {
        this.root = null
    }

    inserirNode(novoValue) {

        var novoNode = new Leaf(novoValue)

        if (this.root == null) {
            this.root = novoNode
        } else {
            this.inserirLeafNode(this.root, novoNode)
        }


    }


    inserirLeafNode(antigoNode, novoNode) {
        if (novoNode.value < antigoNode.value) {
            if (antigoNode.left == null) {
                antigoNode.left = novoNode;
            } else {
                this.inserirLeafNode(antigoNode.left, novoNode)
            }
        } else {
            if (antigoNode.right == null) {
                antigoNode.right = novoNode;
            } else {
                this.inserirLeafNode(antigoNode.right, novoNode)
            }
        }
    }

    checkNodeRaiz(node) {
        console.log(node.value + " = Nó raiz")
        this.checkNodeFolha(node)
    }

    checkNodeFolha(node) {

        if (node.left == null && node.right == null) {
            console.log(node.value + " = Nó folha")
        } else {
            if (node.left != null) {
                console.log(node.value + " = Nó pai esquerda")
                this.checkNodeFolha(node.left)
            }
            if (node.right != null) {
                console.log(node.value + " = Nó pai direita")
                this.checkNodeFolha(node.right)
            }

        }

    }


}

var a = new Root()

valores = [12, 27, 16, 50, 23, 78, 200, 10, 40, 60, 18, 2]

valores.forEach(val => a.inserirNode(val))
console.log(a.root)
console.log("\n\n\n")
console.log("K=A=I=R=O========== ARVORE ==========O=R=I=A=K\n")
a.checkNodeRaiz(a.root)
console.log("\nK=A=I=R=O========== TREE ==========O=R=I=A=K")