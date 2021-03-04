const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("./key.json");
let db = "https://the-deck-of-card-default-rtdb.firebaseio.com";

function init() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://the-deck-of-card-default-rtdb.firebaseio.com",
  });

  app.use(bodyParser.json());
  app.use(cors());
  console.log("Database is connect.");
}

init();

app.get("/check", async (req, res) => {
  let temp = await admin.database().ref("room001").get();
  console.log(temp);
  res.send(temp);
});

app.post("/");

app.get("/", async (req, res) => {
  res.send("server is running");
});

// app.post('/', async (req, res) => {
//   try {
//     for (let i = 0; i < quizdata.length; i++) {
//       //console.log(quizdata[i].category)
//       await admin.firestore().collection('quizs').doc(quizdata[i].category).collection('quizs').doc().create(quizdata[i])

//     }
//     res.send("success")
//   } catch (error) {
//     console.log(error)
//   }

// })
app.get("/user", async (req, res) => {
  const { uid } = req.query;
  try {
    let a = await admin.firestore().collection("user").doc(uid).get();
    if (!a.exists) {
      res.send(`${id} has not exists`);
    } else {
      res.send(a.data());
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const { uid, password } = req.body;
  try {
    console.log(uid, password);
    let a = await admin.firestore().collection("user").doc(uid).get();
    console.log(a);
    if (!a.exists) {
      res.send(`${uid} has not exists`);
    } else {
      if (a.data().password == password) {
        res.send(a.data());
      } else {
        res.send(false);
      }
    }
  } catch (error) {
    console.log(error);
  }
});
app.post("/user", async (req, res) => {
  const { id, displayName, email, photoURL, phone, password } = req.body;
  console.log(id, displayName, email, photoURL, phone, password);
  try {
    let a = await admin.firestore().collection("user").doc(id).get();
    if (!a.exists) {
      await admin.firestore().collection("user").doc(id).create({
        id: id,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        phone: phone,
        password: password,
      });
      res.send(`${id} has been created`);
    } else {
      res.send(`${id} has been exist`);
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/room", async (req, res) => {
  let { owner } = req.query;
  let room = await admin.firestore().collection("rooms").doc(owner).get();

  try {
    if (room.exists) {
      res.send(room.data());
      return;
    } else {
      res.send("error");
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/roomRT", async (req, res) => {
  let { rid } = req.query;
  console.log(rid);
  try {
    let users = await admin
      .database()
      .ref(rid + "/user")
      .get();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});
app.post("/room", async (req, res) => {
  let { category, owner, quantity } = req.body;
  let room = await admin.firestore().collection("rooms").doc(owner).get();

  if (room.exists) {
    res.send("room is exists");
    return;
  }
  let data = {
    category: category,
    owner: owner,
    quantity: quantity,
    status: false,
  };
  let dataRealTime = {
    user: [""],
    quiz: [
      {
        q1: false,
        user: "",
        ans: "",
      },
      {
        q2: false,
        user: "",
        ans: "",
      },
      {
        q3: false,
        user: "",
        ans: "",
      },
      {
        q4: false,
        user: "",
        ans: "",
      },
      {
        q5: false,
        user: "",
        ans: "",
      },
      {
        q6: false,
        user: "",
        ans: "",
      },
      {
        q7: false,
        user: "",
        ans: "",
      },
      {
        q8: false,
        user: "",
        ans: "",
      },
      {
        q9: false,
        user: "",
        ans: "",
      },
      {
        q10: false,
        user: "",
        ans: "",
      },
    ],
  };
  try {
    await admin.firestore().collection("rooms").doc(owner).create(data);
    await admin.database().ref(owner).set(dataRealTime);
    res.send("new room created");
  } catch (error) {
    console.log(error);
  }
});

app.put("/room/join", async (req, res) => {
  try {
    let { rid, uid } = req.body;

    let data = await admin.firestore().collection("rooms").doc(rid).get();
    if (data.exists) {
      let user = await admin.database().ref(`${rid}/user/${uid}`).get();
      if (!user.exists) {
        res.send("Khong thay");
      }
      await admin
        .database()
        .ref(rid + "/user")
        .child(uid)
        .set({
          uid: uid,
        });
      res.send("Da join");
      //await admin.database().ref(rid+'/user').update(users)
      //res.send(`${uid} has joined`);
    }
  } catch (error) {
    console.log(error);
  }
});

app.put("/room/injoin", async (req, res) => {
  try {
    let { id, uid } = req.body;
    let data = await admin.firestore().collection("rooms").doc(id).get();
    let temp = data.data();
    console.log(temp);
    temp.users.splice(uid, 1);
    await admin.firestore().collection("rooms").doc(id).update(temp);
    res.send(`${uid} has leave the room`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/room/start", async (req, res) => {
  let { rid } = req.query;
  let data = (await admin.firestore().collection("room").doc(rid).get()).data();
  let quiz = (
    await admin.firestore().collection("quizs").doc(data.category).get()
  ).data();
  res.send(quiz);
});

module.exports = app;
