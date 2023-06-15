'use strict';

/**
 * phdata service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::phdata.phdata');
