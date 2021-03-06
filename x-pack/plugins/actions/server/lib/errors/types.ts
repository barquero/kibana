/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { KibanaResponseFactory, IKibanaResponse } from '../../../../../../src/core/server';

export interface ErrorThatHandlesItsOwnResponse extends Error {
  sendResponse(res: KibanaResponseFactory): IKibanaResponse;
}
