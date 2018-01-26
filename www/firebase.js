var exec = require('cordova/exec');

//
// Cloud Messaging FCM
//
exports.getInstanceId = function(success, error) {
    exec(success, error, "FirebasePlugin", "getInstanceId", []);
};

exports.getToken = function(success, error) {
    exec(success, error, "FirebasePlugin", "getToken", []);
};

exports.onNotificationOpen = function(success, error) {
    exec(success, error, "FirebasePlugin", "onNotificationOpen", []);
};

exports.onTokenRefresh = function(success, error) {
    exec(success, error, "FirebasePlugin", "onTokenRefresh", []);
};

exports.grantPermission = function(success, error) {
    exec(success, error, "FirebasePlugin", "grantPermission", []);
};

exports.hasPermission = function(success, error) {
    exec(success, error, "FirebasePlugin", "hasPermission", []);
};

exports.setBadgeNumber = function(number, success, error) {
    exec(success, error, "FirebasePlugin", "setBadgeNumber", [number]);
};

exports.getBadgeNumber = function(success, error) {
    exec(success, error, "FirebasePlugin", "getBadgeNumber", []);
};

exports.subscribe = function(topic, success, error) {
    exec(success, error, "FirebasePlugin", "subscribe", [topic]);
};

exports.unsubscribe = function(topic, success, error) {
    exec(success, error, "FirebasePlugin", "unsubscribe", [topic]);
};

exports.unregister = function(success, error) {
    exec(success, error, "FirebasePlugin", "unregister", []);
};

//
// Analytics
//
exports.enableAnalytics = function (enable, success, error) {
    exec(success, error, "FirebasePlugin", "enableAnalytics", [enable]);
};

exports.logEvent = function(name, params, success, error) {
    exec(success, error, "FirebasePlugin", "logEvent", [name, params]);
};

exports.setScreenName = function(name, success, error) {
    exec(success, error, "FirebasePlugin", "setScreenName", [name]);
};

exports.setUserId = function(id, success, error) {
    exec(success, error, "FirebasePlugin", "setUserId", [id]);
};

exports.setUserProperty = function(name, value, success, error) {
    exec(success, error, "FirebasePlugin", "setUserProperty", [name, value]);
};

//
// Crash reporting
//
exports.logError = function(message, success, error) {
    exec(success, error, "FirebasePlugin", "logError", [message]);
};

exports.isCrashReportEnabled = function (success, error) {
    exec(success, error, "FirebasePlugin", "isCrashReportEnabled", []);
};

exports.enableCrashReport = function (enable, success, error) {
    exec(success, error, "FirebasePlugin", "enableCrashReport", [enable]);
};

//
// Performance
//
exports.startTrace = function (name, success, error) {
    exec(success, error, "FirebasePlugin", "startTrace", [name]);
};

exports.incrementCounter = function (name, counterNamed, success, error) {
    exec(success, error, "FirebasePlugin", "incrementCounter", [name, counterNamed]);
};

exports.stopTrace = function (name, success, error) {
    exec(success, error, "FirebasePlugin", "stopTrace", [name]);
};

exports.enablePerformanceMonitoring = function (enable, success, error) {
    exec(success, error, "FirebasePlugin", "enablePerformanceMonitoring", [enable]);
};

exports.isPerformanceMonitoringEnabled = function (success, error) {
    exec(success, error, "FirebasePlugin", "isPerformanceMonitoringEnabled", []);
};

exports.addTraceAttribute = function (traceName, attribute, value, success, error) {
    exec(success, error, "FirebasePlugin", "addTraceAttribute", [traceName, attribute, value]);
};

//
// Remote configuration
//
exports.activateFetched = function (success, error) {
    exec(success, error, "FirebasePlugin", "activateFetched", []);
};

exports.fetch = function (cacheExpirationSeconds, success, error) {
    var args = [];
    if (typeof cacheExpirationSeconds === 'number') {
        args.push(cacheExpirationSeconds);
    } else {
        error = success;
        success = cacheExpirationSeconds;
    }
    exec(success, error, "FirebasePlugin", "fetch", args);
};

exports.getByteArray = function (key, namespace, success, error) {
    var args = [key];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebasePlugin", "getByteArray", args);
};

exports.getValue = function (key, namespace, success, error) {
    var args = [key];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebasePlugin", "getValue", args);
};

exports.getInfo = function (success, error) {
    exec(success, error, "FirebasePlugin", "getInfo", []);
};

exports.setConfigSettings = function (settings, success, error) {
    exec(success, error, "FirebasePlugin", "setConfigSettings", [settings]);
};

exports.setDefaults = function (defaults, namespace, success, error) {
    var args = [defaults];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebasePlugin", "setDefaults", args);
};

//
// Dynamic Links
//
exports.onDynamicLink = function(success, error) {
    exec(success, error, "FirebasePlugin", "onDynamicLink", []);
};

exports.dynamicLinkCallback = function (dynamicLink) {
    var ev = document.createEvent('HTMLEvents');
    ev.dynamicLink = dynamicLink;
    ev.initEvent('dynamic-link', true, true, arguments);
    document.dispatchEvent(ev);
};

//
// Crashlytics
//
exports.forceCrashlytics = function (success, error) {
    exec(success, error, "FirebasePlugin", "forceCrashlytics");
};

exports.logCrashlytics = function (crashMessage, success, error) {
    exec(success, error, "FirebasePlugin", "logCrashlytics", [crashMessage]);
};

exports.logExceptionCrashlytics = function (crashMessage, success, error) {
    exec(success, error, "FirebasePlugin", "logExceptionCrashlytics", [crashMessage]);
};