import React from "react";
import Btn from "./Button";

export default function About() {
  return (
    <div className="about_container">
      <div className="image">
        <img
          src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/277674557_537941567760803_5912432875754936330_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=21ky36cIO5wAX-H6IcF&_nc_ht=scontent.fktm7-1.fna&oh=00_AT_45Pw-dRL7_VOV7gKzYPZqgDW4lmq6Oc_gyu5CGe5F4A&oe=62AE8889"
          alt=""
        />
      </div>
      <div className="content">
        <div className="title">
          <h1>
            <b>About</b>
            <span>
              <b>Us</b>
            </span>
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          nostrum sunt, vel esse ipsum odio? Iusto a ipsum soluta possimus
          pariatur fuga voluptas iste nulla ipsa, tempore nam molestiae sint
          odit vitae aliquid nesciunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias
          animi repellat voluptas provident enim eius non dolorum quam nam,
          iusto aliquid illo quo laborum! Similique ipsum sint ad voluptatibus?
          Esse quibusdam repudiandae illo facilis natus officia.
        </p>
        <Btn text={"Learn More"}></Btn>
      </div>
    </div>
  );
}
