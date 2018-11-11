const Nexmo = require('nexmo');
const firebase = require('firebase');
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAO0KlzY_B4V5SuLIKHGA42a62TPcLaqTU",
    authDomain: "blaze-5155c.firebaseapp.com",
    databaseURL: "https://blaze-5155c.firebaseio.com",
    projectId: "blaze-5155c",
    storageBucket: "blaze-5155c.appspot.com",
    messagingSenderId: "353744476046"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();
  db.settings({timestampsInSnapshots: true})
const nexmo = new Nexmo({
  apiKey: 'dad9f461',
  apiSecret: 'm767kWD0ZjT52ZJ2'
});

db.collection("sendSms")
.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        if (change.type === "modified") {
            console.log("Modified city: ", change.doc.data());
            const from = 'Nexmo';
            const to =  Number(change.doc.data().number);
            const text = change.doc.data().message;
            nexmo.message.sendSms(from, to, text, (error, reply) => {
                if(error) {
                 console.log(error);
                } else if(reply.messages[0].status != '0') {
                console.log(reply);
                 console.log('Nexmo returned back a non-zero status')
                } else {
                console.log(reply);
                }
            });
        }
    });
});

db.collection("notifyOwnerStatus")
.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        if (change.type === "modified") {
            console.log("Modified Status: ", change.doc.data());
            const from = 'Nexmo';
            const to =  Number(change.doc.data().number);
            const text = change.doc.data().message;
            nexmo.message.sendSms(from, to, text, (error, reply) => {
                if(error) {
                 console.log(error);
                } else if(reply.messages[0].status != '0') {
                console.log(reply);
                 console.log('Nexmo returned back a non-zero status')
                } else {
                console.log(reply);
                }
            });
        }
    });
});
