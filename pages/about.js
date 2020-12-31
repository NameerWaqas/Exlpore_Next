import React,{useContext} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {context} from '../context/context';


export default function About(props) {
    const [count,setCount] = useContext(context);


    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <h1>
                About page
            </h1>
            <h3>
                <Link href="/">Back to home</Link>
            </h3>
            <h2>Current Count is {count}</h2>
            <button onClick={()=>setCount(prev=>prev+1)}>Add count</button>
        </>
    )
}