const MonoJS = {
    install(Vue, {publicKey}) {    
        Vue.mixin({
            mounted() {
                const monoJS = 'https://connect.withmono.com/connect.js'
                const script = document.createElement('script')
                script.src = monoJS
                // Only run if mono script has not been added to the body
                if (!document.querySelector(`[src="${monoJS}"]`)) {
                    document.body.appendChild(script)
                }
            },
          
            methods: {
                $launchMono(options) {
                    const connect = new Connect({key: publicKey, ...options});
                    connect.setup();
                    connect.open()
                },
            }
        })
    }
}

export default MonoJS
