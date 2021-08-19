const ul = document.querySelector('.movie-list')

var firebaseConfig = {
    apiKey: "AIzaSyCz6AxfXsi3VS8NTskj56mknA3JTM1b05w",
    authDomain: "movies-e08f0.firebaseapp.com",
    projectId: "movies-e08f0",
    storageBucket: "movies-e08f0.appspot.com",
    messagingSenderId: "640529872732",
    appId: "1:640529872732:web:085019fcc33f860f503399",
    measurementId: "G-H4QFTY3ZR8"
        };

         // Initialize Firebase
firebase.initializeApp(firebaseConfig);
         //gettings data from firebase   
const db = firebase.firestore();

db.collection('movies').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        let movie = doc.data() 
        let movieItem = document.createElement('tr')
       
        movieItem.textContent = movie.Rank + '. ' + movie.Name 
       
        ul.appendChild(movieItem)
    })
})