// import React,{useState, useEffect} from "react";
// import { Container, PostFrom } from "../components";
// import appwriteService from "../appwrite/config"
// import { SignUp as SignUpComponents } from "../components";
// import { useNavigate, useParams } from "react-router-dom";
// function EditPost() {
//     const [post,setPost] = useState(null)
//     const {slug} = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if(post){
//                     setPost(post)
//                 }
//             })
            
//         } else {
//             navigate('/')
//         }
//     }, [slug, navigate])

//     return  post ?(
//         <div className="py-8">
//             <Container>
//                 <PostFrom post={post}/>
//             </Container>
//         </div>
//     ) :null
// }
// export default EditPost







 







import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
console.log("i am coming from post")
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost