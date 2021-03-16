<template>
  <div class="modification">
    <div class="dashboard-main-wrapper">
      <!-- ============================================================== -->
      <!-- wrapper  -->
      <!-- ============================================================== -->
      <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
          <div class="container-fluid dashboard-content ">

            <div class="row">
              <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 pr-lg-0 pr-md-0  m-b-30">
                    <div class="product-slider">
                      <img class="d-block" :src="produitDb.image" alt="First slide">
                      <textarea :value="produitDb.image"  ref="image"></textarea>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30">
                    <div class="product-details">
                      <div class="border-bottom pb-3 mb-3">
                        <h2 class="mb-3"><input type="text" :value="produitDb.nom" ref="nom"></h2>
                        <h3 class="mb-0 text-primary">$<input type="text" :value="produitDb.prix" ref="prix"></h3>
                      </div>
                      <div class="product-size border-bottom">
                        <h4>Fournisseur</h4>
                        <input type="text" :value="produitDb.fournisseur" ref="fournisseur" >
                        <div class="product-qty">
                          <h4>Quantité</h4>
                          <div class="quantity">
                            <input type="number" :value="produitDb.quantite" ref="quantite">
                          </div>
                        </div>
                      </div>
                      <div class="product-description">
                        <h4 class="mb-1">Description</h4>
                        <textarea rows="4" cols="50" :value="produitDb.description" ref="description"></textarea>
                        <a href="#" v-on:click="ModifDonnee" class="btn btn-primary btn-block btn-lg">Sauvegarder</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <!-- ============================================================== -->
            <!-- end wrapper  -->
            <!-- ============================================================== -->
          </div>

        </div>
        <!-- ============================================================== -->
        <!-- end main wrapper  -->
        <!-- ============================================================== -->
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'liste',
  data:function (){
    return {
      produitDb : {
        image : "",
        nom : "",
        prix: 0,
        quantite:0,
        fournisseur:"",
        description:""
      }

    }
  },
  async created(){
    this.RecupDonnee();
    this.ModifDonnee();
  },
  methods:{
    RecupDonnee(){
      let that = this;
      let routeId = parseInt(this.$route.params.id);
      const trans = indexedDB.open("Database",1);
      trans.onsuccess = function (event){
        const db = event.target.result;
        let transaction = db.transaction(["produits"],"readonly");
        let objectStore = transaction.objectStore("produits");
        let request = objectStore.get(routeId);
        request.onsuccess = function (event){
          that.produitDb = event.target.result;
        };
        request.onerror = function (event){
          event.target.errorCode;
        };
      }

    },
    ModifDonnee(){
      let that = this;
      this.produitDb.nom = this.$refs.nom.value;
      this.produitDb.image = this.$refs.image.value;
      this.produitDb.prix = this.$refs.prix.value;
      this.produitDb.quantite = this.$refs.quantite.value;
      this.produitDb.fournisseur = this.$refs.fournisseur.value;
      this.produitDb.description = this.$refs.description.value;
      let db= indexedDB.open("Database",1);
      db.onsuccess = function (event){
        let trans = event.target.result;
        var transaction = trans.transaction(["produits"], "readwrite");
        var obectStore = transaction.objectStore("produits");
        var request = obectStore.put(that.produitDb);
        request.onsuccess = function (){
          alert("Votre produit a été modifier");
        }

      }
    }
  }
}
// export default {
//   name: "modification",
//   data(){
//     return{
//       produitId : this.$route.params.id,
//       produits: [
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 1',
//           prix:10,
//           id:1,
//           quantite:50,
//           fournisseur:'DICJ',
//           description:'test'
//         },
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 2',
//           prix:20,
//           id:2,
//           quantite:50,
//           fournisseur:'DICJ',
//           description:'test'
//         },
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 3',
//           prix:30,
//           id:3,
//           quantite:50,
//           fournisseur:'DICJ',
//           description:'test'
//         },
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 4',
//           prix:40,
//           id:4,
//           quantite:50,
//           fournisseur:'DICJ',
//           description:'test'
//         },
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 5',
//           prix:50,
//           id:5,
//           quantite:50,
//           fournisseur:'DICJ',
//           description:'test'
//         }
//       ]
//
//
//     }
//
//   },
//   computed:{
//     produit(){
//       let test = this.produits.find(
//           produit => produit.id == this.produitId
//       )
//       console.log(this.produits)
//       return test
//
//     }
//   },
//   methods:{
//
//     Save(){
//       alert('Méthode save test')
//
//
//
//     }
//
//   }
//
//
// }
</script>