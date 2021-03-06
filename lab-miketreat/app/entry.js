'use strict';

require('angular').module('ngAdventure', []);


// services
require('./service/map-service.js');
require('./service/history-service.js');
require('./service/player-service.js');


// components
require('./component/game-pad/game-pad.js');
require('./component/history/history.js');
require('./component/player-info/player-info.js');
