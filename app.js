'use strict';

const Homey = require('homey');

class SmartRelay extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Develco Smart Relay has been initialized');
  }

}

module.exports = SmartRelay;
