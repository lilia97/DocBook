var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { day: 'Monday', time: '9:00am-9:30am', time1:'9:30am-10:00am', time2:'10:00am-10:30am', time3:'10:30am-11:00am', time4:'11:00am-11:30am', time5:'11:30am-12:00pm',time6:'2:00pm-2:30pm',time7:'2:30pm-3:00pm', time8:'3:00pm-3:30pm',time9:'3:30pm-4:00pm', time10:'4:00pm-4:30pm', time1:'4:30pm-5:00pm'},
    { day: 'Tuesday',  time: '9:00am-9:30am', time1:'9:30am-10:00am', time2:'10:00am-10:30am', time3:'10:30am-11:00am', time4:'11:00am-11:30am', time5:'11:30am-12:00pm',time6:'2:00pm-2:30pm',time7:'2:30pm-3:00pm', time8:'3:00pm-3:30pm',time9:'3:30pm-4:00pm', time10:'4:00pm-4:30pm', time1:'4:30pm-5:00pm'},
    { day: 'Wednesday', time: '9:00am-9:30am', time1:'9:30am-10:00am', time2:'10:00am-10:30am', time3:'10:30am-11:00am', time4:'11:00am-11:30am', time5:'11:30am-12:00pm',time6:'2:00pm-2:30pm',time7:'2:30pm-3:00pm', time8:'3:00pm-3:30pm',time9:'3:30pm-4:00pm', time10:'4:00pm-4:30pm', time1:'4:30pm-5:00pm'},
    { day: 'Thursday', time: '9:00am-9:30am', time1:'9:30am-10:00am', time2:'10:00am-10:30am', time3:'10:30am-11:00am', time4:'11:00am-11:30am', time5:'11:30am-12:00pm',time6:'2:00pm-2:30pm',time7:'2:30pm-3:00pm', time8:'3:00pm-3:30pm',time9:'3:30pm-4:00pm', time10:'4:00pm-4:30pm', time1:'4:30pm-5:00pm'},
    { day: 'Friday', time: '9:00am-9:30am', time1:'9:30am-10:00am', time2:'10:00am-10:30am', time3:'10:30am-11:00am', time4:'11:00am-11:30am', time5:'11:30am-12:00pm',time6:'2:00pm-2:30pm',time7:'2:30pm-3:00pm', time8:'3:00pm-3:30pm',time9:'3:30pm-4:00pm', time10:'4:00pm-4:30pm', time1:'4:30pm-5:00pm'},
    { day: 'Saturday', time: '9:00am-9:30am', time1:'9:30am-10:00am', time2:'10:00am-10:30am', time3:'10:30am-11:00am', time4:'11:00am-11:30am', time5:'11:30am-12:00pm'},
   
  ];
  dbo.collection("raja").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});