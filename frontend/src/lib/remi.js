export const toElement = (type, { children, ...props }) => {
  // Create element
  let element
  if (type === 'fragment')
    element = document.createDocumentFragment()
  else
    element = document.createElement(type)

  // Add attributes
  Object.keys(props).forEach(key => element.setAttribute(key, props[key]))

  // Children
  if (typeof children === 'string')
    element.appendChild(document.createTextNode(children))
  else if (children instanceof Array)
    children.forEach(elm => element.appendChild(elm))
  else if (children)
    element.appendChild(children)

  return element
}

export const renderElement = (root, element) => {
  if (element)
    root.appendChild(element)
}

export const _xjs = toElement

export default {
  toElement,
  renderElement,
  _xjs
}
