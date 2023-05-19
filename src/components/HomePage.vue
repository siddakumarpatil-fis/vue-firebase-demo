<template>
    <v-col>
        <v-container>
            <v-row align="center" style="height: 400px; margin: 5%;">
                <v-col>
                    <h1 class="display-3">
                        Learn <br /> Stocks & Trading
                    </h1>

                    <p class="display-1 font-weight-thin">
                        With More Fun!
                    </p>
                    <v-btn color="primary" elevation="4" style="margin: 10px;" v-on:click="$router.push('/about')"> Learn
                        More</v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    <v-row align="center" no-gutters>
                        <v-btn style="margin: 30px;" width="149" height="149" elevation="15" text large raised rounded tile>
                            <a target="_blank" id="homeBox2" href="/stocks">
                                <img src="../assets/Stock.svg" width="49" height="49" alt="Stocks">
                                <div>Stocks</div>
                            </a>
                        </v-btn>
                        <v-btn style="margin: 30px;" width="149" height="149" elevation="15" text large raised rounded tile>
                            <a target="/stocks" id="homeBox2" href="/stocks">
                                <img src="../assets/dolar.svg" width="49" height="49" alt="Stocks">
                                <div>Trade</div>
                            </a>
                        </v-btn>
                    </v-row>

                    <v-row align="center" no-gutters>
                        <v-btn style="margin: 30px;" width="149" height="149" elevation="15" text large raised rounded tile>
                            <a target="_blank" id="homeBox2" href="/stocks">
                                <img src="../assets/IPO.svg" width="49" height="49" alt="Stocks">
                                <div>IPO</div>
                            </a>
                        </v-btn>
                        <v-btn style="margin: 30px;" width="149" height="149" elevation="15" text large raised rounded tile>
                            <a target="_blank" id="homeBox2" href="/stocks">
                                <img src="../assets/MFS.svg" width="49" height="49" alt="Stocks">
                                <div>Mutual Funds</div>
                            </a>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-col>
</template>

<script>

export default {
    name: 'HomePage'
}
</script>