/* eslint-disable react/no-unescaped-entities */
import { fadeIn, fadeInUp } from "@/components/animation/variants";
import SidebarFilter from "@/components/filter/SidebarFilter";
import SidebarFilterDesktop from "@/components/filter/SidebarFilterDesktop";
import ProductCard1 from "@/components/product/ProductCard1";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import productsData from "@/data/productData";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";

function Products() {
  return (
    <div className=" ">
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1620891239438-eb4b8b467fb7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="h-[290px] sm:h-[400px] bg-cover bg-center flex flex-col relative text-white padding-reverse"
      >
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="absolute p-6 jost bottom-2"
        >
          <Link to={'/'}>
          
          <motion.div
            className="flex  items-center gap-3 cursor-pointer"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <IoArrowBackCircleOutline className="opacity-80 text-2xl sm:text-4xl sm:mt-1" />
            <h1 className="text-sm sm:text-xl font-normal">Back to home</h1>
          </motion.div>
          </Link>

          <div className="mt-3 sm:mt-5 ml-1">
            <motion.h1
              variants={fadeInUp}
              className="text-lg sm:text-3xl font-bold"
            >
              Collections
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-[600px] mt-0.5 sm:mt-2 text-gray-200 text-sm sm:text-base"
            >
              We craft timeless elegance with precision and passion. Our
              exquisite collection blends traditional artistry with modern
              designs, celebrating life's special moments.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <BreadCrumb
        tab1="Home"
        tab1Path="/"
        tab2="Products"
        tab2Path="/products"
        // tab3="Product"
        // tab3Path="/product"
      />

      {/* content */}
      <div className="flex flex-row  ">
        {/* sidebar filter for desktop */}
        <div className="sm:flex hidden w-1/4">
          <SidebarFilterDesktop />
        </div>

        {/* products */}
        <div className="flex flex-1">
          <div className="container mx-auto">
            <div className="flex flex-nowrap  justify-between items-center mb-8 sm-mb-0">
              {/* filter */}
              <div className="sm:hidden  ">
                <SidebarFilter />
              </div>

              <span className="sm:flex hidden">
                1–12 Products of 34 Products
              </span>
              <div className="flex items-center justify-end  space-x-4">
              <span className="text-sm sm:text-base">Sort by</span>
<Select>
  <SelectTrigger className="w-[140px] no-focus-box">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent
    // className="absolute left-0 top-full mt-1 w-[180px]  bg-white shadow-md rounded-md"
  >
    <SelectItem value="light" className="text-left px-2 ">Price low -high </SelectItem>
    <SelectItem value="dark" className="text-left px-2">Price high-low</SelectItem>
    <SelectItem value="system" className="text-left px-2">System</SelectItem>
  </SelectContent>
</Select>


                {/* <i className="fas fa-th-large"></i>
                        <i className="fas fa-th-list"></i> */}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 sm:px-0">
              {productsData.map((product) => (
                <ProductCard1 key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
