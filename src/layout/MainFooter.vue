<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://www.creative-tim.com">
              Home
            </a>
          </li>
          <li>
            <a href="https:///presentation.creative-tim.com">
              About Us
            </a>
          </li>
          <li>
            <a href="https:///blog.creative-tim.com">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Contact
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Listings
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }} | BS Social Swap - All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
