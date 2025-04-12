import React from "react";
import blogData from "../data/blog";

console.log(blogData);
function Article(props){
  const {title,date,preview} =props;
  const defaultDate = "January 1, 1970"
  return(
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  )
}
function ArticleList(props){
  const {posts} = props;
  return(
    <main>
      {posts.map((post)=>(
      <Article
       id={post.id}
       title={post.title}
       date={post.date}
       preview={post.preview}
       minutes={post.minutes}/>
    
      ))}
    
    </main>
  )
}
function About(props){
  const { image, about }=props
  const defaultImage = "https://via.placeholder.com/215"
  return(
    <aside>
      <img src={image || defaultImage}alt="blog logo"/>
      <p>{about}</p>
    </aside>
  )
}
function Header(props){
  return(
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}
function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
