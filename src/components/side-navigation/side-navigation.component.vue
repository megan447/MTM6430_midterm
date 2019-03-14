<template>
  <div id="sideNavigation">
    <el-menu class="side-nav-menu" :router="true" :default-active="activeLink">
      <div class="logo">
        <span class="Snowcoop">Snowcoop</span>
      </div>
      <el-menu-item class="menu-itemhover" index="/dashboard">
        <span class="Dashboard">Dashboard</span>
      </el-menu-item>
      <el-menu-item class="menu-item" index="/list">
        <span class="Address-List">Address List</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./side-navigation.component.js"></script>
<style src="./side-navigation.component.css" scoped></style>