"use strict";

let envName = process.argv[2] ? process.argv[2] : 'development';

envName = process.env.NODE_ENV || 'development';

let config = {
	development:{
		db:"mongodb://nightlifecoordinationapp:e4578GCJA4CTQF9446D01hK3X320uf2x18O934wP7289WX5E0dVKQ1r334s8NF5Re8Z3ZW821n1Ua520222Yc7n137aTd72173WO@ds145868.mlab.com:45868/nightlifecoordinationapp",
		port:4444
	},
	production:{
		db:"mongodb://nightlifecoordinationapp:e4578GCJA4CTQF9446D01hK3X320uf2x18O934wP7289WX5E0dVKQ1r334s8NF5Re8Z3ZW821n1Ua520222Yc7n137aTd72173WO@ds145868.mlab.com:45868/nightlifecoordinationapp",
		port:process.env.PORT
	}
}

module.exports = config[envName];
