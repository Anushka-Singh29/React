function customRender(reactElement, mainContainer) {

    /*
    const domElememt = document.createElement
        (reactElement.type)
    domElememt.innerHTML = reactElement.Children
    domElememt.setAttribute('href', reactElement.props.href)
    domElememt.setAttribute('target', reactElement.props.target)
    container.appendChild(domElememt)
    */
   
}
const { Children } = require("react")

const reactElement = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.getElementById('#root')

customRender(reactElement, mainContainer)

