const express = require("express");
const {createProduct,getaProduct,deleteImages,getallProduct,rating,updateProduct,addToWishlist,uploadImages,deleteProduct}=require("../controller/productCtrl");
const {isAdmin,authMiddleware}=require("../middlewares/authMiddleware");
const router=express.Router();

router.post('/',authMiddleware,isAdmin,createProduct);
// router.put("/upload/:id",authMiddleware,isAdmin,uploadPhoto);
router.get('/:id',getaProduct);
router.put('/wishlist',authMiddleware,isAdmin,addToWishlist);
router.put('/rating',authMiddleware,isAdmin,rating);
router.get('/',getallProduct);
router.put('/:id',authMiddleware,isAdmin,updateProduct);
router.delete("/:id",authMiddleware,isAdmin,deleteProduct)


module.exports=router;