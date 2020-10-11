<template>
  <admin>
    <v-container>
      <v-btn
        color="primary"
        link
        text
        outlined
        to="/admin/products/list"
        class="mb-4"
      >
        <v-icon>mdi-arrow-left</v-icon>
        Show Products
      </v-btn>
      <v-divider></v-divider>
      <v-row>
        <v-col lg="3">
          <v-sheet class="pa-8 pt-0 pb-4 border-1">
            <v-row>
              <v-col>
                <v-img :src="preview" width="100%" max-height="200px"></v-img>
              </v-col>
              <v-col cols="12" class="blue">
                  <v-tabs vertical>
                      <v-tab  v-for="(item, index) in 6" :key="index">
                          <v-avatar
                              size="40"
                            color="grey lighten-3"

                          >
                              <img src="/assets/img/logo.png" alt="alt">
                          </v-avatar>
                      </v-tab>
                  </v-tabs>
              </v-col>
            </v-row>
          </v-sheet>
          <v-file-input
            ref="image"
            :value="imageFile"
            prepend-icon="mdi-camera"
            label="Select Image"
            accept="image/*"
            @change="getImage"
          ></v-file-input>
          <v-btn color="primary" class="mt-4 py-6" block>Add Image</v-btn>
        </v-col>
        <v-col lg="7" class=" px-8 pt-12" offset="1">
          <v-text-field
            prefix="Name : "
            v-model="product.name"
            solo
          ></v-text-field>
          <v-row>
            <v-col lg="6">
              <v-text-field
                prefix="Brand: "
                v-model="product.brand"
                solo
              ></v-text-field>
            </v-col>
            <v-col lg="6">
              <v-text-field
                prefix="Price:"
                suffix=".00"
                v-model="product.price"
                solo
              ></v-text-field>
            </v-col>
            <v-col lg="6">
              <v-text-field
                prefix="Unit: "
                v-model="product.unit"
                solo
              ></v-text-field>
            </v-col>
            <v-col lg="6">
              <v-text-field
                prefix="Stocks: "
                v-model="product.stocks"
                solo
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                v-model="selected.id"
                :items="$store.getters.categories"
                prefix="Category: "
                item-text="name"
                item-value="id"
                solo
              ></v-select>
            </v-col>

            <v-col>
             <h1 class="title">Description</h1>
              <ckeditor
                :editor="editor"
                v-model="product.description"

              ></ckeditor>
            </v-col>
          </v-row>

          <v-btn color="primary" @click="addProduct()">View Product</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </admin>
</template>
<script>
import Admin from "../Admin";
import { addProduct } from "../../../services/Products";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
export default {
  components: {
    Admin,
    ckeditor: CKEditor.component,
  },
  data: () => ({
    product: {
      name: "",
      brand: "",
      price: 0,
      stocks: 1,
      unit: "",
      description: "" ,
      categoryId: 1,
    },
    editor: ClassicEditor,
    image: "/assets/img/default.png",
    message: "",
    imageFile: null,
    selected: { id: 1, name: "computer" },
    categories: [],
  }),
  methods: {
    addProduct() {
      addProduct(this.product, this.imageFile)
        .then((res) => {
          this.message = res.data;
          this.$swal.fire(res.data, "", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getImage(file) {
      console.log(file);
      this.imageFile = file;
      //   const file = e.target.files[0];
      if (file) {
        this.img = file;
        this.image = URL.createObjectURL(file);
      } else {
        this.image = "/assets/img/default.png ";
      }
    },
  },
  computed: {
    preview() {
      return this.image;
    },
  },
  mounted() {
    this.categories = this.$store.getters.categories;
  },
  watch: {
    selected: {
      handler(newVal) {
        this.product.categoryId = newVal.id;
      },
      deep: true,
    },
  },
};
</script>
