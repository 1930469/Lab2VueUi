<template>
  <div class="liste">
    <div class="dashboard-main-wrapper">

      <!-- ============================================================== -->
      <!-- wrapper  -->
      <!-- ============================================================== -->
      <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
          <div class="container-fluid dashboard-content ">

            <div class="row">
              <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="row">
                  <div v-for="produit in produitDb" :key="produit.id" class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="product-thumbnail">
                      <div class="product-img-head">
                        <div class="product-img">
                          <img :src="produit.image" alt="" class="img-fluid"></div>
                      </div>
                      <div class="product-content">
                        <div class="product-content-head">
                          <h3 class="product-title">{{produit.nom}}</h3>
                          <div class="product-price">{{ produit.prix }} $</div>
                        </div>
                        <div class="product-btn">
                          <router-link :to="'/Produit/'+produit.id+'/edition'"   class="btn btn-primary">Modifier</router-link>
                          <router-link :to="'/Produit/'+ produit.id"  class="btn btn-outline-light">Détails</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'liste',
  data:function (){
    return {
      produitDb: []
    }
  },
  async created(){
    this.RecupDonnee();
  },
  methods:{
    RecupDonnee(){
      let that = this;

     const trans = indexedDB.open("Database",1);
      trans.onsuccess = function (event){
        const db = event.target.result;
        let transaction = db.transaction(["produits"],"readonly");
        let objectStore = transaction.objectStore("produits");
        let request = objectStore.getAll();
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
</script>


