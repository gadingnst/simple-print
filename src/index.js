class SimplePrint {

    constructor(options = {}) {
        this.name = options.name || '_blank'
        this.specs = options.specs || ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes']
        this.replace = !!options.replace || true
        this.styles = options.styles || []
    }

    set options(options = {}) {
        this.name = options.name || this.name
        this.specs = options.specs || this.specs
        this.replace = typeof options.replace  === 'undefined' || options.replace === null ? this.replace : !!options.replace
        this.styles = options.styles || this.styles
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