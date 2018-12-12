import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/Cards'

const IndexPage = () => (
 <div>

<Layout/> 
  <div className="selfGroup">
    <div className="selfs">
    <div className="self">
      <h2> ISIAKA Fatiu Bolakale </h2>
      <p> Focused on expanding knowledge and abilities in website development, programming,
      quality assurance and passionate about problem solving. Seeking a position of increased
      responsibility with a growing team. </p>
      </div>
      <img className="selfImage" src={require('../images/IMG_3745.jpg')} />
  </div>
  </div>

  <div className="Cards">
    <h1>I Do</h1>
  <div className="CardGroup">
  <Card 
  image = 'http://www.iconarchive.com/download/i73026/cornmanthe3rd/plex/Other-html-5.ico'
  title = 'HTML5'
  subheading = 'Hyper Text Markup Language'
  />
  <Card 
  image = 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg'
  title = 'CSS3'
  subheading = 'Cascading Style Sheet'
  />
  <Card 
  image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFDTRMjUR37Ru9GuZWBKfWjgigyuY9QDdxyiDXDy4VLN_MnzM'
  title = 'Js'
  subheading = 'JavaScript'
  />
  <Card 
  image = 'https://cdn.thenewstack.io/media/2016/04/nodejs.jpg'
  title = 'Node'
  subheading = 'Node JS'
  />
  <Card 
  image = 'https://cdn-images-1.medium.com/max/1600/1*EntHChgUyirgbZ9A3zTxkA.png'
  title = 'React'
  subheading = 'React JS'
  />
  <Card 
  image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HkLjRL8-PcG4944duukpMcYkvuYhpj-UXSOlLJw7AhwZ0-j8'
  title = 'Python'
  subheading = 'Python'
  />
  </div>
  </div>
  </div>
)

export default IndexPage
