<template>
  <div class="produit">
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
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30">
                    <div class="product-details">
                      <div class="border-bottom pb-3 mb-3">
                        <h2 class="mb-3">{{produitDb.nom}}</h2>
                        <h3 class="mb-0 text-primary">{{ produitDb.prix }} $</h3>
                      </div>
                      <div class="product-size border-bottom">
                        <h4>Fournisseur</h4>
                          {{ produitDb.fournisseur }}
<!--                          <p v-if="produit.quantite > 10">En stock</p>-->
<!--                          <p v-else-if="produit.quantite <= 10">Bientot en rupture de stock !</p>-->
<!--                          <p v-else>En rupture de stock</p>-->
                          <div class="product-qty">
                               <h4>Quantiter</h4>
                            <div class="quantity">
                            </div>
                            {{ produitDb.quantite }}
                        </div>
                      </div>
                      <div class="product-description" >
                        <h4 class="mb-1">Description</h4>
                        <p>{{ produitDb.description }}</p>
                        <router-link :to="'/Produit/'+produitDb.id+'/edition'"   class="btn btn-primary btn-block btn-lg">Modifier</router-link>
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
  data:function (){
    return {
      produitDb: ""
    }
  },
  async created(){
    this.RecupDonnee();
  },
  methods:{
    RecupDonnee(){
      let that = this;
      let routeId = parseInt(this.$route.params.id)
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

    }
  }
}
// export default {
//   name: "detail",
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
//           descrption:'test'
//         },
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 2',
//           prix:20,
//           id:2,
//           quantite:50,
//           fournisseur:'DICJ',
//           descrption:'test'
//         },
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 3',
//           prix:30,
//           id:3,
//           quantite:50,
//           fournisseur:'DICJ',
//           descrption:'test'
//         },
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 4',
//           prix:40,
//           id:4,
//           quantite:50,
//           fournisseur:'DICJ',
//           descrption:'test'
//         },
//         {
//           image:'images/eco-product-img-1.png',
//           nom:'Test 5',
//           prix:50,
//           id:5,
//           quantite:50,
//           fournisseur:'DICJ',
//           descrption:'test'
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
//     }
//   }
//
// }
</script>