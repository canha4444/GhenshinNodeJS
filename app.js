
const express = require('express');
const rootDir = require('./util/path')
const path = require('path');
const app = express();
app.set('view engine','ejs'); /// tell the express what we want to use dinamic tmeplate with pug engine
app.set('views','views') /// where to get these template (in here we use views is the default template)
const adminRoutes = require('./routes/admin');
const userRoute = require('./routes/shop')
//const characterRoute = require('./routes/character');


const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use(express.static(path.join(__dirname,'public')));
//app.use(characterRoute);
app.use(userRoute);

app.use((req,res,next) => {
   res.render('404page',{pageTitle:'404 Error !'})
})


app.listen(3000);





// var userInformations = current.variables.vs000002;
// var employeeID = userInformations.vs00002_employee_id; // [id1,id2]
// var comment_add_user = "";
// var comment_group_user = "";
// var notify = "";
// var comment_add = "";
// var comment_remove = "";
// for (var i = 0; i < employeeID.length; i++) {
//     var gr_user = new GlideRecord("sys_user");
//     gr_user.addQuery('user_name', employeeID[i]);
//     gr_user.setLimit(1);
//     gr_user.query();
//     if (gr_user.next()) {
//         if (gr_user.active == true) {
// 			if (i == 0) {
// 				notify = notify + employeeID[i] + ": 有効なアカウントが既に存在しています。グループの所属も変更しませんでした。";
// 			} else {
// 				notify = notify + "\n" +employeeID[i] + ": 有効なアカウントが既に存在しています。グループの所属も変更しませんでした。";
// 			}
//         } else {
//             gr_user.first_name = userInformations.vs000002_lastname[i];
//             gr_user.last_name = userInformations.vs000002_firstname[i];
//             gr_user.user_password.setDisplayValue(employeeID[i] + "");
//             gr_user.department = userInformations.vs000002_department[i];
//             gr_user.u_belongs_to = userInformations.vs000002_belongs_to[i];
//             gr_user.company = "a308a71adb4798102b49044cd3961909"; //company name = アコム
//             gr_user.email = "DoNotSend@dummy.com";
//             gr_user.calendar_integration = 1; //Outlook
//             gr_user.preferred_language = "";
//             gr_user.time_zone = "";
//             gr_user.date_format = "";
//             gr_user.password_needs_reset = true;
//             gr_user.active = true;
//             gr_user.locked_out = false;
//             gr_user.update();
//             if (i == 0) {
//                 notify = notify + employeeID[i] + ": 既に存在していたため、再有効化しました。";
//             } else {
//                 notify = notify + "\n" + employeeID[i] + ": 既に存在していたため、再有効化しました。";
//             }
//             //update group member
//             comment_add = createSysUserGroup(employeeID[i], gr_user.sys_id, userInformations.vs000002_group1[i], userInformations.vs000002_group2[i]);
//             gs.info("add" + comment_add);
//             notify = notify + "\n" + comment_add;
//         }
//     } else {
//         gr_user.initialize();
//         gr_user.user_name = employeeID[i];
//         gr_user.first_name = userInformations.vs000002_lastname[i];
//         gr_user.last_name = userInformations.vs000002_firstname[i];
//         gr_user.user_password = employeeID[i] + "";
//         gr_user.department = userInformations.vs000002_department[i];
//         gr_user.u_belongs_to = userInformations.vs000002_belongs_to[i];
//         gr_user.company = "a308a71adb4798102b49044cd3961909"; //company name = アコム
//         gr_user.email = "DoNotSend@dummy.com";
//         gr_user.calendar_integration = 1; //Outlook
//         gr_user.insert();
//         if (i == 0) {
//             notify = notify + employeeID[i] + ": 作成しました。";
//         } else {
//             notify = notify + "\n" + employeeID[i] + ": 作成しました。";
//         }
//         updatePassword(employeeID[i] + "");

//         //update group member
//         var gr_user2 = new GlideRecord("sys_user");
//         gr_user2.addQuery("user_name", employeeID[i]);
//         gr_user2.query();
//         if (gr_user2.next()) {
//             comment_add = createSysUserGroup(employeeID[i], gr_user2.sys_id, userInformations.vs000002_group1[i], userInformations.vs000002_group2[i]);
//         }
//         notify = notify + "\n" + comment_add;
//     }
// }
// current.comments.setJournalEntry(notify, 'システム');

// function createSysUserGroup(nameUser, userSysID, groupSysID1, groupSysID2) {
//     //Remove group
// 	var commentRemove = "";
// 	var notifyRemove = "";
//     var gr_group_remove = new GlideRecord("sys_user_grmember");
//     gr_group_remove.addQuery("user", userSysID);
//     gr_group_remove.query();
//     while (gr_group_remove.next()) {
//         if ((gr_group_remove.group != groupSysID1) && (gr_group_remove.group != groupSysID2)) {
//             gr_group_remove.deleteRecord();
//             commentRemove = commentRemove + '[{' + gr_group_remove.group.getDisplayValue() + '}]';
//         }
//     }
// 	if (commentRemove != "") {
// 		notifyRemove = "{" + nameUser + "}を" + commentRemove + "から削除しました。";
// 	} else notifyRemove = "";

//     //Add Group
//     var commentAdd = "";
//     var notifyAdd = "";
//     //add to group 1
//     if (groupSysID1 != '') {
//         var gr_group_member = new GlideRecord("sys_user_grmember");
//         gr_group_member.addQuery("user", userSysID);
//         gr_group_member.addQuery("group", groupSysID1);
//         gr_group_member.query();
//         if (!gr_group_member.next()) {
//             gr_group_member.initialize();
//             gr_group_member.group = groupSysID1;
//             gr_group_member.user = userSysID;
//             gr_group_member.insert();
//             commentAdd = commentAdd + '[{' + gr_group_member.group.getDisplayValue() + '}]';
//         }
//     }
//     //add to group 2
//     if (groupSysID2 != '') {
//         var gr_group_member2 = new GlideRecord("sys_user_grmember");
//         gr_group_member2.addQuery("user", userSysID);
//         gr_group_member2.addQuery("group", groupSysID2);
//         gr_group_member2.query();
//         if (!gr_group_member2.next()) {
//             gr_group_member2.initialize();
//             gr_group_member2.group = groupSysID2;
//             gr_group_member2.user = userSysID;
//             gr_group_member2.insert();
//             commentAdd = commentAdd + '[{' + gr_group_member2.group.getDisplayValue() + '}]';
//         }
//     }
//     notifyAdd = "{" + nameUser + "}を" + commentAdd + "に追加しました。";
// 	if (notifyRemove != '') {
// 		return notifyRemove + "\n" + notifyAdd;
// 	} else {
// 		return notifyAdd;
// 	}
// }

// function updatePassword(employee_id) {
//     var gr_us = new GlideRecord("sys_user");
//     gr_us.addQuery("user_name", employee_id);
//     gr_us.query();
//     if (gr_us.next()) {
//         gr_us.user_password.setDisplayValue(employee_id);
//         gr_us.password_needs_reset = true;
//         gr_us.update();
//     }
// }

// function getGroupName(sys_id) {
//     var grg = new GlideRecord("sys_user_group");
//     grg.get(sys_id);
//     return grg.name + "";
// }


