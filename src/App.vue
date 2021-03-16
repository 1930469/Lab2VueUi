<template>
  <div id="app">
    <div id="nav">
      <!-- ============================================================== -->
      <!-- navbar -->
      <!-- ============================================================== -->
      <div class="dashboard-header">
        <nav class="navbar navbar-expand-lg bg-nav-brown fixed-top">
          <router-link :to="'/'" class="navbar-brand" href="#">Inventaire</router-link>>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
          </button>
          <router-link to="/Produit/Ajout">Ajouter Produit</router-link>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto navbar-right-top">
              <li class="nav-item">
                <div id="custom-search" class="top-search-bar">
                  <input class="form-control" type="text" placeholder="Search..">
                </div>
              </li>
              <li class="nav-item dropdown notification">
                <a class="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1"><i class="fas fa-plus-circle"></i> </a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
      <!-- ============================================================== -->
      <!-- end navbar -->
      <!-- ============================================================== -->

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
// const  request = indexedDB.open("Database",1);
// let db;
// request.onupgradeneeded = function (event){
//   db = event.target.result;
// // possible erreur car mes ID sont en int et non en string
//   const objectStore = db.createObjectStore('produits',{autoIncrement:true});
// // const produitData = [
// //   {nom:'Liquide Ragnarok',image:'images/ragnarok.jpg',prix:20,quantite:50,fournisseur:'Ultimate',description:'Liquide 30/70 pour ciguarette electronique'},
// //   {nom:'Kit Aegis Legend 200W Geek Vape',image:'images/ce.jpg',prix:60,quantite:50,fournisseur:'Aegis',description:'Ciguarette electronique allant jusqu à 200W'}
// // ];
//   // store.createIndex('par_nom', 'nom',{unique:true});
//   // store.createIndex('par_fournisseur', 'fournisseur',{unique:true});
//   //
//   // store.add({
//   //   image:'images/eco-product-img-1.png',
//   //   nom:'Test 1',
//   //   prix:10,
//   //   quantite:50,
//   //   fournisseur:'DICJ',
//   //   description:'test'
//   // });
//   // store.add({
//   //   image:'images/eco-product-img-1.png',
//   //   nom:'Test 2',
//   //   prix:20,
//   //   quantite:50,
//   //   fournisseur:'Le Petit Vapoteur',
//   //   description:'test'
//   // });
//   // store.add({
//   //   image:'images/eco-product-img-1.png',
//   //   nom:'Test 3',
//   //   prix:30,
//   //   quantite:50,
//   //   fournisseur:'Ultimate',
//   //   description:'test'
//   // });
//   // store.add({
//   //   image:'images/eco-product-img-1.png',
//   //   nom:'Test 4',
//   //   prix:40,
//   //   quantite:50,
//   //   fournisseur:'Fruitz',
//   //   description:'test'
//   // });
// }
// request.onsuccess = function(event){
//   db = event.target.result
// };
// request.onerror = function (){
//   alert('Erreur');
// }
// db.onerror = function (event){
//   alert("Database erreur : "+ event.target.errorCode)
// }
// request.onblocked = function (){
//   // si on a 2 onglet ouvert avec des versions different de db, il faut fermer l'ancien onglet
//   alert("Cette version est antérieur, veuillez à reloader la page");
// }

// eslint-disable-next-line no-unused-vars
var db;
  console.log("openDb");
  var request = indexedDB.open("Database",1)
// eslint-disable-next-line no-unused-vars
  request.onsuccess = function (event){
     db=this.result;
    console.log("OpenDb fait !");
  };
  request.onerror =function (event){
    console.error("openDb : ", event.target.errorCode);
  };
  request.onupgradeneeded = function (event){
    console.log("openDb.onupgradeneeded");
    var store = event.currentTarget.result.createObjectStore("produits",{keyPath: 'id', autoIncrement:true});
    store.createIndex('nom','nom',{unique:true})
    store.createIndex('fournisseur','fournisseur',{unique:false});
    store.add({
    image:'images/eco-product-img-1.png',
    nom:'Test 1',
    prix:10,
    quantite:50,
    fournisseur:'DICJ',
    description:'test'
  });
  store.add({
    image:'images/eco-product-img-1.png',
    nom:'Test 2',
    prix:20,
    quantite:50,
    fournisseur:'Le Petit Vapoteur',
    description:'test'
  });
  store.add({
    image:'images/eco-product-img-1.png',
    nom:'Test 3',
    prix:30,
    quantite:50,
    fournisseur:'Ultimate',
    description:'test'
  });
  store.add({
    image:'images/eco-product-img-1.png',
    nom:'Test 4',
    prix:40,
    quantite:50,
    fournisseur:'Fruitz',
    description:'test'
  });
  };




</script>
