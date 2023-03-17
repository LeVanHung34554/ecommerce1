import { React, useEffect, useState } from 'react'
import CustomInput from './CustomInput'
import { InboxOutlined } from "@ant-design/icons"
import ReactQuill from 'react-quill';
import { Upload, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getCategories } from '../features/pcategory/pcategorySlice';
import Multiselect from "react-widgets/Multiselect";

import { getBrands } from '../features/brand/brandSlice';
import "react-quill/dist/quill.snow.css";
const { Dragger } = Upload;
let userSchema = Yup.object({
    title: Yup.string().required("tite is Required"),
    description: Yup.string().required("Description is Required"),
    price: Yup.string().required("pRICE IS REQUIRED"),
    category: Yup.string().required("category is required"),
    color: Yup.string().required('color is required')
});
const AddProduct = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        dispatch(getColors());
    }, [])
    const brandState = useSelector((state) => state.brand.brands);
    const catState = useSelector((state) => state.pCategory.pCategories);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            category: '',
            color: '',
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values))
            // alert(JSON.stringify(values, null, 2));
        },
    });
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e);
        console.log(e);

    }
    return (
        <div>
            <h3 className="mb-4 title">AddProduct
            </h3>
            <div>
                <form onSubmit={formik.handleSubmit} className="d-flex gap-3 flex-column">
                    <CustomInput name='title' onChng={formik.handleChange('title')} onBlr={formik.handleBlur('title')} type='text' label='Enter Product title' />
                    <div className='error'>
                        {
                            formik.touched.title && formik.errors.title
                        }
                    </div>
                    <div className='mb-3'>
                        <ReactQuill theme="snow"

                            name="description"
                            onChng={formik.handleChange('description')}
                            onBlr={formik.handleBlur('description')}
                            value={formik.values.description} />

                        <div className='error'>
                            {
                                formik.touched.description && formik.errors.description
                            }
                        </div>
                    </div>
                    <CustomInput type='text' label='Enter Product price'
                        name="price"
                        onChng={formik.handleChange('price')}
                        onBlr={formik.handleBlur('price')}
                        value={formik.values.price} />
                    <div className='error'>
                        {
                            formik.touched.price && formik.errors.price
                        }
                    </div>
                    <select className="form-control py-3 mb-3" name="" id="">
                        <option value="">
                            Select Category
                    </option>
                       
                        {catState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>
                                    {i.title}
                                </option>
                            );
                        })}

                </select>
                <select className="form-control py-3 mb-3" name="" id="">
                    <Multiselect
                        dataKey="id"
                        textField="color"
                        defaultValue={[1]}
                        data={[
                            { id: 1, color: "Red" },
                            { id: 2, color: "Yellow" },
                            { id: 3, color: "Blue" },
                            { id: 4, color: "Orange" },
                        ]}
                    />;
                </select>
                <select className="form-control py-3 mb-3" name="" id="">
                    <option value="">
                        Select Brand
                    </option>
                    {brandState.map((i, j) => {
                        return (
                            <option key={j} value={i.title}>
                                {i.title}
                            </option>
                        );
                    })}
                </select>

                <button type="submit" className='btn btn-success border-0 rounded-3 my-5'>
                    Add Brand
                </button>
            </form>
        </div>
        </div >
    )
};


export default AddProduct