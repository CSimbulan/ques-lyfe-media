const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
admin.initializeApp();
const app = express();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.getPosts = functions.https.onRequest((req, res) => {
// })

//exports.createPost = functions.https.onRequest((req, res) => {
//})

app.get('/posts', (req, res) => {
    admin.firestore().collection('posts').get()
        .then((data) => {
            let posts = [];
            data.forEach((doc) => {
                posts.push(doc.data());
            });
            return res.json(posts);
        })
        .catch(err => console.error(err))
})

app.post('/post', (req, res) => {
    const newPost = {
        body: req.body.body,
        title: req.body.title,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };
    admin.firestore()
        .collection('posts')
        .add(newPost).then(doc => {
            res.json({ message: `Document ${doc.id} created successfully!` })
        })
        .catch(err => {
            res.status(500).json({ error: 'Something went wrong!' });
            console.error(err);
        })
})

exports.api = functions.https.onRequest(app);