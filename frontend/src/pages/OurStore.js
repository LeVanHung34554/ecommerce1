import React,{useState} from 'react'
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import { Helmet } from 'react-helmet';
import Meta from '../components/Meta';
import {Link, getLocation} from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/product/productSlice';
const OurStore = () => {

    const [grid,setGrid]=useState(4);
    const productState=useSelector((state)=>state.product.product); 
    const dispatch=useDispatch();
    useEffect(()=>{
        getProducts();
    })
    const getProducts=()=>{
        dispatch(getAllProducts());



    }
    const gridSetter =(i) =>{
        setGrid(i)
    }
    return (
        <>
            {/* <Meta title= {"OurStore"}/>
  <BreadCrumb title='Our Store'/> */}
            <Container class1="store-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">

                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <di>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </di>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">Avalability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value='' id='' />
                                            <label className=" form-check-label" htmlFor="">
                                                In Stock(1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value='' id='' />
                                            <label className="form-check-label" htmlFor="">
                                                Out of Stock(2)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input type="email" className="form-control py-1" id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput"> From</label>
                                        </div>
                                        <div className="form-floating ">
                                            <input type="email" className="form-control py-1" id="floatingInput" placeholder="To" />
                                            <label htmlFor="floatingInput1"> To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <Color/>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className='form-check-input'
                                                type="checkbox" value='' id='color-1' />
                                            <label className=" form-check-label" htmlFor="color-1">
                                                S(2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className='form-check-input'
                                                type="checkbox" value='' id='color-2' />
                                            <label className=" form-check-label" htmlFor="color-2">
                                                M(2)
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="filter-card mb-3">
                                    <h3 className="filter-title">
                                        Product tags
                                    </h3>
                                    <div>
                                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                Headphone
                                            </span>
                                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                Laptop
                                            </span>
                                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                Mobile
                                            </span>
                                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                Wire
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-card mb-3">
                                    <h3 className="filter-title">
                                        Random Product
                                    </h3>
                                    <div>
                                        <div className="random-products d-flex">
                                            <div className="w-50">
                                                <img src="images/watch.jpg" className='img-fluid' alt='watch' />
                                            </div>
                                            <div className="w-50">
                                                <h5>
                                                    Kid headphone bulk 10 pack multi colored for students
                                                </h5>
                                                <ReactStars
                                                    count={5}
                                                    // onChange={ratingChanged}
                                                    size={24}
                                                    edit='false'
                                                    value='3'
                                                    activeColor="#ffd700"
                                                />,
                                                <b>$300</b>
                                            </div>

                                        </div>
                                        <div className="random-products d-flex">
                                            <div className="w-50">
                                                <img src="images/watch.jpg" className='img-fluid' alt='watch' />
                                            </div>
                                            <div className="w-50">
                                                <h5>
                                                    Kid headphone bulk 10 pack multi colored for students
                                                </h5>
                                                <ReactStars
                                                    count={5}
                                                    // onChange={ratingChanged}
                                                    size={24}
                                                    edit='false'
                                                    value='3'
                                                    activeColor="#ffd700"
                                                />,
                                                <b>$300</b>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className="mb-0 d-block " style={{width:"100px"}}>Sort by</p>

                                    <select defaultValue={"manual"} name="" id="" className="form-control form-select">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best selling</option>
                                        <option value="title-ascending">Alphabettically, A-Z</option>
                                        <option value="price-ascending"> Price, low to high</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className="totalProducts">21 Products</p>
                                    <div className="d-flex gap-10 align-items-center grid">

                                        <img onClick={()=>{setGrid(4);}} src="images/gr4.svg" className='d-block img-fluid' alt='grip'></img>
                                        <img onClick={()=>{setGrid(3);}} src="images/gr3.svg" className='d-block img-fluid' alt='grip'></img>
                                        <img onClick={()=>{setGrid(2);}} src="images/gr2.svg" className='d-block img-fluid' alt='grip'></img>
                                        <img onClick={()=>{setGrid(1);}} src="images/gr.svg" className='d-block img-fluid' alt='grip'></img>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                <ProductCard  data={productState ? productState :[]} grid={grid}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

<>
</>
export default OurStore