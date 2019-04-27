<template>
  <div id="formAddAddress">
    <el-dialog title="Add New Address" @close="handleClose" :visible.sync="showForm" width="70%">
      <span>
        <div class="form-body-wrapper">
           <el-form :model="formData">
            <el-form-item>
              <gmap-autocomplete 
                class="el-input__inner"
                placeholder="Enter Address"
                :value="addressInput"
                @place_changed="setPlace">
              </gmap-autocomplete>
            </el-form-item>
          <el-form :model="formData">
            <!-- google maps autocomplete will com here -->
            <div v-if="place">
              <el-form-item :rules="rules.street" prop="street">
                <el-input placeholder="Street" v-model="formData.street" :disabled="true"></el-input>
                <!-- <gmap-autocomplete
                  class="el-input__inner"
                  placeholder="Enter Address"
                  @place_changed="setPlace"
                ></gmap-autocomplete>-->
              </el-form-item>
              <el-form-item :rules="rules.city" prop="city">
                <el-input placeholder="city" v-model="formData.city" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item :rules="rules.province" prop="province">
                <el-input placeholder="province" v-model="formData.province" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item :rules="rules.postalCode" prop="postalCode">
                <el-input placeholder="postalCode" v-model="formData.postalCode" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item :rules="rules.lat" prop="lat">
                <el-input placeholder="lat" v-model="formData.lat" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item :rules="rules.lng" prop="street">
                <el-input placeholder="lng" v-model="formData.lng" :disabled="true"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="submit-button" @click="submit">submit</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script src="./form-add-address.component.js"></script>
<style src="./form-add-address.component.css"></style>