
{/* <ul id="list">
    <li class="item">item1</li>
    <li class="item">item2</li>
    <li class="item">item3</li>
  </ul>  */}


function Element(tagName, props, children) {
  this.tagName = tagName
  this.props = props
  this.children = children
}

Element.prototype.render = function () {
  let el = document.createElement(this.tagName), // 创建节点
      props = this.props // 节点属性
  for (let propName in props) {
    el.setAttribute(propName, props[propName])
  }

  this.children.forEach((child) => {
    let childEl = (typeof child === 'object') ? new Element(child.tagName, child.props, child.children).render() : document.createTextNode(child);
    el.appendChild(childEl)
  });
  return el
}


// diff 算法， 对比两个dom树
function diff (oldTree, newTree) {
  let index = 0 // 节点的标志
  let patches = {} // 记录每个节点差异的地方
  dfsWalk(oldTree, newTree, index, patches) // 找不同
  return patches
}
// 计算差别的
function dfsWalk(oldNode, newNode, index, patches) {
// oldNode 和 newNode的差异 把不同的地方记录下来
  var currentPatch = []

  if(newNode !== null && oldNode.tagName != newNode.tagName && oldNode.key != newNode.key) {
    currentPatch.push({type: 'div', props: {id: 'container'}})
  }
  patches[index] = currentPatch
  diffChildren(oldNode.children, newNode.children, index, patches)
}
// 计算child差别的
function diffChildren(olChildren, newChildren, index, patches) {
  let leftNode = null
  let currentNodeIndex = index
  olChildren.forEach((child, i) => {
    var newChild = newChildren[i]
    currentNodeIndex = (leftNode && leftNode.count) //计算节点的标记
    ? currentNodeIndex + leftNode.count + 1 : currentNodeIndex + 1

    dfsWalk(child, newChild, currentNodeIndex, patches)// 遍历子节点， 找子节点的不同
    leftNode = child
  })
}

// 将差异应用到DOM树上
function patch(node, patches) {
  var walker = {index: 0} // 记录当前节点的标志
  dfsWalk(node, walker, patches)
}

function dfsWalk(node, walker, patches) {
  var currentPatches = patches[walker.index]

  var len = node.childNodes ? node.childNodes.length : 0 
  for (let i = 0; i < len; i++ ){ //深度遍历子节点
    var child = node.childNodes[i]
    walker.index++
    dfsWalk(child, walker, patches)
  }
  if (currentPatch) {
    applyPatches(node, currentPatches) // 对当前节点进行DOM操作
  }
}

function applyPatches(node, currentPatches) {
  currentPatches.forEach((currentPatch) => {
    switch (currentPatch.type) {
      case REPLACE:
        var newNode = (typeof currentPatch.node === 'string')
          ? document.createTextNode(currentPatch.node)
          : currentPatch.node.render()
        node.parentNode.replaceChild(newNode, node)
        break;
      case REORDER:
        reorderChildren(node, currentPatch.moves)
        break;
      case PROPS:
        setProps(node, currentPatch.moves)
        break;
      case TEXT:
        if (node.textContent) {
          node.textContent = currentPatch.content
        } else {
          node.nodeValue = currentPatch.content
        }
        break;
      default:
        throw new Error('')
    }
  })
}
