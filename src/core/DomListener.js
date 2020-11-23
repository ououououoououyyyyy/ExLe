import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No root provided for DomListener')
    }
    this.$root = $root
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = this._getMethodName(listener);
      if (!this[method]) {
        const name = this.name || ``;
        throw new Error(
            `Method ${method} is not implemented in ${name} Component`
        )
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = this._getMethodName(listener);
      this.$root.off(listener, this[method])
    })
  }

  _getMethodName(eventName) {
    return 'on' + capitalize(eventName)
  }
}
