class SimplePrint {

    constructor({ name = '_blank', specs = ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'], replace = true, styles = [] } = {}) {
        this.name = name
        this.specs = specs
        this.replace = replace
        this.styles = styles
    }

    set options({ name = this.name, specs = this.specs, replace = this.replace, styles = this.styles } = {}) {
        this.name = name
        this.specs = specs
        this.replace = replace
        this.styles = styles
    }

    render(element, cb = () => true) {
        if (!element)
            return window.alert('Element to print not found!')

        this.specs = !!this.specs.length ? this.specs.join(',') : ''
        const win = window.open('', this.name, this.specs, this.replace)

        win.document.write(`<html><head><title>${document.title}</title></head><body>${element.innerHTML}</body></html>`)

        this.styles.forEach(style => {
            const link = win.document.createElement('link')
            link.setAttribute('rel', 'stylesheet')
            link.setAttribute('type', 'text/css')
            link.setAttribute('href', style)
            win.document.getElementsByTagName('head')[0].appendChild(link)
        })

        setTimeout(() => {
            win.document.close()
            win.focus()
            win.print()
            win.close()
            cb()
        }, 1000)
    }
}

global.SimplePrint = SimplePrint

module.exports = SimplePrint