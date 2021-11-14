import React from 'react'

const Book = (props) => {
    // const {img,Title,Author} = props.book;
    const {img,Title,Author} = props;
    const clickHandler = () =>{
         alert('hello i am bhupi');
    };
   
    return <article className='book'>
          <img src={img} alt=''/>
          <h1>{Title}</h1>
          <h3> {Author} </h3>
    <button type='button' onClick={clickHandler} >greeting</button>
                      
    </article>
}

export default Book
