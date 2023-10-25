'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { debug, CLUSTER } = require('zigbee-clusters');

class MeterRelay30A extends ZigBeeDevice {

  /**
   * onInit is called when the device is initialized.
   */
  async onNodeInit({zclNode}) {
    this.log('MeterRelay30A has been initialized');
    this.printNode();

    this.registerCapability('onoff', CLUSTER.ON_OFF);
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('MeterRelay30A has been deleted');
  }

}

module.exports = MeterRelay30A;
