/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import { DateTime } from '../node_modules/luxon/src/luxon.js';

const now = DateTime.local();
const formattedDate = now.toLocaleString(DateTime.DATETIME_MED);

export default formattedDate;