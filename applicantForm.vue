<template>
    <section class="map-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="map-heading text-center">
                        <img src="/images/map-title.png" alt="LFK Certified Heading" />
                    </h1>
                    <button id="show-modal" @click="showModal = true">Show Modal</button>
                    <img src="/images/map-for-imagemaping.png" alt="LFK Certified Map" usemap="#map" class="map-img" />
                    <map name="map">
                        <area v-for="state in states" shape="poly" :coords="state.cords" href="#" :alt="state.name" :title="state.name" :data-shortcode="state.shortcode" :data-stateallowed="state.allowed" @click="openModal(state)" />
                    </map>
                </div>
            </div>
        </div>
        <p v-if="showModal">cool</p>

            <modal :state="currentState" :showmodaldialog.sync="showModal">
                <p>Hola</p>
                <span slot="masterfooter">Footer goes here</span>
            </modal>

    </section>
</template>
<script>
    import applicantFormDialog from './applicantFormDialog.vue';
    export default {
        components: {
            'modal' : applicantFormDialog
        },
        mounted() {
            console.log('Component mounted.');
            jQuery('.map-img').maphilight();
            var $this = this;

            eventHub.$on('hiddenModal', function () {
                //As soon as modal is hidden, we set the prop to false. Notice the use of $this, instead of this
                $this.showModal = false;
            });
        },
        created () {
            var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };
            axios.get(`${ apiroot }getstates`, config)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.states = response.data.states;
                    console.log('states',this.states);
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        data () {
            return{
                showModal: false,
                states : [],
                errors: [],
                currentState: {}
            }
        },
        methods: {
            openModal: function (state) {
                console.log("ssu",this.showModal);
                this.currentState = state;
                this.showModal = true;
            }
        }
    }
</script>