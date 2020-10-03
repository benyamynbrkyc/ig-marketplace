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
  },
  created() {}
};
</script>
<style>
@media only screen and (min-width: 1081px) {
  footer {
    padding-top: 300px !important;
  }
}
@media only screen and (max-width: 1080px) {
  footer {
    padding-top: 700px !important;
  }
}
@media only screen and (max-width: 850px) {
  footer {
    padding-top: 1300px !important;
  }
}
@media only screen and (max-width: 768px) {
  footer {
    padding-top: 1400px !important;
  }
}

/* @media only screen and (max-width: 1080px) {
  footer {
    padding-top: 400px !important;
  }
} */
</style>
