<template>
    <v-container>
        <h1 class="display-3">
            Your Portfolio
        </h1>
        <v-col align="center">
            <div v-if="portfolio">
                <router-link to="/stocks">
                    <p class="display-1 overline black--text">
                        Buy Stocks & Learn
                    </p>
                </router-link>
                <div v-if="totalProfits > 0">
                 <p class="display-1 overline green--text"> 
                  Total Profit : $ {{ totalProfits }}  &#x26A1;
                </p>
                </div>
                 <div v-else>
                 <p class="display-1 overline red--text"> 
                 Total Profit : $ {{ totalProfits }}  &#x1F44E; 
                </p>
                </div>
                <p class="display-1 overline green--text">
                  &#x1F4B0; Available Funds : $ {{ funds }}
                </p>
                <v-row style="margin: 5%;">
                    <v-card class="mx-auto" max-width="344" v-for="stock in portfolio" v-bind:key="stock.name" style="margin-bottom: 30px;">
                        <v-card-text>
                            <div v-if="stock.currentPrice > stock.price">
                                <p class="text-h7 green--text">
                                    In Profit <span> 😀 </span>
                                </p>
                            </div>
                            <div v-else>
                                <p class="text-h7 red--text">
                                    In Loss <span> &#128531;</span>
                                </p>
                            </div>
                            <p class="text-h4 text--primary">
                                {{ stock.name }}
                            </p>
                            <p>Type: {{ stock.type }}</p>
                            <div v-if="stock.currentPrice > stock.price">
                                <p class="text-h7 green--text">
                                    CMV : $ {{ stock.currentPrice }}
                                </p>
                            </div>
                            <div v-else>
                                <p class="text-h7 red--text">
                                    CMV : $ {{ stock.currentPrice }}
                                </p>
                            </div>
                            <p class="text-h8 text--primary">
                                Bought at : $ {{ stock.price }}
                            </p>
                            <p> Quantity Owned: {{ stock.ownedQuantity }}</p>
                        </v-card-text>
                        <v-card-actions>
                        <input type="number" placeholder="Quantity" value="1" min="1" v-model="form.parent_id[stock.id]" 
                            v-on:change="stock.quantity=form.parent_id[stock.id]" v-bind:max="stock.ownedQuantity"
                            style="margin-left:10px; margin-right: 10px;" />
                            <v-spacer></v-spacer>
                            <v-btn v-on:click="sellStockAction(stock)" color="deep-purple accent-4" style="margin-left:10px; margin-right: 10px;">
                                Sell
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </v-row>
            </div>
            <div v-else>
                <router-link to="/stocks">
                    <p class="display-1 overline">
                        Your Portfolio looks Empty.. Buy Some Stocks & Have Fun
                    </p>
                </router-link>
                  <p class="display-1 overline green--text">
                    Available Funds : $ {{ funds }}
                </p>

            </div>
        </v-col>
    </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'PortfolioPage',
    data() {
        return {
            quantity: 1,
            form:{
                parent_id: [],
            }
        }
    },
    created() {
        this.watchPortfolioAction(this.username);
    },

    methods: {
        ...mapActions(['watchPortfolioAction','sellStockAction']),
    },
    computed: {
        ...mapState({
            portfolio: 'portfolio',
            username: 'username',
            funds: 'funds',
            totalProfits: 'totalProfits'
        })
    }
}
</script>
