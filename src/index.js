class SimplePrint {

    static set options(options) {
        this.opts = options
    }

    static render(element, cb = () => true) {
        if (!element)
            return window.alert('Element to print not found!')

        let {
            name = '_blank',
            specs = ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
            replace = true,
            styles = []
        } = this.opts

        specs = !!specs.length ? specs.join(',') : ''
        const win = window.open('', name, specs, replace)

        win.document.write(`
            <html>
            <head>
                <title>${document.title}</title>
            </head>
            <body>
                ${element.innerHTML}
            </body>
            </html>
        `)

        for (const style of styles) {
            const link = win.document.createElement('link')
            link.setAttribute('rel', 'stylesheet')
            link.setAttribute('type', 'text/css')
            link.setAttribute('href', style)
            win.document.getElementsByTagName('head')[0].appendChild(link)
        }

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

export default SimplePrint