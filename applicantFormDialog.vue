<template>
            <el-dialog
                    title="Tips"
                    :visible.sync="initialdisplay"
                    :model="initialdisplay"
                    size="large"
                    v-on:open="openPopup"
                    v-on:close="closePopup"
            >
            <el-form :inline="false" :model="form" :rules="rules" class="demo-form-inline" label-position="top" ref="form">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="Applying as" name="1">
                    <el-form-item label="Applicant Form">
                        <el-select v-model="form.applyingas" placeholder="Individual">
                            <el-option label="Individual" value="individual"></el-option>
                            <el-option label="Applying with a spouse" value="spouse"></el-option>
                            <el-option label="Applying with a partner" value="partner"></el-option>
                        </el-select>
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item title="Applicant Form" name="2">
                    <el-row type="flex" justify="space-around" :gutter="10">
                        <el-col :span="8">
                        <el-form-item label="First Name" prop="applicant.name.first" :rules="rules.applicant.name.first">
                            <el-input v-model="form.applicant.name['first']" placeholder="First Name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="8">
                        <el-form-item label="Middle Name" prop="applicant.name.middle" :rules="rules.applicant.name.middle">
                            <el-input v-model="form.applicant.name['middle']" placeholder="Middle Name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="8">
                        <el-form-item label="Last Name" prop="applicant.name.last" :rules="rules.applicant.name.last">
                            <el-input v-model="form.applicant.name['last']" placeholder="Last Name"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="12">
                        <el-form-item label="Home Phone">
                            <el-input v-model="form.applicant.homephone" placeholder="Home phone"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="Fax">
                            <el-input v-model="form.applicant.fax" placeholder="Fax"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="Co-applicant form (if applicable)" name="3">
                        <el-form-item label="Approved by">
                            <el-input v-model="form.user" placeholder="Approved by"></el-input>
                        </el-form-item>
                        <el-form-item label="Applicant Form">
                            <el-select v-model="form.region" placeholder="Activity zone">
                                <el-option label="Zone one" value="shanghai"></el-option>
                                <el-option label="Zone two" value="beijing"></el-option>
                            </el-select>
                        </el-form-item><el-form-item>
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item title="Term and conditions" name="4">
                    Terms and conditions
                </el-collapse-item>
            </el-collapse>

            </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-row type="flex" justify="center">
                        <el-button type="primary" @click="onSubmit('form')">Query</el-button>
                    </el-row>
                </span>
            </el-dialog>
</template>
<script>
    import rules from '../formvalidationrules'
    export default {
        props: ['state', 'showmodaldialog'],
        created() {
            console.log("show",this.showmodaldialog);
        },
        mounted() {
            console.log("vvc",rules);
        },
        data() {
            return {
                activeName: '1',
                initialdisplay: this.showmodaldialog,
                //The form object to begin with
                form: {
                    applyingas: '',
                    region: '',
                    applicant:{
                        name:{
                            first: '',
                            middle: '',
                            last: ''
                        },
                        homephone: '',
                        fax:''
                    },
                    test: '',

                },
                //For rules, refer to formvalidationrules.js
                rules: rules.validationrules.applicantform
            }
        },
        watch: {
            //This is the prop we are defining in parent vue and changing there,
            //So whenever this changes, the modal of dialog also changes, thus rendering the dialog
            'showmodaldialog' : {
                handler(newVal) {
                    this.initialdisplay = newVal;
                    this.activeName = '1';
                }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                   if(valid)
                       console.log('submit!', this.state, this.form);
                   else
                       console.log('Form has errors');
                });
            },
            closePopup() {
                console.log('closed popup');
                this.initialdisplay = false;
                eventHub.$emit('hiddenModal');
                this.form = {
                    applyingas: '',
                    region: '',
                    applicant:{
                        name:{
                            first: '',
                            middle: '',
                            last: ''
                        },
                        homephone: '',
                        fax:''
                    }

                }
            },
            openPopup() {
                console.log('open popup');
            }
        }
    }
</script>
<style>

</style>