<template>
    <div class="cardLoader">
        <div class="row">
            <div class="col-md-6"  >
                
               <div> A crate of <h4>Coca Cola, Fanta And Sprite</h4> go at K65</div>
                <img alt="Vue logo" src="../../assets/images/Cocacola.jpg"   width="80%">
                <div> A 100kg of <h4>Flour</h4> Going at k210 each</div>
                <img alt="Vue logo" src="../../assets/images/flour.jpg"   width="80%">
                <div> A 25kg of <h4>Mealie Meal</h4> Going at k150 each</div>
                <img alt="Vue logo" src="../../assets/images/Unga.jpg"   width="80%">
                 <div> A tray of <h4>Eggs</h4> Going at k80 each</div>
                 
                <img alt="Vue logo" src="../../assets/images/eggs.jpg"   width="80%">
            </div>
        </div>
    </div>
</template>
<script>
import { VclFacebook, VclInstagram } from "vue-content-loading";

export default {
  name: "cardLoader",
  props: ["loopCount"],
  components: { VclInstagram }
};
</script>

<style >
</style>