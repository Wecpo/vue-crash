<script setup>
import Hero from './components/Hero.vue';
import HomeCards from './components/HomeCards.vue';
import JobListing from './components/JobListings.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <h1 class="text-2xl">Vue Jobs</h1>
  <Navbar />
  <Hero />
  <HomeCards />
  <JobListing />
</template>