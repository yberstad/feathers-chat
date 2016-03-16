'use strict';

const assert = require('assert');
const restrictToSender = require('../../../../src/services/message/hooks/restrict-to-sender.js');

describe('message restrictToSender hook', () => {
  it('hook can be used', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };
    
    restrictToSender()(mockHook);
    
    assert.ok(mockHook.restrictToSender);
  });
});
