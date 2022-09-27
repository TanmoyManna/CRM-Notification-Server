const notificationController = require("../controllers/notification.controller");

module.exports = (app) =>{

    /**
     * POST call for the notification request
     */
    app.post("/notiserv/api/v1/instantnotifications", notificationController.acceptNotificationRequest);
}