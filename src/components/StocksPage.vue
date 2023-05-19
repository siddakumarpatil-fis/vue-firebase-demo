<template>
    <v-container>
        <v-col>
            <h1 class="display-3">
                Stocks & Trading
            </h1>
            <p class="display-1 overline green--text">
                &#x1F4B0; Available Funds : $ {{ funds }}
            </p>
            <v-row style="margin: 5%;">
                <v-card class="mx-auto" max-width="344" v-for="stock in listedStocks" v-bind:key="stock.name"
                    style="margin-bottom: 30px;">
                    <v-card-text>
                           <div v-if="stock.isRecommended === true ">
                                <p class="text-h7 green--text">
                                    Recommended <span> &#x1F4B8;</span>
                                </p>
                            </div>
                            <div v-else>
                                <p class="text-h7 red--text">
                                   Not So Recommended <span>&#9940;</span>
                                </p>
                            </div>
                        <!-- <div class="green--text"> Recommended <span>😀</span></div> -->
                        <!-- <div v-else-if="!stock[isHigh]" class="red--text">Not So Good</div> -->
                        <p class="text-h4 text--primary">
                            {{ stock.name }}
                        </p>
                        <p>{{ stock.type }}</p>
                        <p class="text-h5 text--primary">
                           CMP: $ {{ stock.price }}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <input type="number" placeholder="Quantity" value="1" min="1" v-model="form.parent_id[stock.id]" v-on:change="stock.quantity=form.parent_id[stock.id]"
                            style="margin-left:10px; margin-right: 10px;" />
                        <!-- <input type="number" placeholder="Quantity" value="1" min="1" v-model="quantity" v-on:change="stock.quantity=quantity"
                            style="margin-left:10px; margin-right: 10px;" /> -->
                        <v-spacer></v-spacer>
                        <v-btn v-on:click="buyStockAction(stock)" color="primary accent-4" style="margin-left:10px; margin-right: 10px;"> 
                            Buy
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: 'StocksPage',
    data() {
        return {
            quantity: 1,
            form:{
                parent_id: [],
            }
        }
    },
    created(){
        this.watchListedStocksAction();
    },
    computed:{
        ...mapState({
            listedStocks :'listedStocks',
            portfolio: 'portfolio',
            funds: 'funds',
        })
    },
    methods: {
      ...mapActions(['buyStockAction', 'watchListedStocksAction']),
    },
   
}
</script>
