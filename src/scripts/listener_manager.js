export default function ListenerManager() {
    let listeners = {};
    let nextId = 1;
    // Returns an id for the listener.
    this.add = (elem, ...args) => {
      (elem.addEventListener || elem.add || elem.addListener).call(elem, ...args);
      const id = nextId++;
      listeners[id] = {
        elem: elem,
        args: args,
      };
      if (args.length < 2) {
        throw new Error('too few args');
      }
      return id;
    };
  
    //removes a specific listener using ID
    this.remove = (id) => {
      const listener = listeners[id];
      if (listener) {
        delete listener[id];
        const elem = listener.elem;
        (elem.removeEventListener || elem.removeListener).call(elem, ...listener.args);
      }
    };
  
    this.removeAll = () => { //removes each existing listeners
      const old = listeners;
      listeners = {};
      Object.keys(old).forEach((id) => {
        const listener = old[id];
        if (listener.args < 2) {
          throw new Error('too few args');
        }
        const elem = listener.elem;
        (elem.removeEventListener || elem.removeListener).call(elem, ...listener.args);
      });
    };
  }