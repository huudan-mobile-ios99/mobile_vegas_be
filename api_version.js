// async function getJackPotHistoryID(startDate, endDate, id) {
//     const query = `SELECT [JackpotOccurrenceID]
//     ,dbo.jackpot.JackpotID
//     ,dbo.Jackpot.Name
//     ,[HitGamingDate]
//     ,[HitDateTime]
//     ,dbo.machine.Number as 'Machine_Number'
//     ,dbo.MachineGameTheme.Name as 'Game_Theme'
//     ,[AmountPaidOut],[MinimumHitValue]
//     FROM ${DBNAME}.[dbo].[JackpotOccurrence]
//     Join dbo.Jackpot
//     on dbo.Jackpot.JackpotID=dbo.JackpotOccurrence.JackpotID
//     Join dbo.Customer
//     on dbo.customer.CustomerID=dbo.JackpotOccurrence.CustomerID
//     Join dbo.Machine
//     on dbo.Machine.MachineID=dbo.JackpotOccurrence.MachineID
//     Join dbo.MachineGameTheme
//     on dbo.machine.MachineGameThemeID=dbo.MachineGameTheme.MachineGameThemeID
//     Where HitGamingDate between @input_startDate
//     and @input_endDate AND dbo.jackpot.JackpotID > 0 AND dbo.Jackpot.JackpotID = @input_id ORDER BY dbo.JackpotOccurrence.HitDateTime DESC`;
//     let status = false;
//     let message = "can not get jackpot history";
//     let data = null;
//     try {
//         let pool = await sql.connect(config);
//         let jackpot = await pool.request().input('input_startDate', sql.NVarChar, startDate).input('input_endDate', sql.NVarChar, endDate).input('input_id', sql.NVarChar, id).query(query)

//         if (jackpot.recordset.length > 0) {
//             data = jackpot.recordset;
//             status = true;
//             message = `get jackpot history by id success,${jackpot.recordset.length} results`;
//             let map = {
//                 "status": status,
//                 "message": message,
//                 "data": data,
//             }
//             return map;
//         } else {
//             let map = {
//                 "status": false,
//                 "message": message,
//                 "data": data,
//             }
//             data = null;
//             return map;
//         }
//     } catch (error) {
//         console.log(`An error orcur getJackPotHistory: ${error}`)
//         let map = {
//             "status": false,
//             "message": 'can not get jackpot history or an input error type',
//             "data": null,
//         }
//         return map;
//     }
// }



// async function getJackPotHistory(startDate, endDate) {
//     const query = `SELECT [JackpotOccurrenceID]
//     ,dbo.jackpot.JackpotID
//     ,dbo.Jackpot.Name
//     ,[HitGamingDate]
//     ,[HitDateTime]
//     ,dbo.machine.Number as 'Machine_Number'
//     ,dbo.MachineGameTheme.Name as 'Game_Theme'
//     ,[AmountPaidOut],[MinimumHitValue]
// FROM ${DBNAME}.[dbo].[JackpotOccurrence]
// Join dbo.Jackpot
// on dbo.Jackpot.JackpotID=dbo.JackpotOccurrence.JackpotID
// Join dbo.Customer
// on dbo.customer.CustomerID=dbo.JackpotOccurrence.CustomerID
// Join dbo.Machine
// on dbo.Machine.MachineID=dbo.JackpotOccurrence.MachineID
// Join dbo.MachineGameTheme
// on dbo.machine.MachineGameThemeID=dbo.MachineGameTheme.MachineGameThemeID
// Where HitGamingDate between @input_startDate and @input_endDate AND dbo.jackpot.JackpotID >1 AND dbo.Jackpot.JackpotID != 41 ORDER BY dbo.JackpotOccurrence.HitDateTime DESC`;
//     let status = false;
//     let message = "can not get jackpot history";
//     let data = null;
//     try {
//         let pool = await sql.connect(config);
//         let jackpot = await pool.request().input('input_startDate', sql.NVarChar, startDate).input('input_endDate', sql.NVarChar, endDate).query(query)

//         if (jackpot.recordset.length > 0) {
//             // data = jackpot.recordset;
//             // status = true;
//             // message = `get jackpot history success,${jackpot.recordset.length} results`;
//             // let map = {
//             //     "status": status,
//             //     "message": message,
//             //     "data": data,
//             // }
//             // return map;
//             data = jackpot.recordset.map(record => {
//                 if (record.JackpotID === 44) {//every item have jpID = 44 change to 46
//                     return { ...record, JackpotID: 46 };
//                 }
//                 return record;
//             });
//             status = true;
//             message = `get jackpot history success, ${jackpot.recordset.length} results`;
//             let map = {
//                 "status": status,
//                 "message": message,
//                 "data": data,
//             };
//             return map;
//         } else {
//             let map = {
//                 "status": false,
//                 "message": message,
//                 "data": data,
//             }
//             data = null;
//             return map;
//         }
//     } catch (error) {
//         console.log(`An error orcur getJackPotHistory: ${error}`)
//         let map = {
//             "status": false,
//             "message": 'can not get jackpot history or an input error type',
//             "data": null,
//         }
//         return map;
//     }
// }
