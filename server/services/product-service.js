const Product = require("../models/product-schema");

class ProductService {
  static async createProduct(productData, imageURL) {
    try {
      productData.image_url = imageURL;
      const newProduct = new Product(productData);
      const savedProduct = await newProduct.save();
      return savedProduct;
    } catch (error) {
      throw error;
    }
  }

  static async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(productId, productData) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        productData,
        { new: true }
      );
      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(productId) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
