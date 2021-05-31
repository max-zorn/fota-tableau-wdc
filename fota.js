(function () {
    var myConnector = tableau.makeConnector();
    myConnector.getSchema = function (schemaCallback) {
        var colsDevices = [{
            id: 'imei',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'serial',
            dataType: tableau.dataTypeEnum.int
            }, {
            // id: 'gsm_number',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            id: 'status_id',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'model',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'spec_id',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'current_configuration',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'current_firmware',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'description',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'company_id',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'group_id',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'seen_at',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'created_at',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'updated_at',
            dataType: tableau.dataTypeEnum.string
            }, {
            // id: 'created_by',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            id: 'updated_by',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'last_sync',
            dataType: tableau.dataTypeEnum.string
            }, {
            // id: 'iccid',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'imsi',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ble_firmware',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            id: 'status_name',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'company_name',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'group_name',
            dataType: tableau.dataTypeEnum.string
            }, {
            // id: 'next_task',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'group',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'can_adapter',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'obd',
            // dataType: tableau.dataTypeEnum.string
            // }, {            
            id: 'refresh_date',
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchemaDevices = {
            id: "devices",
            alias: "devices",
            columns: colsDevices
        };

        // var colsGroups = [{
        //     id: 'id',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'company_name',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'company_id',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'group_name',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'type',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'unix_timestamp',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'created_at',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'updated_at',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'refresh_date',
        //     dataType: tableau.dataTypeEnum.string
        // }];

        // var tableSchemaGroups = {
        //     id: "groups",
        //     alias: "groups",
        //     columns: colsGroups
        // };

        // var colsCompanies = [{
        //     id: 'id',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'company_name',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'company_type',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'company_code',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'parent_name',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'parent_id',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'type',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'lz_name',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'unix_timestamp',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'updated_at',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'created_at',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'refresh_date',
        //     dataType: tableau.dataTypeEnum.string
        // }];

        // var tableSchemaCompanies = {
        //     id: "companies",
        //     alias: "companies",
        //     columns: colsCompanies
        // };

        // var colsFiles = [{
        //     id: 'id',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'file_name',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'file_type',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'company_name',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'company_id',
        //     dataType: tableau.dataTypeEnum.int
        //     }, {
        //     id: 'type',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'description',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'unix_timestamp',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'created_at',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'updated_at',
        //     dataType: tableau.dataTypeEnum.string
        //     }, {
        //     id: 'refresh_date',
        //     dataType: tableau.dataTypeEnum.string
        // }];

        // var tableSchemaFiles = {
        //     id: "files",
        //     alias: "files",
        //     columns: colsFiles
        // };

        // schemaCallback([tableSchemaDevices, tableSchemaGroups, tableSchemaCompanies, tableSchemaFiles]);
        schemaCallback([tableSchemaDevices]);

    };

    myConnector.getData = function(table, doneCallback) {
        var proxy = 'https://cors-anywhere.herokuapp.com/',
        	host = 'https://api.teltonika.lt';
        if (table.tableInfo.id == 'devices') {
            async function devices() {
                var tableData = [];
                var total = 1;
                await $.ajax({
                    url: proxy + host + "/devices?page=1&per_page=500",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":"Bearer " + tableau.password
                    },
                    type: "GET",
                    success: function(resp) {
                        total = resp.last_page;
                    },
                    error: function () {
                        console.log("error");
                    }
                });

                for (var j = 1; j <= total; j++) {
                    await $.ajax({
                        url: proxy + host + "/devices?page=" + j.toString() + "&per_page=500",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization":"Bearer " + tableau.password
                        },
                        type: "GET",
                        success: function(resp) {
                            var feat = resp.data;
                            var date = new Date().toISOString().slice(0,10);
                            for (var i = 0, len = feat.length; i < len; i++) {
                                imei = feat[i].imei.toString();
                                tableData.push({
                                    "imei": imei,
                                    "serial": feat[i].serial,
                                    // "gsm_number": feat[i].gsm_number,
                                    "status_id": feat[i].status_id,
                                    "model": feat[i].model,
                                    "spec_id": feat[i].spec_id,
                                    "current_configuration": feat[i].current_configuration,
                                    "current_firmware": feat[i].current_firmware,
                                    "description": feat[i].description,
                                    "company_id": feat[i].company_id,
                                    "group_id": feat[i].group_id,
                                    "seen_at": feat[i].seen_at,
                                    "created_at": feat[i].created_at,
                                    "updated_at": feat[i].updated_at,
                                    // "created_by": feat[i].created_by,
                                    "updated_by": feat[i].updated_by,
                                    "last_sync": feat[i].last_sync,
                                    // "iccid": feat[i].iccid,
                                    // "imsi": feat[i].imsi,
                                    // "ble_firmware": feat[i].ble_firmware,
                                    "status_name": feat[i].status_name,
                                    "company_name": feat[i].company_name,
                                    "group_name": feat[i].group_name,
                                    // "next_task": feat[i].next_task,
                                    // "group": feat[i].grop,
                                    // "can_adapter": feat[i].can_adapter,
                                    // "obd": feat[i].obd
                                    "refresh_date": date,
                                });
                            }
                        },
                        error: function () {
                            console.log("error");
                        }
                    });      
                };
                table.appendRows(tableData);
                doneCallback(); 
            }
            devices()
        }

        // if (table.tableInfo.id == 'groups') {
        //     async function groups() {
        //         // var proxy = 'https://cors-anywhere.herokuapp.com/';
        //         // var host = 'https://api.teltonika.lt';
        //         var tableData = [];
        //         await $.ajax({
        //             url: proxy + host + "/groups?page=1",
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "Authorization":"Bearer " + tableau.password
        //             },
        //             type: "GET",
        //             success: function(resp) {
        //                 total = resp.last_page;
                        
        //             },
        //             error: function () {
        //                 console.log("error");
        //             }
        //         });

        //         for (var j = 1; j <= total; j++) {
        //             await $.ajax({
        //                 url: proxy + host + "/groups?page=" + j.toString(),
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                     "Authorization":"Bearer " + tableau.password
        //                 },
        //                 type: "GET",
        //                 success: function(resp) {
        //                     var feat = resp.data;
        //                     var date = new Date().toISOString().slice(0,10);
        //                     for (var i = 0, len = feat.length; i < len; i++) {
        //                         tableData.push({
        //                             "id": feat[i].id,
        //                             "company_name": feat[i].company_name,
        //                             "company_id": feat[i].company_id,
        //                             "group_name": feat[i].group_name,
        //                             "type": feat[i].type,
        //                             "unix_timestamp": feat[i].unix_timestamp,
        //                             "created_at": feat[i].created_at,
        //                             "updated_at": feat[i].updated_at,
        //                             "refresh_date": date,
        //                         });
        //                     console.log(tableData)
        //                     }
        //                 },
        //                 error: function () {
        //                     console.log("error");
        //                 }
        //             });      
        //         };
        //         table.appendRows(tableData);
        //         doneCallback(); 
        //     }
        //     groups()
        // }

        // if (table.tableInfo.id == 'companies') {
        //     async function companies() {
        //         // var proxy = 'https://cors-anywhere.herokuapp.com/';
        //         // var host = 'https://api.teltonika.lt';
        //         var tableData = [];
        //         await $.ajax({
        //             url: proxy + host + "/companies?page=1",
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "Authorization":"Bearer " + tableau.password
        //             },
        //             type: "GET",
        //             success: function(resp) {
        //                 total = resp.last_page;
                        
        //             },
        //             error: function () {
        //                 console.log("error");
        //             }
        //         });
        //         console.log(total)

        //         for (var j = 1; j <= total; j++) {
        //             await $.ajax({
        //                 url: proxy + host + "/companies?page=" + j.toString(),
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                     "Authorization":"Bearer " + tableau.password
        //                 },
        //                 type: "GET",
        //                 success: function(resp) {
        //                     var feat = resp.data;
        //                     var date = new Date().toISOString().slice(0,10);
        //                     for (var i = 0, len = feat.length; i < len; i++) {
        //                         tableData.push({
        //                             'id': feat[i].id,
        //                             'company_name': feat[i].company_name,
        //                             'company_type': feat[i].company_type,
        //                             'company_code': feat[i].company_code,
        //                             'parent_name': feat[i].parent_name,
        //                             'parent_id': feat[i].parent_id,
        //                             'type': feat[i].type,
        //                             'lz_name': feat[i].lz_name,
        //                             'unix_timestamp': feat[i].unix_timestamp,
        //                             'updated_at': feat[i].updated_at,
        //                             'created_at': feat[i].created_at,
        //                             'refresh_date': date,
        //                         });
        //                     console.log(tableData)
        //                     }
        //                 },
        //                 error: function () {
        //                     console.log("error");
        //                 }
        //             });      
        //         };
        //         table.appendRows(tableData);
        //         doneCallback(); 
        //     }
        //     companies()
        // }

        // if (table.tableInfo.id == 'files') {
        //     async function files() {
        //         // var proxy = 'https://cors-anywhere.herokuapp.com/';
        //         // var host = 'https://api.teltonika.lt';
        //         var tableData = [];
        //         await $.ajax({
        //             url: proxy + host + "/files?page=1",
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "Authorization":"Bearer " + tableau.password
        //             },
        //             type: "GET",
        //             success: function(resp) {
        //                 total = resp.last_page;
                        
        //             },
        //             error: function () {
        //                 console.log("error");
        //             }
        //         });
        //         console.log(total)

        //         for (var j = 1; j <= total; j++) {
        //             await $.ajax({
        //                 url: proxy + host + "/files?page=" + j.toString(),
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                     "Authorization":"Bearer " + tableau.password
        //                 },
        //                 type: "GET",
        //                 success: function(resp) {
        //                     var feat = resp.data;
        //                     var date = new Date().toISOString().slice(0,10);
        //                     for (var i = 0, len = feat.length; i < len; i++) {
        //                         unixDate = feat[i].unix_timestamp;
        //                         tableData.push({
        //                             'id': feat[i].id,
        //                             'file_name': feat[i].file_name,
        //                             'file_type': feat[i].file_type,
        //                             'company_name': feat[i].company_name,
        //                             'company_id': feat[i].company_id,
        //                             'type': feat[i].type,
        //                             'description': feat[i].description,
        //                             'unix_timestamp': unixDate.toLocaleString(),
        //                             'created_at': feat[i].created_at,
        //                             'updated_at': feat[i].updated_at,
        //                             'refresh_date': date,
        //                         });
        //                     console.log(tableData)
        //                     }
        //                 },
        //                 error: function () {
        //                     console.log("error");
        //                 }
        //             });      
        //         };
        //         table.appendRows(tableData);
        //         doneCallback(); 
        //     }
        //     files()
        // }
    };
    tableau.registerConnector(myConnector);

    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "fota web teltonika";
            tableau.password = $("#token").val();
            tableau.submit();
        });
    });
})();
