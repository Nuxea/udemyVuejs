<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <a class="navbar-brand" href="/">
      <img src="./assets/logo.png" height="40" alt="logo" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" style="--bs-scroll-height: 100px">
        <li class="nav-item">
          <router-link class="nav-link" to="/home" active-class="active">
            Home
          </router-link>
        </li>
        <li class="nav-item" v-if="isAdmin">
          <router-link class="nav-link" to="/admin" active-class="active">
            Admin
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto my-2 my-lg_0" style="--bs-scroll-height: 100px">
        <li v-if="!currentUser" class="nav-item dropdown dropleft">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Connexion
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
            <li>
              <router-link class="dropdown-item" to="/register" active-class="active">Sign Up</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/login" active-class="active">Sign In</router-link>
            </li>
          </ul>
        </li>
        <li v-if="currentUser" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Compte
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
            <li>
              <router-link class="dropdown-item" to="/profile" active-class="active">{{currentUser.username}} Profile</router-link>
            </li>
            <li>
              <a href="#" class="dropdown-item" @click="logOut">Sign Out</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

    <div class="container">
      <router-view />
    </div>
</template>

<script>
import vuex from "vuex";
import Role from "@/models/role";

export default ({
  computed: {
    ...vuex.mapGetters(["currentUser"]),
    isAdmin() {
      return this.currentUser?.role === Role.ADMIN;
    },
  },
  methods: {
    ...vuex.mapActions(["clearUser"]),
    logOut() {
      this.clearUser();
      this.$router.push("/login");
    },
  },
})
</script>

<style>
.dropdown-menu-dark{
  --bs-dropdown-color: #dee2e6;
  --bs-dropdown-bg: #343a40;
  --bs-dropdown-border-color: rgba(0, 0, 0, 0.175);
  --bs-dropdown-link-color: #dee2e6;
  --bs-dropdown-link-hover-color: #fff;
  --bs-dropdown-divider-bg: rgba(0, 0, 0, 0.175);
  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0d6efd;
  --bs-dropdown-link-disabled-color: #adb5bd;
  --bs-dropdown-header-color: #adb5bd;
}
</style>
