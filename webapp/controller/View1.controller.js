// com.mindset.apps.project8.controller.View1
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("com.mindset.apps.project8.controller.View1", {
        onInit: function () {
            var oModel = new JSONModel();
            this.getView().setModel(oModel, "dataModel");

            this.fetchRealTimeData();
        },

        fetchRealTimeData: function () {
            var aRealTimeData = [
                { id: 1, name: "Item 1" },
                { id: 2, name: "Item 2" },
                { id: 3, name: "Item 3" }
            ];

            this.getView().getModel("dataModel").setProperty("/items", aRealTimeData);

            MessageToast.show("Real-time data fetched and updated!");
        },

        onLoopExample: function () {
            var aRealTimeData = this.getView().getModel("dataModel").getProperty("/items");

            // Example of a for loop
            for (var i = 0; i < aRealTimeData.length; i++) {
                var oItem = aRealTimeData[i];
                this.updateResults("For Loop: Item ID - " + oItem.id + ", Name - " + oItem.name);
            }

            this.updateResults("\n");

            // Example of a forEach loop
            aRealTimeData.forEach(function (oItem) {
                this.updateResults("ForEach Loop: Item ID - " + oItem.id + ", Name - " + oItem.name);
            }, this);

            // Add spacing
            this.updateResults("\n");

            // Example of a map loop
            var aMappedData = aRealTimeData.map(function (oItem) {
                return {
                    id: oItem.id,
                    newName: "Updated " + oItem.name
                };
            });

            this.updateResults("Map Loop: " + JSON.stringify(aMappedData));
        },

        updateResults: function (sResult) {
            var oResultText = this.getView().byId("resultText");
            oResultText.setText(oResultText.getText() + sResult + "\n");
        }
    });
});

