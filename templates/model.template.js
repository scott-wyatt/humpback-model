/**
* @description 
* Global <%= Modelname %>. Model
* <%= whatIsThis %>
**/
angular.module('models.<%= modelname %>', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($sailsSocket, <%= Modelname %>, <%= Modelname %>Service){
	
	console.log("listening to <%= modelname %> changes");
    $sailsSocket.subscribe('<%= modelname %>', function(envelope){
        //console.log(envelope);
        <%= Modelname %>Service.handler[envelope.verb](envelope)
    });

})

/**
* @description 
* The <%= Modelname %> factory
* 
**/
.factory('<%= Modelname %>', function (DS) {
	return DS.defineResource({
		name: '<%= modelname %>',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, <%= modelname %>) {
            console.log(id,"<%= Modelname %> Expired");
        },
        storageMode: 'localStorage',
		idAttribute: 'id',
		endpoint: '/<%= modelname %>',
		baseUrl: '/api',
        
        /**
        * @description 
        * Model's Life Cycle Callbacks
        * http://www.js-data.io/v1.5.8/docs/dsdefaults
        **/
        beforeCreate: function (resource, data, cb) {
            cb(null, data);
        },
        afterCreate: function (resource, data, cb) {
            cb(null, data);
        },

        beforeDestroy: function (resource, data, cb) {
            cb(null, data);
        },
        afterDestroy: function (resource, data, cb) {
            cb(null, data);
        },

        /**
        * @description 
        * Define's Relations to the Model 
        * 
        **/
        relations:{
            
        }
    });
})
/**
* @description 
* The <%= Modelname %>Service factory Exposes Handler and Service methods for the <%= Modelname %> Server Side Model
* 
**/
.factory('<%= Modelname %>Service',function(<%= Modelname %>, $sailsSocket){
	var _service = {};
	var _handler = {};

    /**
    * @description 
    * When a <%= Modelname %> is created that the app is listenting to inject it into the local DB
    * 
    **/
	_handler.created = function(envelope){
        "use strict";
        <%= Modelname %>.inject(envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a <%= Modelname %> is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        "use strict";
        <%= Modelname %>.eject(envelope.id);
        console.log(envelope);

    };

    /**
    * @description 
    * When a <%= Modelname %> is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        "use strict";
        console.log(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            <%= Modelname %>.inject(envelope.data);
        }else{
            <%= Modelname %>.refresh(envelope.id);
        }

    };

    /**
    * @description 
    * When a <%= Modelname %> model's collection is added to, inject it into the <%= Modelname %> Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        "use strict";
        console.log(envelope);
    };

    /**
    * @description 
    * When a <%= Modelname %> model's collection is detracted from eject it from the <%= Modelname %> Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        "use strict";
        console.log(envelope);
    };

    /**
    * @description 
    * When a <%= Modelname %> model is messaged 
    * 
    **/
    _handler.messaged = function(envelope){
        "use strict";
        console.log(envelope);
    };

	return {
		service : _service,
		handler : _handler
	}
});