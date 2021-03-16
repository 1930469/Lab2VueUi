<template>
  <div class="ajout">
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
                        <img class="d-block" src="images/eco-product-img-1.png" alt="First slide">
                        <textarea  ref="image" ></textarea>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30">
                      <div class="product-details">
                        <div class="border-bottom pb-3 mb-3">
                          <h2 class="mb-3"><input type="text" value="Produit #1" ref="nom"></h2>
                          <h3 class="mb-0 text-primary">$<input type="text" value="49.00" ref="prix"></h3>
                        </div>
                        <div class="product-size border-bottom">
                          <h4>Fournisseur</h4>
                          <input type="text" value="ACME Inc." ref="fournisseur">
                          <div class="product-qty">
                            <h4>Quantité</h4>
                            <div class="quantity">
                              <input type="number" value="1" ref="quantite">
                            </div>
                          </div>
                        </div>
                        <div class="product-description">
                          <h4 class="mb-1">Description</h4>
                          <textarea rows="4" cols="50" ref="description"></textarea>
                          <a href="#" v-on:click="AjoutDonnee" class="btn btn-primary btn-block btn-lg">Sauvegarder</a>
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
      produitAjout : {
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
    this.AjoutDonnee();
  },
  methods:{

    AjoutDonnee(){
      let that = this;
      this.produitAjout.nom = this.$refs.nom.value;
      this.produitAjout.image = this.$refs.image.value;
      this.produitAjout.prix = this.$refs.prix.value;
      this.produitAjout.quantite = this.$refs.quantite.value;
      this.produitAjout.fournisseur = this.$refs.fournisseur.value;
      this.produitAjout.description = this.$refs.description.value;
      let db= indexedDB.open("Database",1);
      db.onsuccess = function (event){
        let trans = event.target.result;
        var transaction = trans.transaction(["produits"], "readwrite");
          var obectStore = transaction.objectStore("produits");
          var request = obectStore.add(that.produitAjout)
        request.onsuccess = function (){
            alert("Votre produit a été ajouté");
        }

      }
    }

    }
}

</script>

