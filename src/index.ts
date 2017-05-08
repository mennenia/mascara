import eventHandler from "./decorators"

class Blah {
    @eventHandler("hello")
    helloworld() {
        console.log("hello")
    }
}

export {
    eventHandler,
}
