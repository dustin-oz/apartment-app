import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='main-container' style={{backgroundImage: "url(https://i.ytimg.com/vi/bYFBGUKxdpU/maxresdefault.jpg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh", opacity: "0.8", backgroundSize: "cover", paddingTop: "100px"}}>
          {/* <p className="homeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Diam ut venenatis tellus in metus vulputate eu. Leo in vitae turpis massa sed elementum tempus egestas sed. Orci a scelerisque purus semper eget. Risus nullam eget felis eget nunc lobortis mattis aliquam. Nunc eget lorem dolor sed viverra ipsum. Sit amet aliquam id diam maecenas ultricies mi. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Orci a scelerisque purus semper eget duis at. Tortor at auctor urna nunc id cursus metus aliquam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Quam viverra orci sagittis eu volutpat odio facilisis. Vitae sapien pellentesque habitant morbi tristique senectus et netus et</p> */}
          {/* <img classname="homeImage" src="" /> */}
            <h2 className="homeText">Welcome to</h2>
            <h1 className="homeText">T-Town Apartment Finder</h1>
        </div>
      </>
    )
  }
}
