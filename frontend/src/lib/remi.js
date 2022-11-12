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
    children.forEach(elm => {
      if (typeof elm === 'string')
        element.appendChild(document.createTextNode(elm))
      else
        element.appendChild(elm)
    })
  else if (children)
    element.appendChild(children)

  return element
}

export const renderElement = async (root, component, mode = 'sync') => {
  if (mode === 'sync') root.replaceChildren(component())
  if (mode === 'async') root.replaceChildren(await component())
}

export const _xjs = toElement

export default {
  toElement,
  renderElement,
  _xjs
}
